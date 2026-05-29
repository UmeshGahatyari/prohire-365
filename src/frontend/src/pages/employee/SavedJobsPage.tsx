import { useNavigate } from "@tanstack/react-router";
import {
  Bookmark,
  BookmarkCheck,
  Briefcase,
  MapPin,
  Search,
  Trash2,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { EmptyState } from "../../components/EmptyState";
import { Layout } from "../../components/Layout";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { SkillTag } from "../../components/SkillTag";
import type { JobListing } from "../../types";

const INITIAL_SAVED: JobListing[] = [
  {
    jobId: BigInt(1),
    employerId: {} as never,
    title: "Senior React Developer",
    description:
      "Lead the frontend team building cutting-edge web applications.",
    location: "San Francisco, CA",
    salaryMin: BigInt(110000),
    salaryMax: BigInt(150000),
    experienceRequired: "4–6 yrs",
    jobType: "fullTime",
    skillsRequired: ["React", "TypeScript", "GraphQL", "Redux"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 30 * 24 * 3600 * 1000) * 1_000_000,
    ),
    createdAt: BigInt((Date.now() - 2 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt(Date.now() * 1_000_000),
    companyName: "Meridian Software",
  },
  {
    jobId: BigInt(3),
    employerId: {} as never,
    title: "UX Engineer",
    description:
      "Bridge design and engineering for seamless product experiences.",
    location: "New York, NY",
    salaryMin: BigInt(90000),
    salaryMax: BigInt(120000),
    experienceRequired: "3–6 yrs",
    jobType: "contract",
    skillsRequired: ["Figma", "React", "CSS", "Accessibility"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 15 * 24 * 3600 * 1000) * 1_000_000,
    ),
    createdAt: BigInt((Date.now() - 3 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt(Date.now() * 1_000_000),
    companyName: "Blueprint Interactive",
  },
  {
    jobId: BigInt(5),
    employerId: {} as never,
    title: "Data Engineer",
    description: "Design and build robust data pipelines for analytics teams.",
    location: "Seattle, WA",
    salaryMin: BigInt(115000),
    salaryMax: BigInt(155000),
    experienceRequired: "3–6 yrs",
    jobType: "fullTime",
    skillsRequired: ["Spark", "Python", "Airflow", "BigQuery"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 10 * 24 * 3600 * 1000) * 1_000_000,
    ),
    createdAt: BigInt((Date.now() - 5 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt(Date.now() * 1_000_000),
    companyName: "DataSphere Inc.",
  },
  {
    jobId: BigInt(6),
    employerId: {} as never,
    title: "DevOps Engineer",
    description:
      "Own infrastructure as code, CI/CD pipelines, and cloud reliability.",
    location: "Chicago, IL",
    salaryMin: BigInt(100000),
    salaryMax: BigInt(135000),
    experienceRequired: "3–5 yrs",
    jobType: "fullTime",
    skillsRequired: ["Kubernetes", "Terraform", "AWS", "CI/CD"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 18 * 24 * 3600 * 1000) * 1_000_000,
    ),
    createdAt: BigInt((Date.now() - 6 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt(Date.now() * 1_000_000),
    companyName: "Stratum Cloud",
  },
];

const jobTypeLabel: Record<string, string> = {
  fullTime: "Full-time",
  partTime: "Part-time",
  contract: "Contract",
};

function formatSalary(min: bigint, max: bigint): string {
  const fmt = (n: bigint) => `$${(Number(n) / 1000).toFixed(0)}k`;
  return `${fmt(min)} – ${fmt(max)}`;
}

function getCompanyColor(name: string): string {
  const colors = [
    "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
    "linear-gradient(135deg, oklch(0.55 0.16 200), oklch(0.65 0.18 150))",
    "linear-gradient(135deg, oklch(0.6 0.18 30), oklch(0.7 0.15 45))",
    "linear-gradient(135deg, oklch(0.52 0.14 310), oklch(0.55 0.18 280))",
  ];
  return colors[
    name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % colors.length
  ];
}

function deadlineDays(ns: bigint): string {
  const ms = Number(ns) / 1_000_000;
  const days = Math.ceil((ms - Date.now()) / (1000 * 60 * 60 * 24));
  if (days < 0) return "Expired";
  if (days <= 3) return `${days}d left`;
  return `${days} days left`;
}

export default function SavedJobsPage() {
  const navigate = useNavigate();
  const [savedJobs, setSavedJobs] = useState<JobListing[]>(INITIAL_SAVED);

  const handleRemove = (jobId: bigint) => {
    setSavedJobs((prev) => prev.filter((j) => j.jobId !== jobId));
    toast.success("Job removed from saved");
  };

  return (
    <ProtectedRoute requiredRole="employee">
      <Layout showSidebar sidebarRole="employee">
        <div className="min-h-full">
          {/* Hero */}
          <div
            className="relative overflow-hidden px-6 pt-8 pb-8"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.13 0.015 265) 0%, oklch(0.11 0.01 255) 60%, oklch(0.10 0.008 250) 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 50%, oklch(0.5 0.16 280 / 0.1) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, oklch(0.72 0.22 190 / 0.08) 0%, transparent 50%)",
              }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.72 0.22 190 / 0.5), transparent)",
              }}
            />

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Bookmark
                    className="h-4 w-4"
                    style={{ color: "oklch(0.72 0.22 190)" }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.72 0.22 190)" }}
                  >
                    {savedJobs.length} job{savedJobs.length === 1 ? "" : "s"}{" "}
                    saved
                  </span>
                </div>
                <h1 className="font-display font-bold text-3xl text-foreground">
                  Saved Jobs
                </h1>
                <p className="text-muted-foreground mt-1.5">
                  Jobs you've bookmarked for later review.
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate({ to: "/employee/jobs" })}
                data-ocid="saved_jobs.find_more.button"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-smooth hover:opacity-90 shadow-glow-accent shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                  color: "white",
                }}
              >
                <Search className="h-4 w-4" />
                Find More Jobs
              </button>
            </div>
          </div>

          <div className="p-6 max-w-5xl mx-auto">
            {savedJobs.length === 0 ? (
              <EmptyState
                icon={Bookmark}
                title="No saved jobs"
                description="Browse jobs and save the ones you're interested in to review later."
                action={{
                  label: "Browse Jobs",
                  onClick: () => navigate({ to: "/employee/jobs" }),
                }}
                data-ocid="saved_jobs.empty_state"
              />
            ) : (
              <div
                className="grid sm:grid-cols-2 gap-4"
                data-ocid="saved_jobs.list"
              >
                {savedJobs.map((job, i) => {
                  const days = Math.ceil(
                    (Number(job.applicationDeadline) / 1_000_000 - Date.now()) /
                      (1000 * 60 * 60 * 24),
                  );
                  const isUrgent = days <= 3;
                  return (
                    <div
                      key={job.jobId.toString()}
                      data-ocid={`saved_jobs.item.${i + 1}`}
                      className="group relative rounded-2xl transition-smooth overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.14 0.009 255 / 0.9) 0%, oklch(0.16 0.012 260 / 0.85) 100%)",
                        border: "1px solid oklch(0.28 0.015 260 / 0.45)",
                        backdropFilter: "blur(12px)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "oklch(0.5 0.16 280 / 0.5)";
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 8px 32px oklch(0 0 0 / 0.3), 0 0 0 1px oklch(0.5 0.16 280 / 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "oklch(0.28 0.015 260 / 0.45)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "";
                      }}
                    >
                      {/* Top gradient shimmer on hover */}
                      <div
                        className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-smooth"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, oklch(0.72 0.22 190), transparent)",
                        }}
                      />

                      <div className="p-5">
                        <div className="flex items-start gap-3">
                          {/* Company avatar */}
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-display font-bold text-base text-white shadow-card"
                            style={{
                              background: getCompanyColor(
                                job.companyName ?? "",
                              ),
                            }}
                          >
                            {(job.companyName ?? "C")[0]}
                          </div>

                          <div className="flex-1 min-w-0">
                            <button
                              type="button"
                              onClick={() =>
                                navigate({
                                  to: "/employee/jobs/$jobId",
                                  params: { jobId: job.jobId.toString() },
                                })
                              }
                              className="text-left block w-full"
                              data-ocid={`saved_jobs.view_job.${i + 1}`}
                            >
                              <h3 className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-smooth truncate">
                                {job.title}
                              </h3>
                              <p className="text-xs text-muted-foreground mt-0.5 truncate">
                                {job.companyName}
                              </p>
                            </button>

                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
                              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                <MapPin
                                  className="h-3 w-3"
                                  style={{
                                    color: "oklch(0.72 0.22 190 / 0.7)",
                                  }}
                                />
                                {job.location}
                              </span>
                              <span
                                className="text-xs font-semibold"
                                style={{ color: "oklch(0.72 0.22 190)" }}
                              >
                                {formatSalary(job.salaryMin, job.salaryMax)}
                              </span>
                              <span
                                className="text-xs px-1.5 py-0.5 rounded-md"
                                style={{
                                  background: "oklch(0.72 0.22 190 / 0.1)",
                                  color: "oklch(0.72 0.22 190)",
                                  border:
                                    "1px solid oklch(0.72 0.22 190 / 0.2)",
                                }}
                              >
                                {jobTypeLabel[job.jobType]}
                              </span>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-1 mt-2.5">
                              {job.skillsRequired.slice(0, 3).map((skill) => (
                                <SkillTag key={skill} skill={skill} />
                              ))}
                            </div>

                            {/* Deadline */}
                            <div className="flex items-center gap-1 mt-2.5">
                              <BookmarkCheck
                                className="h-3 w-3"
                                style={{
                                  color: isUrgent
                                    ? "oklch(0.72 0.18 28)"
                                    : "oklch(0.55 0.01 250)",
                                }}
                              />
                              <span
                                className="text-xs"
                                style={{
                                  color: isUrgent
                                    ? "oklch(0.72 0.18 28)"
                                    : "oklch(0.55 0.01 250)",
                                }}
                              >
                                {deadlineDays(job.applicationDeadline)}
                              </span>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2 mt-3.5">
                              <button
                                type="button"
                                onClick={() =>
                                  navigate({
                                    to: "/employee/jobs/$jobId",
                                    params: { jobId: job.jobId.toString() },
                                  })
                                }
                                data-ocid={`saved_jobs.apply_button.${i + 1}`}
                                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold transition-smooth hover:opacity-90 shadow-card"
                                style={{
                                  background:
                                    "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                                  color: "white",
                                }}
                              >
                                <Zap className="h-3 w-3" /> Apply Now
                              </button>
                              <button
                                type="button"
                                onClick={() => handleRemove(job.jobId)}
                                data-ocid={`saved_jobs.remove_button.${i + 1}`}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-smooth"
                                style={{
                                  color: "oklch(0.72 0.18 28 / 0.8)",
                                  background: "oklch(0.62 0.2 28 / 0.08)",
                                  border: "1px solid oklch(0.62 0.2 28 / 0.25)",
                                }}
                              >
                                <Trash2 className="h-3 w-3" /> Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
