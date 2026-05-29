import type { backendInterface } from "../backend";
import {
  ApplicationStatus,
  EmployerStatus,
  JobStatus,
  JobType,
  UserRole,
  UserRole__1,
  UserStatus,
} from "../backend";
import { Principal } from "@icp-sdk/core/principal";

const mockPrincipal = Principal.anonymous();

const mockJobListing = (id: bigint) => ({
  applicationDeadline: BigInt(Date.now() + 30 * 24 * 60 * 60 * 1000),
  status: JobStatus.active,
  title: "Senior UX/UI Designer",
  jobType: JobType.fullTime,
  createdAt: BigInt(Date.now()),
  experienceRequired: BigInt(3),
  jobId: id,
  skillsRequired: ["User Research", "Wireframing", "Figma"],
  description:
    "We are looking for an experienced UX/UI Designer to join our team. You will design and deliver UX and UI across all our digital products. You'll work closely with product managers and engineers to build intuitive and beautiful interfaces.",
  updatedAt: BigInt(Date.now()),
  employerId: mockPrincipal,
  salaryMax: BigInt(130000),
  salaryMin: BigInt(110000),
  location: "San Francisco, CA",
});

export const mockBackend: backendInterface = {
  _immutableObjectStorageBlobsAreLive: async (_hashes) => [],

  _immutableObjectStorageBlobsToDelete: async () => [],

  _immutableObjectStorageConfirmBlobDeletion: async (_blobs) => undefined,

  _immutableObjectStorageCreateCertificate: async (_blobHash) => ({
    method: "",
    blob_hash: "",
  }),

  _immutableObjectStorageRefillCashier: async (_refillInformation) => ({}),

  _immutableObjectStorageUpdateGatewayPrincipals: async () => undefined,

  _initializeAccessControl: async () => undefined,

  applyToJob: async (_jobId) => BigInt(1),

  approveEmployer: async (_userId) => undefined,

  approveJob: async (_jobId) => undefined,

  assignCallerUserRole: async (_user, _role) => undefined,

  deactivateUser: async (_userId) => undefined,

  getCallerUserRole: async () => UserRole__1.user,

  getEmployeeProfile: async (_userId) => ({
    userId: mockPrincipal,
    resumeFileId: undefined,
    experience: [
      {
        title: "UX Designer",
        company: "TechCorp Inc.",
        startDate: "2021-01",
        endDate: "2023-12",
        description: "Led UX design for core product features.",
      },
    ],
    phone: "+1 555-123-4567",
    skills: ["Figma", "User Research", "Wireframing", "Prototyping"],
    location: "San Francisco, CA",
    professionalSummary:
      "Passionate UX/UI designer with 5+ years of experience creating user-centered digital experiences.",
  }),

  getEmployerProfile: async (_userId) => ({
    status: EmployerStatus.approved,
    userId: mockPrincipal,
    description:
      "A leading technology company focused on building innovative products that help people work smarter.",
    companyEmail: "hr@techcorp.com",
    companyName: "TechCorp Solutions",
    companySize: "201-500",
    industry: "Information Technology",
  }),

  getJobApplications: async (_jobId) => [
    {
      status: ApplicationStatus.applied,
      appliedAt: BigInt(Date.now()),
      applicationId: BigInt(1),
      jobId: BigInt(1),
      updatedAt: BigInt(Date.now()),
      employeeId: mockPrincipal,
      notes: undefined,
    },
  ],

  getJobDetails: async (_jobId) => mockJobListing(BigInt(1)),

  getMyApplications: async () => [
    {
      status: ApplicationStatus.shortlisted,
      appliedAt: BigInt(Date.now()),
      applicationId: BigInt(1),
      jobId: BigInt(1),
      updatedAt: BigInt(Date.now()),
      employeeId: mockPrincipal,
      notes: "Looking forward to hearing from you.",
    },
    {
      status: ApplicationStatus.applied,
      appliedAt: BigInt(Date.now()),
      applicationId: BigInt(2),
      jobId: BigInt(2),
      updatedAt: BigInt(Date.now()),
      employeeId: mockPrincipal,
      notes: undefined,
    },
  ],

  getMyEmployerJobs: async () => [
    mockJobListing(BigInt(1)),
    mockJobListing(BigInt(2)),
    mockJobListing(BigInt(3)),
  ],

  getMyProfile: async () => ({
    status: UserStatus.active,
    principal: mockPrincipal,
    name: "Alex Johnson",
    createdAt: BigInt(Date.now()),
    role: UserRole.employee,
    email: "alex.johnson@example.com",
  }),

  getPlatformStats: async () => ({
    totalEmployees: BigInt(1236),
    totalEmployers: BigInt(53),
    totalJobs: BigInt(291),
    totalUsers: BigInt(1289),
    activeJobs: BigInt(63),
    totalApplications: BigInt(10),
  }),

  getSavedJobs: async () => [mockJobListing(BigInt(2)), mockJobListing(BigInt(3))],

  getUserList: async () => [
    {
      status: UserStatus.active,
      principal: mockPrincipal,
      name: "Alex Johnson",
      createdAt: BigInt(Date.now()),
      role: UserRole.employee,
      email: "alex.johnson@example.com",
    },
    {
      status: UserStatus.active,
      principal: mockPrincipal,
      name: "Sarah Chen",
      createdAt: BigInt(Date.now()),
      role: UserRole.employer,
      email: "sarah.chen@techcorp.com",
    },
  ],

  isCallerAdmin: async () => false,

  postJob: async () => BigInt(4),

  reactivateUser: async (_userId) => undefined,

  registerUser: async (_role, _name, _email) => undefined,

  rejectJob: async (_jobId) => undefined,

  saveJob: async (_jobId) => undefined,

  searchJobs: async (_filter) => [
    mockJobListing(BigInt(1)),
    mockJobListing(BigInt(2)),
    mockJobListing(BigInt(3)),
    mockJobListing(BigInt(4)),
    mockJobListing(BigInt(5)),
    mockJobListing(BigInt(6)),
  ],

  suspendEmployer: async (_userId) => undefined,

  unsaveJob: async (_jobId) => undefined,

  updateApplicationStatus: async (_applicationId, _status, _notes) => undefined,

  updateEmployeeProfile: async () => undefined,

  updateEmployerProfile: async () => undefined,

  updateJob: async () => undefined,
};
