// Backend query hooks — wired to actor methods via useActor

import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type {
  ApplicationStatus as AppStatusEnum,
  JobStatus as JobStatusEnum,
  JobType as JobTypeEnum,
} from "../backend.d";

export function useBackendStatus() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<boolean>({
    queryKey: ["backend-status"],
    queryFn: async () => {
      if (!actor) return false;
      return true;
    },
    enabled: !!actor && !isFetching,
  });
}

// --- Employer hooks ---

export function useEmployerJobs() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["employer-jobs"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyEmployerJobs();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useJobDetails(jobId: bigint) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["job", String(jobId)],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getJobDetails(jobId);
    },
    enabled: !!actor && !isFetching && jobId > 0n,
  });
}

export function useJobApplications(jobId: bigint) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["job-applications", String(jobId)],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getJobApplications(jobId);
    },
    enabled: !!actor && !isFetching && jobId > 0n,
  });
}

export function usePostJob() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (params: {
      title: string;
      description: string;
      location: string;
      salaryMin: bigint;
      salaryMax: bigint;
      experienceRequired: bigint;
      jobType: JobTypeEnum;
      skillsRequired: string[];
      applicationDeadline: bigint;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.postJob(
        params.title,
        params.description,
        params.location,
        params.salaryMin,
        params.salaryMax,
        params.experienceRequired,
        params.jobType,
        params.skillsRequired,
        params.applicationDeadline,
      );
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["employer-jobs"] });
    },
  });
}

export function useUpdateJob() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (params: {
      jobId: bigint;
      title: string;
      description: string;
      location: string;
      salaryMin: bigint;
      salaryMax: bigint;
      experienceRequired: bigint;
      jobType: JobTypeEnum;
      skillsRequired: string[];
      status: JobStatusEnum;
      applicationDeadline: bigint;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateJob(
        params.jobId,
        params.title,
        params.description,
        params.location,
        params.salaryMin,
        params.salaryMax,
        params.experienceRequired,
        params.jobType,
        params.skillsRequired,
        params.status,
        params.applicationDeadline,
      );
    },
    onSuccess: (_data, vars) => {
      qc.invalidateQueries({ queryKey: ["employer-jobs"] });
      qc.invalidateQueries({ queryKey: ["job", String(vars.jobId)] });
    },
  });
}

export function useCloseJob() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (jobId: bigint) => {
      if (!actor) throw new Error("Actor not ready");
      // Close by updating with closed status — use rejectJob as proxy
      return actor.rejectJob(jobId);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["employer-jobs"] });
    },
  });
}

export function useReopenJob() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (jobId: bigint) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.approveJob(jobId);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["employer-jobs"] });
    },
  });
}

export function useUpdateApplicationStatus() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (params: {
      applicationId: bigint;
      status: AppStatusEnum;
      notes: string | null;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateApplicationStatus(
        params.applicationId,
        params.status,
        params.notes,
      );
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["job-applications"] });
    },
  });
}

// --- Employee hooks ---

export function useMyApplications() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["my-applications"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyApplications();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSearchJobs(filter: {
  keyword?: string;
  location?: string;
  jobType?: JobTypeEnum;
  salaryMin?: bigint;
  salaryMax?: bigint;
}) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["search-jobs", JSON.stringify(filter)],
    queryFn: async () => {
      if (!actor) return [];
      return actor.searchJobs(filter);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useApplyToJob() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (jobId: bigint) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.applyToJob(jobId);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["my-applications"] });
    },
  });
}

export function useSaveJob() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (jobId: bigint) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.saveJob(jobId);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["saved-jobs"] });
    },
  });
}

export function useUnsaveJob() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (jobId: bigint) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.unsaveJob(jobId);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["saved-jobs"] });
    },
  });
}

export function useSavedJobs() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["saved-jobs"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getSavedJobs();
    },
    enabled: !!actor && !isFetching,
  });
}

// --- Admin hooks ---

export function usePlatformStats() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["platform-stats"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getPlatformStats();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUserList() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["user-list"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getUserList();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useEmployeeProfile(userId: { toString(): string } | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["employee-profile", userId?.toString()],
    queryFn: async () => {
      if (!actor || !userId) return null;
      return actor.getEmployeeProfile(
        userId as Parameters<typeof actor.getEmployeeProfile>[0],
      );
    },
    enabled: !!actor && !isFetching && !!userId,
  });
}

export function useEmployerProfile(userId: { toString(): string } | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["employer-profile", userId?.toString()],
    queryFn: async () => {
      if (!actor || !userId) return null;
      return actor.getEmployerProfile(
        userId as Parameters<typeof actor.getEmployerProfile>[0],
      );
    },
    enabled: !!actor && !isFetching && !!userId,
  });
}

export function useUpdateEmployerProfile() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (params: {
      companyName: string;
      companyEmail: string;
      companySize: string;
      industry: string;
      description: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateEmployerProfile(
        params.companyName,
        params.companyEmail,
        params.companySize,
        params.industry,
        params.description,
      );
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["employer-profile"] });
    },
  });
}
