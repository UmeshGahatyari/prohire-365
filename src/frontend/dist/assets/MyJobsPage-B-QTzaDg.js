import { u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
import { L as Layout, B as Button, X } from "./Layout-JeuDnHZC.js";
import { S as Skeleton } from "./skeleton-Cbsmm-dn.js";
import { u as ue } from "./index-DbnOXoCg.js";
import { E as EmptyState } from "./EmptyState-B1Y1EQq_.js";
import { P as ProtectedRoute } from "./ProtectedRoute-BSLymTUa.js";
import { u as useEmployerJobs, b as useCloseJob, c as useReopenJob } from "./useQueries-DKzCSuiY.js";
import { c as createLucideIcon, B as Briefcase } from "./useAuth-OLjIzFBE.js";
import { P as Plus } from "./plus-Dcf5H1xy.js";
import { U as Users } from "./users-C2-7Zdip.js";
import { C as CalendarDays } from "./calendar-days-DjaOTfRx.js";
import { S as SquarePen } from "./square-pen-DpKia07D.js";
import { Z as Zap } from "./zap-CK0f-2JC.js";
import "./useCurrentUser-BEN-7rG2.js";
import "./sparkles-mukiyukd.js";
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
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode);
const JOB_TYPE_LABELS = {
  fullTime: "Full-time",
  partTime: "Part-time",
  contract: "Contract"
};
const MOCK_APPLICANT_COUNTS = {
  "1": 14,
  "2": 7,
  "3": 23
};
const STATUS_FILTER_TABS = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Draft", value: "draft" },
  { label: "Closed", value: "closed" }
];
function JobStatusBadge({ status }) {
  const configs = {
    active: {
      label: "Active",
      color: "oklch(0.7 0.2 150)",
      bg: "oklch(0.7 0.2 150 / 0.12)",
      border: "oklch(0.7 0.2 150 / 0.3)"
    },
    draft: {
      label: "Draft",
      color: "oklch(0.75 0.16 65)",
      bg: "oklch(0.75 0.16 65 / 0.1)",
      border: "oklch(0.75 0.16 65 / 0.3)"
    },
    closed: {
      label: "Closed",
      color: "oklch(0.62 0.2 28)",
      bg: "oklch(0.62 0.2 28 / 0.1)",
      border: "oklch(0.62 0.2 28 / 0.3)"
    }
  }[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold",
      style: {
        color: configs.color,
        background: configs.bg,
        border: `1px solid ${configs.border}`
      },
      "data-ocid": `job_status.${status}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "w-1.5 h-1.5 rounded-full",
            style: { background: configs.color }
          }
        ),
        configs.label
      ]
    }
  );
}
function JobRow({ job, index }) {
  const navigate = useNavigate();
  const { mutateAsync: closeJob, isPending: closing } = useCloseJob();
  const { mutateAsync: reopenJob, isPending: reopening } = useReopenJob();
  const applicantCount = MOCK_APPLICANT_COUNTS[String(index + 1)] ?? Math.floor(Math.random() * 20);
  const postedDate = new Date(
    Number(job.createdAt) / 1e6
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
  const handleToggle = async () => {
    try {
      if (job.status === "active") {
        await closeJob(job.jobId);
        ue.success("Job closed successfully");
      } else {
        await reopenJob(job.jobId);
        ue.success("Job reopened successfully");
      }
    } catch {
      ue.error("Action failed. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl overflow-hidden group transition-smooth hover:translate-y-[-1px]",
      style: {
        background: "oklch(0.13 0.008 260)",
        border: "1px solid oklch(0.28 0.015 260 / 0.5)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.25)"
      },
      "data-ocid": `my_jobs.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-0.5 w-full opacity-0 group-hover:opacity-100 transition-smooth",
            style: {
              background: "linear-gradient(90deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md",
                style: {
                  background: "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.3), oklch(0.72 0.22 190 / 0.2))",
                  border: "1px solid oklch(0.55 0.18 280 / 0.3)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Briefcase,
                  {
                    className: "h-4.5 w-4.5",
                    style: { color: "oklch(0.72 0.22 190)" }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground group-hover:text-accent transition-colors", children: job.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(JobStatusBadge, { status: job.status }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs px-2 py-0.5 rounded-full",
                    style: {
                      background: "oklch(0.5 0.16 280 / 0.12)",
                      color: "oklch(0.72 0.22 190)",
                      border: "1px solid oklch(0.5 0.16 280 / 0.2)"
                    },
                    children: JOB_TYPE_LABELS[job.jobType] ?? job.jobType
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-2 text-xs text-muted-foreground flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-medium",
                      style: { color: "oklch(0.72 0.22 190)" },
                      children: applicantCount
                    }
                  ),
                  " ",
                  "applicants"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3.5 w-3.5" }),
                  " Posted ",
                  postedDate
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: job.location })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0 flex-wrap justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                size: "sm",
                onClick: () => navigate({
                  to: `/employer/jobs/${String(job.jobId)}/applicants`
                }),
                "data-ocid": `my_jobs.view_applicants.${index + 1}`,
                className: "gap-1.5 rounded-xl h-8 text-xs border-border/50 hover:bg-primary/10 hover:border-primary/40",
                variant: "outline",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }),
                  " Applicants"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                size: "sm",
                onClick: () => navigate({
                  to: `/employer/jobs/${String(job.jobId)}/edit`
                }),
                "data-ocid": `my_jobs.edit.${index + 1}`,
                className: "gap-1.5 rounded-xl h-8 text-xs",
                style: {
                  background: "oklch(0.55 0.18 280 / 0.2)",
                  color: "oklch(0.75 0.15 280)",
                  border: "1px solid oklch(0.55 0.18 280 / 0.35)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "h-3.5 w-3.5" }),
                  " Edit"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                size: "sm",
                onClick: handleToggle,
                disabled: closing || reopening,
                "data-ocid": job.status === "active" ? `my_jobs.close.${index + 1}` : `my_jobs.reopen.${index + 1}`,
                className: "gap-1.5 rounded-xl h-8 text-xs",
                style: job.status === "active" ? {
                  background: "oklch(0.62 0.2 28 / 0.15)",
                  color: "oklch(0.72 0.18 28)",
                  border: "1px solid oklch(0.62 0.2 28 / 0.35)"
                } : {
                  background: "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.3), oklch(0.72 0.22 190 / 0.2))",
                  color: "oklch(0.82 0.15 190)",
                  border: "1px solid oklch(0.72 0.22 190 / 0.3)"
                },
                children: job.status === "active" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }),
                  " Close"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5" }),
                  " Reopen"
                ] })
              }
            )
          ] })
        ] }) })
      ]
    }
  );
}
function MyJobsPage() {
  const navigate = useNavigate();
  const { data: jobs, isLoading } = useEmployerJobs();
  const [activeFilter, setActiveFilter] = reactExports.useState(
    "all"
  );
  const filteredJobs = (jobs == null ? void 0 : jobs.filter((j) => activeFilter === "all" || j.status === activeFilter)) ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { requiredRole: "employer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { showSidebar: true, sidebarRole: "employer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-4xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative rounded-2xl overflow-hidden p-6",
        style: {
          background: "linear-gradient(135deg, oklch(0.14 0.04 280) 0%, oklch(0.12 0.02 260) 100%)",
          border: "1px solid oklch(0.5 0.16 280 / 0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none opacity-20",
              style: {
                background: "radial-gradient(circle, oklch(0.55 0.18 280), transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-start justify-between gap-4 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-6 w-6 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-bold text-foreground", children: "My Job Listings" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Manage and track all your posted positions" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => navigate({ to: "/employer/post-job" }),
                "data-ocid": "my_jobs.post_job.primary_button",
                className: "rounded-xl font-semibold shadow-lg",
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
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex gap-1 p-1 rounded-xl w-fit",
        style: {
          background: "oklch(0.13 0.008 260)",
          border: "1px solid oklch(0.28 0.015 260 / 0.4)"
        },
        children: STATUS_FILTER_TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActiveFilter(tab.value),
            "data-ocid": `my_jobs.filter.${tab.value}.tab`,
            className: "px-4 py-1.5 rounded-lg text-sm font-medium transition-smooth",
            style: activeFilter === tab.value ? {
              background: "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.3), oklch(0.72 0.22 190 / 0.2))",
              color: "oklch(0.82 0.15 190)",
              border: "1px solid oklch(0.72 0.22 190 / 0.3)"
            } : { color: "oklch(0.62 0.01 250)" },
            children: [
              tab.label,
              tab.value !== "all" && jobs && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1.5 text-xs opacity-70", children: [
                "(",
                jobs.filter((j) => j.status === tab.value).length,
                ")"
              ] })
            ]
          },
          tab.value
        ))
      }
    ),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "my_jobs.loading_state", children: ["a", "b", "c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-5",
        style: {
          background: "oklch(0.13 0.008 260)",
          border: "1px solid oklch(0.28 0.015 260 / 0.4)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-64 mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-48" })
        ]
      },
      k
    )) }) : !jobs || jobs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: Briefcase,
        title: "No job listings yet",
        description: "Post your first job to start receiving applications from top candidates.",
        action: {
          label: "Post a Job",
          onClick: () => navigate({ to: "/employer/post-job" })
        }
      }
    ) : filteredJobs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-16 text-muted-foreground",
        "data-ocid": "my_jobs.empty_state",
        children: [
          "No ",
          activeFilter,
          " jobs found."
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "my_jobs.list", children: [
      filteredJobs.map((job, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(JobRow, { job, index: i }, String(job.jobId))),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => navigate({ to: "/employer/post-job" }),
          "data-ocid": "my_jobs.post_another.link",
          className: "w-full py-4 rounded-2xl text-sm font-medium transition-smooth flex items-center justify-center gap-2",
          style: {
            border: "2px dashed oklch(0.28 0.015 260 / 0.6)",
            color: "oklch(0.62 0.01 250)"
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.borderColor = "oklch(0.72 0.22 190 / 0.4)";
            e.currentTarget.style.color = "oklch(0.72 0.22 190)";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.borderColor = "oklch(0.28 0.015 260 / 0.6)";
            e.currentTarget.style.color = "oklch(0.62 0.01 250)";
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            " Post another job"
          ]
        }
      )
    ] })
  ] }) }) });
}
export {
  MyJobsPage as default
};
