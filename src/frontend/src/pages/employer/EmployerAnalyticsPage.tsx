import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  Briefcase,
  CheckCircle,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { ApplicationStatusBadge } from "../../components/ApplicationStatusBadge";
import { Layout } from "../../components/Layout";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import type { ApplicationStatus } from "../../types";

const STATUS_DIST: {
  status: ApplicationStatus;
  count: number;
  label: string;
}[] = [
  { status: "applied", count: 47, label: "Applied" },
  { status: "shortlisted", count: 18, label: "Shortlisted" },
  { status: "interview", count: 9, label: "Interview" },
  { status: "offer", count: 4, label: "Offer" },
  { status: "rejected", count: 16, label: "Rejected" },
];

const TREND_DATA = [
  { day: "Apr 1", count: 2 },
  { day: "Apr 3", count: 4 },
  { day: "Apr 5", count: 3 },
  { day: "Apr 7", count: 6 },
  { day: "Apr 9", count: 5 },
  { day: "Apr 11", count: 8 },
  { day: "Apr 13", count: 7 },
  { day: "Apr 15", count: 10 },
  { day: "Apr 17", count: 9 },
  { day: "Apr 19", count: 12 },
  { day: "Apr 21", count: 8 },
  { day: "Apr 22", count: 11 },
];

const RECENT_APPLICANTS = [
  {
    name: "Priya Sharma",
    job: "Senior Frontend Engineer",
    date: "Today",
    status: "shortlisted" as ApplicationStatus,
    color: "oklch(0.55 0.18 280)",
    initials: "PS",
  },
  {
    name: "Rohan Mehta",
    job: "Backend Developer",
    date: "Yesterday",
    status: "interview" as ApplicationStatus,
    color: "oklch(0.72 0.22 190)",
    initials: "RM",
  },
  {
    name: "Anjali Patel",
    job: "UX Designer",
    date: "2 days ago",
    status: "applied" as ApplicationStatus,
    color: "oklch(0.65 0.2 290)",
    initials: "AP",
  },
  {
    name: "Vikram Singh",
    job: "DevOps Engineer",
    date: "3 days ago",
    status: "offer" as ApplicationStatus,
    color: "oklch(0.7 0.2 150)",
    initials: "VS",
  },
  {
    name: "Deepa Nair",
    job: "Data Scientist",
    date: "4 days ago",
    status: "rejected" as ApplicationStatus,
    color: "oklch(0.65 0.18 230)",
    initials: "DN",
  },
];

const TOP_JOBS = [
  { title: "Senior Frontend Engineer", apps: 23, change: "+5 this week" },
  { title: "Product Manager", apps: 17, change: "+3 this week" },
  { title: "UX Designer", apps: 14, change: "+8 this week" },
  { title: "DevOps Engineer", apps: 11, change: "+2 this week" },
];

const maxTrend = Math.max(...TREND_DATA.map((d) => d.count));
const maxStatus = Math.max(...STATUS_DIST.map((d) => d.count));
const totalApps = STATUS_DIST.reduce((s, d) => s + d.count, 0);

const STATUS_GRAD: Record<ApplicationStatus, { from: string; to: string }> = {
  applied: { from: "oklch(0.55 0.18 280)", to: "oklch(0.72 0.22 190)" },
  shortlisted: { from: "oklch(0.65 0.18 230)", to: "oklch(0.72 0.22 190)" },
  interview: { from: "oklch(0.65 0.2 290)", to: "oklch(0.5 0.16 280)" },
  offer: { from: "oklch(0.7 0.2 150)", to: "oklch(0.65 0.18 155)" },
  rejected: { from: "oklch(0.62 0.2 28)", to: "oklch(0.55 0.18 30)" },
};

function GlowStatTile({
  icon: Icon,
  label,
  value,
  sub,
  gradFrom,
  gradTo,
  glow,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  sub?: string;
  gradFrom: string;
  gradTo: string;
  glow: string;
}) {
  return (
    <div
      className="relative rounded-2xl p-px overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${gradFrom}40, ${gradTo}30)`,
      }}
    >
      <div
        className="rounded-2xl p-5 h-full"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.14 0.01 260) 0%, oklch(0.17 0.012 255) 100%)",
        }}
      >
        {/* BG orb */}
        <div
          className="absolute top-2 right-2 w-20 h-20 rounded-full pointer-events-none opacity-15"
          style={{
            background: `radial-gradient(circle, ${gradTo}, transparent 70%)`,
          }}
        />
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})`,
            boxShadow: glow,
          }}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
        <p className="text-3xl font-display font-bold text-foreground tracking-tight">
          {value}
        </p>
        <p className="text-sm text-muted-foreground mt-0.5">{label}</p>
        {sub && (
          <span
            className="inline-flex items-center gap-1 mt-2 text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ background: `${gradFrom}15`, color: gradFrom }}
          >
            <Zap className="h-3 w-3" /> {sub}
          </span>
        )}
      </div>
    </div>
  );
}

export default function EmployerAnalyticsPage() {
  return (
    <ProtectedRoute requiredRole="employer">
      <Layout showSidebar sidebarRole="employer">
        <div className="p-6 max-w-5xl mx-auto space-y-7">
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
                  "radial-gradient(circle, oklch(0.72 0.22 190), transparent 70%)",
              }}
            />
            <div className="relative z-10 flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                }}
              >
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-foreground">
                  Recruitment Analytics
                </h1>
                <p className="text-sm text-muted-foreground">
                  Insights into your job listings and applicant pipeline
                </p>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            data-ocid="analytics.stats.section"
          >
            <GlowStatTile
              icon={Users}
              label="Total Applications"
              value={totalApps}
              sub="+11 this week"
              gradFrom="oklch(0.72 0.22 190)"
              gradTo="oklch(0.55 0.18 280)"
              glow="0 4px 16px oklch(0.72 0.22 190 / 0.3)"
            />
            <GlowStatTile
              icon={CheckCircle}
              label="Shortlisted"
              value={18}
              sub="38% rate"
              gradFrom="oklch(0.7 0.2 150)"
              gradTo="oklch(0.65 0.18 155)"
              glow="0 4px 16px oklch(0.7 0.2 150 / 0.3)"
            />
            <GlowStatTile
              icon={Briefcase}
              label="Active Jobs"
              value={5}
              sub="2 closing soon"
              gradFrom="oklch(0.55 0.18 280)"
              gradTo="oklch(0.5 0.16 290)"
              glow="0 4px 16px oklch(0.55 0.18 280 / 0.3)"
            />
            <GlowStatTile
              icon={TrendingUp}
              label="Offers Made"
              value={4}
              sub="This month"
              gradFrom="oklch(0.75 0.16 65)"
              gradTo="oklch(0.7 0.14 70)"
              glow="0 4px 16px oklch(0.75 0.16 65 / 0.3)"
            />
          </div>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Status Distribution */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "oklch(0.13 0.008 260)",
                border: "1px solid oklch(0.28 0.015 260 / 0.5)",
              }}
              data-ocid="analytics.status_chart.section"
            >
              <div
                className="px-6 pt-5 pb-4"
                style={{
                  borderBottom: "1px solid oklch(0.28 0.015 260 / 0.4)",
                }}
              >
                <h2 className="font-display font-semibold text-foreground">
                  Applications by Status
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Total: {totalApps} applications
                </p>
              </div>
              <div className="p-6 space-y-4">
                {STATUS_DIST.map((item) => {
                  const pct = (item.count / maxStatus) * 100;
                  const grad = STATUS_GRAD[item.status];
                  return (
                    <div key={item.status} className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <ApplicationStatusBadge status={item.status} />
                        <span className="text-sm font-bold text-foreground">
                          {item.count}
                        </span>
                      </div>
                      <div
                        className="w-full h-2 rounded-full overflow-hidden"
                        style={{ background: "oklch(0.17 0.01 260)" }}
                      >
                        <div
                          className="h-2 rounded-full transition-all duration-700"
                          style={{
                            width: `${pct}%`,
                            background: `linear-gradient(90deg, ${grad.from}, ${grad.to})`,
                            boxShadow: `0 0 8px ${grad.from}60`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Trend Chart */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "oklch(0.13 0.008 260)",
                border: "1px solid oklch(0.28 0.015 260 / 0.5)",
              }}
              data-ocid="analytics.trend_chart.section"
            >
              <div
                className="px-6 pt-5 pb-4"
                style={{
                  borderBottom: "1px solid oklch(0.28 0.015 260 / 0.4)",
                }}
              >
                <h2 className="font-display font-semibold text-foreground">
                  Applications — Last 30 Days
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Daily application volume
                </p>
              </div>
              <div className="p-6">
                <div className="relative h-[180px]">
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground pr-2 pointer-events-none">
                    {[maxTrend, Math.floor(maxTrend / 2), 0].map((v) => (
                      <span key={v}>{v}</span>
                    ))}
                  </div>
                  <div className="ml-7 h-full flex items-end gap-1.5">
                    {TREND_DATA.map((d, i) => (
                      <div
                        key={d.day}
                        className="flex-1 flex flex-col items-center gap-1 group"
                        title={`${d.day}: ${d.count}`}
                      >
                        <div className="w-full flex flex-col justify-end h-[152px]">
                          <div
                            className="w-full rounded-t-sm transition-all duration-500 relative overflow-hidden"
                            style={{
                              height: `${(d.count / maxTrend) * 100}%`,
                              background:
                                "linear-gradient(180deg, oklch(0.72 0.22 190) 0%, oklch(0.55 0.18 280) 100%)",
                              opacity: i === TREND_DATA.length - 1 ? 1 : 0.6,
                              boxShadow:
                                i === TREND_DATA.length - 1
                                  ? "0 0 12px oklch(0.72 0.22 190 / 0.5)"
                                  : "none",
                            }}
                            data-ocid={`analytics.bar.${d.day.replace(/\s+/, "_")}`}
                          />
                        </div>
                        <span className="text-[9px] text-muted-foreground hidden sm:block">
                          {d.day.split(" ")[1]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-muted-foreground">Apr 1</span>
                  <span className="text-xs text-muted-foreground">Apr 22</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Applicants */}
            <div
              className="lg:col-span-2 rounded-2xl overflow-hidden"
              style={{
                background: "oklch(0.13 0.008 260)",
                border: "1px solid oklch(0.28 0.015 260 / 0.5)",
              }}
              data-ocid="analytics.recent_applicants.section"
            >
              <div
                className="px-6 pt-5 pb-4"
                style={{
                  borderBottom: "1px solid oklch(0.28 0.015 260 / 0.4)",
                }}
              >
                <h2 className="font-display font-semibold text-foreground">
                  Recent Applicants
                </h2>
              </div>
              <div
                className="px-6 divide-y"
                style={{ borderColor: "oklch(0.28 0.015 260 / 0.3)" }}
              >
                {RECENT_APPLICANTS.map((app, idx) => (
                  <div
                    key={app.name}
                    className="flex items-center justify-between py-3.5"
                    data-ocid={`analytics.recent_applicant.item.${idx + 1}`}
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
                        <p className="text-sm font-semibold text-foreground truncate">
                          {app.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {app.job}
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

            {/* Top Jobs */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "oklch(0.13 0.008 260)",
                border: "1px solid oklch(0.28 0.015 260 / 0.5)",
              }}
              data-ocid="analytics.top_jobs.section"
            >
              <div
                className="px-5 pt-4 pb-3"
                style={{
                  borderBottom: "1px solid oklch(0.28 0.015 260 / 0.4)",
                }}
              >
                <h2 className="font-display font-semibold text-foreground">
                  Top Performing Jobs
                </h2>
              </div>
              <div className="p-4 space-y-3">
                {TOP_JOBS.map((job, i) => (
                  <div
                    key={job.title}
                    className="flex items-start gap-3 p-3 rounded-xl group"
                    style={{ background: "oklch(0.17 0.01 260)" }}
                    data-ocid={`analytics.top_job.item.${i + 1}`}
                  >
                    <span
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                      }}
                    >
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {job.title}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span
                          className="text-xs font-bold"
                          style={{ color: "oklch(0.72 0.22 190)" }}
                        >
                          {job.apps} apps
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {job.change}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conversion Funnel */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "oklch(0.13 0.008 260)",
              border: "1px solid oklch(0.28 0.015 260 / 0.5)",
            }}
            data-ocid="analytics.funnel.section"
          >
            <div
              className="px-6 pt-5 pb-4"
              style={{ borderBottom: "1px solid oklch(0.28 0.015 260 / 0.4)" }}
            >
              <h2 className="font-display font-semibold text-foreground">
                Hiring Funnel
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Conversion rates across stages
              </p>
            </div>
            <div className="p-6">
              <div className="flex items-end gap-3 justify-between">
                {[
                  {
                    label: "Applications",
                    value: 94,
                    color: "oklch(0.55 0.18 280)",
                  },
                  {
                    label: "Reviewed",
                    value: 72,
                    color: "oklch(0.65 0.2 290)",
                  },
                  {
                    label: "Shortlisted",
                    value: 38,
                    color: "oklch(0.72 0.22 190)",
                  },
                  {
                    label: "Interviewed",
                    value: 19,
                    color: "oklch(0.7 0.2 150)",
                  },
                  { label: "Offered", value: 8, color: "oklch(0.75 0.16 65)" },
                ].map((stage) => (
                  <div
                    key={stage.label}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    <span className="text-sm font-bold text-foreground">
                      {stage.value}
                    </span>
                    <div
                      className="w-full rounded-xl overflow-hidden"
                      style={{
                        height: `${stage.value + 20}px`,
                        background: "oklch(0.17 0.01 260)",
                      }}
                    >
                      <div
                        className="w-full h-full rounded-xl"
                        style={{
                          background: `linear-gradient(180deg, ${stage.color} 0%, ${stage.color.replace("0.", "0.4 0.")} 100%)`,
                          opacity: 0.85,
                        }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground text-center">
                      {stage.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
