import type { Principal } from "@icp-sdk/core/principal";

// --- Core IDs ---
export type UserId = Principal;
export type JobId = bigint;
export type ApplicationId = bigint;

// --- Enums ---
export type UserRole = "employee" | "employer" | "admin";
export type UserStatus = "active" | "inactive";
export type JobType = "fullTime" | "partTime" | "contract";
export type JobStatus = "draft" | "active" | "closed";
export type ApplicationStatus =
  | "applied"
  | "shortlisted"
  | "interview"
  | "rejected"
  | "offer";

// --- User Types ---
export interface User {
  principal: Principal;
  role: UserRole;
  name: string;
  email: string;
  status: UserStatus;
  createdAt: bigint;
}

export interface ExperienceEntry {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface EmployeeProfile {
  userId: UserId;
  location: string;
  phone: string;
  skills: string[];
  professionalSummary: string;
  experience: ExperienceEntry[];
  resumeFileId?: string;
}

export interface EmployerProfile {
  userId: UserId;
  companyName: string;
  companyEmail: string;
  companySize: string;
  industry: string;
  description: string;
  status: "pending" | "approved" | "rejected";
}

// --- Job Types ---
export interface JobListing {
  jobId: JobId;
  employerId: UserId;
  title: string;
  description: string;
  location: string;
  salaryMin: bigint;
  salaryMax: bigint;
  experienceRequired: string;
  jobType: JobType;
  skillsRequired: string[];
  status: JobStatus;
  applicationDeadline: bigint;
  createdAt: bigint;
  updatedAt: bigint;
  companyName?: string;
}

export interface JobApplication {
  applicationId: ApplicationId;
  jobId: JobId;
  employeeId: UserId;
  status: ApplicationStatus;
  appliedAt: bigint;
  updatedAt: bigint;
  notes?: string;
}

// --- Platform ---
export interface PlatformStats {
  totalUsers: bigint;
  totalEmployers: bigint;
  totalEmployees: bigint;
  totalJobs: bigint;
  totalApplications: bigint;
  activeJobs: bigint;
}

// --- Auth ---
export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  role: UserRole | null;
  user: User | null;
}
