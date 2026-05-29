import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle,
  Settings,
  Shield,
  TrendingDown,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { Layout } from "../../components/Layout";
import { PageHeader } from "../../components/PageHeader";
import { ProtectedRoute } from "../../components/ProtectedRoute";

const platformStats = [
  {
    label: "Total Users",
    value: "5,284",
    change: "+12%",
    trend: "up",
    icon: Users,
    gradient:
      "linear-gradient(135deg, oklch(0.48 0.18 280) 0%, oklch(0.38 0.15 290) 100%)",
    glow: "oklch(0.5 0.16 280 / 0.3)",
    iconColor: "oklch(0.85 0.08 280)",
  },
  {
    label: "Employers",
    value: "251",
    change: "+8%",
    trend: "up",
    icon: Building2,
    gradient:
      "linear-gradient(135deg, oklch(0.42 0.16 220) 0%, oklch(0.35 0.14 230) 100%)",
    glow: "oklch(0.42 0.16 220 / 0.3)",
    iconColor: "oklch(0.82 0.1 220)",
  },
  {
    label: "Active Employees",
    value: "5,033",
    change: "+12%",
    trend: "up",
    icon: UserCheck,
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.18 160) 0%, oklch(0.45 0.15 165) 100%)",
    glow: "oklch(0.55 0.18 160 / 0.3)",
    iconColor: "oklch(0.88 0.12 155)",
  },
  {
    label: "Total Jobs",
    value: "1,892",
    change: "+5%",
    trend: "up",
    icon: Briefcase,
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.22 190) 0%, oklch(0.55 0.2 200) 100%)",
    glow: "oklch(0.65 0.22 190 / 0.3)",
    iconColor: "oklch(0.92 0.1 190)",
  },
  {
    label: "Applications",
    value: "18,502",
    change: "-2%",
    trend: "down",
    icon: Activity,
    gradient:
      "linear-gradient(135deg, oklch(0.48 0.15 310) 0%, oklch(0.4 0.14 315) 100%)",
    glow: "oklch(0.48 0.15 310 / 0.3)",
    iconColor: "oklch(0.84 0.08 310)",
  },
  {
    label: "Active Jobs",
    value: "1,236",
    change: "+3%",
    trend: "up",
    icon: CheckCircle,
    gradient:
      "linear-gradient(135deg, oklch(0.52 0.18 45) 0%, oklch(0.44 0.16 50) 100%)",
    glow: "oklch(0.52 0.18 45 / 0.3)",
    iconColor: "oklch(0.88 0.1 45)",
  },
];

const recentUsers = [
  {
    id: 1,
    name: "Jordan Mitchell",
    role: "employee",
    status: "active",
    joined: "Today",
    initials: "JM",
  },
  {
    id: 2,
    name: "Luminary Tech",
    role: "employer",
    status: "active",
    joined: "Yesterday",
    initials: "LT",
  },
  {
    id: 3,
    name: "Alex Chen",
    role: "employee",
    status: "active",
    joined: "2 days ago",
    initials: "AC",
  },
  {
    id: 4,
    name: "Orbit Analytics",
    role: "employer",
    status: "pending",
    joined: "3 days ago",
    initials: "OA",
  },
  {
    id: 5,
    name: "Morgan Rivera",
    role: "employee",
    status: "inactive",
    joined: "4 days ago",
    initials: "MR",
  },
];

const recentJobs = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Nexus Technologies",
    status: "active",
    applicants: 24,
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Horizon Ventures",
    status: "active",
    applicants: 17,
  },
  {
    id: 3,
    title: "Data Engineer",
    company: "DataSphere Inc.",
    status: "closed",
    applicants: 32,
  },
  {
    id: 4,
    title: "DevOps Lead",
    company: "CloudScale",
    status: "draft",
    applicants: 0,
  },
];

const quickActions = [
  {
    label: "Manage Users",
    description: "View and manage all platform users",
    icon: Users,
    href: "/admin/users",
    gradient:
      "linear-gradient(135deg, oklch(0.5 0.16 280 / 0.2) 0%, oklch(0.42 0.14 290 / 0.1) 100%)",
    border: "oklch(0.5 0.16 280 / 0.35)",
    iconBg: "oklch(0.5 0.16 280 / 0.25)",
    iconColor: "oklch(0.78 0.14 280)",
  },
  {
    label: "Job Moderation",
    description: "Review and approve job listings",
    icon: Briefcase,
    href: "/admin/jobs",
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.22 190 / 0.2) 0%, oklch(0.55 0.18 200 / 0.1) 100%)",
    border: "oklch(0.65 0.22 190 / 0.35)",
    iconBg: "oklch(0.65 0.22 190 / 0.2)",
    iconColor: "oklch(0.72 0.22 190)",
  },
  {
    label: "Analytics",
    description: "Deep-dive into platform metrics",
    icon: BarChart3,
    href: "/admin/analytics",
    gradient:
      "linear-gradient(135deg, oklch(0.42 0.16 220 / 0.2) 0%, oklch(0.35 0.13 230 / 0.1) 100%)",
    border: "oklch(0.42 0.16 220 / 0.35)",
    iconBg: "oklch(0.42 0.16 220 / 0.25)",
    iconColor: "oklch(0.72 0.14 220)",
  },
  {
    label: "Settings",
    description: "Configure platform preferences",
    icon: Settings,
    href: "/admin/settings",
    gradient:
      "linear-gradient(135deg, oklch(0.48 0.15 310 / 0.2) 0%, oklch(0.4 0.13 315 / 0.1) 100%)",
    border: "oklch(0.48 0.15 310 / 0.35)",
    iconBg: "oklch(0.48 0.15 310 / 0.25)",
    iconColor: "oklch(0.76 0.12 310)",
  },
];

const roleChip: Record<
  string,
  { label: string; gradient: string; border: string; color: string }
> = {
  employee: {
    label: "Employee",
    gradient: "oklch(0.5 0.16 280 / 0.15)",
    border: "oklch(0.5 0.16 280 / 0.3)",
    color: "oklch(0.78 0.14 280)",
  },
  employer: {
    label: "Employer",
    gradient: "oklch(0.65 0.22 190 / 0.15)",
    border: "oklch(0.65 0.22 190 / 0.3)",
    color: "oklch(0.72 0.22 190)",
  },
  admin: {
    label: "Admin",
    gradient: "oklch(0.52 0.18 45 / 0.15)",
    border: "oklch(0.52 0.18 45 / 0.3)",
    color: "oklch(0.82 0.15 45)",
  },
};

const statusDot: Record<string, string> = {
  active: "oklch(0.7 0.2 155)",
  pending: "oklch(0.75 0.18 65)",
  inactive: "oklch(0.5 0.01 260)",
  draft: "oklch(0.5 0.01 260)",
  closed: "oklch(0.62 0.2 28)",
};

const statusLabel: Record<string, string> = {
  active: "Active",
  pending: "Pending",
  inactive: "Inactive",
  draft: "Draft",
  closed: "Closed",
};

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <ProtectedRoute requiredRole="admin">
      <Layout showSidebar sidebarRole="admin">
        <div className="p-6 max-w-6xl mx-auto space-y-8">
          <PageHeader
            title="Admin Dashboard"
            description="Platform overview and key metrics"
            icon={Shield}
            actions={
              <Badge className="bg-chart-4/10 text-chart-4 border border-chart-4/20 gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chart-4 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-chart-4" />
                </span>
                Live
              </Badge>
            }
          />

          {/* Gradient Stat Tiles */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4"
            data-ocid="admin_stats.section"
          >
            {platformStats.map((stat, i) => (
              <div
                key={stat.label}
                data-ocid={`admin_stat.item.${i + 1}`}
                className="relative rounded-2xl p-4 overflow-hidden"
                style={{
                  background: stat.gradient,
                  boxShadow: `0 4px 24px ${stat.glow}, 0 2px 8px rgba(0,0,0,0.3)`,
                  border: `1px solid ${stat.glow}`,
                }}
              >
                {/* Shimmer overlay */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${stat.iconColor}, transparent)`,
                  }}
                />
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                >
                  <stat.icon
                    className="h-4 w-4"
                    style={{ color: stat.iconColor }}
                  />
                </div>
                <p className="font-display font-bold text-2xl text-white leading-none mb-1">
                  {stat.value}
                </p>
                <p
                  className="text-xs mb-2"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {stat.label}
                </p>
                <span
                  className={`text-xs flex items-center gap-0.5 font-semibold ${stat.trend === "up" ? "text-white/90" : "text-red-300"}`}
                >
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {stat.change}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="font-display font-semibold text-base text-foreground mb-4">
              Quick Actions
            </h2>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              data-ocid="quick_actions.section"
            >
              {quickActions.map((action, i) => (
                <button
                  type="button"
                  key={action.label}
                  onClick={() => navigate({ to: action.href as never })}
                  data-ocid={`quick_action.item.${i + 1}`}
                  className="text-left p-5 rounded-2xl transition-smooth group hover:scale-[1.02] active:scale-[0.99]"
                  style={{
                    background: action.gradient,
                    border: `1px solid ${action.border}`,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth"
                    style={{
                      background: action.iconBg,
                      border: `1px solid ${action.border}`,
                    }}
                  >
                    <action.icon
                      className="h-5 w-5"
                      style={{ color: action.iconColor }}
                    />
                  </div>
                  <p className="font-display font-semibold text-sm text-foreground mb-1">
                    {action.label}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {action.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Moderation Alert */}
          <div
            className="rounded-2xl p-4 flex items-center gap-3"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.18 55 / 0.15) 0%, oklch(0.52 0.2 40 / 0.1) 100%)",
              border: "1px solid oklch(0.55 0.18 55 / 0.3)",
            }}
            data-ocid="admin.moderation_alert.section"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "oklch(0.55 0.18 55 / 0.25)" }}
            >
              <AlertTriangle
                className="h-4 w-4"
                style={{ color: "oklch(0.82 0.16 55)" }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-semibold"
                style={{ color: "oklch(0.88 0.1 55)" }}
              >
                2 jobs pending moderation review
              </p>
              <p className="text-xs text-muted-foreground">
                UX Designer by Luminary Tech and Backend Engineer by Orbit
                Analytics require approval.
              </p>
            </div>
            <Button
              type="button"
              size="sm"
              className="shrink-0 text-xs h-8"
              style={{
                background: "oklch(0.55 0.18 55 / 0.3)",
                border: "1px solid oklch(0.55 0.18 55 / 0.4)",
                color: "oklch(0.88 0.1 55)",
              }}
              onClick={() => navigate({ to: "/admin/jobs" as never })}
              data-ocid="admin.review_jobs.button"
            >
              Review Now
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Signups */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "oklch(0.14 0.009 255 / 0.8)",
                border: "1px solid oklch(0.28 0.015 260 / 0.4)",
                backdropFilter: "blur(10px)",
              }}
              data-ocid="recent_users.section"
            >
              <div className="px-5 py-4 flex items-center justify-between">
                <h2 className="font-display font-semibold text-sm text-foreground">
                  Recent Signups
                </h2>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-xs h-7 px-3"
                  style={{ color: "oklch(0.72 0.22 190)" }}
                  onClick={() => navigate({ to: "/admin/users" as never })}
                  data-ocid="recent_users.view_all.button"
                >
                  View all →
                </Button>
              </div>
              <Separator
                style={{ background: "oklch(0.28 0.015 260 / 0.3)" }}
              />
              {recentUsers.map((user, i) => (
                <div key={user.id} data-ocid={`user.item.${i + 1}`}>
                  <div className="flex items-center gap-3 px-5 py-3 hover:bg-primary/5 transition-smooth">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.5 0.16 280), oklch(0.65 0.22 190))",
                        color: "white",
                      }}
                    >
                      {user.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {user.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Joined {user.joined}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {/* Role chip */}
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{
                          background: roleChip[user.role]?.gradient,
                          border: `1px solid ${roleChip[user.role]?.border}`,
                          color: roleChip[user.role]?.color,
                        }}
                      >
                        {roleChip[user.role]?.label}
                      </span>
                      {/* Status dot */}
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <span className="relative flex h-2 w-2">
                          {user.status === "active" && (
                            <span
                              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                              style={{ background: statusDot[user.status] }}
                            />
                          )}
                          <span
                            className="relative inline-flex rounded-full h-2 w-2"
                            style={{ background: statusDot[user.status] }}
                          />
                        </span>
                        {statusLabel[user.status]}
                      </span>
                    </div>
                  </div>
                  {i < recentUsers.length - 1 && (
                    <Separator
                      style={{ background: "oklch(0.28 0.015 260 / 0.2)" }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Active Listings */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "oklch(0.14 0.009 255 / 0.8)",
                border: "1px solid oklch(0.28 0.015 260 / 0.4)",
                backdropFilter: "blur(10px)",
              }}
              data-ocid="recent_jobs.section"
            >
              <div className="px-5 py-4 flex items-center justify-between">
                <h2 className="font-display font-semibold text-sm text-foreground">
                  Active Listings
                </h2>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-xs h-7 px-3"
                  style={{ color: "oklch(0.72 0.22 190)" }}
                  onClick={() => navigate({ to: "/admin/jobs" as never })}
                  data-ocid="recent_jobs.view_all.button"
                >
                  View all →
                </Button>
              </div>
              <Separator
                style={{ background: "oklch(0.28 0.015 260 / 0.3)" }}
              />
              {recentJobs.map((job, i) => (
                <div key={job.id} data-ocid={`job.item.${i + 1}`}>
                  <div className="flex items-center gap-3 px-5 py-3 hover:bg-primary/5 transition-smooth">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.65 0.22 190 / 0.2), oklch(0.5 0.16 280 / 0.15))",
                        border: "1px solid oklch(0.65 0.22 190 / 0.25)",
                      }}
                    >
                      <Briefcase
                        className="h-3.5 w-3.5"
                        style={{ color: "oklch(0.72 0.22 190)" }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {job.title}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {job.company} · {job.applicants} applicants
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <span
                          className="inline-flex rounded-full h-2 w-2"
                          style={{ background: statusDot[job.status] }}
                        />
                        {statusLabel[job.status]}
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs px-2"
                        style={{ color: "oklch(0.72 0.22 190)" }}
                        data-ocid={`job.manage_button.${i + 1}`}
                        onClick={() => navigate({ to: "/admin/jobs" as never })}
                      >
                        Manage
                      </Button>
                    </div>
                  </div>
                  {i < recentJobs.length - 1 && (
                    <Separator
                      style={{ background: "oklch(0.28 0.015 260 / 0.2)" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
