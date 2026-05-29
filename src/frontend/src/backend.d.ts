import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface EmployerProfile {
    status: EmployerStatus;
    userId: UserId;
    description: string;
    companyEmail: string;
    companyName: string;
    companySize: string;
    industry: string;
}
export type Timestamp = bigint;
export type ApplicationId = bigint;
export interface JobSearchFilter {
    jobType?: JobType;
    salaryMax?: bigint;
    salaryMin?: bigint;
    keyword?: string;
    location?: string;
}
export interface User {
    status: UserStatus;
    principal: UserId;
    name: string;
    createdAt: Timestamp;
    role: UserRole;
    email: string;
}
export type JobId = bigint;
export interface JobListing {
    applicationDeadline: Timestamp;
    status: JobStatus;
    title: string;
    jobType: JobType;
    createdAt: Timestamp;
    experienceRequired: bigint;
    jobId: JobId;
    skillsRequired: Array<string>;
    description: string;
    updatedAt: Timestamp;
    employerId: UserId;
    salaryMax: bigint;
    salaryMin: bigint;
    location: string;
}
export interface JobApplication {
    status: ApplicationStatus;
    appliedAt: Timestamp;
    applicationId: ApplicationId;
    jobId: JobId;
    updatedAt: Timestamp;
    employeeId: UserId;
    notes?: string;
}
export interface ExperienceEntry {
    title: string;
    endDate?: string;
    description: string;
    company: string;
    startDate: string;
}
export type UserId = Principal;
export interface EmployeeProfile {
    userId: UserId;
    resumeFileId?: ExternalBlob;
    experience: Array<ExperienceEntry>;
    phone: string;
    skills: Array<string>;
    location: string;
    professionalSummary: string;
}
export interface PlatformStats {
    totalEmployees: bigint;
    totalEmployers: bigint;
    totalJobs: bigint;
    totalUsers: bigint;
    activeJobs: bigint;
    totalApplications: bigint;
}
export enum ApplicationStatus {
    offer = "offer",
    interview = "interview",
    applied = "applied",
    rejected = "rejected",
    shortlisted = "shortlisted"
}
export enum EmployerStatus {
    pending = "pending",
    approved = "approved",
    suspended = "suspended"
}
export enum JobStatus {
    closed = "closed",
    active = "active",
    draft = "draft"
}
export enum JobType {
    contract = "contract",
    partTime = "partTime",
    fullTime = "fullTime"
}
export enum UserRole {
    admin = "admin",
    employee = "employee",
    employer = "employer"
}
export enum UserRole__1 {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export enum UserStatus {
    active = "active",
    inactive = "inactive"
}
export interface backendInterface {
    applyToJob(jobId: JobId): Promise<ApplicationId>;
    approveEmployer(userId: UserId): Promise<void>;
    approveJob(jobId: JobId): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole__1): Promise<void>;
    deactivateUser(userId: UserId): Promise<void>;
    getCallerUserRole(): Promise<UserRole__1>;
    getEmployeeProfile(userId: UserId): Promise<EmployeeProfile | null>;
    getEmployerProfile(userId: UserId): Promise<EmployerProfile | null>;
    getJobApplications(jobId: JobId): Promise<Array<JobApplication>>;
    getJobDetails(jobId: JobId): Promise<JobListing | null>;
    getMyApplications(): Promise<Array<JobApplication>>;
    getMyEmployerJobs(): Promise<Array<JobListing>>;
    getMyProfile(): Promise<User | null>;
    getPlatformStats(): Promise<PlatformStats>;
    getSavedJobs(): Promise<Array<JobListing>>;
    getUserList(): Promise<Array<User>>;
    isCallerAdmin(): Promise<boolean>;
    postJob(title: string, description: string, location: string, salaryMin: bigint, salaryMax: bigint, experienceRequired: bigint, jobType: JobType, skillsRequired: Array<string>, applicationDeadline: Timestamp): Promise<JobId>;
    reactivateUser(userId: UserId): Promise<void>;
    registerUser(role: UserRole, name: string, email: string): Promise<void>;
    rejectJob(jobId: JobId): Promise<void>;
    saveJob(jobId: JobId): Promise<void>;
    searchJobs(filter: JobSearchFilter): Promise<Array<JobListing>>;
    suspendEmployer(userId: UserId): Promise<void>;
    unsaveJob(jobId: JobId): Promise<void>;
    updateApplicationStatus(applicationId: ApplicationId, status: ApplicationStatus, notes: string | null): Promise<void>;
    updateEmployeeProfile(location: string, phone: string, skills: Array<string>, professionalSummary: string, experience: Array<ExperienceEntry>, resumeFileId: ExternalBlob | null): Promise<void>;
    updateEmployerProfile(companyName: string, companyEmail: string, companySize: string, industry: string, description: string): Promise<void>;
    updateJob(jobId: JobId, title: string, description: string, location: string, salaryMin: bigint, salaryMax: bigint, experienceRequired: bigint, jobType: JobType, skillsRequired: Array<string>, status: JobStatus, applicationDeadline: Timestamp): Promise<void>;
}
