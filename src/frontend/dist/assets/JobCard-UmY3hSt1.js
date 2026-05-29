import { r as reactExports, j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
import { S as SkillTag } from "./SkillTag-B1i5fcDw.js";
import { M as MapPin } from "./map-pin-BkrrQ4Wc.js";
import { D as DollarSign } from "./dollar-sign-Ds7SrE6t.js";
import { C as Calendar } from "./calendar-COUjOv3V.js";
import { B as Briefcase } from "./useAuth-OLjIzFBE.js";
import { Z as Zap } from "./zap-CK0f-2JC.js";
import { B as BookmarkCheck } from "./bookmark-check-B5yX-SWK.js";
import { e as Bookmark } from "./Layout-JeuDnHZC.js";
const jobTypeConfig = {
  fullTime: {
    label: "Full-time",
    color: "oklch(0.72 0.22 190)",
    bg: "oklch(0.72 0.22 190 / 0.12)"
  },
  partTime: {
    label: "Part-time",
    color: "oklch(0.7 0.15 45)",
    bg: "oklch(0.7 0.15 45 / 0.12)"
  },
  contract: {
    label: "Contract",
    color: "oklch(0.65 0.18 280)",
    bg: "oklch(0.65 0.18 280 / 0.12)"
  }
};
function formatSalary(min, max) {
  const fmt = (n) => `$${(Number(n) / 1e3).toFixed(0)}k`;
  return `${fmt(min)} – ${fmt(max)}`;
}
function timeAgo(timestamp) {
  const ms = Number(timestamp) / 1e6;
  const diff = Date.now() - ms;
  const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}
function getCompanyColor(name) {
  const colors = [
    "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
    "linear-gradient(135deg, oklch(0.55 0.16 200), oklch(0.65 0.18 150))",
    "linear-gradient(135deg, oklch(0.6 0.18 30), oklch(0.7 0.15 45))",
    "linear-gradient(135deg, oklch(0.52 0.14 310), oklch(0.55 0.18 280))",
    "linear-gradient(135deg, oklch(0.65 0.18 150), oklch(0.58 0.16 190))"
  ];
  const i = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % colors.length;
  return colors[i];
}
function JobCard({
  job,
  index = 0,
  onApply,
  onSave,
  compact = false
}) {
  const [saved, setSaved] = reactExports.useState(false);
  const salaryDisplay = formatSalary(job.salaryMin, job.salaryMax);
  const posted = timeAgo(job.createdAt);
  const typeConfig = jobTypeConfig[job.jobType];
  const companyName = job.companyName ?? "Company";
  const handleSave = (e) => {
    e.stopPropagation();
    setSaved((s) => !s);
    onSave == null ? void 0 : onSave(job.jobId);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "group relative rounded-2xl transition-smooth cursor-pointer animate-fade-in",
      "data-ocid": `job_card.item.${index + 1}`,
      style: {
        background: "linear-gradient(135deg, oklch(0.14 0.009 255 / 0.95) 0%, oklch(0.16 0.012 260 / 0.9) 100%)",
        border: "1px solid oklch(0.28 0.015 260 / 0.5)",
        boxShadow: "0 2px 12px oklch(0 0 0 / 0.25)"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.border = "1px solid oklch(0.5 0.16 280 / 0.5)";
        e.currentTarget.style.boxShadow = "0 8px 32px oklch(0 0 0 / 0.35), 0 0 0 1px oklch(0.5 0.16 280 / 0.15), inset 0 1px 0 oklch(0.72 0.22 190 / 0.06)";
        e.currentTarget.style.transform = "translateY(-2px)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.border = "1px solid oklch(0.28 0.015 260 / 0.5)";
        e.currentTarget.style.boxShadow = "0 2px 12px oklch(0 0 0 / 0.25)";
        e.currentTarget.style.transform = "translateY(0)";
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-x-0 top-0 h-px rounded-t-2xl opacity-0 group-hover:opacity-100 transition-smooth",
            style: {
              background: "linear-gradient(90deg, transparent, oklch(0.5 0.16 280 / 0.8), oklch(0.72 0.22 190), oklch(0.5 0.16 280 / 0.8), transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: compact ? "p-4" : "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-display font-bold text-base text-white shadow-card",
              style: { background: getCompanyColor(companyName) },
              children: companyName[0]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-display font-semibold text-foreground text-base leading-snug group-hover:text-primary transition-smooth",
                  "data-ocid": `job_card.title.${index + 1}`,
                  children: job.title
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "shrink-0 inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold",
                  style: {
                    color: typeConfig.color,
                    background: typeConfig.bg,
                    border: `1px solid ${typeConfig.color}30`
                  },
                  children: typeConfig.label
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5 font-medium", children: companyName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1 mt-2.5", children: [
              { icon: MapPin, text: job.location },
              { icon: DollarSign, text: salaryDisplay },
              { icon: Calendar, text: posted },
              { icon: Briefcase, text: `${job.experienceRequired} exp` }
            ].map(({ icon: Icon, text }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "flex items-center gap-1 text-xs",
                style: { color: "oklch(0.62 0.01 250)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Icon,
                    {
                      className: "h-3 w-3 shrink-0",
                      style: { color: "oklch(0.72 0.22 190 / 0.7)" }
                    }
                  ),
                  text
                ]
              },
              text
            )) }),
            !compact && job.skillsRequired.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 mt-3", children: [
              job.skillsRequired.slice(0, 4).map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillTag, { skill }, skill)),
              job.skillsRequired.length > 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "text-xs self-center px-2 py-0.5 rounded-md",
                  style: {
                    color: "oklch(0.62 0.01 250)",
                    background: "oklch(0.22 0.012 250 / 0.6)"
                  },
                  children: [
                    "+",
                    job.skillsRequired.length - 4,
                    " more"
                  ]
                }
              )
            ] }),
            (onApply || onSave) && !compact && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-4", children: [
              onApply && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: (e) => {
                    e.stopPropagation();
                    onApply(job.jobId);
                  },
                  "data-ocid": `job_card.apply_button.${index + 1}`,
                  className: "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold text-white transition-smooth hover:opacity-90 hover:shadow-card active:scale-95",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5" }),
                    "Apply Now"
                  ]
                }
              ),
              onSave && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleSave,
                  "data-ocid": `job_card.save_button.${index + 1}`,
                  className: "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-medium transition-smooth hover:bg-primary/10 active:scale-95",
                  style: {
                    color: saved ? "oklch(0.72 0.22 190)" : "oklch(0.62 0.01 250)",
                    border: `1px solid ${saved ? "oklch(0.72 0.22 190 / 0.4)" : "oklch(0.28 0.015 260 / 0.6)"}`,
                    background: saved ? "oklch(0.72 0.22 190 / 0.08)" : "transparent"
                  },
                  children: [
                    saved ? /* @__PURE__ */ jsxRuntimeExports.jsx(BookmarkCheck, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-3.5 w-3.5" }),
                    saved ? "Saved" : "Save"
                  ]
                }
              )
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
export {
  JobCard as J
};
