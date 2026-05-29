import Map "mo:core/Map";
import Set "mo:core/Set";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Common "../types/common";
import Types "../types/jobs";

module {
  public func postJob(
    jobs : Map.Map<Common.JobId, Types.JobListing>,
    nextJobId : Nat,
    employerId : Common.UserId,
    title : Text,
    description : Text,
    location : Text,
    salaryMin : Nat,
    salaryMax : Nat,
    experienceRequired : Nat,
    jobType : Types.JobType,
    skillsRequired : [Text],
    applicationDeadline : Common.Timestamp,
  ) : Common.JobId {
    let jobId = nextJobId;
    let now = Time.now();
    let job : Types.JobListing = {
      jobId;
      employerId;
      title;
      description;
      location;
      salaryMin;
      salaryMax;
      experienceRequired;
      jobType;
      skillsRequired;
      status = #active;
      applicationDeadline;
      createdAt = now;
      updatedAt = now;
    };
    jobs.add(jobId, job);
    jobId;
  };

  public func updateJob(
    jobs : Map.Map<Common.JobId, Types.JobListing>,
    jobId : Common.JobId,
    employerId : Common.UserId,
    title : Text,
    description : Text,
    location : Text,
    salaryMin : Nat,
    salaryMax : Nat,
    experienceRequired : Nat,
    jobType : Types.JobType,
    skillsRequired : [Text],
    status : Types.JobStatus,
    applicationDeadline : Common.Timestamp,
  ) : () {
    switch (jobs.get(jobId)) {
      case (?job) {
        if (not Principal.equal(job.employerId, employerId)) {
          Runtime.trap("Unauthorized: Not your job");
        };
        jobs.add(jobId, {
          job with
          title;
          description;
          location;
          salaryMin;
          salaryMax;
          experienceRequired;
          jobType;
          skillsRequired;
          status;
          applicationDeadline;
          updatedAt = Time.now();
        });
      };
      case null {
        Runtime.trap("Job not found");
      };
    };
  };

  public func getJob(
    jobs : Map.Map<Common.JobId, Types.JobListing>,
    jobId : Common.JobId,
  ) : ?Types.JobListing {
    jobs.get(jobId);
  };

  public func searchJobs(
    jobs : Map.Map<Common.JobId, Types.JobListing>,
    filter : Types.JobSearchFilter,
  ) : [Types.JobListing] {
    let results = jobs.values()
      |> _.filter(func(job : Types.JobListing) : Bool {
        if (job.status != #active) return false;

        switch (filter.keyword) {
          case (?kw) {
            let kl = kw.toLower();
            let inTitle = job.title.toLower().contains(#text kl);
            let inDesc = job.description.toLower().contains(#text kl);
            let inLoc = job.location.toLower().contains(#text kl);
            if (not inTitle and not inDesc and not inLoc) return false;
          };
          case null {};
        };

        switch (filter.location) {
          case (?loc) {
            let locLower = loc.toLower();
            if (not job.location.toLower().contains(#text locLower)) return false;
          };
          case null {};
        };

        switch (filter.salaryMin) {
          case (?minSal) {
            if (job.salaryMax < minSal) return false;
          };
          case null {};
        };

        switch (filter.salaryMax) {
          case (?maxSal) {
            if (job.salaryMin > maxSal) return false;
          };
          case null {};
        };

        switch (filter.jobType) {
          case (?jt) {
            if (job.jobType != jt) return false;
          };
          case null {};
        };

        true;
      })
      |> _.toArray();
    results;
  };

  public func getEmployerJobs(
    jobs : Map.Map<Common.JobId, Types.JobListing>,
    employerId : Common.UserId,
  ) : [Types.JobListing] {
    jobs.values()
    |> _.filter(func(job : Types.JobListing) : Bool {
      Principal.equal(job.employerId, employerId)
    })
    |> _.toArray();
  };

  public func approveJob(
    jobs : Map.Map<Common.JobId, Types.JobListing>,
    jobId : Common.JobId,
  ) : () {
    switch (jobs.get(jobId)) {
      case (?job) {
        jobs.add(jobId, { job with status = #active; updatedAt = Time.now() });
      };
      case null {
        Runtime.trap("Job not found");
      };
    };
  };

  public func rejectJob(
    jobs : Map.Map<Common.JobId, Types.JobListing>,
    jobId : Common.JobId,
  ) : () {
    switch (jobs.get(jobId)) {
      case (?job) {
        jobs.add(jobId, { job with status = #closed; updatedAt = Time.now() });
      };
      case null {
        Runtime.trap("Job not found");
      };
    };
  };

  public func applyToJob(
    applications : Map.Map<Common.ApplicationId, Types.JobApplication>,
    jobs : Map.Map<Common.JobId, Types.JobListing>,
    nextApplicationId : Nat,
    jobId : Common.JobId,
    employeeId : Common.UserId,
  ) : Common.ApplicationId {
    // Check job exists and is active
    switch (jobs.get(jobId)) {
      case (?job) {
        if (job.status != #active) {
          Runtime.trap("Job is not accepting applications");
        };
      };
      case null {
        Runtime.trap("Job not found");
      };
    };

    // Check not already applied
    let alreadyApplied = applications.values()
    |> _.filter(func(app : Types.JobApplication) : Bool {
      Principal.equal(app.employeeId, employeeId) and app.jobId == jobId
    })
    |> _.size();

    if (alreadyApplied > 0) {
      Runtime.trap("Already applied to this job");
    };

    let applicationId = nextApplicationId;
    let now = Time.now();
    let application : Types.JobApplication = {
      applicationId;
      jobId;
      employeeId;
      status = #applied;
      appliedAt = now;
      updatedAt = now;
      notes = null;
    };
    applications.add(applicationId, application);
    applicationId;
  };

  public func updateApplicationStatus(
    applications : Map.Map<Common.ApplicationId, Types.JobApplication>,
    applicationId : Common.ApplicationId,
    employerId : Common.UserId,
    jobs : Map.Map<Common.JobId, Types.JobListing>,
    status : Types.ApplicationStatus,
    notes : ?Text,
  ) : () {
    switch (applications.get(applicationId)) {
      case (?app) {
        // Verify the employer owns the job
        switch (jobs.get(app.jobId)) {
          case (?job) {
            if (not Principal.equal(job.employerId, employerId)) {
              Runtime.trap("Unauthorized: Not your job");
            };
          };
          case null {
            Runtime.trap("Job not found");
          };
        };
        applications.add(applicationId, {
          app with
          status;
          notes;
          updatedAt = Time.now();
        });
      };
      case null {
        Runtime.trap("Application not found");
      };
    };
  };

  public func getMyApplications(
    applications : Map.Map<Common.ApplicationId, Types.JobApplication>,
    employeeId : Common.UserId,
  ) : [Types.JobApplication] {
    applications.values()
    |> _.filter(func(app : Types.JobApplication) : Bool {
      Principal.equal(app.employeeId, employeeId)
    })
    |> _.toArray();
  };

  public func getJobApplications(
    applications : Map.Map<Common.ApplicationId, Types.JobApplication>,
    jobId : Common.JobId,
    employerId : Common.UserId,
    jobs : Map.Map<Common.JobId, Types.JobListing>,
  ) : [Types.JobApplication] {
    // Verify employer owns the job
    switch (jobs.get(jobId)) {
      case (?job) {
        if (not Principal.equal(job.employerId, employerId)) {
          Runtime.trap("Unauthorized: Not your job");
        };
      };
      case null {
        Runtime.trap("Job not found");
      };
    };

    applications.values()
    |> _.filter(func(app : Types.JobApplication) : Bool {
      app.jobId == jobId
    })
    |> _.toArray();
  };

  public func saveJob(
    savedJobs : Map.Map<Common.UserId, Set.Set<Common.JobId>>,
    employeeId : Common.UserId,
    jobId : Common.JobId,
  ) : () {
    let set = switch (savedJobs.get(employeeId)) {
      case (?s) s;
      case null {
        let s = Set.empty<Common.JobId>();
        savedJobs.add(employeeId, s);
        s;
      };
    };
    set.add(jobId);
  };

  public func unsaveJob(
    savedJobs : Map.Map<Common.UserId, Set.Set<Common.JobId>>,
    employeeId : Common.UserId,
    jobId : Common.JobId,
  ) : () {
    switch (savedJobs.get(employeeId)) {
      case (?set) {
        set.remove(jobId);
      };
      case null {};
    };
  };

  public func getSavedJobs(
    savedJobs : Map.Map<Common.UserId, Set.Set<Common.JobId>>,
    jobs : Map.Map<Common.JobId, Types.JobListing>,
    employeeId : Common.UserId,
  ) : [Types.JobListing] {
    switch (savedJobs.get(employeeId)) {
      case (?set) {
        set.values()
        |> _.filterMap(func(jid : Common.JobId) : ?Types.JobListing {
          jobs.get(jid)
        })
        |> _.toArray();
      };
      case null { [] };
    };
  };
};
