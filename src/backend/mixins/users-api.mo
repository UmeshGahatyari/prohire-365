import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import Storage "mo:caffeineai-object-storage/Storage";
import Common "../types/common";
import UserTypes "../types/users";
import JobTypes "../types/jobs";
import UsersLib "../lib/users";

mixin (
  accessControlState : AccessControl.AccessControlState,
  users : Map.Map<Common.UserId, UserTypes.User>,
  employeeProfiles : Map.Map<Common.UserId, UserTypes.EmployeeProfile>,
  employerProfiles : Map.Map<Common.UserId, UserTypes.EmployerProfile>,
  jobs : Map.Map<Common.JobId, JobTypes.JobListing>,
  applications : Map.Map<Common.ApplicationId, JobTypes.JobApplication>,
) {
  public shared ({ caller }) func registerUser(
    role : Common.UserRole,
    name : Text,
    email : Text,
  ) : async () {
    if (caller.isAnonymous()) {
      Runtime.trap("Must be logged in to register");
    };
    // Only employee or employer roles allowed via self-registration
    switch (role) {
      case (#admin) { Runtime.trap("Cannot self-register as admin") };
      case _ {};
    };
    // Prevent duplicate registration
    switch (users.get(caller)) {
      case (?_) { Runtime.trap("User already registered") };
      case null {};
    };
    let user = UsersLib.createUser(users, caller, role, name, email);
    // Create default profile based on role
    switch (role) {
      case (#employee) {
        let defaultProfile : UserTypes.EmployeeProfile = {
          userId = caller;
          location = "";
          phone = "";
          skills = [];
          professionalSummary = "";
          experience = [];
          resumeFileId = null;
        };
        employeeProfiles.add(caller, defaultProfile);
      };
      case (#employer) {
        let defaultProfile : UserTypes.EmployerProfile = {
          userId = caller;
          companyName = "";
          companyEmail = email;
          companySize = "";
          industry = "";
          description = "";
          status = #pending;
        };
        employerProfiles.add(caller, defaultProfile);
      };
      case (#admin) {};
    };
  };

  public query ({ caller }) func getMyProfile() : async ?UserTypes.User {
    users.get(caller);
  };

  public query ({ caller }) func getEmployeeProfile(userId : Common.UserId) : async ?UserTypes.EmployeeProfile {
    if (caller.isAnonymous()) {
      Runtime.trap("Must be logged in");
    };
    UsersLib.getEmployeeProfile(employeeProfiles, userId);
  };

  public shared ({ caller }) func updateEmployeeProfile(
    location : Text,
    phone : Text,
    skills : [Text],
    professionalSummary : Text,
    experience : [UserTypes.ExperienceEntry],
    resumeFileId : ?Storage.ExternalBlob,
  ) : async () {
    if (caller.isAnonymous()) {
      Runtime.trap("Must be logged in");
    };
    // Verify caller is an employee
    switch (users.get(caller)) {
      case (?user) {
        if (user.role != #employee) {
          Runtime.trap("Only employees can update employee profiles");
        };
      };
      case null { Runtime.trap("User not registered") };
    };
    let profile : UserTypes.EmployeeProfile = {
      userId = caller;
      location;
      phone;
      skills;
      professionalSummary;
      experience;
      resumeFileId;
    };
    UsersLib.updateEmployeeProfile(employeeProfiles, profile);
  };

  public query ({ caller }) func getEmployerProfile(userId : Common.UserId) : async ?UserTypes.EmployerProfile {
    if (caller.isAnonymous()) {
      Runtime.trap("Must be logged in");
    };
    UsersLib.getEmployerProfile(employerProfiles, userId);
  };

  public shared ({ caller }) func updateEmployerProfile(
    companyName : Text,
    companyEmail : Text,
    companySize : Text,
    industry : Text,
    description : Text,
  ) : async () {
    if (caller.isAnonymous()) {
      Runtime.trap("Must be logged in");
    };
    // Verify caller is an employer
    switch (users.get(caller)) {
      case (?user) {
        if (user.role != #employer) {
          Runtime.trap("Only employers can update employer profiles");
        };
      };
      case null { Runtime.trap("User not registered") };
    };
    // Preserve existing status
    let currentStatus : UserTypes.EmployerStatus = switch (employerProfiles.get(caller)) {
      case (?p) p.status;
      case null #pending;
    };
    let profile : UserTypes.EmployerProfile = {
      userId = caller;
      companyName;
      companyEmail;
      companySize;
      industry;
      description;
      status = currentStatus;
    };
    UsersLib.updateEmployerProfile(employerProfiles, profile);
  };

  public query ({ caller }) func getUserList() : async [UserTypes.User] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    UsersLib.listUsers(users);
  };

  public shared ({ caller }) func deactivateUser(userId : Common.UserId) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    UsersLib.deactivateUser(users, userId);
  };

  public shared ({ caller }) func reactivateUser(userId : Common.UserId) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    UsersLib.reactivateUser(users, userId);
  };

  public shared ({ caller }) func approveEmployer(userId : Common.UserId) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    UsersLib.approveEmployer(employerProfiles, userId);
  };

  public shared ({ caller }) func suspendEmployer(userId : Common.UserId) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    UsersLib.suspendEmployer(employerProfiles, userId);
  };

  public query ({ caller }) func getPlatformStats() : async UserTypes.PlatformStats {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    UsersLib.getPlatformStats(users, jobs, applications);
  };
};
