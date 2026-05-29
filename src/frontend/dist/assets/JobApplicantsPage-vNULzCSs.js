import { u as useNavigate, a as useParams, j as jsxRuntimeExports, r as reactExports } from "./index-ByYMEgVg.js";
import { L as Layout, B as Button } from "./Layout-JeuDnHZC.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Aauoc0tp.js";
import { S as Skeleton } from "./skeleton-Cbsmm-dn.js";
import { T as Textarea } from "./textarea-Qe8QtrpP.js";
import { u as ue } from "./index-DbnOXoCg.js";
import { A as ApplicationStatusBadge } from "./ApplicationStatusBadge-CK2XtaKA.js";
import { E as EmptyState } from "./EmptyState-B1Y1EQq_.js";
import { P as ProtectedRoute } from "./ProtectedRoute-BSLymTUa.js";
import { S as SkillTag } from "./SkillTag-B1i5fcDw.js";
import { d as useJobDetails, f as useJobApplications, g as useUpdateApplicationStatus } from "./useQueries-DKzCSuiY.js";
import { U as Users } from "./users-C2-7Zdip.js";
import { A as ArrowLeft } from "./arrow-left-Bhp7ehvg.js";
import { M as MapPin } from "./map-pin-BkrrQ4Wc.js";
import { B as Briefcase } from "./useAuth-OLjIzFBE.js";
import { C as Calendar } from "./calendar-COUjOv3V.js";
import { F as FileText } from "./file-text-Ncu6psUp.js";
import { C as ChevronRight } from "./chevron-right-uQ8Lupyx.js";
import "./useCurrentUser-BEN-7rG2.js";
import "./sparkles-mukiyukd.js";
import "./index-DOPMB26m.js";
import "./badge-DE0nWNx8.js";
const MOCK_CANDIDATES = [
  {
    name: "Priya Sharma",
    title: "Senior Frontend Engineer",
    skills: ["React", "TypeScript", "Node.js"],
    location: "Mumbai",
    exp: "5y",
    color: "oklch(0.55 0.18 280)"
  },
  {
    name: "Rohan Mehta",
    title: "Full Stack Developer",
    skills: ["Python", "Django", "PostgreSQL"],
    location: "Bangalore",
    exp: "4y",
    color: "oklch(0.72 0.22 190)"
  },
  {
    name: "Anjali Patel",
    title: "UX/UI Designer",
    skills: ["Figma", "UX Research", "Wireframing"],
    location: "Pune",
    exp: "3y",
    color: "oklch(0.65 0.2 290)"
  },
  {
    name: "Vikram Singh",
    title: "Backend Developer",
    skills: ["Java", "Spring Boot", "AWS"],
    location: "Delhi",
    exp: "6y",
    color: "oklch(0.7 0.2 150)"
  },
  {
    name: "Deepa Nair",
    title: "DevOps Engineer",
    skills: ["React", "GraphQL", "Docker"],
    location: "Chennai",
    exp: "4y",
    color: "oklch(0.65 0.18 230)"
  }
];
const STATUS_COUNTS_LABEL = {
  applied: {
    label: "Applied",
    color: "oklch(0.65 0.18 230)",
    bg: "oklch(0.65 0.18 230 / 0.1)"
  },
  shortlisted: {
    label: "Shortlisted",
    color: "oklch(0.75 0.16 65)",
    bg: "oklch(0.75 0.16 65 / 0.1)"
  },
  interview: {
    label: "Interview",
    color: "oklch(0.65 0.2 290)",
    bg: "oklch(0.65 0.2 290 / 0.1)"
  },
  offer: {
    label: "Offer",
    color: "oklch(0.7 0.2 150)",
    bg: "oklch(0.7 0.2 150 / 0.1)"
  },
  rejected: {
    label: "Rejected",
    color: "oklch(0.62 0.2 28)",
    bg: "oklch(0.62 0.2 28 / 0.1)"
  }
};
function ApplicantCard({
  application,
  index
}) {
  const { mutateAsync: updateStatus, isPending } = useUpdateApplicationStatus();
  const [selectedStatus, setSelectedStatus] = reactExports.useState(
    application.status
  );
  const [notes, setNotes] = reactExports.useState(application.notes ?? "");
  const [showNotes, setShowNotes] = reactExports.useState(false);
  const candidate = MOCK_CANDIDATES[index % MOCK_CANDIDATES.length];
  const initials = candidate.name.split(" ").map((n) => n[0]).join("");
  const appliedDate = new Date(
    Number(application.appliedAt) / 1e6
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
  const handleUpdateStatus = async () => {
    try {
      await updateStatus({
        applicationId: application.applicationId,
        status: selectedStatus,
        notes: notes || null
      });
      ue.success("Status updated successfully");
    } catch {
      ue.error("Failed to update status");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl overflow-hidden group transition-smooth",
      style: {
        background: "oklch(0.13 0.008 260)",
        border: "1px solid oklch(0.28 0.015 260 / 0.5)"
      },
      "data-ocid": `applicants.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-px w-full",
            style: {
              background: `linear-gradient(90deg, transparent, ${candidate.color}, transparent)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-sm font-bold text-white shadow-lg",
              style: {
                background: `linear-gradient(135deg, ${candidate.color}, ${candidate.color.replace("0.55 ", "0.72 ").replace("0.65 ", "0.8 ")})`
              },
              children: initials
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: candidate.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: candidate.title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ApplicationStatusBadge,
                {
                  status: application.status
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
                " ",
                candidate.location
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-3 w-3" }),
                " ",
                candidate.exp,
                " exp"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3" }),
                " Applied ",
                appliedDate
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mt-2.5", children: candidate.skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillTag, { skill: s }, s)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-4 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: selectedStatus,
                  onValueChange: (v) => setSelectedStatus(v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        className: "w-[155px] h-8 text-xs rounded-xl border-border/50",
                        style: { background: "oklch(0.17 0.01 260)" },
                        "data-ocid": `applicants.status_select.${index + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "applied", children: "Applied" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "shortlisted", children: "Shortlisted" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "interview", children: "Interview" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "rejected", children: "Rejected" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "offer", children: "Offer" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  size: "sm",
                  variant: "outline",
                  className: "h-8 text-xs rounded-xl border-border/50 hover:bg-primary/10 hover:border-primary/40",
                  onClick: () => setShowNotes((p) => !p),
                  "data-ocid": `applicants.toggle_notes.${index + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3 w-3 mr-1.5" }),
                    showNotes ? "Hide Notes" : "Add Notes"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  size: "sm",
                  onClick: handleUpdateStatus,
                  disabled: isPending,
                  "data-ocid": `applicants.update_status.${index + 1}`,
                  className: "h-8 text-xs rounded-xl font-semibold",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                    color: "white",
                    border: "none"
                  },
                  children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
                    " ",
                    "Saving..."
                  ] }) : "Update Status"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "h-8 text-xs font-medium flex items-center gap-1 transition-smooth",
                  style: { color: "oklch(0.72 0.22 190)" },
                  "data-ocid": `applicants.view_profile.${index + 1}`,
                  children: [
                    "View Profile ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" })
                  ]
                }
              )
            ] }),
            showNotes && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                placeholder: "Add internal notes about this applicant...",
                value: notes,
                onChange: (e) => setNotes(e.target.value),
                rows: 3,
                className: "text-sm rounded-xl border-border/50 focus:border-accent transition-smooth",
                style: { background: "oklch(0.17 0.01 260)" },
                "data-ocid": `applicants.notes.${index + 1}`
              }
            ) })
          ] })
        ] }) })
      ]
    }
  );
}
function JobApplicantsPage() {
  const navigate = useNavigate();
  const params = useParams({ strict: false });
  const jobId = BigInt(params.jobId ?? "0");
  const { data: job, isLoading: jobLoading } = useJobDetails(jobId);
  const { data: applications, isLoading: appsLoading } = useJobApplications(jobId);
  const isLoading = jobLoading || appsLoading;
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
                background: "radial-gradient(circle, oklch(0.72 0.22 190), transparent 70%)"
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
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-bold text-foreground", children: job ? `Applicants — ${job.title}` : "Job Applicants" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: applications ? `${applications.length} application${applications.length !== 1 ? "s" : ""} received` : "Loading..." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => navigate({ to: "/employer/jobs" }),
                "data-ocid": "applicants.back.button",
                className: "rounded-xl border-border/50 hover:bg-primary/10 hover:border-primary/40",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
                  " Back to Jobs"
                ]
              }
            )
          ] })
        ]
      }
    ),
    applications && applications.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex flex-wrap gap-2",
        "data-ocid": "applicants.status_summary.section",
        children: [
          "applied",
          "shortlisted",
          "interview",
          "offer",
          "rejected"
        ].map((s) => {
          const count = applications.filter((a) => a.status === s).length;
          if (count === 0) return null;
          const cfg = STATUS_COUNTS_LABEL[s];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold",
              style: {
                color: cfg.color,
                background: cfg.bg,
                border: `1px solid ${cfg.color}40`
              },
              "data-ocid": `applicants.status_pill.${s}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm", children: count }),
                " ",
                cfg.label
              ]
            },
            s
          );
        })
      }
    ),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "applicants.loading_state", children: ["a", "b", "c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "rounded-2xl p-5",
        style: {
          background: "oklch(0.13 0.008 260)",
          border: "1px solid oklch(0.28 0.015 260 / 0.5)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-12 h-12 rounded-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-64" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-48" })
          ] })
        ] })
      },
      k
    )) }) : !applications || applications.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: Users,
        title: "No applicants yet",
        description: "Share your job listing to start receiving applications from qualified candidates.",
        "data-ocid": "applicants.empty_state"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "applicants.list", children: applications.map((app, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ApplicantCard,
      {
        application: app,
        index: i
      },
      String(app.applicationId)
    )) })
  ] }) }) });
}
export {
  JobApplicantsPage as default
};
