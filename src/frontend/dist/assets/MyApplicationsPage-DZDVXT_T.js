import { j as jsxRuntimeExports, u as useNavigate, r as reactExports } from "./index-ByYMEgVg.js";
import { I as Input } from "./input-Bnuh1-dr.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Aauoc0tp.js";
import { b as cn, B as Briefcase } from "./useAuth-OLjIzFBE.js";
import { A as ApplicationStatusBadge } from "./ApplicationStatusBadge-CK2XtaKA.js";
import { E as EmptyState } from "./EmptyState-B1Y1EQq_.js";
import { L as Layout, S as Search } from "./Layout-JeuDnHZC.js";
import { P as ProtectedRoute } from "./ProtectedRoute-BSLymTUa.js";
import { T as TrendingUp } from "./trending-up-dHM4qZ7e.js";
import { C as ChevronLeft } from "./chevron-left-BmNiawf-.js";
import { C as ChevronRight } from "./chevron-right-uQ8Lupyx.js";
import "./index-DOPMB26m.js";
import "./useCurrentUser-BEN-7rG2.js";
import "./sparkles-mukiyukd.js";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
const ALL_APPLICATIONS = [
  {
    applicationId: BigInt(1),
    jobId: BigInt(101),
    employeeId: {},
    status: "shortlisted",
    appliedAt: BigInt((Date.now() - 2 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt((Date.now() - 1 * 24 * 3600 * 1e3) * 1e6),
    jobTitle: "Senior React Developer",
    company: "TechNova Inc.",
    location: "San Francisco, CA"
  },
  {
    applicationId: BigInt(2),
    jobId: BigInt(102),
    employeeId: {},
    status: "interview",
    appliedAt: BigInt((Date.now() - 5 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt((Date.now() - 2 * 24 * 3600 * 1e3) * 1e6),
    jobTitle: "Full Stack Engineer",
    company: "CloudPeak Systems",
    location: "Remote"
  },
  {
    applicationId: BigInt(3),
    jobId: BigInt(103),
    employeeId: {},
    status: "applied",
    appliedAt: BigInt((Date.now() - 1 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt((Date.now() - 1 * 24 * 3600 * 1e3) * 1e6),
    jobTitle: "Product Designer",
    company: "DesignCraft Studio",
    location: "New York, NY"
  },
  {
    applicationId: BigInt(4),
    jobId: BigInt(104),
    employeeId: {},
    status: "rejected",
    appliedAt: BigInt((Date.now() - 10 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt((Date.now() - 7 * 24 * 3600 * 1e3) * 1e6),
    jobTitle: "UI/UX Lead",
    company: "Pixel Labs",
    location: "Austin, TX"
  },
  {
    applicationId: BigInt(5),
    jobId: BigInt(105),
    employeeId: {},
    status: "offer",
    appliedAt: BigInt((Date.now() - 20 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt((Date.now() - 3 * 24 * 3600 * 1e3) * 1e6),
    jobTitle: "React Native Developer",
    company: "Appvance Technologies",
    location: "Seattle, WA"
  },
  {
    applicationId: BigInt(6),
    jobId: BigInt(106),
    employeeId: {},
    status: "applied",
    appliedAt: BigInt((Date.now() - 3 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt((Date.now() - 3 * 24 * 3600 * 1e3) * 1e6),
    jobTitle: "DevOps Engineer",
    company: "Stratum Cloud",
    location: "Chicago, IL"
  }
];
const STATUS_FILTERS = [
  { value: "all", label: "All statuses" },
  { value: "applied", label: "Applied" },
  { value: "shortlisted", label: "Shortlisted" },
  { value: "interview", label: "Interview" },
  { value: "rejected", label: "Rejected" },
  { value: "offer", label: "Offer" }
];
const STATUS_STATS = [
  {
    status: "applied",
    label: "Applied",
    color: "oklch(0.65 0.18 230)",
    bg: "oklch(0.65 0.18 230 / 0.12)",
    border: "oklch(0.65 0.18 230 / 0.3)"
  },
  {
    status: "shortlisted",
    label: "Shortlisted",
    color: "oklch(0.82 0.14 65)",
    bg: "oklch(0.75 0.16 65 / 0.12)",
    border: "oklch(0.75 0.16 65 / 0.3)"
  },
  {
    status: "interview",
    label: "Interview",
    color: "oklch(0.75 0.18 290)",
    bg: "oklch(0.65 0.2 290 / 0.12)",
    border: "oklch(0.65 0.2 290 / 0.3)"
  },
  {
    status: "offer",
    label: "Offers",
    color: "oklch(0.78 0.18 150)",
    bg: "oklch(0.7 0.2 150 / 0.12)",
    border: "oklch(0.7 0.2 150 / 0.3)"
  }
];
const PAGE_SIZE = 5;
function formatDate(ns) {
  return new Date(Number(ns) / 1e6).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
function getCompanyInitial(name) {
  return name[0].toUpperCase();
}
function getCompanyGradient(name) {
  const g = [
    "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
    "linear-gradient(135deg, oklch(0.55 0.16 200), oklch(0.65 0.18 150))",
    "linear-gradient(135deg, oklch(0.52 0.14 310), oklch(0.55 0.18 280))"
  ];
  return g[name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % g.length];
}
function MyApplicationsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = reactExports.useState("");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [page, setPage] = reactExports.useState(1);
  const filtered = ALL_APPLICATIONS.filter((app) => {
    if (statusFilter !== "all" && app.status !== statusFilter) return false;
    if (search && !app.jobTitle.toLowerCase().includes(search.toLowerCase()) && !app.company.toLowerCase().includes(search.toLowerCase()))
      return false;
    return true;
  });
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Briefcase,
                    {
                      className: "h-4 w-4",
                      style: { color: "oklch(0.72 0.22 190)" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-sm font-medium",
                      style: { color: "oklch(0.72 0.22 190)" },
                      children: "Application Tracker"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl text-foreground", children: "My Applications" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1.5", children: "Track every step of your job search journey." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2 px-4 py-2 rounded-xl shrink-0",
                  style: {
                    background: "oklch(0.18 0.012 260 / 0.8)",
                    border: "1px solid oklch(0.3 0.015 260 / 0.5)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TrendingUp,
                      {
                        className: "h-4 w-4",
                        style: { color: "oklch(0.72 0.22 190)" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-foreground", children: [
                      ALL_APPLICATIONS.length,
                      " total"
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: STATUS_STATS.map((s) => {
              const count = ALL_APPLICATIONS.filter(
                (a) => a.status === s.status
              ).length;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setStatusFilter(s.status);
                    setPage(1);
                  },
                  "data-ocid": `applications.status_stat.${s.status}`,
                  className: "flex flex-col gap-1 p-3 rounded-xl text-left transition-smooth hover:scale-[1.02]",
                  style: {
                    background: s.bg,
                    border: `1px solid ${s.border}`,
                    boxShadow: statusFilter === s.status ? `0 0 16px ${s.color}40` : void 0
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-2xl font-display font-bold",
                        style: { color: s.color },
                        children: count
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground", children: s.label })
                  ]
                },
                s.status
              );
            }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-5xl mx-auto space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2 flex-1 px-3 rounded-xl",
            style: {
              background: "oklch(0.14 0.009 255 / 0.8)",
              border: "1px solid oklch(0.28 0.015 260 / 0.4)",
              backdropFilter: "blur(8px)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Search,
                {
                  className: "h-4 w-4 shrink-0",
                  style: { color: "oklch(0.72 0.22 190)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Search by job title or company…",
                  value: search,
                  onChange: (e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  },
                  className: "border-0 bg-transparent shadow-none px-0 focus-visible:ring-0 text-sm",
                  "data-ocid": "applications.search_input"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: statusFilter,
            onValueChange: (v) => {
              setStatusFilter(v);
              setPage(1);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "w-44 h-9 text-sm",
                  "data-ocid": "applications.status_filter.select",
                  style: {
                    background: "oklch(0.14 0.009 255 / 0.8)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.4)",
                    backdropFilter: "blur(8px)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STATUS_FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: f.value, children: f.label }, f.value)) })
            ]
          }
        )
      ] }),
      paginated.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyState,
        {
          icon: Briefcase,
          title: "No applications found",
          description: "You haven't applied to any jobs yet, or no results match your search.",
          action: {
            label: "Find Jobs",
            onClick: () => navigate({ to: "/employee/jobs" })
          },
          "data-ocid": "applications.empty_state"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl overflow-hidden",
          style: {
            background: "oklch(0.14 0.009 255 / 0.8)",
            backdropFilter: "blur(12px)",
            border: "1px solid oklch(0.28 0.015 260 / 0.45)"
          },
          "data-ocid": "applications.table",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TableRow,
              {
                style: {
                  borderBottom: "1px solid oklch(0.22 0.012 260 / 0.5)",
                  background: "oklch(0.12 0.008 255 / 0.6)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-display font-semibold text-foreground", children: "Position" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-display font-semibold text-foreground hidden sm:table-cell", children: "Company" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-display font-semibold text-foreground hidden md:table-cell", children: "Location" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-display font-semibold text-foreground hidden md:table-cell", children: "Applied" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-display font-semibold text-foreground", children: "Status" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: paginated.map((app, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TableRow,
              {
                "data-ocid": `applications.item.${(page - 1) * PAGE_SIZE + i + 1}`,
                className: "cursor-pointer transition-smooth",
                style: {
                  borderBottom: "1px solid oklch(0.2 0.01 260 / 0.3)"
                },
                onClick: () => navigate({
                  to: "/employee/jobs/$jobId",
                  params: { jobId: app.jobId.toString() }
                }),
                onMouseEnter: (e) => {
                  e.currentTarget.style.background = "oklch(0.18 0.012 260 / 0.5)";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.background = "";
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-display font-bold text-sm text-white",
                        style: {
                          background: getCompanyGradient(app.company)
                        },
                        children: getCompanyInitial(app.company)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: app.jobTitle }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground sm:hidden", children: app.company })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "hidden sm:table-cell text-sm text-muted-foreground", children: app.company }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "hidden md:table-cell text-sm text-muted-foreground", children: app.location }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "hidden md:table-cell text-sm text-muted-foreground", children: formatDate(app.appliedAt) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ApplicationStatusBadge,
                    {
                      status: app.status
                    }
                  ) })
                ]
              },
              app.applicationId.toString()
            )) })
          ] })
        }
      ),
      totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between pt-2",
          "data-ocid": "applications.pagination",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Showing ",
              (page - 1) * PAGE_SIZE + 1,
              "–",
              Math.min(page * PAGE_SIZE, filtered.length),
              " of",
              " ",
              filtered.length
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setPage((p) => Math.max(1, p - 1)),
                  disabled: page === 1,
                  "data-ocid": "applications.pagination_prev",
                  className: "p-1.5 rounded-lg transition-smooth disabled:opacity-30",
                  style: {
                    background: "oklch(0.18 0.012 260)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.5)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
                  disabled: page === totalPages,
                  "data-ocid": "applications.pagination_next",
                  className: "p-1.5 rounded-lg transition-smooth disabled:opacity-30",
                  style: {
                    background: "oklch(0.18 0.012 260)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.5)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] }) }) });
}
export {
  MyApplicationsPage as default
};
