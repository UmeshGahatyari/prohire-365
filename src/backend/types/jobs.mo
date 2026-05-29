import Common "common";

module {
  public type JobType = {
    #fullTime;
    #partTime;
    #contract;
  };

  public type JobStatus = {
    #draft;
    #active;
    #closed;
  };

  public type JobListing = {
    jobId : Common.JobId;
    employerId : Common.UserId;
    title : Text;
    description : Text;
    location : Text;
    salaryMin : Nat;
    salaryMax : Nat;
    experienceRequired : Nat;
    jobType : JobType;
    skillsRequired : [Text];
    status : JobStatus;
    applicationDeadline : Common.Timestamp;
    createdAt : Common.Timestamp;
    updatedAt : Common.Timestamp;
  };

  public type JobSearchFilter = {
    keyword : ?Text;
    location : ?Text;
    salaryMin : ?Nat;
    salaryMax : ?Nat;
    jobType : ?JobType;
  };

  public type ApplicationStatus = {
    #applied;
    #shortlisted;
    #interview;
    #rejected;
    #offer;
  };

  public type JobApplication = {
    applicationId : Common.ApplicationId;
    jobId : Common.JobId;
    employeeId : Common.UserId;
    status : ApplicationStatus;
    appliedAt : Common.Timestamp;
    updatedAt : Common.Timestamp;
    notes : ?Text;
  };
};
