import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import {
  BookmarkCheck,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  FileText,
  Search,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { ApplicationStatusBadge } from "../../components/ApplicationStatusBadge";
import { EmptyState } from "../../components/EmptyState";
import { JobCard } from "../../components/JobCard";
import { Layout } from "../../components/Layout";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import type {
  ApplicationStatus,
  JobApplication,
  JobListing,
} from "../../types";

const SAMPLE_APPLICATIONS: (JobApplication & {
  jobTitle: string;
  company: string;
})[] = [
  {
    applicationId: BigInt(1),
    jobId: BigInt(101),
    employeeId: {} as never,
    status: "shortlisted",
    appliedAt: BigInt((Date.now() - 2 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt((Date.now() - 1 * 24 * 3600 * 1000) * 1_000_000),
    jobTitle: "Senior React Developer",
    company: "TechNova Inc.",
  },
  {
    applicationId: BigInt(2),
    jobId: BigInt(102),
    employeeId: {} as never,
    status: "interview",
    appliedAt: BigInt((Date.now() - 5 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt((Date.now() - 2 * 24 * 3600 * 1000) * 1_000_000),
    jobTitle: "Full Stack Engineer",
    company: "CloudPeak Systems",
  },
  {
    applicationId: BigInt(3),
    jobId: BigInt(103),
    employeeId: {} as never,
    status: "applied",
    appliedAt: BigInt((Date.now() - 1 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt((Date.now() - 1 * 24 * 3600 * 1000) * 1_000_000),
    jobTitle: "Product Designer",
    company: "DesignCraft Studio",
  },
  {
    applicationId: BigInt(4),
    jobId: BigInt(104),
    employeeId: {} as never,
    status: "offer",
    appliedAt: BigInt((Date.now() - 10 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt((Date.now() - 7 * 24 * 3600 * 1000) * 1_000_000),
    jobTitle: "React Native Developer",
    company: "Appvance Technologies",
  },
];

const RECOMMENDED_JOBS: JobListing[] = [
  {
    jobId: BigInt(201),
    employerId: {} as never,
    title: "Frontend Engineer",
    description: "Build modern web apps with React and TypeScript.",
    location: "San Francisco, CA",
    salaryMin: BigInt(95000),
    salaryMax: BigInt(130000),
    experienceRequired: "3–5 yrs",
    jobType: "fullTime",
    skillsRequired: ["React", "TypeScript", "Tailwind CSS", "GraphQL"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 30 * 24 * 3600 * 1000) * 1_000_000,
    ),
    createdAt: BigInt((Date.now() - 2 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt(Date.now() * 1_000_000),
    companyName: "Meridian Software",
  },
  {
    jobId: BigInt(202),
    employerId: {} as never,
    title: "React Native Developer",
    description: "Create cross-platform mobile apps for iOS and Android.",
    location: "Remote",
    salaryMin: BigInt(85000),
    salaryMax: BigInt(115000),
    experienceRequired: "2–4 yrs",
    jobType: "fullTime",
    skillsRequired: ["React Native", "TypeScript", "Redux", "Jest"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 20 * 24 * 3600 * 1000) * 1_000_000,
    ),
    createdAt: BigInt((Date.now() - 1 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt(Date.now() * 1_000_000),
    companyName: "Appvance Technologies",
  },
  {
    jobId: BigInt(203),
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
];

const PROFILE_COMPLETION = 72;

function timeAgoShort(ns: bigint): string {
  const ms = Number(ns) / 1_000_000;
  const diff = Date.now() - ms;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days}d ago`;
}

const STATS = [
  {
    label: "Jobs Applied",
    value: "12",
    icon: FileText,
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.65 0.18 260))",
    glow: "oklch(0.55 0.18 280 / 0.3)",
    ocid: "dashboard.stat.applied",
  },
  {
    label: "Shortlisted",
    value: "4",
    icon: Star,
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.18 280), oklch(0.72 0.22 190))",
    glow: "oklch(0.65 0.18 280 / 0.3)",
    ocid: "dashboard.stat.shortlisted",
  },
  {
    label: "Interviews",
    value: "2",
    icon: Users,
    gradient:
      "linear-gradient(135deg, oklch(0.72 0.22 190), oklch(0.68 0.2 170))",
    glow: "oklch(0.72 0.22 190 / 0.3)",
    ocid: "dashboard.stat.interviews",
  },
  {
    label: "Saved Jobs",
    value: "7",
    icon: BookmarkCheck,
    gradient:
      "linear-gradient(135deg, oklch(0.62 0.16 310), oklch(0.55 0.18 280))",
    glow: "oklch(0.62 0.16 310 / 0.3)",
    ocid: "dashboard.stat.saved",
  },
];

const QUICK_ACTIONS = [
  {
    icon: Search,
    label: "Find Jobs",
    desc: "Browse 2,450+ openings",
    href: "/employee/jobs",
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.15), oklch(0.72 0.22 190 / 0.08))",
    border: "oklch(0.5 0.16 280 / 0.3)",
  },
  {
    icon: FileText,
    label: "My Applications",
    desc: "Track your progress",
    href: "/employee/applications",
    gradient:
      "linear-gradient(135deg, oklch(0.72 0.22 190 / 0.15), oklch(0.68 0.2 170 / 0.08))",
    border: "oklch(0.72 0.22 190 / 0.3)",
  },
  {
    icon: BookmarkCheck,
    label: "Saved Jobs",
    desc: "Revisit bookmarked roles",
    href: "/employee/saved",
    gradient:
      "linear-gradient(135deg, oklch(0.62 0.16 310 / 0.15), oklch(0.55 0.18 280 / 0.08))",
    border: "oklch(0.62 0.16 310 / 0.3)",
  },
  {
    icon: Users,
    label: "My Profile",
    desc: "Boost your visibility",
    href: "/employee/profile",
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.18 280 / 0.15), oklch(0.72 0.22 190 / 0.08))",
    border: "oklch(0.65 0.18 280 / 0.3)",
  },
];

export default function EmployeeDashboard() {
  const navigate = useNavigate();

  return (
    <ProtectedRoute requiredRole="employee">
      <Layout showSidebar sidebarRole="employee">
        <div className="min-h-full">
          {/* Hero Banner */}
          <div
            className="relative overflow-hidden px-6 pt-8 pb-10"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.14 0.02 270) 0%, oklch(0.12 0.015 255) 40%, oklch(0.10 0.01 250) 100%)",
            }}
          >
            {/* Background mesh */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 50%, oklch(0.5 0.16 280 / 0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, oklch(0.72 0.22 190 / 0.1) 0%, transparent 50%)",
              }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.72 0.22 190 / 0.5), transparent)",
              }}
            />

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "oklch(0.72 0.22 190 / 0.15)",
                      border: "1px solid oklch(0.72 0.22 190 / 0.3)",
                      color: "oklch(0.72 0.22 190)",
                    }}
                  >
                    <Sparkles className="h-3 w-3" />
                    <span>Premium Member</span>
                  </div>
                </div>
                <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight">
                  Welcome back,{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.85 0.08 280), oklch(0.72 0.22 190))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Alex!
                  </span>
                </h1>
                <p className="text-muted-foreground mt-2 text-base max-w-md">
                  You have{" "}
                  <span className="text-foreground font-semibold">
                    3 new matches
                  </span>{" "}
                  and 2 applications awaiting response.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => navigate({ to: "/employee/profile" })}
                  data-ocid="dashboard.complete_profile.hero_button"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-smooth hover:opacity-90"
                  style={{
                    background: "oklch(0.22 0.015 255)",
                    border: "1px solid oklch(0.32 0.015 260 / 0.5)",
                    color: "oklch(0.85 0.01 250)",
                  }}
                >
                  <TrendingUp
                    className="h-4 w-4"
                    style={{ color: "oklch(0.72 0.22 190)" }}
                  />
                  Profile {PROFILE_COMPLETION}%
                </button>
                <Button
                  onClick={() => navigate({ to: "/employee/jobs" })}
                  data-ocid="dashboard.find_jobs.button"
                  className="gap-2 font-semibold px-5 rounded-xl shadow-glow-accent transition-smooth hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                    color: "white",
                    border: "none",
                  }}
                >
                  <Zap className="h-4 w-4" />
                  Find Jobs
                </Button>
              </div>
            </div>

            {/* Stats row inside hero */}
            <div
              className="relative z-10 max-w-5xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 gap-3"
              data-ocid="dashboard.stats.section"
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  data-ocid={stat.ocid}
                  className="rounded-2xl p-4 flex items-center gap-3 transition-smooth hover:scale-[1.02]"
                  style={{
                    background: "oklch(0.16 0.012 260 / 0.7)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.4)",
                    boxShadow: `0 0 20px ${stat.glow}`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-card"
                    style={{ background: stat.gradient }}
                  >
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-2xl font-display font-bold text-foreground leading-none">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 max-w-5xl mx-auto space-y-8">
            {/* Quick Actions */}
            <section data-ocid="dashboard.quick_actions.section">
              <h2 className="font-display font-semibold text-base text-foreground mb-4 flex items-center gap-2">
                <div
                  className="w-1 h-5 rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, oklch(0.72 0.22 190), oklch(0.55 0.18 280))",
                  }}
                />
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action.label}
                    type="button"
                    onClick={() => navigate({ to: action.href as never })}
                    data-ocid={`dashboard.quick_action.${action.label.toLowerCase().replace(/\s+/g, "_")}`}
                    className="group flex flex-col items-start gap-2 p-4 rounded-2xl text-left transition-smooth hover:scale-[1.02]"
                    style={{
                      background: action.gradient,
                      border: `1px solid ${action.border}`,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <action.icon
                      className="h-5 w-5"
                      style={{ color: "oklch(0.72 0.22 190)" }}
                    />
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        {action.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {action.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Recent Applications */}
              <section
                className="md:col-span-2"
                data-ocid="dashboard.applications.section"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display font-semibold text-base text-foreground flex items-center gap-2">
                    <div
                      className="w-1 h-5 rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, oklch(0.72 0.22 190), oklch(0.55 0.18 280))",
                      }}
                    />
                    Recent Applications
                  </h2>
                  <button
                    type="button"
                    onClick={() => navigate({ to: "/employee/applications" })}
                    data-ocid="dashboard.view_all_applications.link"
                    className="text-xs flex items-center gap-0.5 transition-smooth hover:opacity-80"
                    style={{ color: "oklch(0.72 0.22 190)" }}
                  >
                    View all <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
                {SAMPLE_APPLICATIONS.length === 0 ? (
                  <EmptyState
                    icon={Briefcase}
                    title="No applications yet"
                    description="Start applying to jobs and track your progress here."
                    action={{
                      label: "Browse Jobs",
                      onClick: () => navigate({ to: "/employee/jobs" }),
                    }}
                  />
                ) : (
                  <div
                    className="space-y-2"
                    data-ocid="dashboard.applications.list"
                  >
                    {SAMPLE_APPLICATIONS.map((app, i) => (
                      <button
                        key={app.applicationId.toString()}
                        type="button"
                        data-ocid={`dashboard.application.item.${i + 1}`}
                        className="group flex items-center gap-3 p-3.5 rounded-xl w-full text-left transition-smooth hover:scale-[1.01]"
                        onClick={() =>
                          navigate({ to: "/employee/applications" })
                        }
                        aria-label={`${app.jobTitle} at ${app.company}`}
                        style={{
                          background: "oklch(0.15 0.009 255 / 0.8)",
                          border: "1px solid oklch(0.28 0.015 260 / 0.4)",
                          backdropFilter: "blur(8px)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor =
                            "oklch(0.5 0.16 280 / 0.4)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor =
                            "oklch(0.28 0.015 260 / 0.4)";
                        }}
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                          style={{
                            background:
                              "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.2), oklch(0.72 0.22 190 / 0.15))",
                            border: "1px solid oklch(0.5 0.16 280 / 0.25)",
                          }}
                        >
                          <Briefcase
                            className="h-4 w-4"
                            style={{ color: "oklch(0.72 0.22 190)" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">
                            {app.jobTitle}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {app.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-xs text-muted-foreground hidden sm:block">
                            {timeAgoShort(app.appliedAt)}
                          </span>
                          <ApplicationStatusBadge
                            status={app.status as ApplicationStatus}
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </section>

              {/* Profile Completion */}
              <section data-ocid="dashboard.profile_completion.section">
                <h2 className="font-display font-semibold text-base text-foreground mb-4 flex items-center gap-2">
                  <div
                    className="w-1 h-5 rounded-full"
                    style={{
                      background:
                        "linear-gradient(180deg, oklch(0.72 0.22 190), oklch(0.55 0.18 280))",
                    }}
                  />
                  Profile Strength
                </h2>
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "oklch(0.14 0.009 255 / 0.8)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.4)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Ring visualization */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative w-16 h-16 shrink-0">
                      <svg
                        className="w-16 h-16 -rotate-90"
                        viewBox="0 0 64 64"
                        role="img"
                        aria-label="Profile completion ring"
                      >
                        <title>Profile completion ring</title>
                        <circle
                          cx="32"
                          cy="32"
                          r="26"
                          fill="none"
                          stroke="oklch(0.25 0.012 255)"
                          strokeWidth="5"
                        />
                        <circle
                          cx="32"
                          cy="32"
                          r="26"
                          fill="none"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 26}`}
                          strokeDashoffset={`${2 * Math.PI * 26 * (1 - PROFILE_COMPLETION / 100)}`}
                          style={{
                            stroke: "oklch(0.72 0.22 190)",
                            filter:
                              "drop-shadow(0 0 6px oklch(0.72 0.22 190 / 0.6))",
                          }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold font-display text-foreground">
                          {PROFILE_COMPLETION}%
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        Good Progress
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Complete to attract employers
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2.5 text-sm">
                    {[
                      { label: "Basic info", done: true },
                      { label: "Professional summary", done: true },
                      { label: "Work experience", done: true },
                      { label: "Skills", done: false },
                      { label: "Resume upload", done: false },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2">
                        <CheckCircle2
                          className={`h-4 w-4 shrink-0 ${item.done ? "" : "opacity-30"}`}
                          style={{
                            color: item.done
                              ? "oklch(0.72 0.22 190)"
                              : undefined,
                          }}
                        />
                        <span
                          className={
                            item.done
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }
                        >
                          {item.label}
                        </span>
                        {item.done && (
                          <div
                            className="ml-auto w-1.5 h-1.5 rounded-full"
                            style={{ background: "oklch(0.72 0.22 190)" }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="w-full mt-4 py-2 rounded-xl text-sm font-semibold transition-smooth hover:opacity-90"
                    onClick={() => navigate({ to: "/employee/profile" })}
                    data-ocid="dashboard.complete_profile.button"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.25), oklch(0.72 0.22 190 / 0.2))",
                      border: "1px solid oklch(0.5 0.16 280 / 0.4)",
                      color: "oklch(0.85 0.06 280)",
                    }}
                  >
                    Complete Profile
                  </button>
                </div>
              </section>
            </div>

            {/* Recommended Jobs */}
            <section data-ocid="dashboard.recommended_jobs.section">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display font-semibold text-base text-foreground flex items-center gap-2">
                  <div
                    className="w-1 h-5 rounded-full"
                    style={{
                      background:
                        "linear-gradient(180deg, oklch(0.72 0.22 190), oklch(0.55 0.18 280))",
                    }}
                  />
                  Recommended for You
                </h2>
                <button
                  type="button"
                  onClick={() => navigate({ to: "/employee/jobs" })}
                  data-ocid="dashboard.browse_more_jobs.link"
                  className="text-xs flex items-center gap-0.5 transition-smooth hover:opacity-80"
                  style={{ color: "oklch(0.72 0.22 190)" }}
                >
                  Browse more <ChevronRight className="h-3 w-3" />
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {RECOMMENDED_JOBS.map((job, i) => (
                  <button
                    type="button"
                    key={job.jobId.toString()}
                    onClick={() =>
                      navigate({
                        to: "/employee/jobs/$jobId",
                        params: { jobId: job.jobId.toString() },
                      })
                    }
                    aria-label={`${job.title} at ${job.companyName}`}
                    className="text-left w-full"
                  >
                    <JobCard job={job} index={i} />
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
