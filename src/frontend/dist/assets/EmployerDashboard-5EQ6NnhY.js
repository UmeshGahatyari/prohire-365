import { u as useNavigate, j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
import { B as Badge } from "./badge-DE0nWNx8.js";
import { L as Layout, B as Button, S as Search } from "./Layout-JeuDnHZC.js";
import { S as Skeleton } from "./skeleton-Cbsmm-dn.js";
import { A as ApplicationStatusBadge } from "./ApplicationStatusBadge-CK2XtaKA.js";
import { P as ProtectedRoute } from "./ProtectedRoute-BSLymTUa.js";
import { u as useCurrentUser } from "./useCurrentUser-BEN-7rG2.js";
import { u as useEmployerJobs } from "./useQueries-DKzCSuiY.js";
import { Z as Zap } from "./zap-CK0f-2JC.js";
import { P as Plus } from "./plus-Dcf5H1xy.js";
import { B as Briefcase } from "./useAuth-OLjIzFBE.js";
import { U as Users } from "./users-C2-7Zdip.js";
import { U as UserCheck } from "./user-check-DanfjS_n.js";
import { T as TrendingUp } from "./trending-up-dHM4qZ7e.js";
import { C as ChevronRight } from "./chevron-right-uQ8Lupyx.js";
import { C as ChartColumn } from "./chart-column-CyZAjV3b.js";
import { A as ArrowRight } from "./arrow-right-Bx_bron2.js";
import "./sparkles-mukiyukd.js";
const MOCK_RECENT_APPLICATIONS = [
  {
    applicantName: "Priya Sharma",
    jobTitle: "Senior Frontend Engineer",
    date: "Today",
    status: "applied",
    initials: "PS",
    color: "oklch(0.55 0.18 280)"
  },
  {
    applicantName: "Rohan Mehta",
    jobTitle: "Product Manager",
    date: "Yesterday",
    status: "shortlisted",
    initials: "RM",
    color: "oklch(0.72 0.22 190)"
  },
  {
    applicantName: "Anjali Patel",
    jobTitle: "UX Designer",
    date: "2 days ago",
    status: "interview",
    initials: "AP",
    color: "oklch(0.65 0.2 290)"
  },
  {
    applicantName: "Vikram Singh",
    jobTitle: "Backend Developer",
    date: "3 days ago",
    status: "offer",
    initials: "VS",
    color: "oklch(0.7 0.2 150)"
  },
  {
    applicantName: "Deepa Nair",
    jobTitle: "Senior Frontend Engineer",
    date: "4 days ago",
    status: "rejected",
    initials: "DN",
    color: "oklch(0.65 0.18 230)"
  }
];
const TOP_JOBS = [
  { title: "Senior Frontend Engineer", applicants: 23, trend: "+5" },
  { title: "Product Manager", applicants: 17, trend: "+3" },
  { title: "UX Designer", applicants: 14, trend: "+8" }
];
const QUICK_ACTIONS = [
  {
    icon: Plus,
    label: "Post New Job",
    desc: "Reach 2M+ candidates",
    to: "/employer/post-job",
    accent: true
  },
  {
    icon: Search,
    label: "Find Candidates",
    desc: "Search talent pool",
    to: "/employer/candidates",
    accent: false
  },
  {
    icon: Briefcase,
    label: "My Listings",
    desc: "View all job posts",
    to: "/employer/jobs",
    accent: false
  },
  {
    icon: ChartColumn,
    label: "Analytics",
    desc: "Track performance",
    to: "/employer/analytics",
    accent: false
  }
];
function GlowStatCard({
  icon: Icon,
  label,
  value,
  delta,
  gradientFrom,
  gradientTo,
  glowColor
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "relative rounded-2xl p-px overflow-hidden transition-smooth hover:scale-[1.02] cursor-default",
      style: {
        background: `linear-gradient(135deg, ${gradientFrom}30, ${gradientTo}50)`
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-5 h-full",
          style: {
            background: "linear-gradient(135deg, oklch(0.14 0.01 260) 0%, oklch(0.17 0.012 255) 100%)",
            backdropFilter: "blur(16px)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-3 right-3 w-20 h-20 rounded-full pointer-events-none opacity-20",
                style: {
                  background: `radial-gradient(circle, ${gradientTo}, transparent 70%)`
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-lg",
                style: {
                  background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                  boxShadow: `0 4px 16px ${glowColor}`
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-display font-bold text-foreground tracking-tight", children: value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: label }),
            delta && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "inline-flex items-center gap-1 mt-2 text-xs font-medium px-2 py-0.5 rounded-full",
                style: { background: `${gradientFrom}18`, color: gradientFrom },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3 w-3" }),
                  " ",
                  delta
                ]
              }
            )
          ]
        }
      )
    }
  );
}
function EmployerDashboard() {
  const navigate = useNavigate();
  const { name } = useCurrentUser();
  const { data: jobs, isLoading: jobsLoading } = useEmployerJobs();
  const activeJobs = (jobs == null ? void 0 : jobs.filter((j) => j.status === "active")) ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { requiredRole: "employer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { showSidebar: true, sidebarRole: "employer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-6xl mx-auto space-y-7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative rounded-2xl overflow-hidden p-8",
        style: {
          background: "linear-gradient(135deg, oklch(0.16 0.05 280) 0%, oklch(0.13 0.03 260) 40%, oklch(0.15 0.04 200) 100%)",
          border: "1px solid oklch(0.5 0.16 280 / 0.3)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-0 left-0 w-64 h-64 rounded-full opacity-30",
                style: {
                  background: "radial-gradient(circle, oklch(0.55 0.18 280 / 0.4), transparent 70%)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-25",
                style: {
                  background: "radial-gradient(circle, oklch(0.72 0.22 190 / 0.5), transparent 70%)"
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-start justify-between gap-6 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full",
                  style: {
                    background: "oklch(0.72 0.22 190 / 0.15)",
                    color: "oklch(0.72 0.22 190)",
                    border: "1px solid oklch(0.72 0.22 190 / 0.3)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3" }),
                    " Employer Dashboard"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h1",
                {
                  className: "text-3xl font-display font-bold mb-1",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.95 0.01 250) 0%, oklch(0.72 0.22 190) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  },
                  children: [
                    "Welcome back, ",
                    name ?? "Employer",
                    " 👋"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Your hiring activity at a glance — let's find the perfect team." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: () => navigate({ to: "/employer/post-job" }),
                  "data-ocid": "employer_dashboard.post_job.primary_button",
                  className: "rounded-xl font-semibold shadow-lg transition-smooth",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                    color: "white",
                    border: "none"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-2" }),
                    " Post a Job"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  onClick: () => navigate({ to: "/employer/candidates" }),
                  "data-ocid": "employer_dashboard.find_candidates.button",
                  className: "rounded-xl border-border/50 hover:bg-primary/10 hover:border-primary/40",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 mr-2" }),
                    " Find Candidates"
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: jobsLoading ? ["a", "b", "c", "d"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "rounded-2xl overflow-hidden",
        style: {
          background: "oklch(0.14 0.01 260)",
          border: "1px solid oklch(0.28 0.015 260 / 0.4)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-11 w-11 rounded-xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-16" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24" })
        ] })
      },
      k
    )) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        GlowStatCard,
        {
          icon: Briefcase,
          label: "Active Jobs",
          value: activeJobs.length,
          delta: "+2 this week",
          gradientFrom: "oklch(0.55 0.18 280)",
          gradientTo: "oklch(0.5 0.16 290)",
          glowColor: "oklch(0.55 0.18 280 / 0.4)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        GlowStatCard,
        {
          icon: Users,
          label: "Total Applications",
          value: 47,
          delta: "+8 today",
          gradientFrom: "oklch(0.72 0.22 190)",
          gradientTo: "oklch(0.68 0.2 200)",
          glowColor: "oklch(0.72 0.22 190 / 0.4)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        GlowStatCard,
        {
          icon: UserCheck,
          label: "Shortlisted",
          value: 12,
          gradientFrom: "oklch(0.7 0.2 150)",
          gradientTo: "oklch(0.65 0.18 155)",
          glowColor: "oklch(0.7 0.2 150 / 0.4)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        GlowStatCard,
        {
          icon: TrendingUp,
          label: "Recent Hires",
          value: 3,
          delta: "This month",
          gradientFrom: "oklch(0.75 0.16 65)",
          gradientTo: "oklch(0.7 0.14 70)",
          glowColor: "oklch(0.75 0.16 65 / 0.4)"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "lg:col-span-2 rounded-2xl overflow-hidden",
          style: {
            background: "oklch(0.13 0.008 260)",
            border: "1px solid oklch(0.28 0.015 260 / 0.5)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-between px-6 pt-5 pb-4",
                style: {
                  borderBottom: "1px solid oklch(0.28 0.015 260 / 0.4)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground", children: "Recent Applications" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Latest candidates who applied" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => navigate({ to: "/employer/jobs" }),
                      "data-ocid": "employer_dashboard.view_all_apps.link",
                      className: "flex items-center gap-1 text-xs font-medium transition-smooth",
                      style: { color: "oklch(0.72 0.22 190)" },
                      children: [
                        "View all ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" })
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "px-6 divide-y",
                style: { borderColor: "oklch(0.28 0.015 260 / 0.3)" },
                children: MOCK_RECENT_APPLICATIONS.map((app, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between py-3.5 group",
                    "data-ocid": `employer_dashboard.recent_app.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold text-white shadow-md",
                            style: {
                              background: `linear-gradient(135deg, ${app.color}, ${app.color.replace("0.55", "0.72").replace("0.65", "0.8")})`
                            },
                            children: app.initials
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate group-hover:text-accent transition-colors", children: app.applicantName }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: app.jobTitle })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 shrink-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground hidden sm:block", children: app.date }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ApplicationStatusBadge, { status: app.status })
                      ] })
                    ]
                  },
                  app.applicantName
                ))
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl overflow-hidden",
            style: {
              background: "oklch(0.13 0.008 260)",
              border: "1px solid oklch(0.28 0.015 260 / 0.5)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "px-5 pt-4 pb-3",
                  style: {
                    borderBottom: "1px solid oklch(0.28 0.015 260 / 0.4)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground", children: "Quick Actions" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 space-y-1.5", children: QUICK_ACTIONS.map((action) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => navigate({ to: action.to }),
                  "data-ocid": `employer_dashboard.quick_${action.label.toLowerCase().replace(/\s+/g, "_")}.button`,
                  className: "w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-smooth group text-left",
                  style: action.accent ? {
                    background: "linear-gradient(135deg, oklch(0.72 0.22 190 / 0.12), oklch(0.55 0.18 280 / 0.08))",
                    border: "1px solid oklch(0.72 0.22 190 / 0.25)"
                  } : {},
                  onMouseEnter: (e) => {
                    if (!action.accent)
                      e.currentTarget.style.background = "oklch(0.5 0.16 280 / 0.08)";
                  },
                  onMouseLeave: (e) => {
                    if (!action.accent)
                      e.currentTarget.style.background = "";
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                        style: action.accent ? {
                          background: "linear-gradient(135deg, oklch(0.72 0.22 190), oklch(0.55 0.18 280))"
                        } : { background: "oklch(0.5 0.16 280 / 0.15)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          action.icon,
                          {
                            className: "h-4 w-4",
                            style: {
                              color: action.accent ? "white" : "oklch(0.72 0.22 190)"
                            }
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: action.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: action.desc })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-smooth" })
                  ]
                },
                action.label
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl overflow-hidden",
            style: {
              background: "oklch(0.13 0.008 260)",
              border: "1px solid oklch(0.28 0.015 260 / 0.5)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "px-5 pt-4 pb-3",
                  style: {
                    borderBottom: "1px solid oklch(0.28 0.015 260 / 0.4)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground", children: "Top Listings" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 space-y-3", children: jobsLoading ? ["a", "b", "c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full rounded-xl" }, k)) : activeJobs.length === 0 ? TOP_JOBS.map((job, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-3 p-3 rounded-xl",
                  style: { background: "oklch(0.17 0.01 260)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0",
                        style: {
                          background: "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))"
                        },
                        children: i + 1
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground font-medium truncate flex-1", children: job.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs font-semibold shrink-0",
                        style: { color: "oklch(0.72 0.22 190)" },
                        children: job.applicants
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "secondary",
                        className: "text-[10px] shrink-0 px-1.5",
                        style: {
                          color: "oklch(0.7 0.2 150)",
                          background: "oklch(0.7 0.2 150 / 0.1)",
                          border: "1px solid oklch(0.7 0.2 150 / 0.3)"
                        },
                        children: job.trend
                      }
                    )
                  ]
                },
                job.title
              )) : activeJobs.slice(0, 4).map((job, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-3 p-3 rounded-xl",
                  style: { background: "oklch(0.17 0.01 260)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0",
                        style: {
                          background: "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))"
                        },
                        children: i + 1
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground font-medium truncate flex-1", children: job.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "secondary",
                        className: "text-xs shrink-0",
                        children: "Active"
                      }
                    )
                  ]
                },
                String(job.jobId)
              )) })
            ]
          }
        )
      ] })
    ] })
  ] }) }) });
}
export {
  EmployerDashboard as default
};
