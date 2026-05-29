import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Activity,
  Briefcase,
  Building2,
  TrendingDown,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Layout } from "../../components/Layout";
import { PageHeader } from "../../components/PageHeader";
import { ProtectedRoute } from "../../components/ProtectedRoute";

const statCards = [
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
    label: "Employees",
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
    label: "Active Jobs",
    value: "1,236",
    change: "+3%",
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
];

const usersByRole = [
  { role: "Employees", count: 5033 },
  { role: "Employers", count: 251 },
  { role: "Admins", count: 8 },
];

const signupsOverTime = [
  { date: "Mar 23", signups: 41 },
  { date: "Mar 25", signups: 55 },
  { date: "Mar 27", signups: 38 },
  { date: "Mar 29", signups: 62 },
  { date: "Mar 31", signups: 80 },
  { date: "Apr 2", signups: 49 },
  { date: "Apr 4", signups: 73 },
  { date: "Apr 6", signups: 91 },
  { date: "Apr 8", signups: 66 },
  { date: "Apr 10", signups: 105 },
  { date: "Apr 12", signups: 88 },
  { date: "Apr 14", signups: 117 },
  { date: "Apr 16", signups: 98 },
  { date: "Apr 18", signups: 134 },
  { date: "Apr 20", signups: 122 },
  { date: "Apr 22", signups: 148 },
];

const jobsByStatus = [
  { name: "Active", value: 1236 },
  { name: "Closed", value: 482 },
  { name: "Draft", value: 174 },
];

const applicationsSummary = [
  { company: "Nexus Technologies", posted: 12, applications: 287, hired: 4 },
  { company: "Luminary Tech", posted: 8, applications: 193, hired: 2 },
  { company: "DataSphere Inc.", posted: 15, applications: 412, hired: 7 },
  { company: "Horizon Ventures", posted: 6, applications: 154, hired: 3 },
  { company: "CloudScale", posted: 9, applications: 231, hired: 5 },
  { company: "Orbit Analytics", posted: 4, applications: 88, hired: 1 },
];

const PIE_COLORS = [
  "oklch(0.65 0.22 190)",
  "oklch(0.5 0.16 280)",
  "oklch(0.52 0.18 45)",
];

const tooltipStyle = {
  background: "oklch(0.16 0.01 258)",
  border: "1px solid oklch(0.28 0.015 260 / 0.6)",
  borderRadius: 10,
  fontSize: 12,
  color: "oklch(0.9 0.01 260)",
};

const glassPanelStyle = {
  background: "oklch(0.14 0.009 255 / 0.8)",
  border: "1px solid oklch(0.28 0.015 260 / 0.35)",
  backdropFilter: "blur(10px)",
};

export default function AdminAnalyticsPage() {
  return (
    <ProtectedRoute requiredRole="admin">
      <Layout showSidebar sidebarRole="admin">
        <div className="p-6 max-w-6xl mx-auto space-y-8">
          <PageHeader
            title="Platform Analytics"
            description="Deep insights into users, jobs, and application activity"
            icon={Activity}
            actions={
              <Badge className="bg-chart-4/10 text-chart-4 border border-chart-4/20 text-xs gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chart-4 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-chart-4" />
                </span>
                Last 30 days
              </Badge>
            }
          />

          {/* Gradient Stat Tiles */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4"
            data-ocid="analytics_stats.section"
          >
            {statCards.map((stat, i) => (
              <div
                key={stat.label}
                data-ocid={`analytics_stat.item.${i + 1}`}
                className="relative rounded-2xl p-4 overflow-hidden"
                style={{
                  background: stat.gradient,
                  boxShadow: `0 4px 24px ${stat.glow}, 0 2px 8px rgba(0,0,0,0.3)`,
                  border: `1px solid ${stat.glow}`,
                }}
              >
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

          {/* Charts row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Users by Role */}
            <div
              className="rounded-2xl overflow-hidden"
              style={glassPanelStyle}
              data-ocid="analytics_users_bar.section"
            >
              <div className="px-5 py-4">
                <h2 className="font-display font-semibold text-sm text-foreground">
                  Users by Role
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Distribution across platform roles
                </p>
              </div>
              <Separator
                style={{ background: "oklch(0.28 0.015 260 / 0.3)" }}
              />
              <div className="p-5">
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart
                    data={usersByRole}
                    margin={{ top: 0, right: 10, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="oklch(0.28 0.015 260 / 0.3)"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="role"
                      tick={{ fontSize: 11, fill: "oklch(0.6 0.015 260)" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 11, fill: "oklch(0.6 0.015 260)" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={tooltipStyle}
                      cursor={{ fill: "oklch(0.5 0.16 280 / 0.1)" }}
                    />
                    <Bar dataKey="count" radius={[6, 6, 0, 0]} name="Users">
                      {usersByRole.map((entry, idx) => (
                        <Cell
                          key={entry.role}
                          fill={
                            [
                              "oklch(0.5 0.16 280)",
                              "oklch(0.65 0.22 190)",
                              "oklch(0.52 0.18 45)",
                            ][idx % 3]
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Signups over time */}
            <div
              className="rounded-2xl overflow-hidden lg:col-span-2"
              style={glassPanelStyle}
              data-ocid="analytics_signups_line.section"
            >
              <div className="px-5 py-4">
                <h2 className="font-display font-semibold text-sm text-foreground">
                  New Signups (30 days)
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Daily new user registrations
                </p>
              </div>
              <Separator
                style={{ background: "oklch(0.28 0.015 260 / 0.3)" }}
              />
              <div className="p-5">
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart
                    data={signupsOverTime}
                    margin={{ top: 0, right: 10, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="signupGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="oklch(0.65 0.22 190)"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="oklch(0.65 0.22 190)"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="oklch(0.28 0.015 260 / 0.3)"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 10, fill: "oklch(0.6 0.015 260)" }}
                      axisLine={false}
                      tickLine={false}
                      interval={2}
                    />
                    <YAxis
                      tick={{ fontSize: 11, fill: "oklch(0.6 0.015 260)" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Line
                      type="monotone"
                      dataKey="signups"
                      stroke="oklch(0.65 0.22 190)"
                      strokeWidth={2.5}
                      dot={false}
                      name="New Signups"
                      activeDot={{ r: 5, fill: "oklch(0.72 0.22 190)" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Charts row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Jobs by Status Pie */}
            <div
              className="rounded-2xl overflow-hidden"
              style={glassPanelStyle}
              data-ocid="analytics_jobs_pie.section"
            >
              <div className="px-5 py-4">
                <h2 className="font-display font-semibold text-sm text-foreground">
                  Jobs by Status
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Current job listing breakdown
                </p>
              </div>
              <Separator
                style={{ background: "oklch(0.28 0.015 260 / 0.3)" }}
              />
              <div className="p-5 flex flex-col items-center">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={jobsByStatus}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={85}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {jobsByStatus.map((entry, idx) => (
                        <Cell
                          key={entry.name}
                          fill={PIE_COLORS[idx % PIE_COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={tooltipStyle} />
                    <Legend
                      iconType="circle"
                      iconSize={8}
                      formatter={(v) => (
                        <span
                          style={{
                            fontSize: 11,
                            color: "oklch(0.65 0.015 260)",
                          }}
                        >
                          {v}
                        </span>
                      )}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Applications Summary Table */}
            <div
              className="rounded-2xl overflow-hidden lg:col-span-2"
              style={glassPanelStyle}
              data-ocid="analytics_applications.section"
            >
              <div className="px-5 py-4">
                <h2 className="font-display font-semibold text-sm text-foreground">
                  Applications by Employer
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Top employer activity summary
                </p>
              </div>
              <Separator
                style={{ background: "oklch(0.28 0.015 260 / 0.3)" }}
              />
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr
                      style={{
                        background: "oklch(0.1 0.008 255 / 0.5)",
                        borderBottom: "1px solid oklch(0.28 0.015 260 / 0.25)",
                      }}
                    >
                      {["Company", "Jobs", "Applications", "Hired"].map(
                        (h, idx) => (
                          <th
                            key={h}
                            className={`px-4 py-3 font-semibold text-xs uppercase tracking-wider ${idx === 0 ? "text-left" : "text-right"}`}
                            style={{ color: "oklch(0.6 0.015 260)" }}
                          >
                            {h}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {applicationsSummary.map((row, i) => (
                      <tr
                        key={row.company}
                        className="hover:bg-primary/5 transition-smooth"
                        style={{
                          borderBottom: "1px solid oklch(0.28 0.015 260 / 0.2)",
                        }}
                        data-ocid={`analytics_applications.item.${i + 1}`}
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                              style={{
                                background:
                                  "linear-gradient(135deg, oklch(0.5 0.16 280 / 0.2), oklch(0.65 0.22 190 / 0.15))",
                                border: "1px solid oklch(0.5 0.16 280 / 0.25)",
                              }}
                            >
                              <Building2
                                className="h-3 w-3"
                                style={{ color: "oklch(0.72 0.14 280)" }}
                              />
                            </div>
                            <span className="font-medium text-foreground truncate">
                              {row.company}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-right font-mono text-muted-foreground">
                          {row.posted}
                        </td>
                        <td className="px-4 py-3 text-right font-mono text-foreground font-semibold">
                          {row.applications}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span
                            className="inline-flex items-center gap-1 font-semibold font-mono text-xs px-2 py-0.5 rounded-full"
                            style={{
                              background: "oklch(0.55 0.18 155 / 0.12)",
                              color: "oklch(0.72 0.2 155)",
                            }}
                          >
                            {row.hired}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
