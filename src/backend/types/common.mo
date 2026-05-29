module {
  public type UserId = Principal;
  public type JobId = Nat;
  public type ApplicationId = Nat;
  public type Timestamp = Int;

  public type UserRole = {
    #employee;
    #employer;
    #admin;
  };

  public type UserStatus = {
    #active;
    #inactive;
  };
};
