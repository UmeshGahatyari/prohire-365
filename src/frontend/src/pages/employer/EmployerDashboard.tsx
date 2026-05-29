import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  ChevronRight,
  Plus,
  Search,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";
import { ApplicationStatusBadge } from "../../components/ApplicationStatusBadge";
import { Layout } from "../../components/Layout";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useEmployerJobs } from "../../hooks/useQueries";
import type { ApplicationStatus } from "../../types";

const MOCK_RECENT_APPLICATIONS: {
  applicantName: string;
  jobTitle: string;
  date: string;
  status: ApplicationStatus;
  initials: string;
  color: string;
}[] = [
  {
    applicantName: "Priya Sharma",
    jobTitle: "Senior Frontend Engineer",
    date: "Today",
    status: "applied",
    initials: "PS",
    color: "oklch(0.55 0.18 280)",
  },
  {
    applicantName: "Rohan Mehta",
    jobTitle: "Product Manager",
    date: "Yesterday",
    status: "shortlisted",
    initials: "RM",
    color: "oklch(0.72 0.22 190)",
  },
  {
    applicantName: "Anjali Patel",
    jobTitle: "UX Designer",
    date: "2 days ago",
    status: "interview",
    initials: "AP",
    color: "oklch(0.65 0.2 290)",
  },
  {
    applicantName: "Vikram Singh",
    jobTitle: "Backend Developer",
    date: "3 days ago",
    status: "offer",
    initials: "VS",
    color: "oklch(0.7 0.2 150)",
  },
  {
    applicantName: "Deepa Nair",
    jobTitle: "Senior Frontend Engineer",
    date: "4 days ago",
    status: "rejected",
    initials: "DN",
    color: "oklch(0.65 0.18 230)",
  },
];

const TOP_JOBS = [
  { title: "Senior Frontend Engineer", applicants: 23, trend: "+5" },
  { title: "Product Manager", applicants: 17, trend: "+3" },
  { title: "UX Designer", applicants: 14, trend: "+8" },
];

const QUICK_ACTIONS = [
  {
    icon: Plus,
    label: "Post New Job",
    desc: "Reach 2M+ candidates",
    to: "/employer/post-job",
    accent: true,
  },
  {
    icon: Search,
    label: "Find Candidates",
    desc: "Search talent pool",
    to: "/employer/candidates",
    accent: false,
  },
  {
    icon: Briefcase,
    label: "My Listings",
    desc: "View all job posts",
    to: "/employer/jobs",
    accent: false,
  },
  {
    icon: BarChart3,
    label: "Analytics",
    desc: "Track performance",
    to: "/employer/analytics",
    accent: false,
  },
];

function GlowStatCard({
  icon: Icon,
  label,
  value,
  delta,
  gradientFrom,
  gradientTo,
  glowColor,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  delta?: string;
  gradientFrom: string;
  gradientTo: string;
  glowColor: string;
}) {
  return (
    <div
      className="relative rounded-2xl p-px overflow-hidden transition-smooth hover:scale-[1.02] cursor-default"
      style={{
        background: `linear-gradient(135deg, ${gradientFrom}30, ${gradientTo}50)`,
      }}
    >
      <div
        className="rounded-2xl p-5 h-full"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.14 0.01 260) 0%, oklch(0.17 0.012 255) 100%)",
          backdropFilter: "blur(16px)",
        }}
      >
        {/* glow orb */}
        <div
          className="absolute top-3 right-3 w-20 h-20 rounded-full pointer-events-none opacity-20"
          style={{
            background: `radial-gradient(circle, ${gradientTo}, transparent 70%)`,
          }}
        />
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
            boxShadow: `0 4px 16px ${glowColor}`,
          }}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
        <p className="text-3xl font-display font-bold text-foreground tracking-tight">
          {value}
        </p>
        <p className="text-sm text-muted-foreground mt-0.5">{label}</p>
        {delta && (
          <span
            className="inline-flex items-center gap-1 mt-2 text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ background: `${gradientFrom}18`, color: gradientFrom }}
          >
            <TrendingUp className="h-3 w-3" /> {delta}
          </span>
        )}
      </div>
    </div>
  );
}

export default function EmployerDashboard() {
  const navigate = useNavigate();
  const { name } = useCurrentUser();
  const { data: jobs, isLoading: jobsLoading } = useEmployerJobs();
  const activeJobs = jobs?.filter((j) => j.status === "active") ?? [];

  return (
    <ProtectedRoute requiredRole="employer">
      <Layout showSidebar sidebarRole="employer">
        <div className="p-6 max-w-6xl mx-auto space-y-7">
          {/* ── Welcome Banner ── */}
          <div
            className="relative rounded-2xl overflow-hidden p-8"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.16 0.05 280) 0%, oklch(0.13 0.03 260) 40%, oklch(0.15 0.04 200) 100%)",
              border: "1px solid oklch(0.5 0.16 280 / 0.3)",
            }}
          >
            {/* Mesh glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.55 0.18 280 / 0.4), transparent 70%)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-25"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.72 0.22 190 / 0.5), transparent 70%)",
                }}
              />
            </div>

            <div className="relative z-10 flex items-start justify-between gap-6 flex-wrap">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "oklch(0.72 0.22 190 / 0.15)",
                      color: "oklch(0.72 0.22 190)",
                      border: "1px solid oklch(0.72 0.22 190 / 0.3)",
                    }}
                  >
                    <Zap className="h-3 w-3" /> Employer Dashboard
                  </span>
                </div>
                <h1
                  className="text-3xl font-display font-bold mb-1"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.95 0.01 250) 0%, oklch(0.72 0.22 190) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Welcome back, {name ?? "Employer"} 👋
                </h1>
                <p className="text-muted-foreground text-sm">
                  Your hiring activity at a glance — let's find the perfect
                  team.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <Button
                  onClick={() =>
                    navigate({ to: "/employer/post-job" as never })
                  }
                  data-ocid="employer_dashboard.post_job.primary_button"
                  className="rounded-xl font-semibold shadow-lg transition-smooth"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                    color: "white",
                    border: "none",
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" /> Post a Job
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    navigate({ to: "/employer/candidates" as never })
                  }
                  data-ocid="employer_dashboard.find_candidates.button"
                  className="rounded-xl border-border/50 hover:bg-primary/10 hover:border-primary/40"
                >
                  <Search className="h-4 w-4 mr-2" /> Find Candidates
                </Button>
              </div>
            </div>
          </div>

          {/* ── Stat Cards ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {jobsLoading ? (
              (["a", "b", "c", "d"] as const).map((k) => (
                <div
                  key={k}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "oklch(0.14 0.01 260)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.4)",
                  }}
                >
                  <div className="p-5 space-y-3">
                    <Skeleton className="h-11 w-11 rounded-xl" />
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              ))
            ) : (
              <>
                <GlowStatCard
                  icon={Briefcase}
                  label="Active Jobs"
                  value={activeJobs.length}
                  delta="+2 this week"
                  gradientFrom="oklch(0.55 0.18 280)"
                  gradientTo="oklch(0.5 0.16 290)"
                  glowColor="oklch(0.55 0.18 280 / 0.4)"
                />
                <GlowStatCard
                  icon={Users}
                  label="Total Applications"
                  value={47}
                  delta="+8 today"
                  gradientFrom="oklch(0.72 0.22 190)"
                  gradientTo="oklch(0.68 0.2 200)"
                  glowColor="oklch(0.72 0.22 190 / 0.4)"
                />
                <GlowStatCard
                  icon={UserCheck}
                  label="Shortlisted"
                  value={12}
                  gradientFrom="oklch(0.7 0.2 150)"
                  gradientTo="oklch(0.65 0.18 155)"
                  glowColor="oklch(0.7 0.2 150 / 0.4)"
                />
                <GlowStatCard
                  icon={TrendingUp}
                  label="Recent Hires"
                  value={3}
                  delta="This month"
                  gradientFrom="oklch(0.75 0.16 65)"
                  gradientTo="oklch(0.7 0.14 70)"
                  glowColor="oklch(0.75 0.16 65 / 0.4)"
                />
              </>
            )}
          </div>

          {/* ── Main 3-col grid ── */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Applications */}
            <div
              className="lg:col-span-2 rounded-2xl overflow-hidden"
              style={{
                background: "oklch(0.13 0.008 260)",
                border: "1px solid oklch(0.28 0.015 260 / 0.5)",
              }}
            >
              <div
                className="flex items-center justify-between px-6 pt-5 pb-4"
                style={{
                  borderBottom: "1px solid oklch(0.28 0.015 260 / 0.4)",
                }}
              >
                <div>
                  <h2 className="font-display font-semibold text-foreground">
                    Recent Applications
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Latest candidates who applied
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => navigate({ to: "/employer/jobs" as never })}
                  data-ocid="employer_dashboard.view_all_apps.link"
                  className="flex items-center gap-1 text-xs font-medium transition-smooth"
                  style={{ color: "oklch(0.72 0.22 190)" }}
                >
                  View all <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
              <div
                className="px-6 divide-y"
                style={{ borderColor: "oklch(0.28 0.015 260 / 0.3)" }}
              >
                {MOCK_RECENT_APPLICATIONS.map((app, idx) => (
                  <div
                    key={app.applicantName}
                    className="flex items-center justify-between py-3.5 group"
                    data-ocid={`employer_dashboard.recent_app.item.${idx + 1}`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold text-white shadow-md"
                        style={{
                          background: `linear-gradient(135deg, ${app.color}, ${app.color.replace("0.55", "0.72").replace("0.65", "0.8")})`,
                        }}
                      >
                        {app.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground truncate group-hover:text-accent transition-colors">
                          {app.applicantName}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {app.jobTitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs text-muted-foreground hidden sm:block">
                        {app.date}
                      </span>
                      <ApplicationStatusBadge status={app.status} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-5">
              {/* Quick Actions */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "oklch(0.13 0.008 260)",
                  border: "1px solid oklch(0.28 0.015 260 / 0.5)",
                }}
              >
                <div
                  className="px-5 pt-4 pb-3"
                  style={{
                    borderBottom: "1px solid oklch(0.28 0.015 260 / 0.4)",
                  }}
                >
                  <h2 className="font-display font-semibold text-foreground">
                    Quick Actions
                  </h2>
                </div>
                <div className="p-3 space-y-1.5">
                  {QUICK_ACTIONS.map((action) => (
                    <button
                      key={action.label}
                      type="button"
                      onClick={() => navigate({ to: action.to as never })}
                      data-ocid={`employer_dashboard.quick_${action.label.toLowerCase().replace(/\s+/g, "_")}.button`}
                      className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-smooth group text-left"
                      style={
                        action.accent
                          ? {
                              background:
                                "linear-gradient(135deg, oklch(0.72 0.22 190 / 0.12), oklch(0.55 0.18 280 / 0.08))",
                              border: "1px solid oklch(0.72 0.22 190 / 0.25)",
                            }
                          : {}
                      }
                      onMouseEnter={(e) => {
                        if (!action.accent)
                          (
                            e.currentTarget as HTMLButtonElement
                          ).style.background = "oklch(0.5 0.16 280 / 0.08)";
                      }}
                      onMouseLeave={(e) => {
                        if (!action.accent)
                          (
                            e.currentTarget as HTMLButtonElement
                          ).style.background = "";
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={
                          action.accent
                            ? {
                                background:
                                  "linear-gradient(135deg, oklch(0.72 0.22 190), oklch(0.55 0.18 280))",
                              }
                            : { background: "oklch(0.5 0.16 280 / 0.15)" }
                        }
                      >
                        <action.icon
                          className="h-4 w-4"
                          style={{
                            color: action.accent
                              ? "white"
                              : "oklch(0.72 0.22 190)",
                          }}
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {action.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {action.desc}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-smooth" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Top Performing Jobs */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "oklch(0.13 0.008 260)",
                  border: "1px solid oklch(0.28 0.015 260 / 0.5)",
                }}
              >
                <div
                  className="px-5 pt-4 pb-3"
                  style={{
                    borderBottom: "1px solid oklch(0.28 0.015 260 / 0.4)",
                  }}
                >
                  <h2 className="font-display font-semibold text-foreground">
                    Top Listings
                  </h2>
                </div>
                <div className="p-4 space-y-3">
                  {jobsLoading
                    ? (["a", "b", "c"] as const).map((k) => (
                        <Skeleton key={k} className="h-12 w-full rounded-xl" />
                      ))
                    : activeJobs.length === 0
                      ? TOP_JOBS.map((job, i) => (
                          <div
                            key={job.title}
                            className="flex items-center gap-3 p-3 rounded-xl"
                            style={{ background: "oklch(0.17 0.01 260)" }}
                          >
                            <span
                              className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                              style={{
                                background:
                                  "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                              }}
                            >
                              {i + 1}
                            </span>
                            <span className="text-sm text-foreground font-medium truncate flex-1">
                              {job.title}
                            </span>
                            <span
                              className="text-xs font-semibold shrink-0"
                              style={{ color: "oklch(0.72 0.22 190)" }}
                            >
                              {job.applicants}
                            </span>
                            <Badge
                              variant="secondary"
                              className="text-[10px] shrink-0 px-1.5"
                              style={{
                                color: "oklch(0.7 0.2 150)",
                                background: "oklch(0.7 0.2 150 / 0.1)",
                                border: "1px solid oklch(0.7 0.2 150 / 0.3)",
                              }}
                            >
                              {job.trend}
                            </Badge>
                          </div>
                        ))
                      : activeJobs.slice(0, 4).map((job, i) => (
                          <div
                            key={String(job.jobId)}
                            className="flex items-center gap-3 p-3 rounded-xl"
                            style={{ background: "oklch(0.17 0.01 260)" }}
                          >
                            <span
                              className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                              style={{
                                background:
                                  "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                              }}
                            >
                              {i + 1}
                            </span>
                            <span className="text-sm text-foreground font-medium truncate flex-1">
                              {job.title}
                            </span>
                            <Badge
                              variant="secondary"
                              className="text-xs shrink-0"
                            >
                              Active
                            </Badge>
                          </div>
                        ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
