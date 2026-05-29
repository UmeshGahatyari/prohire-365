import { u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
import { L as Layout, B as Button, X } from "./Layout-JeuDnHZC.js";
import { I as Input } from "./input-Bnuh1-dr.js";
import { L as Label } from "./label-Bzq5IhRt.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Aauoc0tp.js";
import { T as Textarea } from "./textarea-Qe8QtrpP.js";
import { u as ue } from "./index-DbnOXoCg.js";
import { P as ProtectedRoute } from "./ProtectedRoute-BSLymTUa.js";
import { a as usePostJob } from "./useQueries-DKzCSuiY.js";
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
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
function StyledInput({
  id,
  label,
  required,
  error,
  icon: Icon,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: id, className: "text-sm font-medium text-foreground/80", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.65 0.21 30)" }, children: "*" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          id,
          ...props,
          className: `${Icon ? "pl-10" : ""} bg-transparent border-border/50 focus:border-accent focus:ring-1 transition-smooth rounded-xl`,
          style: { background: "oklch(0.17 0.01 260)" }
        }
      )
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-xs",
        style: { color: "oklch(0.65 0.21 30)" },
        "data-ocid": `post_job.${id}.field_error`,
        children: error
      }
    )
  ] });
}
function PostJobPage() {
  const navigate = useNavigate();
  const { mutateAsync: postJob, isPending } = usePostJob();
  const [title, setTitle] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [location, setLocation] = reactExports.useState("");
  const [salaryMin, setSalaryMin] = reactExports.useState("");
  const [salaryMax, setSalaryMax] = reactExports.useState("");
  const [experienceRequired, setExperienceRequired] = reactExports.useState("");
  const [jobType, setJobType] = reactExports.useState("fullTime");
  const [deadline, setDeadline] = reactExports.useState("");
  const [skills, setSkills] = reactExports.useState([]);
  const [skillInput, setSkillInput] = reactExports.useState("");
  const [errors, setErrors] = reactExports.useState({});
  const addSkill = (skill) => {
    const trimmed = skill.trim();
    if (!trimmed || skills.includes(trimmed)) return;
    setSkills((prev) => [...prev, trimmed]);
    setSkillInput("");
  };
  const removeSkill = (skill) => setSkills((prev) => prev.filter((s) => s !== skill));
  const validate = () => {
    const e = {};
    if (!title.trim()) e.title = "Job title is required";
    if (!description.trim()) e.description = "Description is required";
    if (!location.trim()) e.location = "Location is required";
    if (!salaryMin || Number(salaryMin) <= 0)
      e.salaryMin = "Minimum salary is required";
    if (!salaryMax || Number(salaryMax) <= Number(salaryMin))
      e.salaryMax = "Max salary must be greater than min";
    if (!experienceRequired) e.experienceRequired = "Experience is required";
    if (!deadline) e.deadline = "Application deadline is required";
    if (skills.length === 0) e.skills = "At least one skill is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const handleSubmit = async () => {
    if (!validate()) return;
    try {
      await postJob({
        title,
        description,
        location,
        salaryMin: BigInt(salaryMin),
        salaryMax: BigInt(salaryMax),
        experienceRequired: BigInt(experienceRequired),
        jobType,
        skillsRequired: skills,
        applicationDeadline: BigInt(new Date(deadline).getTime())
      });
      ue.success("Job posted successfully! Candidates can now apply.");
      navigate({ to: "/employer/jobs" });
    } catch {
      ue.error("Failed to post job. Please try again.");
    }
  };
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
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-6 w-6 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-bold text-foreground", children: "Post a New Job" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Reach 2M+ qualified candidates instantly" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => navigate({ to: "/employer/jobs" }),
                "data-ocid": "post_job.cancel.button",
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
          subtitle: "Tell candidates about this role",
          step: 1
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StyledInput,
        {
          id: "job-title",
          label: "Job Title",
          required: true,
          placeholder: "e.g. Senior Frontend Engineer",
          value: title,
          onChange: (e) => setTitle(e.target.value),
          "data-ocid": "post_job.title.input",
          error: errors.title
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Label,
          {
            htmlFor: "job-description",
            className: "text-sm font-medium text-foreground/80",
            children: [
              "Job Description",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.65 0.21 30)" }, children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "job-description",
            placeholder: "Describe the role, key responsibilities, and what makes this opportunity exciting...",
            value: description,
            onChange: (e) => setDescription(e.target.value),
            rows: 8,
            "data-ocid": "post_job.description.textarea",
            className: "resize-y min-h-[160px] rounded-xl border-border/50 focus:border-accent transition-smooth",
            style: { background: "oklch(0.17 0.01 260)" }
          }
        ),
        errors.description && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-xs",
            style: { color: "oklch(0.65 0.21 30)" },
            "data-ocid": "post_job.description.field_error",
            children: errors.description
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StyledInput,
          {
            id: "job-location",
            label: "Location",
            required: true,
            icon: MapPin,
            placeholder: "e.g. Mumbai / Remote",
            value: location,
            onChange: (e) => setLocation(e.target.value),
            "data-ocid": "post_job.location.input",
            error: errors.location
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "job-type",
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
                    id: "job-type",
                    "data-ocid": "post_job.job_type.select",
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
          title: "Compensation & Experience",
          subtitle: "Set salary range and requirements",
          step: 2
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StyledInput,
          {
            id: "salary-min",
            label: "Min Salary (₹/yr)",
            required: true,
            type: "number",
            icon: DollarSign,
            placeholder: "600000",
            value: salaryMin,
            onChange: (e) => setSalaryMin(e.target.value),
            "data-ocid": "post_job.salary_min.input",
            error: errors.salaryMin
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StyledInput,
          {
            id: "salary-max",
            label: "Max Salary (₹/yr)",
            required: true,
            type: "number",
            icon: DollarSign,
            placeholder: "1200000",
            value: salaryMax,
            onChange: (e) => setSalaryMax(e.target.value),
            "data-ocid": "post_job.salary_max.input",
            error: errors.salaryMax
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StyledInput,
          {
            id: "experience",
            label: "Experience (years)",
            required: true,
            type: "number",
            placeholder: "3",
            min: "0",
            max: "30",
            value: experienceRequired,
            onChange: (e) => setExperienceRequired(e.target.value),
            "data-ocid": "post_job.experience.input",
            error: errors.experienceRequired
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        StyledInput,
        {
          id: "deadline",
          label: "Application Deadline",
          required: true,
          type: "date",
          icon: CalendarDays,
          value: deadline,
          onChange: (e) => setDeadline(e.target.value),
          min: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          "data-ocid": "post_job.deadline.input",
          error: errors.deadline
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          icon: Tag,
          title: "Skills Required",
          subtitle: "Help candidates understand what you're looking for",
          step: 3
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Label,
          {
            htmlFor: "skill-input",
            className: "text-sm font-medium text-foreground/80",
            children: "Add Skills"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "skill-input",
              placeholder: "Type a skill and press Enter...",
              value: skillInput,
              onChange: (e) => setSkillInput(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addSkill(skillInput);
                }
              },
              "data-ocid": "post_job.skill_input.input",
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
              "data-ocid": "post_job.add_skill.button",
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
            "data-ocid": "post_job.skills.field_error",
            children: errors.skills
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground mb-2", children: "Quick add suggestions:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: SUGGESTED_SKILLS.filter((s) => !skills.includes(s)).map(
          (s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => addSkill(s),
              "data-ocid": `post_job.suggested_skill.${s.toLowerCase()}`,
              className: "text-xs px-3 py-1 rounded-full transition-smooth",
              style: {
                background: "oklch(0.17 0.01 260)",
                border: "1px solid oklch(0.28 0.015 260 / 0.6)",
                color: "oklch(0.72 0.22 190)"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.background = "oklch(0.72 0.22 190 / 0.12)";
                e.currentTarget.style.borderColor = "oklch(0.72 0.22 190 / 0.5)";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.background = "oklch(0.17 0.01 260)";
                e.currentTarget.style.borderColor = "oklch(0.28 0.015 260 / 0.6)";
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
                    className: "hover:opacity-70 transition-opacity",
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
          "data-ocid": "post_job.cancel_bottom.button",
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
          "data-ocid": "post_job.submit.submit_button",
          className: "min-w-[160px] rounded-xl font-semibold shadow-lg transition-smooth",
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
              "data-ocid": "post_job.submit.loading_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
                "Publishing..."
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
            " Publish Job"
          ] })
        }
      )
    ] })
  ] }) }) });
}
export {
  PostJobPage as default
};
