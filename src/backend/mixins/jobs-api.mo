import Map "mo:core/Map";
import Set "mo:core/Set";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import Common "../types/common";
import UserTypes "../types/users";
import Types "../types/jobs";
import JobsLib "../lib/jobs";

mixin (
  accessControlState : AccessControl.AccessControlState,
  users : Map.Map<Common.UserId, UserTypes.User>,
  jobs : Map.Map<Common.JobId, Types.JobListing>,
  applications : Map.Map<Common.ApplicationId, Types.JobApplication>,
  savedJobs : Map.Map<Common.UserId, Set.Set<Common.JobId>>,
) {
  var nextJobId : Nat = 0;
  var nextApplicationId : Nat = 0;

  public query func searchJobs(filter : Types.JobSearchFilter) : async [Types.JobListing] {
    JobsLib.searchJobs(jobs, filter);
  };

  public query func getJobDetails(jobId : Common.JobId) : async ?Types.JobListing {
    JobsLib.getJob(jobs, jobId);
  };

  public shared ({ caller }) func postJob(
    title : Text,
    description : Text,
    location : Text,
    salaryMin : Nat,
    salaryMax : Nat,
    experienceRequired : Nat,
    jobType : Types.JobType,
    skillsRequired : [Text],
    applicationDeadline : Common.Timestamp,
  ) : async Common.JobId {
    if (caller.isAnonymous()) {
      Runtime.trap("Must be logged in");
    };
    // Verify caller is an employer
    switch (users.get(caller)) {
      case (?user) {
        if (user.role != #employer) {
          Runtime.trap("Only employers can post jobs");
        };
      };
      case null { Runtime.trap("User not registered") };
    };
    let jobId = JobsLib.postJob(
      jobs, nextJobId, caller,
      title, description, location,
      salaryMin, salaryMax, experienceRequired,
      jobType, skillsRequired, applicationDeadline,
    );
    nextJobId += 1;
    jobId;
  };

  public shared ({ caller }) func updateJob(
    jobId : Common.JobId,
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
  ) : async () {
    if (caller.isAnonymous()) {
      Runtime.trap("Must be logged in");
    };
    switch (users.get(caller)) {
      case (?user) {
        if (user.role != #employer) {
          Runtime.trap("Only employers can update jobs");
        };
      };
      case null { Runtime.trap("User not registered") };
    };
    JobsLib.updateJob(
      jobs, jobId, caller,
      title, description, location,
      salaryMin, salaryMax, experienceRequired,
      jobType, skillsRequired, status, applicationDeadline,
    );
  };

  public query ({ caller }) func getMyEmployerJobs() : async [Types.JobListing] {
    if (caller.isAnonymous()) {
      Runtime.trap("Must be logged in");
    };
    JobsLib.getEmployerJobs(jobs, caller);
  };

  public shared ({ caller }) func applyToJob(jobId : Common.JobId) : async Common.ApplicationId {
    if (caller.isAnonymous()) {
      Runtime.trap("Must be logged in");
    };
    // Verify caller is an employee
    switch (users.get(caller)) {
      case (?user) {
        if (user.role != #employee) {
          Runtime.trap("Only employees can apply to jobs");
        };
      };
      case null { Runtime.trap("User not registered") };
    };
    let appId = JobsLib.applyToJob(applications, jobs, nextApplicationId, jobId, caller);
    nextApplicationId += 1;
    appId;
  };

  public query ({ caller }) func getMyApplications() : async [Types.JobApplication] {
    if (caller.isAnonymous()) {
      Runtime.trap("Must be logged in");
    };
    switch (users.get(caller)) {
      case (?user) {
        if (user.role != #employee) {
          Runtime.trap("Only employees can view their applications");
        };
      };
      case null { Runtime.trap("User not registered") };
    };
    JobsLib.getMyApplications(applications, caller);
  };

  public query ({ caller }) func getJobApplications(jobId : Common.JobId) : async [Types.JobApplication] {
    if (caller.isAnonymous()) {
      Runtime.trap("Must be logged in");
    };
    switch (users.get(caller)) {
      case (?user) {
        if (user.role != #employer) {
          Runtime.trap("Only employers can view job applications");
        };
      };
      case null { Runtime.trap("User not registered") };
    };
    JobsLib.getJobApplications(applications, jobId, caller, jobs);
  };

  public shared ({ caller }) func updateApplicationStatus(
    applicationId : Common.ApplicationId,
    status : Types.ApplicationStatus,
    notes : ?Text,
  ) : async () {
    if (caller.isAnonymous()) {
      Runtime.trap("Must be logged in");
    };
    switch (users.get(caller)) {
      case (?user) {
        if (user.role != #employer) {
          Runtime.trap("Only employers can update application status");
        };
      };
      case null { Runtime.trap("User not registered") };
    };
    JobsLib.updateApplicationStatus(applications, applicationId, caller, jobs, status, notes);
  };

  public shared ({ caller }) func saveJob(jobId : Common.JobId) : async () {
    if (caller.isAnonymous()) {
      Runtime.trap("Must be logged in");
    };
    switch (users.get(caller)) {
      case (?user) {
        if (user.role != #employee) {
          Runtime.trap("Only employees can save jobs");
        };
      };
      case null { Runtime.trap("User not registered") };
    };
    JobsLib.saveJob(savedJobs, caller, jobId);
  };

  public shared ({ caller }) func unsaveJob(jobId : Common.JobId) : async () {
    if (caller.isAnonymous()) {
      Runtime.trap("Must be logged in");
    };
    switch (users.get(caller)) {
      case (?user) {
        if (user.role != #employee) {
          Runtime.trap("Only employees can unsave jobs");
        };
      };
      case null { Runtime.trap("User not registered") };
    };
    JobsLib.unsaveJob(savedJobs, caller, jobId);
  };

  public query ({ caller }) func getSavedJobs() : async [Types.JobListing] {
    if (caller.isAnonymous()) {
      Runtime.trap("Must be logged in");
    };
    switch (users.get(caller)) {
      case (?user) {
        if (user.role != #employee) {
          Runtime.trap("Only employees can view saved jobs");
        };
      };
      case null { Runtime.trap("User not registered") };
    };
    JobsLib.getSavedJobs(savedJobs, jobs, caller);
  };

  public shared ({ caller }) func approveJob(jobId : Common.JobId) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    JobsLib.approveJob(jobs, jobId);
  };

  public shared ({ caller }) func rejectJob(jobId : Common.JobId) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    JobsLib.rejectJob(jobs, jobId);
  };
};
