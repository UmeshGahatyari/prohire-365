import { u as useNavigate, a as useParams, r as reactExports, j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
import { L as Layout, B as Button, X } from "./Layout-JeuDnHZC.js";
import { I as Input } from "./input-Bnuh1-dr.js";
import { L as Label } from "./label-Bzq5IhRt.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Aauoc0tp.js";
import { S as Skeleton } from "./skeleton-Cbsmm-dn.js";
import { T as Textarea } from "./textarea-Qe8QtrpP.js";
import { u as ue } from "./index-DbnOXoCg.js";
import { P as ProtectedRoute } from "./ProtectedRoute-BSLymTUa.js";
import { d as useJobDetails, e as useUpdateJob } from "./useQueries-DKzCSuiY.js";
import { S as SquarePen } from "./square-pen-DpKia07D.js";
import { B as Briefcase } from "./useAuth-OLjIzFBE.js";
import { M as MapPin } from "./map-pin-BkrrQ4Wc.js";
import { D as DollarSign } from "./dollar-sign-Ds7SrE6t.js";
import { C as CalendarDays } from "./calendar-days-DjaOTfRx.js";
import { T as Tag } from "./tag-DHQVGnc7.js";
import { P as Plus } from "./plus-Dcf5H1xy.js";
import { S as Sparkles } from "./sparkles-mukiyukd.js";
import "./useCurrentUser-BEN-7rG2.js";
import "./index-DiKJEy-t.js";
import "./index-DOPMB26m.js";
const SUGGESTED_SKILLS = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "SQL",
  "Java",
  "Go",
  "Kubernetes",
  "GraphQL",
  "Figma"
];
function GlassSection({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "rounded-2xl p-6 space-y-5",
      style: {
        background: "oklch(0.13 0.008 260)",
        border: "1px solid oklch(0.28 0.015 260 / 0.5)"
      },
      children
    }
  );
}
function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  step
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-start gap-4 pb-4",
      style: { borderBottom: "1px solid oklch(0.28 0.015 260 / 0.4)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold text-white shadow-lg",
            style: {
              background: "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))"
            },
            children: step
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4", style: { color: "oklch(0.72 0.22 190)" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: subtitle })
        ] })
      ]
    }
  );
}
function EditJobPage() {
  const navigate = useNavigate();
  const params = useParams({ strict: false });
  const jobId = BigInt(params.jobId ?? "0");
  const { data: job, isLoading } = useJobDetails(jobId);
  const { mutateAsync: updateJob, isPending } = useUpdateJob();
  const [title, setTitle] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [location, setLocation] = reactExports.useState("");
  const [salaryMin, setSalaryMin] = reactExports.useState("");
  const [salaryMax, setSalaryMax] = reactExports.useState("");
  const [experienceRequired, setExperienceRequired] = reactExports.useState("");
  const [jobType, setJobType] = reactExports.useState("fullTime");
  const [status, setStatus] = reactExports.useState("active");
  const [deadline, setDeadline] = reactExports.useState("");
  const [skills, setSkills] = reactExports.useState([]);
  const [skillInput, setSkillInput] = reactExports.useState("");
  const [errors, setErrors] = reactExports.useState({});
  reactExports.useEffect(() => {
    if (!job) return;
    setTitle(job.title);
    setDescription(job.description);
    setLocation(job.location);
    setSalaryMin(String(job.salaryMin));
    setSalaryMax(String(job.salaryMax));
    setExperienceRequired(String(job.experienceRequired));
    setJobType(job.jobType);
    setStatus(job.status);
    setSkills(job.skillsRequired);
    const dl = new Date(Number(job.applicationDeadline) / 1e6);
    setDeadline(dl.toISOString().split("T")[0]);
  }, [job]);
  const addSkill = (skill) => {
    const trimmed = skill.trim();
    if (!trimmed || skills.includes(trimmed)) return;
    setSkills((prev) => [...prev, trimmed]);
    setSkillInput("");
  };
  const removeSkill = (s) => setSkills((prev) => prev.filter((x) => x !== s));
  const validate = () => {
    const e = {};
    if (!title.trim()) e.title = "Job title is required";
    if (!description.trim()) e.description = "Description is required";
    if (!location.trim()) e.location = "Location is required";
    if (!salaryMin) e.salaryMin = "Min salary required";
    if (!salaryMax || Number(salaryMax) <= Number(salaryMin))
      e.salaryMax = "Max salary must exceed min";
    if (!experienceRequired) e.experienceRequired = "Experience required";
    if (!deadline) e.deadline = "Deadline required";
    if (skills.length === 0) e.skills = "At least one skill required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const handleSubmit = async () => {
    if (!validate()) return;
    try {
      await updateJob({
        jobId,
        title,
        description,
        location,
        salaryMin: BigInt(salaryMin),
        salaryMax: BigInt(salaryMax),
        experienceRequired: BigInt(experienceRequired),
        jobType,
        skillsRequired: skills,
        status,
        applicationDeadline: BigInt(new Date(deadline).getTime())
      });
      ue.success("Job updated successfully!");
      navigate({ to: "/employer/jobs" });
    } catch {
      ue.error("Failed to update job. Please try again.");
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { requiredRole: "employer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { showSidebar: true, sidebarRole: "employer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-6 max-w-3xl mx-auto space-y-6",
        "data-ocid": "edit_job.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-2xl p-6 space-y-4",
              style: {
                background: "oklch(0.13 0.008 260)",
                border: "1px solid oklch(0.28 0.015 260 / 0.5)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-64" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-48" })
              ]
            }
          ),
          ["a", "b", "c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "rounded-2xl p-6 space-y-4",
              style: {
                background: "oklch(0.13 0.008 260)",
                border: "1px solid oklch(0.28 0.015 260 / 0.5)"
              },
              children: ["x", "y", "z"].map((j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full" }, j))
            },
            k
          ))
        ]
      }
    ) }) });
  }
  if (!job) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { requiredRole: "employer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { showSidebar: true, sidebarRole: "employer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "text-center py-16 text-muted-foreground",
        "data-ocid": "edit_job.error_state",
        children: "Job not found."
      }
    ) }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { requiredRole: "employer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { showSidebar: true, sidebarRole: "employer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-3xl mx-auto space-y-6", children: [
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
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "h-6 w-6 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-bold text-foreground", children: "Edit Job Listing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground truncate max-w-xs", children: [
                  "Editing: ",
                  job.title
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => navigate({ to: "/employer/jobs" }),
                "data-ocid": "edit_job.cancel.button",
                className: "rounded-xl border-border/50 hover:bg-primary/10 hover:border-primary/40",
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          icon: Briefcase,
          title: "Basic Information",
          subtitle: "Update role details",
          step: 1
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Label,
          {
            htmlFor: "edit-title",
            className: "text-sm font-medium text-foreground/80",
            children: "Job Title"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "edit-title",
            value: title,
            onChange: (e) => setTitle(e.target.value),
            "data-ocid": "edit_job.title.input",
            className: "rounded-xl border-border/50 focus:border-accent transition-smooth",
            style: { background: "oklch(0.17 0.01 260)" }
          }
        ),
        errors.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-xs",
            style: { color: "oklch(0.65 0.21 30)" },
            "data-ocid": "edit_job.title.field_error",
            children: errors.title
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Label,
          {
            htmlFor: "edit-description",
            className: "text-sm font-medium text-foreground/80",
            children: "Job Description"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "edit-description",
            value: description,
            onChange: (e) => setDescription(e.target.value),
            rows: 8,
            "data-ocid": "edit_job.description.textarea",
            className: "resize-y min-h-[160px] rounded-xl border-border/50 focus:border-accent transition-smooth",
            style: { background: "oklch(0.17 0.01 260)" }
          }
        ),
        errors.description && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-xs",
            style: { color: "oklch(0.65 0.21 30)" },
            "data-ocid": "edit_job.description.field_error",
            children: errors.description
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "edit-location",
              className: "text-sm font-medium text-foreground/80",
              children: "Location"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "edit-location",
                value: location,
                onChange: (e) => setLocation(e.target.value),
                "data-ocid": "edit_job.location.input",
                className: "pl-10 rounded-xl border-border/50 focus:border-accent transition-smooth",
                style: { background: "oklch(0.17 0.01 260)" }
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "edit-job-type",
              className: "text-sm font-medium text-foreground/80",
              children: "Job Type"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: jobType,
              onValueChange: (v) => setJobType(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    id: "edit-job-type",
                    "data-ocid": "edit_job.job_type.select",
                    className: "rounded-xl border-border/50",
                    style: { background: "oklch(0.17 0.01 260)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "fullTime", children: "Full-time" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "partTime", children: "Part-time" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "contract", children: "Contract" })
                ] })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          icon: DollarSign,
          title: "Compensation & Status",
          subtitle: "Update salary range and listing status",
          step: 2
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-4", children: [
        [
          {
            id: "edit-salary-min",
            label: "Min Salary",
            value: salaryMin,
            onChange: setSalaryMin,
            ocid: "edit_job.salary_min.input",
            icon: DollarSign,
            err: errors.salaryMin
          },
          {
            id: "edit-salary-max",
            label: "Max Salary",
            value: salaryMax,
            onChange: setSalaryMax,
            ocid: "edit_job.salary_max.input",
            icon: DollarSign,
            err: errors.salaryMax
          },
          {
            id: "edit-experience",
            label: "Experience (yrs)",
            value: experienceRequired,
            onChange: setExperienceRequired,
            ocid: "edit_job.experience.input",
            icon: null,
            err: errors.experienceRequired
          }
        ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: f.id,
              className: "text-sm font-medium text-foreground/80",
              children: f.label
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            f.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: f.id,
                type: "number",
                value: f.value,
                onChange: (e) => f.onChange(e.target.value),
                "data-ocid": f.ocid,
                className: `${f.icon ? "pl-10" : ""} rounded-xl border-border/50 focus:border-accent transition-smooth`,
                style: { background: "oklch(0.17 0.01 260)" }
              }
            )
          ] }),
          f.err && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs",
              style: { color: "oklch(0.65 0.21 30)" },
              children: f.err
            }
          )
        ] }, f.id)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "edit-status",
              className: "text-sm font-medium text-foreground/80",
              children: "Status"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: status,
              onValueChange: (v) => setStatus(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    id: "edit-status",
                    "data-ocid": "edit_job.status.select",
                    className: "rounded-xl border-border/50",
                    style: { background: "oklch(0.17 0.01 260)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "active", children: "Active" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "draft", children: "Draft" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "closed", children: "Closed" })
                ] })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xs space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Label,
          {
            htmlFor: "edit-deadline",
            className: "text-sm font-medium text-foreground/80",
            children: "Application Deadline"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "edit-deadline",
              type: "date",
              value: deadline,
              onChange: (e) => setDeadline(e.target.value),
              "data-ocid": "edit_job.deadline.input",
              className: "pl-10 rounded-xl border-border/50 focus:border-accent transition-smooth",
              style: { background: "oklch(0.17 0.01 260)" }
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          icon: Tag,
          title: "Skills Required",
          subtitle: "Update required skill set",
          step: 3
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Label,
          {
            htmlFor: "edit-skill-input",
            className: "text-sm font-medium text-foreground/80",
            children: "Add Skills"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "edit-skill-input",
              placeholder: "Type a skill and press Enter",
              value: skillInput,
              onChange: (e) => setSkillInput(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addSkill(skillInput);
                }
              },
              "data-ocid": "edit_job.skill_input.input",
              className: "rounded-xl border-border/50 focus:border-accent transition-smooth flex-1",
              style: { background: "oklch(0.17 0.01 260)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: () => addSkill(skillInput),
              "data-ocid": "edit_job.add_skill.button",
              className: "rounded-xl border-border/50 hover:bg-primary/10 hover:border-primary/40 px-4",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" })
            }
          )
        ] }),
        errors.skills && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-xs",
            style: { color: "oklch(0.65 0.21 30)" },
            "data-ocid": "edit_job.skills.field_error",
            children: errors.skills
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground mb-2", children: "Suggestions:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: SUGGESTED_SKILLS.filter((s) => !skills.includes(s)).map(
          (s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => addSkill(s),
              className: "text-xs px-3 py-1 rounded-full transition-smooth",
              style: {
                background: "oklch(0.17 0.01 260)",
                border: "1px solid oklch(0.28 0.015 260 / 0.6)",
                color: "oklch(0.72 0.22 190)"
              },
              children: [
                "+ ",
                s
              ]
            },
            s
          )
        ) })
      ] }),
      skills.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex flex-wrap gap-2 p-4 rounded-xl",
          style: {
            background: "oklch(0.17 0.01 260)",
            border: "1px solid oklch(0.28 0.015 260 / 0.4)"
          },
          children: skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold",
              style: {
                background: "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.2), oklch(0.72 0.22 190 / 0.15))",
                border: "1px solid oklch(0.72 0.22 190 / 0.35)",
                color: "oklch(0.82 0.15 190)"
              },
              children: [
                s,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => removeSkill(s),
                    className: "hover:opacity-70",
                    "aria-label": `Remove ${s}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
                  }
                )
              ]
            },
            s
          ))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "outline",
          onClick: () => navigate({ to: "/employer/jobs" }),
          "data-ocid": "edit_job.cancel_bottom.button",
          className: "rounded-xl border-border/50 hover:bg-primary/10",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          onClick: handleSubmit,
          disabled: isPending,
          "data-ocid": "edit_job.submit.submit_button",
          className: "min-w-[160px] rounded-xl font-semibold shadow-lg",
          style: {
            background: "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
            color: "white",
            border: "none",
            boxShadow: "0 4px 20px oklch(0.72 0.22 190 / 0.3)"
          },
          children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "flex items-center gap-2",
              "data-ocid": "edit_job.submit.loading_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
                "Saving..."
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
            " Save Changes"
          ] })
        }
      )
    ] })
  ] }) }) });
}
export {
  EditJobPage as default
};
