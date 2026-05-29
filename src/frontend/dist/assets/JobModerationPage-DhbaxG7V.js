import { r as reactExports, j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
import { L as Layout, S as Search, B as Button } from "./Layout-JeuDnHZC.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, C as CircleX } from "./dialog-8rDSVgZ4.js";
import { I as Input } from "./input-Bnuh1-dr.js";
import { S as Separator } from "./separator-CEt-SyGN.js";
import { T as Tabs, a as TabsList, b as TabsTrigger } from "./tabs-M0OANnau.js";
import { E as EmptyState } from "./EmptyState-B1Y1EQq_.js";
import { P as PageHeader } from "./PageHeader-CuM3Df3J.js";
import { P as ProtectedRoute } from "./ProtectedRoute-BSLymTUa.js";
import { B as Briefcase } from "./useAuth-OLjIzFBE.js";
import { B as Building2 } from "./sparkles-mukiyukd.js";
import { M as MapPin } from "./map-pin-BkrrQ4Wc.js";
import { D as DollarSign } from "./dollar-sign-Ds7SrE6t.js";
import { C as Clock } from "./clock-BzSeebma.js";
import { C as CalendarDays } from "./calendar-days-DjaOTfRx.js";
import { U as Users } from "./users-C2-7Zdip.js";
import { C as CircleCheckBig } from "./circle-check-big-4iKIR8FP.js";
import "./useCurrentUser-BEN-7rG2.js";
import "./index-DiKJEy-t.js";
const mockJobs = [
  {
    id: 1,
    title: "Senior React Developer",
    employer: "Nexus Technologies",
    status: "active",
    postedDate: "Apr 18, 2026",
    location: "San Francisco, CA",
    salaryRange: "$120k–$160k",
    type: "Full-time",
    skills: ["React", "TypeScript", "GraphQL"],
    applicants: 24,
    description: "We're looking for a Senior React Developer to lead our frontend team building next-gen SaaS products. You'll architect scalable component systems and mentor junior developers.",
    deadline: "May 15, 2026"
  },
  {
    id: 2,
    title: "Product Manager",
    employer: "Horizon Ventures",
    status: "active",
    postedDate: "Apr 17, 2026",
    location: "New York, NY",
    salaryRange: "$110k–$140k",
    type: "Full-time",
    skills: ["Product Strategy", "Agile", "Roadmapping"],
    applicants: 17,
    description: "Drive product vision and strategy for our B2B SaaS platform. Collaborate with engineering, design, and stakeholders to ship world-class features.",
    deadline: "May 20, 2026"
  },
  {
    id: 3,
    title: "Data Engineer",
    employer: "DataSphere Inc.",
    status: "closed",
    postedDate: "Mar 28, 2026",
    location: "Remote",
    salaryRange: "$130k–$170k",
    type: "Full-time",
    skills: ["Python", "Spark", "Snowflake", "SQL"],
    applicants: 32,
    description: "Build and maintain our data pipelines and infrastructure. Design ETL processes and data warehouse solutions to power business insights.",
    deadline: "Apr 15, 2026"
  },
  {
    id: 4,
    title: "DevOps Lead",
    employer: "CloudScale",
    status: "draft",
    postedDate: "Apr 20, 2026",
    location: "Austin, TX",
    salaryRange: "$140k–$180k",
    type: "Full-time",
    skills: ["Kubernetes", "Terraform", "AWS", "CI/CD"],
    applicants: 0,
    description: "Lead our infrastructure team in modernizing our cloud operations. Champion DevSecOps practices and build automation frameworks.",
    deadline: "Jun 1, 2026"
  },
  {
    id: 5,
    title: "UX Designer",
    employer: "Luminary Tech",
    status: "pending",
    postedDate: "Apr 19, 2026",
    location: "Seattle, WA",
    salaryRange: "$95k–$125k",
    type: "Full-time",
    skills: ["Figma", "User Research", "Prototyping"],
    applicants: 0,
    description: "Shape user experiences across our product suite. Conduct user research, create wireframes, and collaborate with engineering to implement designs.",
    deadline: "May 30, 2026"
  },
  {
    id: 6,
    title: "Backend Engineer – Go",
    employer: "Orbit Analytics",
    status: "pending",
    postedDate: "Apr 18, 2026",
    location: "Remote",
    salaryRange: "$115k–$150k",
    type: "Contract",
    skills: ["Go", "Microservices", "gRPC", "PostgreSQL"],
    applicants: 0,
    description: "Join our platform team building high-throughput APIs and distributed systems. Work with Go, gRPC, and Kafka to deliver reliable data pipelines.",
    deadline: "May 25, 2026"
  },
  {
    id: 7,
    title: "Engineering Manager",
    employer: "Nexus Technologies",
    status: "active",
    postedDate: "Apr 10, 2026",
    location: "San Francisco, CA",
    salaryRange: "$170k–$220k",
    type: "Full-time",
    skills: ["Leadership", "System Design", "Agile"],
    applicants: 9,
    description: "Lead a team of 8–12 engineers delivering core platform features. Drive technical strategy, hiring, and career development.",
    deadline: "May 10, 2026"
  },
  {
    id: 8,
    title: "ML Engineer",
    employer: "DataSphere Inc.",
    status: "closed",
    postedDate: "Mar 15, 2026",
    location: "New York, NY",
    salaryRange: "$140k–$180k",
    type: "Full-time",
    skills: ["PyTorch", "MLflow", "Python", "Kubeflow"],
    applicants: 41,
    description: "Build and deploy machine learning models at scale. Collaborate with data scientists to productionize research models.",
    deadline: "Apr 1, 2026"
  }
];
const statusConfig = {
  active: {
    label: "Active",
    bg: "oklch(0.55 0.18 155 / 0.12)",
    border: "oklch(0.55 0.18 155 / 0.3)",
    color: "oklch(0.72 0.2 155)",
    dot: "oklch(0.7 0.2 155)"
  },
  pending: {
    label: "Pending Review",
    bg: "oklch(0.55 0.18 65 / 0.12)",
    border: "oklch(0.55 0.18 65 / 0.3)",
    color: "oklch(0.78 0.16 65)",
    dot: "oklch(0.75 0.18 65)",
    rowHighlight: "oklch(0.55 0.18 65 / 0.04)"
  },
  draft: {
    label: "Draft",
    bg: "oklch(0.3 0.01 260 / 0.2)",
    border: "oklch(0.35 0.015 260 / 0.3)",
    color: "oklch(0.55 0.01 260)",
    dot: "oklch(0.45 0.01 260)"
  },
  closed: {
    label: "Closed",
    bg: "oklch(0.55 0.2 28 / 0.12)",
    border: "oklch(0.55 0.2 28 / 0.3)",
    color: "oklch(0.72 0.18 28)",
    dot: "oklch(0.62 0.2 28)"
  }
};
function JobModerationPage() {
  const [search, setSearch] = reactExports.useState("");
  const [tab, setTab] = reactExports.useState("all");
  const [jobs, setJobs] = reactExports.useState(mockJobs);
  const [selectedJob, setSelectedJob] = reactExports.useState(null);
  const filtered = jobs.filter((j) => {
    const matchesTab = tab === "all" || j.status === tab;
    const matchesSearch = j.title.toLowerCase().includes(search.toLowerCase()) || j.employer.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });
  const approveJob = (id) => {
    setJobs(
      (prev) => prev.map(
        (j) => j.id === id ? { ...j, status: "active" } : j
      )
    );
    setSelectedJob(null);
  };
  const rejectJob = (id) => {
    setJobs(
      (prev) => prev.map(
        (j) => j.id === id ? { ...j, status: "closed" } : j
      )
    );
    setSelectedJob(null);
  };
  const pendingCount = jobs.filter((j) => j.status === "pending").length;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { requiredRole: "admin", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { showSidebar: true, sidebarRole: "admin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-6xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PageHeader,
        {
          title: "Job Moderation",
          description: "Review and manage all job listings on the platform",
          icon: Briefcase,
          actions: pendingCount > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "text-xs px-3 py-1.5 rounded-full font-semibold flex items-center gap-1.5",
              style: {
                background: "oklch(0.55 0.18 65 / 0.15)",
                border: "1px solid oklch(0.55 0.18 65 / 0.35)",
                color: "oklch(0.78 0.16 65)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "animate-ping absolute inline-flex h-full w-full rounded-full opacity-60",
                      style: { background: "oklch(0.75 0.18 65)" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "relative inline-flex rounded-full h-2 w-2",
                      style: { background: "oklch(0.75 0.18 65)" }
                    }
                  )
                ] }),
                pendingCount,
                " pending review"
              ]
            }
          ) : void 0
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col sm:flex-row gap-3 items-start sm:items-center p-4 rounded-2xl flex-wrap",
          style: {
            background: "oklch(0.14 0.009 255 / 0.7)",
            border: "1px solid oklch(0.28 0.015 260 / 0.35)",
            backdropFilter: "blur(10px)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "text",
                  placeholder: "Search jobs or employers…",
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  className: "pl-9 bg-transparent border-border/50 focus:border-primary/50 rounded-xl",
                  "data-ocid": "jobs.search_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: tab, onValueChange: (v) => setTab(v), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabsList,
              {
                className: "rounded-xl",
                style: {
                  background: "oklch(0.1 0.008 255 / 0.8)",
                  border: "1px solid oklch(0.28 0.015 260 / 0.3)"
                },
                "data-ocid": "jobs.status.tab",
                children: ["all", "active", "pending", "closed", "draft"].map(
                  (v) => {
                    var _a;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TabsTrigger,
                      {
                        value: v,
                        className: "rounded-lg text-xs capitalize",
                        "data-ocid": `jobs.filter_${v}.tab`,
                        children: v === "all" ? "All" : ((_a = statusConfig[v]) == null ? void 0 : _a.label) ?? v
                      },
                      v
                    );
                  }
                )
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl overflow-hidden",
          style: {
            background: "oklch(0.14 0.009 255 / 0.8)",
            border: "1px solid oklch(0.28 0.015 260 / 0.35)",
            backdropFilter: "blur(10px)"
          },
          children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            EmptyState,
            {
              icon: Briefcase,
              title: "No jobs found",
              description: "Try adjusting your search or filter to see job listings."
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-ocid": "jobs.table", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "tr",
              {
                style: {
                  background: "oklch(0.1 0.008 255 / 0.6)",
                  borderBottom: "1px solid oklch(0.28 0.015 260 / 0.3)"
                },
                children: [
                  { h: "Job Title", cls: "text-left" },
                  {
                    h: "Employer",
                    cls: "text-left hidden md:table-cell"
                  },
                  { h: "Status", cls: "text-left" },
                  { h: "Posted", cls: "text-left hidden lg:table-cell" },
                  {
                    h: "Applicants",
                    cls: "text-right hidden lg:table-cell"
                  },
                  { h: "Actions", cls: "text-right" }
                ].map(({ h, cls }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    className: `px-4 py-3 font-semibold text-xs uppercase tracking-wider ${cls}`,
                    style: { color: "oklch(0.6 0.015 260)" },
                    children: h
                  },
                  h
                ))
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((job, i) => {
              const sc = statusConfig[job.status];
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "hover:bg-primary/5 transition-smooth",
                  style: {
                    borderBottom: "1px solid oklch(0.28 0.015 260 / 0.2)",
                    background: job.status === "pending" ? sc.rowHighlight : void 0
                  },
                  "data-ocid": `jobs.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 min-w-0", children: [
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
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground truncate", children: job.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: job.type })
                      ] })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5 hidden md:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground truncate max-w-[140px]", children: job.employer })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "flex items-center gap-1.5 text-xs w-fit px-2.5 py-1 rounded-full font-medium",
                        style: {
                          background: sc.bg,
                          border: `1px solid ${sc.border}`,
                          color: sc.color
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                            job.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "animate-ping absolute inline-flex h-full w-full rounded-full opacity-60",
                                style: { background: sc.dot }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "relative inline-flex rounded-full h-1.5 w-1.5",
                                style: { background: sc.dot }
                              }
                            )
                          ] }),
                          sc.label
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5 text-muted-foreground hidden lg:table-cell", children: job.postedDate }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5 text-right font-mono text-muted-foreground hidden lg:table-cell", children: job.applicants }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "button",
                          variant: "ghost",
                          size: "sm",
                          className: "h-7 text-xs rounded-lg border",
                          style: {
                            borderColor: "oklch(0.28 0.015 260 / 0.4)",
                            color: "oklch(0.72 0.22 190)"
                          },
                          onClick: () => setSelectedJob(job),
                          "data-ocid": `jobs.view_button.${i + 1}`,
                          children: "View"
                        }
                      ),
                      job.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            type: "button",
                            size: "sm",
                            className: "h-7 text-xs rounded-lg",
                            style: {
                              background: "linear-gradient(135deg, oklch(0.55 0.18 155), oklch(0.5 0.16 165))",
                              color: "white"
                            },
                            onClick: () => approveJob(job.id),
                            "data-ocid": `jobs.approve_button.${i + 1}`,
                            children: "Approve"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            type: "button",
                            variant: "destructive",
                            size: "sm",
                            className: "h-7 text-xs rounded-lg",
                            onClick: () => rejectJob(job.id),
                            "data-ocid": `jobs.reject_button.${i + 1}`,
                            children: "Reject"
                          }
                        )
                      ] }),
                      job.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "button",
                          variant: "outline",
                          size: "sm",
                          className: "h-7 text-xs rounded-lg",
                          style: {
                            borderColor: "oklch(0.55 0.2 28 / 0.4)",
                            color: "oklch(0.72 0.18 28)"
                          },
                          onClick: () => rejectJob(job.id),
                          "data-ocid": `jobs.close_button.${i + 1}`,
                          children: "Close"
                        }
                      )
                    ] }) })
                  ]
                },
                job.id
              );
            }) })
          ] }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!selectedJob, onOpenChange: () => setSelectedJob(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "max-w-lg max-h-[80vh] overflow-y-auto",
        style: {
          background: "oklch(0.13 0.009 258)",
          border: "1px solid oklch(0.28 0.015 260 / 0.5)"
        },
        "data-ocid": "job_detail.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Briefcase,
              {
                className: "h-5 w-5",
                style: { color: "oklch(0.72 0.22 190)" }
              }
            ),
            "Job Details"
          ] }) }),
          selectedJob && (() => {
            const sc = statusConfig[selectedJob.status];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg text-foreground leading-tight", children: selectedJob.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "flex items-center gap-1.5 text-xs shrink-0 px-2.5 py-1 rounded-full font-medium",
                      style: {
                        background: sc.bg,
                        border: `1px solid ${sc.border}`,
                        color: sc.color
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "inline-flex rounded-full h-1.5 w-1.5",
                            style: { background: sc.dot }
                          }
                        ),
                        sc.label
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5" }),
                  " ",
                  selectedJob.employer
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 shrink-0" }),
                  " ",
                  selectedJob.location
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-4 w-4 shrink-0" }),
                  " ",
                  selectedJob.salaryRange
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 shrink-0" }),
                  " ",
                  selectedJob.type
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4 shrink-0" }),
                  " Deadline:",
                  " ",
                  selectedJob.deadline
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground col-span-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4 shrink-0" }),
                  " ",
                  selectedJob.applicants,
                  " applicants"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Separator,
                {
                  style: { background: "oklch(0.28 0.015 260 / 0.3)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2", children: "Description" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: selectedJob.description })
              ] }),
              selectedJob.skills.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2", children: "Required Skills" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: selectedJob.skills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-2 py-0.5 rounded-full text-xs font-medium",
                    style: {
                      background: "oklch(0.5 0.16 280 / 0.15)",
                      border: "1px solid oklch(0.5 0.16 280 / 0.3)",
                      color: "oklch(0.78 0.14 280)"
                    },
                    children: skill
                  },
                  skill
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Separator,
                {
                  style: { background: "oklch(0.28 0.015 260 / 0.3)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
                selectedJob.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "button",
                      size: "sm",
                      className: "h-8 text-xs gap-1.5",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.55 0.18 155), oklch(0.5 0.16 165))",
                        color: "white"
                      },
                      onClick: () => approveJob(selectedJob.id),
                      "data-ocid": "job_detail.approve_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-3.5 w-3.5" }),
                        " Approve"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "button",
                      variant: "destructive",
                      size: "sm",
                      className: "h-8 text-xs gap-1.5",
                      onClick: () => rejectJob(selectedJob.id),
                      "data-ocid": "job_detail.reject_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3.5 w-3.5" }),
                        " Reject"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    className: "h-8 text-xs",
                    style: { borderColor: "oklch(0.28 0.015 260 / 0.5)" },
                    onClick: () => setSelectedJob(null),
                    "data-ocid": "job_detail.close_button",
                    children: "Close"
                  }
                )
              ] })
            ] });
          })()
        ]
      }
    ) })
  ] }) });
}
export {
  JobModerationPage as default
};
