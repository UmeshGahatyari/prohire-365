import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Common "../types/common";
import Types "../types/users";
import JobsTypes "../types/jobs";

module {
  public func createUser(
    users : Map.Map<Common.UserId, Types.User>,
    principal : Common.UserId,
    role : Common.UserRole,
    name : Text,
    email : Text,
  ) : Types.User {
    let user : Types.User = {
      principal;
      role;
      name;
      email;
      status = #active;
      createdAt = Time.now();
    };
    users.add(principal, user);
    user;
  };

  public func getUser(
    users : Map.Map<Common.UserId, Types.User>,
    principal : Common.UserId,
  ) : ?Types.User {
    users.get(principal);
  };

  public func listUsers(
    users : Map.Map<Common.UserId, Types.User>,
  ) : [Types.User] {
    users.values().toArray();
  };

  public func deactivateUser(
    users : Map.Map<Common.UserId, Types.User>,
    principal : Common.UserId,
  ) : () {
    switch (users.get(principal)) {
      case (?user) {
        users.add(principal, { user with status = #inactive });
      };
      case null {
        Runtime.trap("User not found");
      };
    };
  };

  public func reactivateUser(
    users : Map.Map<Common.UserId, Types.User>,
    principal : Common.UserId,
  ) : () {
    switch (users.get(principal)) {
      case (?user) {
        users.add(principal, { user with status = #active });
      };
      case null {
        Runtime.trap("User not found");
      };
    };
  };

  public func getEmployeeProfile(
    employeeProfiles : Map.Map<Common.UserId, Types.EmployeeProfile>,
    userId : Common.UserId,
  ) : ?Types.EmployeeProfile {
    employeeProfiles.get(userId);
  };

  public func updateEmployeeProfile(
    employeeProfiles : Map.Map<Common.UserId, Types.EmployeeProfile>,
    profile : Types.EmployeeProfile,
  ) : () {
    employeeProfiles.add(profile.userId, profile);
  };

  public func getEmployerProfile(
    employerProfiles : Map.Map<Common.UserId, Types.EmployerProfile>,
    userId : Common.UserId,
  ) : ?Types.EmployerProfile {
    employerProfiles.get(userId);
  };

  public func updateEmployerProfile(
    employerProfiles : Map.Map<Common.UserId, Types.EmployerProfile>,
    profile : Types.EmployerProfile,
  ) : () {
    employerProfiles.add(profile.userId, profile);
  };

  public func approveEmployer(
    employerProfiles : Map.Map<Common.UserId, Types.EmployerProfile>,
    userId : Common.UserId,
  ) : () {
    switch (employerProfiles.get(userId)) {
      case (?profile) {
        employerProfiles.add(userId, { profile with status = #approved });
      };
      case null {
        Runtime.trap("Employer profile not found");
      };
    };
  };

  public func suspendEmployer(
    employerProfiles : Map.Map<Common.UserId, Types.EmployerProfile>,
    userId : Common.UserId,
  ) : () {
    switch (employerProfiles.get(userId)) {
      case (?profile) {
        employerProfiles.add(userId, { profile with status = #suspended });
      };
      case null {
        Runtime.trap("Employer profile not found");
      };
    };
  };

  public func getPlatformStats(
    users : Map.Map<Common.UserId, Types.User>,
    jobs : Map.Map<Common.JobId, JobsTypes.JobListing>,
    applications : Map.Map<Common.ApplicationId, JobsTypes.JobApplication>,
  ) : Types.PlatformStats {
    var totalEmployers : Nat = 0;
    var totalEmployees : Nat = 0;

    for ((_, user) in users.entries()) {
      switch (user.role) {
        case (#employer) { totalEmployers += 1 };
        case (#employee) { totalEmployees += 1 };
        case (#admin) {};
      };
    };

    var activeJobs : Nat = 0;
    for ((_, job) in jobs.entries()) {
      if (job.status == #active) {
        activeJobs += 1;
      };
    };

    {
      totalUsers = users.size();
      totalEmployers;
      totalEmployees;
      totalJobs = jobs.size();
      totalApplications = applications.size();
      activeJobs;
    };
  };
};
