import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "@tanstack/react-router";
import {
  Briefcase,
  CalendarDays,
  Edit,
  Eye,
  Plus,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { JobListing, JobStatus } from "../../backend.d";
import { EmptyState } from "../../components/EmptyState";
import { Layout } from "../../components/Layout";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import {
  useCloseJob,
  useEmployerJobs,
  useReopenJob,
} from "../../hooks/useQueries";
import type { JobStatus as JobStatusLocal } from "../../types";

const JOB_TYPE_LABELS: Record<string, string> = {
  fullTime: "Full-time",
  partTime: "Part-time",
  contract: "Contract",
};

const MOCK_APPLICANT_COUNTS: Record<string, number> = {
  "1": 14,
  "2": 7,
  "3": 23,
};

const STATUS_FILTER_TABS: { label: string; value: "all" | JobStatusLocal }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Draft", value: "draft" },
  { label: "Closed", value: "closed" },
];

function JobStatusBadge({ status }: { status: JobStatus }) {
  const configs = {
    active: {
      label: "Active",
      color: "oklch(0.7 0.2 150)",
      bg: "oklch(0.7 0.2 150 / 0.12)",
      border: "oklch(0.7 0.2 150 / 0.3)",
    },
    draft: {
      label: "Draft",
      color: "oklch(0.75 0.16 65)",
      bg: "oklch(0.75 0.16 65 / 0.1)",
      border: "oklch(0.75 0.16 65 / 0.3)",
    },
    closed: {
      label: "Closed",
      color: "oklch(0.62 0.2 28)",
      bg: "oklch(0.62 0.2 28 / 0.1)",
      border: "oklch(0.62 0.2 28 / 0.3)",
    },
  }[status];
  return (
    <span
      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold"
      style={{
        color: configs.color,
        background: configs.bg,
        border: `1px solid ${configs.border}`,
      }}
      data-ocid={`job_status.${status}`}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: configs.color }}
      />
      {configs.label}
    </span>
  );
}

function JobRow({ job, index }: { job: JobListing; index: number }) {
  const navigate = useNavigate();
  const { mutateAsync: closeJob, isPending: closing } = useCloseJob();
  const { mutateAsync: reopenJob, isPending: reopening } = useReopenJob();
  const applicantCount =
    MOCK_APPLICANT_COUNTS[String(index + 1)] ?? Math.floor(Math.random() * 20);
  const postedDate = new Date(
    Number(job.createdAt) / 1_000_000,
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const handleToggle = async () => {
    try {
      if (job.status === "active") {
        await closeJob(job.jobId);
        toast.success("Job closed successfully");
      } else {
        await reopenJob(job.jobId);
        toast.success("Job reopened successfully");
      }
    } catch {
      toast.error("Action failed. Please try again.");
    }
  };

  return (
    <div
      className="rounded-2xl overflow-hidden group transition-smooth hover:translate-y-[-1px]"
      style={{
        background: "oklch(0.13 0.008 260)",
        border: "1px solid oklch(0.28 0.015 260 / 0.5)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
      }}
      data-ocid={`my_jobs.item.${index + 1}`}
    >
      {/* Top accent bar on hover */}
      <div
        className="h-0.5 w-full opacity-0 group-hover:opacity-100 transition-smooth"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
        }}
      />

      <div className="p-5">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            {/* Job icon */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.3), oklch(0.72 0.22 190 / 0.2))",
                border: "1px solid oklch(0.55 0.18 280 / 0.3)",
              }}
            >
              <Briefcase
                className="h-4.5 w-4.5"
                style={{ color: "oklch(0.72 0.22 190)" }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                  {job.title}
                </h3>
                <JobStatusBadge status={job.status} />
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: "oklch(0.5 0.16 280 / 0.12)",
                    color: "oklch(0.72 0.22 190)",
                    border: "1px solid oklch(0.5 0.16 280 / 0.2)",
                  }}
                >
                  {JOB_TYPE_LABELS[job.jobType] ?? job.jobType}
                </span>
              </div>
              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground flex-wrap">
                <span className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" />
                  <span
                    className="font-medium"
                    style={{ color: "oklch(0.72 0.22 190)" }}
                  >
                    {applicantCount}
                  </span>{" "}
                  applicants
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" /> Posted {postedDate}
                </span>
                <span>{job.location}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end">
            <Button
              type="button"
              size="sm"
              onClick={() =>
                navigate({
                  to: `/employer/jobs/${String(job.jobId)}/applicants` as never,
                })
              }
              data-ocid={`my_jobs.view_applicants.${index + 1}`}
              className="gap-1.5 rounded-xl h-8 text-xs border-border/50 hover:bg-primary/10 hover:border-primary/40"
              variant="outline"
            >
              <Eye className="h-3.5 w-3.5" /> Applicants
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={() =>
                navigate({
                  to: `/employer/jobs/${String(job.jobId)}/edit` as never,
                })
              }
              data-ocid={`my_jobs.edit.${index + 1}`}
              className="gap-1.5 rounded-xl h-8 text-xs"
              style={{
                background: "oklch(0.55 0.18 280 / 0.2)",
                color: "oklch(0.75 0.15 280)",
                border: "1px solid oklch(0.55 0.18 280 / 0.35)",
              }}
            >
              <Edit className="h-3.5 w-3.5" /> Edit
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={handleToggle}
              disabled={closing || reopening}
              data-ocid={
                job.status === "active"
                  ? `my_jobs.close.${index + 1}`
                  : `my_jobs.reopen.${index + 1}`
              }
              className="gap-1.5 rounded-xl h-8 text-xs"
              style={
                job.status === "active"
                  ? {
                      background: "oklch(0.62 0.2 28 / 0.15)",
                      color: "oklch(0.72 0.18 28)",
                      border: "1px solid oklch(0.62 0.2 28 / 0.35)",
                    }
                  : {
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.3), oklch(0.72 0.22 190 / 0.2))",
                      color: "oklch(0.82 0.15 190)",
                      border: "1px solid oklch(0.72 0.22 190 / 0.3)",
                    }
              }
            >
              {job.status === "active" ? (
                <>
                  <X className="h-3.5 w-3.5" /> Close
                </>
              ) : (
                <>
                  <Zap className="h-3.5 w-3.5" /> Reopen
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyJobsPage() {
  const navigate = useNavigate();
  const { data: jobs, isLoading } = useEmployerJobs();
  const [activeFilter, setActiveFilter] = useState<"all" | JobStatusLocal>(
    "all",
  );

  const filteredJobs =
    jobs?.filter((j) => activeFilter === "all" || j.status === activeFilter) ??
    [];

  return (
    <ProtectedRoute requiredRole="employer">
      <Layout showSidebar sidebarRole="employer">
        <div className="p-6 max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div
            className="relative rounded-2xl overflow-hidden p-6"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.14 0.04 280) 0%, oklch(0.12 0.02 260) 100%)",
              border: "1px solid oklch(0.5 0.16 280 / 0.25)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none opacity-20"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.55 0.18 280), transparent 70%)",
              }}
            />
            <div className="relative z-10 flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                  }}
                >
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-display font-bold text-foreground">
                    My Job Listings
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Manage and track all your posted positions
                  </p>
                </div>
              </div>
              <Button
                onClick={() => navigate({ to: "/employer/post-job" })}
                data-ocid="my_jobs.post_job.primary_button"
                className="rounded-xl font-semibold shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                  color: "white",
                  border: "none",
                }}
              >
                <Plus className="h-4 w-4 mr-2" /> Post a Job
              </Button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div
            className="flex gap-1 p-1 rounded-xl w-fit"
            style={{
              background: "oklch(0.13 0.008 260)",
              border: "1px solid oklch(0.28 0.015 260 / 0.4)",
            }}
          >
            {STATUS_FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveFilter(tab.value)}
                data-ocid={`my_jobs.filter.${tab.value}.tab`}
                className="px-4 py-1.5 rounded-lg text-sm font-medium transition-smooth"
                style={
                  activeFilter === tab.value
                    ? {
                        background:
                          "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.3), oklch(0.72 0.22 190 / 0.2))",
                        color: "oklch(0.82 0.15 190)",
                        border: "1px solid oklch(0.72 0.22 190 / 0.3)",
                      }
                    : { color: "oklch(0.62 0.01 250)" }
                }
              >
                {tab.label}
                {tab.value !== "all" && jobs && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({jobs.filter((j) => j.status === tab.value).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* List */}
          {isLoading ? (
            <div className="space-y-3" data-ocid="my_jobs.loading_state">
              {(["a", "b", "c"] as const).map((k) => (
                <div
                  key={k}
                  className="rounded-2xl p-5"
                  style={{
                    background: "oklch(0.13 0.008 260)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.4)",
                  }}
                >
                  <Skeleton className="h-6 w-64 mb-2" />
                  <Skeleton className="h-4 w-48" />
                </div>
              ))}
            </div>
          ) : !jobs || jobs.length === 0 ? (
            <EmptyState
              icon={Briefcase}
              title="No job listings yet"
              description="Post your first job to start receiving applications from top candidates."
              action={{
                label: "Post a Job",
                onClick: () => navigate({ to: "/employer/post-job" }),
              }}
            />
          ) : filteredJobs.length === 0 ? (
            <div
              className="text-center py-16 text-muted-foreground"
              data-ocid="my_jobs.empty_state"
            >
              No {activeFilter} jobs found.
            </div>
          ) : (
            <div className="space-y-3" data-ocid="my_jobs.list">
              {filteredJobs.map((job, i) => (
                <JobRow key={String(job.jobId)} job={job as never} index={i} />
              ))}
              <button
                type="button"
                onClick={() => navigate({ to: "/employer/post-job" })}
                data-ocid="my_jobs.post_another.link"
                className="w-full py-4 rounded-2xl text-sm font-medium transition-smooth flex items-center justify-center gap-2"
                style={{
                  border: "2px dashed oklch(0.28 0.015 260 / 0.6)",
                  color: "oklch(0.62 0.01 250)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "oklch(0.72 0.22 190 / 0.4)";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "oklch(0.72 0.22 190)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "oklch(0.28 0.015 260 / 0.6)";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "oklch(0.62 0.01 250)";
                }}
              >
                <Plus className="h-4 w-4" /> Post another job
              </button>
            </div>
          )}
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
