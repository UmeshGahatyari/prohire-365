import Common "common";
import Storage "mo:caffeineai-object-storage/Storage";

module {
  public type User = {
    principal : Common.UserId;
    role : Common.UserRole;
    name : Text;
    email : Text;
    status : Common.UserStatus;
    createdAt : Common.Timestamp;
  };

  public type ExperienceEntry = {
    title : Text;
    company : Text;
    startDate : Text;
    endDate : ?Text;
    description : Text;
  };

  public type EmployeeProfile = {
    userId : Common.UserId;
    location : Text;
    phone : Text;
    skills : [Text];
    professionalSummary : Text;
    experience : [ExperienceEntry];
    resumeFileId : ?Storage.ExternalBlob;
  };

  public type EmployerStatus = {
    #pending;
    #approved;
    #suspended;
  };

  public type EmployerProfile = {
    userId : Common.UserId;
    companyName : Text;
    companyEmail : Text;
    companySize : Text;
    industry : Text;
    description : Text;
    status : EmployerStatus;
  };

  public type PlatformStats = {
    totalUsers : Nat;
    totalEmployers : Nat;
    totalEmployees : Nat;
    totalJobs : Nat;
    totalApplications : Nat;
    activeJobs : Nat;
  };
};
