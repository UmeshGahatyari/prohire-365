import { u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
import { u as ue } from "./index-DbnOXoCg.js";
import { E as EmptyState } from "./EmptyState-B1Y1EQq_.js";
import { L as Layout, e as Bookmark, S as Search } from "./Layout-JeuDnHZC.js";
import { P as ProtectedRoute } from "./ProtectedRoute-BSLymTUa.js";
import { S as SkillTag } from "./SkillTag-B1i5fcDw.js";
import { M as MapPin } from "./map-pin-BkrrQ4Wc.js";
import { B as BookmarkCheck } from "./bookmark-check-B5yX-SWK.js";
import { Z as Zap } from "./zap-CK0f-2JC.js";
import { T as Trash2 } from "./trash-2-DUAW2PJ4.js";
import "./useAuth-OLjIzFBE.js";
import "./useCurrentUser-BEN-7rG2.js";
import "./sparkles-mukiyukd.js";
import "./badge-DE0nWNx8.js";
const INITIAL_SAVED = [
  {
    jobId: BigInt(1),
    employerId: {},
    title: "Senior React Developer",
    description: "Lead the frontend team building cutting-edge web applications.",
    location: "San Francisco, CA",
    salaryMin: BigInt(11e4),
    salaryMax: BigInt(15e4),
    experienceRequired: "4–6 yrs",
    jobType: "fullTime",
    skillsRequired: ["React", "TypeScript", "GraphQL", "Redux"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 30 * 24 * 3600 * 1e3) * 1e6
    ),
    createdAt: BigInt((Date.now() - 2 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt(Date.now() * 1e6),
    companyName: "Meridian Software"
  },
  {
    jobId: BigInt(3),
    employerId: {},
    title: "UX Engineer",
    description: "Bridge design and engineering for seamless product experiences.",
    location: "New York, NY",
    salaryMin: BigInt(9e4),
    salaryMax: BigInt(12e4),
    experienceRequired: "3–6 yrs",
    jobType: "contract",
    skillsRequired: ["Figma", "React", "CSS", "Accessibility"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 15 * 24 * 3600 * 1e3) * 1e6
    ),
    createdAt: BigInt((Date.now() - 3 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt(Date.now() * 1e6),
    companyName: "Blueprint Interactive"
  },
  {
    jobId: BigInt(5),
    employerId: {},
    title: "Data Engineer",
    description: "Design and build robust data pipelines for analytics teams.",
    location: "Seattle, WA",
    salaryMin: BigInt(115e3),
    salaryMax: BigInt(155e3),
    experienceRequired: "3–6 yrs",
    jobType: "fullTime",
    skillsRequired: ["Spark", "Python", "Airflow", "BigQuery"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 10 * 24 * 3600 * 1e3) * 1e6
    ),
    createdAt: BigInt((Date.now() - 5 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt(Date.now() * 1e6),
    companyName: "DataSphere Inc."
  },
  {
    jobId: BigInt(6),
    employerId: {},
    title: "DevOps Engineer",
    description: "Own infrastructure as code, CI/CD pipelines, and cloud reliability.",
    location: "Chicago, IL",
    salaryMin: BigInt(1e5),
    salaryMax: BigInt(135e3),
    experienceRequired: "3–5 yrs",
    jobType: "fullTime",
    skillsRequired: ["Kubernetes", "Terraform", "AWS", "CI/CD"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 18 * 24 * 3600 * 1e3) * 1e6
    ),
    createdAt: BigInt((Date.now() - 6 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt(Date.now() * 1e6),
    companyName: "Stratum Cloud"
  }
];
const jobTypeLabel = {
  fullTime: "Full-time",
  partTime: "Part-time",
  contract: "Contract"
};
function formatSalary(min, max) {
  const fmt = (n) => `$${(Number(n) / 1e3).toFixed(0)}k`;
  return `${fmt(min)} – ${fmt(max)}`;
}
function getCompanyColor(name) {
  const colors = [
    "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
    "linear-gradient(135deg, oklch(0.55 0.16 200), oklch(0.65 0.18 150))",
    "linear-gradient(135deg, oklch(0.6 0.18 30), oklch(0.7 0.15 45))",
    "linear-gradient(135deg, oklch(0.52 0.14 310), oklch(0.55 0.18 280))"
  ];
  return colors[name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % colors.length];
}
function deadlineDays(ns) {
  const ms = Number(ns) / 1e6;
  const days = Math.ceil((ms - Date.now()) / (1e3 * 60 * 60 * 24));
  if (days < 0) return "Expired";
  if (days <= 3) return `${days}d left`;
  return `${days} days left`;
}
function SavedJobsPage() {
  const navigate = useNavigate();
  const [savedJobs, setSavedJobs] = reactExports.useState(INITIAL_SAVED);
  const handleRemove = (jobId) => {
    setSavedJobs((prev) => prev.filter((j) => j.jobId !== jobId));
    ue.success("Job removed from saved");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { requiredRole: "employee", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { showSidebar: true, sidebarRole: "employee", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative overflow-hidden px-6 pt-8 pb-8",
        style: {
          background: "linear-gradient(135deg, oklch(0.13 0.015 265) 0%, oklch(0.11 0.01 255) 60%, oklch(0.10 0.008 250) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse at 20% 50%, oklch(0.5 0.16 280 / 0.1) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, oklch(0.72 0.22 190 / 0.08) 0%, transparent 50%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 left-0 right-0 h-px",
              style: {
                background: "linear-gradient(90deg, transparent, oklch(0.72 0.22 190 / 0.5), transparent)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Bookmark,
                  {
                    className: "h-4 w-4",
                    style: { color: "oklch(0.72 0.22 190)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "text-sm font-medium",
                    style: { color: "oklch(0.72 0.22 190)" },
                    children: [
                      savedJobs.length,
                      " job",
                      savedJobs.length === 1 ? "" : "s",
                      " ",
                      "saved"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl text-foreground", children: "Saved Jobs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1.5", children: "Jobs you've bookmarked for later review." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => navigate({ to: "/employee/jobs" }),
                "data-ocid": "saved_jobs.find_more.button",
                className: "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-smooth hover:opacity-90 shadow-glow-accent shrink-0",
                style: {
                  background: "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                  color: "white"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }),
                  "Find More Jobs"
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 max-w-5xl mx-auto", children: savedJobs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: Bookmark,
        title: "No saved jobs",
        description: "Browse jobs and save the ones you're interested in to review later.",
        action: {
          label: "Browse Jobs",
          onClick: () => navigate({ to: "/employee/jobs" })
        },
        "data-ocid": "saved_jobs.empty_state"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid sm:grid-cols-2 gap-4",
        "data-ocid": "saved_jobs.list",
        children: savedJobs.map((job, i) => {
          const days = Math.ceil(
            (Number(job.applicationDeadline) / 1e6 - Date.now()) / (1e3 * 60 * 60 * 24)
          );
          const isUrgent = days <= 3;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `saved_jobs.item.${i + 1}`,
              className: "group relative rounded-2xl transition-smooth overflow-hidden",
              style: {
                background: "linear-gradient(135deg, oklch(0.14 0.009 255 / 0.9) 0%, oklch(0.16 0.012 260 / 0.85) 100%)",
                border: "1px solid oklch(0.28 0.015 260 / 0.45)",
                backdropFilter: "blur(12px)"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.borderColor = "oklch(0.5 0.16 280 / 0.5)";
                e.currentTarget.style.boxShadow = "0 8px 32px oklch(0 0 0 / 0.3), 0 0 0 1px oklch(0.5 0.16 280 / 0.1)";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.borderColor = "oklch(0.28 0.015 260 / 0.45)";
                e.currentTarget.style.boxShadow = "";
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-smooth",
                    style: {
                      background: "linear-gradient(90deg, transparent, oklch(0.72 0.22 190), transparent)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-display font-bold text-base text-white shadow-card",
                      style: {
                        background: getCompanyColor(
                          job.companyName ?? ""
                        )
                      },
                      children: (job.companyName ?? "C")[0]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => navigate({
                          to: "/employee/jobs/$jobId",
                          params: { jobId: job.jobId.toString() }
                        }),
                        className: "text-left block w-full",
                        "data-ocid": `saved_jobs.view_job.${i + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-foreground group-hover:text-primary transition-smooth truncate", children: job.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 truncate", children: job.companyName })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-1 mt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          MapPin,
                          {
                            className: "h-3 w-3",
                            style: {
                              color: "oklch(0.72 0.22 190 / 0.7)"
                            }
                          }
                        ),
                        job.location
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs font-semibold",
                          style: { color: "oklch(0.72 0.22 190)" },
                          children: formatSalary(job.salaryMin, job.salaryMax)
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs px-1.5 py-0.5 rounded-md",
                          style: {
                            background: "oklch(0.72 0.22 190 / 0.1)",
                            color: "oklch(0.72 0.22 190)",
                            border: "1px solid oklch(0.72 0.22 190 / 0.2)"
                          },
                          children: jobTypeLabel[job.jobType]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-2.5", children: job.skillsRequired.slice(0, 3).map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillTag, { skill }, skill)) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-2.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        BookmarkCheck,
                        {
                          className: "h-3 w-3",
                          style: {
                            color: isUrgent ? "oklch(0.72 0.18 28)" : "oklch(0.55 0.01 250)"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs",
                          style: {
                            color: isUrgent ? "oklch(0.72 0.18 28)" : "oklch(0.55 0.01 250)"
                          },
                          children: deadlineDays(job.applicationDeadline)
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-3.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => navigate({
                            to: "/employee/jobs/$jobId",
                            params: { jobId: job.jobId.toString() }
                          }),
                          "data-ocid": `saved_jobs.apply_button.${i + 1}`,
                          className: "flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold transition-smooth hover:opacity-90 shadow-card",
                          style: {
                            background: "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                            color: "white"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3" }),
                            " Apply Now"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => handleRemove(job.jobId),
                          "data-ocid": `saved_jobs.remove_button.${i + 1}`,
                          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-smooth",
                          style: {
                            color: "oklch(0.72 0.18 28 / 0.8)",
                            background: "oklch(0.62 0.2 28 / 0.08)",
                            border: "1px solid oklch(0.62 0.2 28 / 0.25)"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" }),
                            " Remove"
                          ]
                        }
                      )
                    ] })
                  ] })
                ] }) })
              ]
            },
            job.jobId.toString()
          );
        })
      }
    ) })
  ] }) }) });
}
export {
  SavedJobsPage as default
};
