import Map "mo:core/Map";
import Set "mo:core/Set";
import Principal "mo:core/Principal";
import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import MixinObjectStorage "mo:caffeineai-object-storage/Mixin";
import Common "types/common";
import UserTypes "types/users";
import JobTypes "types/jobs";
import UsersMixin "mixins/users-api";
import JobsMixin "mixins/jobs-api";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  include MixinObjectStorage();

  let users = Map.empty<Common.UserId, UserTypes.User>();
  let employeeProfiles = Map.empty<Common.UserId, UserTypes.EmployeeProfile>();
  let employerProfiles = Map.empty<Common.UserId, UserTypes.EmployerProfile>();
  let jobs = Map.empty<Common.JobId, JobTypes.JobListing>();
  let applications = Map.empty<Common.ApplicationId, JobTypes.JobApplication>();
  let savedJobs = Map.empty<Common.UserId, Set.Set<Common.JobId>>();

  include UsersMixin(accessControlState, users, employeeProfiles, employerProfiles, jobs, applications);
  include JobsMixin(accessControlState, users, jobs, applications, savedJobs);
};
