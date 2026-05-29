import { u as useNavigate, j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
import { B as Badge } from "./badge-DE0nWNx8.js";
import { L as Layout, t as Settings, B as Button } from "./Layout-JeuDnHZC.js";
import { S as Separator } from "./separator-CEt-SyGN.js";
import { P as PageHeader } from "./PageHeader-CuM3Df3J.js";
import { P as ProtectedRoute } from "./ProtectedRoute-BSLymTUa.js";
import { S as Shield } from "./useCurrentUser-BEN-7rG2.js";
import { U as Users } from "./users-C2-7Zdip.js";
import { B as Building2 } from "./sparkles-mukiyukd.js";
import { U as UserCheck } from "./user-check-DanfjS_n.js";
import { c as createLucideIcon, B as Briefcase } from "./useAuth-OLjIzFBE.js";
import { A as Activity, T as TrendingDown } from "./trending-down-DJS3V5bw.js";
import { C as CircleCheckBig } from "./circle-check-big-4iKIR8FP.js";
import { T as TrendingUp } from "./trending-up-dHM4qZ7e.js";
import { C as ChartColumn } from "./chart-column-CyZAjV3b.js";
import "./index-DiKJEy-t.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
const platformStats = [
  {
    label: "Total Users",
    value: "5,284",
    change: "+12%",
    trend: "up",
    icon: Users,
    gradient: "linear-gradient(135deg, oklch(0.48 0.18 280) 0%, oklch(0.38 0.15 290) 100%)",
    glow: "oklch(0.5 0.16 280 / 0.3)",
    iconColor: "oklch(0.85 0.08 280)"
  },
  {
    label: "Employers",
    value: "251",
    change: "+8%",
    trend: "up",
    icon: Building2,
    gradient: "linear-gradient(135deg, oklch(0.42 0.16 220) 0%, oklch(0.35 0.14 230) 100%)",
    glow: "oklch(0.42 0.16 220 / 0.3)",
    iconColor: "oklch(0.82 0.1 220)"
  },
  {
    label: "Active Employees",
    value: "5,033",
    change: "+12%",
    trend: "up",
    icon: UserCheck,
    gradient: "linear-gradient(135deg, oklch(0.55 0.18 160) 0%, oklch(0.45 0.15 165) 100%)",
    glow: "oklch(0.55 0.18 160 / 0.3)",
    iconColor: "oklch(0.88 0.12 155)"
  },
  {
    label: "Total Jobs",
    value: "1,892",
    change: "+5%",
    trend: "up",
    icon: Briefcase,
    gradient: "linear-gradient(135deg, oklch(0.65 0.22 190) 0%, oklch(0.55 0.2 200) 100%)",
    glow: "oklch(0.65 0.22 190 / 0.3)",
    iconColor: "oklch(0.92 0.1 190)"
  },
  {
    label: "Applications",
    value: "18,502",
    change: "-2%",
    trend: "down",
    icon: Activity,
    gradient: "linear-gradient(135deg, oklch(0.48 0.15 310) 0%, oklch(0.4 0.14 315) 100%)",
    glow: "oklch(0.48 0.15 310 / 0.3)",
    iconColor: "oklch(0.84 0.08 310)"
  },
  {
    label: "Active Jobs",
    value: "1,236",
    change: "+3%",
    trend: "up",
    icon: CircleCheckBig,
    gradient: "linear-gradient(135deg, oklch(0.52 0.18 45) 0%, oklch(0.44 0.16 50) 100%)",
    glow: "oklch(0.52 0.18 45 / 0.3)",
    iconColor: "oklch(0.88 0.1 45)"
  }
];
const recentUsers = [
  {
    id: 1,
    name: "Jordan Mitchell",
    role: "employee",
    status: "active",
    joined: "Today",
    initials: "JM"
  },
  {
    id: 2,
    name: "Luminary Tech",
    role: "employer",
    status: "active",
    joined: "Yesterday",
    initials: "LT"
  },
  {
    id: 3,
    name: "Alex Chen",
    role: "employee",
    status: "active",
    joined: "2 days ago",
    initials: "AC"
  },
  {
    id: 4,
    name: "Orbit Analytics",
    role: "employer",
    status: "pending",
    joined: "3 days ago",
    initials: "OA"
  },
  {
    id: 5,
    name: "Morgan Rivera",
    role: "employee",
    status: "inactive",
    joined: "4 days ago",
    initials: "MR"
  }
];
const recentJobs = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Nexus Technologies",
    status: "active",
    applicants: 24
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Horizon Ventures",
    status: "active",
    applicants: 17
  },
  {
    id: 3,
    title: "Data Engineer",
    company: "DataSphere Inc.",
    status: "closed",
    applicants: 32
  },
  {
    id: 4,
    title: "DevOps Lead",
    company: "CloudScale",
    status: "draft",
    applicants: 0
  }
];
const quickActions = [
  {
    label: "Manage Users",
    description: "View and manage all platform users",
    icon: Users,
    href: "/admin/users",
    gradient: "linear-gradient(135deg, oklch(0.5 0.16 280 / 0.2) 0%, oklch(0.42 0.14 290 / 0.1) 100%)",
    border: "oklch(0.5 0.16 280 / 0.35)",
    iconBg: "oklch(0.5 0.16 280 / 0.25)",
    iconColor: "oklch(0.78 0.14 280)"
  },
  {
    label: "Job Moderation",
    description: "Review and approve job listings",
    icon: Briefcase,
    href: "/admin/jobs",
    gradient: "linear-gradient(135deg, oklch(0.65 0.22 190 / 0.2) 0%, oklch(0.55 0.18 200 / 0.1) 100%)",
    border: "oklch(0.65 0.22 190 / 0.35)",
    iconBg: "oklch(0.65 0.22 190 / 0.2)",
    iconColor: "oklch(0.72 0.22 190)"
  },
  {
    label: "Analytics",
    description: "Deep-dive into platform metrics",
    icon: ChartColumn,
    href: "/admin/analytics",
    gradient: "linear-gradient(135deg, oklch(0.42 0.16 220 / 0.2) 0%, oklch(0.35 0.13 230 / 0.1) 100%)",
    border: "oklch(0.42 0.16 220 / 0.35)",
    iconBg: "oklch(0.42 0.16 220 / 0.25)",
    iconColor: "oklch(0.72 0.14 220)"
  },
  {
    label: "Settings",
    description: "Configure platform preferences",
    icon: Settings,
    href: "/admin/settings",
    gradient: "linear-gradient(135deg, oklch(0.48 0.15 310 / 0.2) 0%, oklch(0.4 0.13 315 / 0.1) 100%)",
    border: "oklch(0.48 0.15 310 / 0.35)",
    iconBg: "oklch(0.48 0.15 310 / 0.25)",
    iconColor: "oklch(0.76 0.12 310)"
  }
];
const roleChip = {
  employee: {
    label: "Employee",
    gradient: "oklch(0.5 0.16 280 / 0.15)",
    border: "oklch(0.5 0.16 280 / 0.3)",
    color: "oklch(0.78 0.14 280)"
  },
  employer: {
    label: "Employer",
    gradient: "oklch(0.65 0.22 190 / 0.15)",
    border: "oklch(0.65 0.22 190 / 0.3)",
    color: "oklch(0.72 0.22 190)"
  },
  admin: {
    label: "Admin",
    gradient: "oklch(0.52 0.18 45 / 0.15)",
    border: "oklch(0.52 0.18 45 / 0.3)",
    color: "oklch(0.82 0.15 45)"
  }
};
const statusDot = {
  active: "oklch(0.7 0.2 155)",
  pending: "oklch(0.75 0.18 65)",
  inactive: "oklch(0.5 0.01 260)",
  draft: "oklch(0.5 0.01 260)",
  closed: "oklch(0.62 0.2 28)"
};
const statusLabel = {
  active: "Active",
  pending: "Pending",
  inactive: "Inactive",
  draft: "Draft",
  closed: "Closed"
};
function AdminDashboard() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { requiredRole: "admin", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { showSidebar: true, sidebarRole: "admin", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-6xl mx-auto space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Admin Dashboard",
        description: "Platform overview and key metrics",
        icon: Shield,
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-chart-4/10 text-chart-4 border border-chart-4/20 gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-chart-4 opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-chart-4" })
          ] }),
          "Live"
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4",
        "data-ocid": "admin_stats.section",
        children: platformStats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `admin_stat.item.${i + 1}`,
            className: "relative rounded-2xl p-4 overflow-hidden",
            style: {
              background: stat.gradient,
              boxShadow: `0 4px 24px ${stat.glow}, 0 2px 8px rgba(0,0,0,0.3)`,
              border: `1px solid ${stat.glow}`
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-0 left-0 right-0 h-px",
                  style: {
                    background: `linear-gradient(90deg, transparent, ${stat.iconColor}, transparent)`
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-lg flex items-center justify-center mb-3",
                  style: { background: "rgba(255,255,255,0.12)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    stat.icon,
                    {
                      className: "h-4 w-4",
                      style: { color: stat.iconColor }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-2xl text-white leading-none mb-1", children: stat.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs mb-2",
                  style: { color: "rgba(255,255,255,0.65)" },
                  children: stat.label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: `text-xs flex items-center gap-0.5 font-semibold ${stat.trend === "up" ? "text-white/90" : "text-red-300"}`,
                  children: [
                    stat.trend === "up" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-3 w-3" }),
                    stat.change
                  ]
                }
              )
            ]
          },
          stat.label
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-base text-foreground mb-4", children: "Quick Actions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-2 md:grid-cols-4 gap-4",
          "data-ocid": "quick_actions.section",
          children: quickActions.map((action, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => navigate({ to: action.href }),
              "data-ocid": `quick_action.item.${i + 1}`,
              className: "text-left p-5 rounded-2xl transition-smooth group hover:scale-[1.02] active:scale-[0.99]",
              style: {
                background: action.gradient,
                border: `1px solid ${action.border}`,
                backdropFilter: "blur(10px)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth",
                    style: {
                      background: action.iconBg,
                      border: `1px solid ${action.border}`
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      action.icon,
                      {
                        className: "h-5 w-5",
                        style: { color: action.iconColor }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm text-foreground mb-1", children: action.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: action.description })
              ]
            },
            action.label
          ))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-4 flex items-center gap-3",
        style: {
          background: "linear-gradient(135deg, oklch(0.55 0.18 55 / 0.15) 0%, oklch(0.52 0.2 40 / 0.1) 100%)",
          border: "1px solid oklch(0.55 0.18 55 / 0.3)"
        },
        "data-ocid": "admin.moderation_alert.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
              style: { background: "oklch(0.55 0.18 55 / 0.25)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TriangleAlert,
                {
                  className: "h-4 w-4",
                  style: { color: "oklch(0.82 0.16 55)" }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm font-semibold",
                style: { color: "oklch(0.88 0.1 55)" },
                children: "2 jobs pending moderation review"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "UX Designer by Luminary Tech and Backend Engineer by Orbit Analytics require approval." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              size: "sm",
              className: "shrink-0 text-xs h-8",
              style: {
                background: "oklch(0.55 0.18 55 / 0.3)",
                border: "1px solid oklch(0.55 0.18 55 / 0.4)",
                color: "oklch(0.88 0.1 55)"
              },
              onClick: () => navigate({ to: "/admin/jobs" }),
              "data-ocid": "admin.review_jobs.button",
              children: "Review Now"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl overflow-hidden",
          style: {
            background: "oklch(0.14 0.009 255 / 0.8)",
            border: "1px solid oklch(0.28 0.015 260 / 0.4)",
            backdropFilter: "blur(10px)"
          },
          "data-ocid": "recent_users.section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm text-foreground", children: "Recent Signups" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  className: "text-xs h-7 px-3",
                  style: { color: "oklch(0.72 0.22 190)" },
                  onClick: () => navigate({ to: "/admin/users" }),
                  "data-ocid": "recent_users.view_all.button",
                  children: "View all →"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Separator,
              {
                style: { background: "oklch(0.28 0.015 260 / 0.3)" }
              }
            ),
            recentUsers.map((user, i) => {
              var _a, _b, _c, _d;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": `user.item.${i + 1}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-5 py-3 hover:bg-primary/5 transition-smooth", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.5 0.16 280), oklch(0.65 0.22 190))",
                        color: "white"
                      },
                      children: user.initials
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: user.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                      "Joined ",
                      user.joined
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs px-2 py-0.5 rounded-full font-medium",
                        style: {
                          background: (_a = roleChip[user.role]) == null ? void 0 : _a.gradient,
                          border: `1px solid ${(_b = roleChip[user.role]) == null ? void 0 : _b.border}`,
                          color: (_c = roleChip[user.role]) == null ? void 0 : _c.color
                        },
                        children: (_d = roleChip[user.role]) == null ? void 0 : _d.label
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                        user.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "animate-ping absolute inline-flex h-full w-full rounded-full opacity-60",
                            style: { background: statusDot[user.status] }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "relative inline-flex rounded-full h-2 w-2",
                            style: { background: statusDot[user.status] }
                          }
                        )
                      ] }),
                      statusLabel[user.status]
                    ] })
                  ] })
                ] }),
                i < recentUsers.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Separator,
                  {
                    style: { background: "oklch(0.28 0.015 260 / 0.2)" }
                  }
                )
              ] }, user.id);
            })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl overflow-hidden",
          style: {
            background: "oklch(0.14 0.009 255 / 0.8)",
            border: "1px solid oklch(0.28 0.015 260 / 0.4)",
            backdropFilter: "blur(10px)"
          },
          "data-ocid": "recent_jobs.section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm text-foreground", children: "Active Listings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  className: "text-xs h-7 px-3",
                  style: { color: "oklch(0.72 0.22 190)" },
                  onClick: () => navigate({ to: "/admin/jobs" }),
                  "data-ocid": "recent_jobs.view_all.button",
                  children: "View all →"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Separator,
              {
                style: { background: "oklch(0.28 0.015 260 / 0.3)" }
              }
            ),
            recentJobs.map((job, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": `job.item.${i + 1}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-5 py-3 hover:bg-primary/5 transition-smooth", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.65 0.22 190 / 0.2), oklch(0.5 0.16 280 / 0.15))",
                      border: "1px solid oklch(0.65 0.22 190 / 0.25)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Briefcase,
                      {
                        className: "h-3.5 w-3.5",
                        style: { color: "oklch(0.72 0.22 190)" }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: job.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground truncate", children: [
                    job.company,
                    " · ",
                    job.applicants,
                    " applicants"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "inline-flex rounded-full h-2 w-2",
                        style: { background: statusDot[job.status] }
                      }
                    ),
                    statusLabel[job.status]
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      variant: "ghost",
                      size: "sm",
                      className: "h-7 text-xs px-2",
                      style: { color: "oklch(0.72 0.22 190)" },
                      "data-ocid": `job.manage_button.${i + 1}`,
                      onClick: () => navigate({ to: "/admin/jobs" }),
                      children: "Manage"
                    }
                  )
                ] })
              ] }),
              i < recentJobs.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Separator,
                {
                  style: { background: "oklch(0.28 0.015 260 / 0.2)" }
                }
              )
            ] }, job.id))
          ]
        }
      )
    ] })
  ] }) }) });
}
export {
  AdminDashboard as default
};
