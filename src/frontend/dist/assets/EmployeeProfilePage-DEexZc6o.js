import { r as reactExports, j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
import { I as Input } from "./input-Bnuh1-dr.js";
import { L as Label } from "./label-Bzq5IhRt.js";
import { T as Textarea } from "./textarea-Qe8QtrpP.js";
import { u as ue } from "./index-DbnOXoCg.js";
import { L as Layout, X } from "./Layout-JeuDnHZC.js";
import { P as ProtectedRoute } from "./ProtectedRoute-BSLymTUa.js";
import { S as SkillTag } from "./SkillTag-B1i5fcDw.js";
import { C as CircleCheck } from "./circle-check-BDUMJT2q.js";
import { c as createLucideIcon, U as User, B as Briefcase } from "./useAuth-OLjIzFBE.js";
import { S as Save } from "./save-CJH1Cj4y.js";
import { P as Phone } from "./phone-uC1LFejI.js";
import { M as MapPin } from "./map-pin-BkrrQ4Wc.js";
import { Z as Zap } from "./zap-CK0f-2JC.js";
import { P as Plus } from "./plus-Dcf5H1xy.js";
import { T as Trash2 } from "./trash-2-DUAW2PJ4.js";
import { F as FileText } from "./file-text-Ncu6psUp.js";
import "./index-DiKJEy-t.js";
import "./useCurrentUser-BEN-7rG2.js";
import "./sparkles-mukiyukd.js";
import "./badge-DE0nWNx8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
];
const Pen = createLucideIcon("pen", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode);
const INITIAL_PROFILE = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  phone: "+1 (415) 555-0192",
  location: "San Francisco, CA",
  professionalSummary: "Full-stack engineer with 5+ years of experience building scalable web applications. Passionate about clean code, performance optimization, and delivering exceptional user experiences. Strong background in React, TypeScript, and Node.js.",
  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "AWS"
  ],
  experience: [
    {
      title: "Senior Frontend Engineer",
      company: "CloudPeak Systems",
      startDate: "2022-03",
      endDate: void 0,
      description: "Led development of core product features, mentored junior engineers, and improved frontend performance by 40%."
    },
    {
      title: "Frontend Developer",
      company: "Nexus Technologies",
      startDate: "2019-06",
      endDate: "2022-02",
      description: "Built and maintained React applications for enterprise clients. Introduced TypeScript and improved test coverage from 20% to 80%."
    }
  ],
  resumeFileName: "alex_johnson_resume.pdf"
};
const COMPLETION_ITEMS = [
  (p) => !!p.name,
  (p) => !!p.email,
  (p) => !!p.phone,
  (p) => !!p.location,
  (p) => !!p.professionalSummary,
  (p) => p.skills.length > 0,
  (p) => p.experience.length > 0,
  (p) => !!p.resumeFileName
];
function calcCompletion(profile) {
  return Math.round(
    COMPLETION_ITEMS.filter((fn) => fn(profile)).length / COMPLETION_ITEMS.length * 100
  );
}
function formatDateRange(start, end) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const fmt = (d) => {
    const [y, m] = d.split("-");
    return `${months[Number(m) - 1]} ${y}`;
  };
  return `${fmt(start)} – ${end ? fmt(end) : "Present"}`;
}
const glassCard = {
  background: "oklch(0.14 0.009 255 / 0.85)",
  backdropFilter: "blur(12px)",
  border: "1px solid oklch(0.28 0.015 260 / 0.45)"
};
const formInput = {
  background: "oklch(0.18 0.012 260)",
  border: "1px solid oklch(0.3 0.012 260 / 0.6)"
};
function SectionHeader({
  icon: Icon,
  title
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-8 h-8 rounded-lg flex items-center justify-center",
        style: {
          background: "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.2), oklch(0.72 0.22 190 / 0.15))",
          border: "1px solid oklch(0.5 0.16 280 / 0.25)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4", style: { color: "oklch(0.72 0.22 190)" } })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-base text-foreground", children: title })
  ] });
}
function EmployeeProfilePage() {
  const [profile, setProfile] = reactExports.useState(INITIAL_PROFILE);
  const [editingInfo, setEditingInfo] = reactExports.useState(false);
  const [draft, setDraft] = reactExports.useState(INITIAL_PROFILE);
  const [newSkill, setNewSkill] = reactExports.useState("");
  const [editingExpIdx, setEditingExpIdx] = reactExports.useState(null);
  const [expDraft, setExpDraft] = reactExports.useState(null);
  const [addingExp, setAddingExp] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  const completion = calcCompletion(profile);
  const saveInfo = () => {
    setProfile(draft);
    setEditingInfo(false);
    ue.success("Profile updated successfully");
  };
  const addSkill = () => {
    const t = newSkill.trim();
    if (!t || profile.skills.includes(t)) return;
    setProfile((p) => ({ ...p, skills: [...p.skills, t] }));
    setNewSkill("");
  };
  const removeSkill = (skill) => setProfile((p) => ({ ...p, skills: p.skills.filter((s) => s !== skill) }));
  const startEditExp = (idx) => {
    setEditingExpIdx(idx);
    setExpDraft({ ...profile.experience[idx] });
  };
  const saveExp = () => {
    if (!expDraft || editingExpIdx === null) return;
    const u = [...profile.experience];
    u[editingExpIdx] = expDraft;
    setProfile((p) => ({ ...p, experience: u }));
    setEditingExpIdx(null);
    setExpDraft(null);
    ue.success("Experience updated");
  };
  const deleteExp = (idx) => {
    setProfile((p) => ({
      ...p,
      experience: p.experience.filter((_, i) => i !== idx)
    }));
    ue.success("Experience removed");
  };
  const addExp = () => {
    if (!expDraft) return;
    setProfile((p) => ({ ...p, experience: [...p.experience, expDraft] }));
    setAddingExp(false);
    setExpDraft(null);
    ue.success("Experience added");
  };
  const handleResumeUpload = (e) => {
    var _a;
    const f = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!f) return;
    setProfile((p) => ({ ...p, resumeFileName: f.name }));
    ue.success("Resume uploaded successfully");
  };
  const completionItems = [
    { label: "Basic info", done: !!(profile.name && profile.email) },
    { label: "Contact details", done: !!(profile.phone && profile.location) },
    { label: "Professional summary", done: !!profile.professionalSummary },
    { label: "Work experience", done: profile.experience.length > 0 },
    { label: "Skills", done: profile.skills.length > 0 },
    { label: "Resume upload", done: !!profile.resumeFileName }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { requiredRole: "employee", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { showSidebar: true, sidebarRole: "employee", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative overflow-hidden",
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl mx-auto px-6 py-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-20 h-20 rounded-2xl flex items-center justify-center font-display font-bold text-3xl text-white shadow-glow-primary",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))"
                    },
                    children: profile.name[0]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "svg",
                  {
                    className: "absolute -inset-1.5 w-[88px] h-[88px] -rotate-90",
                    viewBox: "0 0 88 88",
                    role: "img",
                    "aria-label": "Profile completion",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("title", { children: [
                        "Profile completion ",
                        completion,
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "circle",
                        {
                          cx: "44",
                          cy: "44",
                          r: "40",
                          fill: "none",
                          stroke: "oklch(0.25 0.012 255)",
                          strokeWidth: "3"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "circle",
                        {
                          cx: "44",
                          cy: "44",
                          r: "40",
                          fill: "none",
                          strokeWidth: "3",
                          strokeLinecap: "round",
                          strokeDasharray: `${2 * Math.PI * 40}`,
                          strokeDashoffset: `${2 * Math.PI * 40 * (1 - completion / 100)}`,
                          style: {
                            stroke: "oklch(0.72 0.22 190)",
                            filter: "drop-shadow(0 0 4px oklch(0.72 0.22 190 / 0.7))",
                            transition: "stroke-dashoffset 0.5s ease"
                          }
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl text-foreground", children: profile.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-1", children: [
                  profile.location,
                  " · ",
                  profile.email
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold",
                      style: {
                        background: "oklch(0.72 0.22 190 / 0.15)",
                        color: "oklch(0.72 0.22 190)",
                        border: "1px solid oklch(0.72 0.22 190 / 0.3)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
                        completion,
                        "% Complete"
                      ]
                    }
                  ),
                  completion < 100 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                    8 - completionItems.filter((i) => i.done).length,
                    " items left"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: completionItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs",
                style: item.done ? {
                  background: "oklch(0.72 0.22 190 / 0.1)",
                  color: "oklch(0.72 0.22 190)",
                  border: "1px solid oklch(0.72 0.22 190 / 0.25)"
                } : {
                  background: "oklch(0.18 0.012 260 / 0.5)",
                  color: "oklch(0.45 0.01 250)",
                  border: "1px solid oklch(0.28 0.012 260 / 0.3)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3" }),
                  item.label
                ]
              },
              item.label
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-4xl mx-auto space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-6",
          style: glassCard,
          "data-ocid": "profile.personal_info.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { icon: User, title: "Personal Information" }),
              !editingInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setDraft(profile);
                    setEditingInfo(true);
                  },
                  "data-ocid": "profile.edit_info.button",
                  className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-smooth",
                  style: {
                    background: "oklch(0.55 0.18 280 / 0.12)",
                    color: "oklch(0.72 0.22 190)",
                    border: "1px solid oklch(0.5 0.16 280 / 0.3)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "h-3.5 w-3.5" }),
                    " Edit"
                  ]
                }
              )
            ] }),
            editingInfo ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                {
                  id: "name",
                  label: "Full Name",
                  value: draft.name,
                  key: "name"
                },
                {
                  id: "email",
                  label: "Email",
                  value: draft.email,
                  key: "email"
                },
                {
                  id: "phone",
                  label: "Phone",
                  value: draft.phone,
                  key: "phone"
                },
                {
                  id: "location",
                  label: "Location",
                  value: draft.location,
                  key: "location"
                }
              ].map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: field.id,
                    className: "text-xs font-medium mb-1.5 block text-muted-foreground",
                    children: field.label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: field.id,
                    value: field.value,
                    onChange: (e) => setDraft((d) => ({
                      ...d,
                      [field.key]: e.target.value
                    })),
                    className: "text-sm",
                    style: formInput,
                    "data-ocid": `profile.${field.id}.input`
                  }
                )
              ] }, field.id)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: "summary",
                    className: "text-xs font-medium mb-1.5 block text-muted-foreground",
                    children: "Professional Summary"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "summary",
                    rows: 4,
                    value: draft.professionalSummary,
                    onChange: (e) => setDraft((d) => ({
                      ...d,
                      professionalSummary: e.target.value
                    })),
                    "data-ocid": "profile.summary.textarea",
                    placeholder: "Write a brief professional summary…",
                    className: "text-sm resize-none",
                    style: formInput
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: saveInfo,
                    "data-ocid": "profile.save_info.button",
                    className: "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-smooth hover:opacity-90",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                      color: "white"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
                      " Save Changes"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setEditingInfo(false),
                    "data-ocid": "profile.cancel_edit.button",
                    className: "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-smooth",
                    style: {
                      background: "oklch(0.18 0.012 260)",
                      color: "oklch(0.62 0.01 250)",
                      border: "1px solid oklch(0.28 0.015 260 / 0.5)"
                    },
                    children: "Cancel"
                  }
                )
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3 text-sm", children: [
                [
                  { icon: User, text: profile.name },
                  { icon: Phone, text: profile.phone },
                  { icon: MapPin, text: profile.location }
                ].map(({ icon: Icon, text }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2.5 px-3 py-2.5 rounded-xl",
                    style: {
                      background: "oklch(0.18 0.012 260 / 0.5)",
                      border: "1px solid oklch(0.25 0.012 260 / 0.4)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Icon,
                        {
                          className: "h-4 w-4 shrink-0",
                          style: { color: "oklch(0.72 0.22 190)" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground truncate", children: text })
                    ]
                  },
                  text
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex items-center gap-2.5 px-3 py-2.5 rounded-xl",
                    style: {
                      background: "oklch(0.18 0.012 260 / 0.5)",
                      border: "1px solid oklch(0.25 0.012 260 / 0.4)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground truncate text-xs", children: profile.email })
                  }
                )
              ] }),
              profile.professionalSummary && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "p-4 rounded-xl text-sm text-muted-foreground leading-relaxed",
                  style: {
                    background: "oklch(0.17 0.01 260 / 0.4)",
                    border: "1px solid oklch(0.24 0.012 260 / 0.3)"
                  },
                  children: profile.professionalSummary
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-6",
          style: glassCard,
          "data-ocid": "profile.skills.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { icon: Zap, title: "Skills" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: profile.skills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-1 rounded-full pl-1 pr-1",
                style: {
                  background: "oklch(0.18 0.012 260 / 0.7)",
                  border: "1px solid oklch(0.28 0.015 260 / 0.4)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SkillTag, { skill }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => removeSkill(skill),
                      "data-ocid": `profile.remove_skill.${skill}`,
                      className: "flex items-center justify-center w-4 h-4 rounded-full transition-smooth hover:bg-destructive/20",
                      "aria-label": `Remove ${skill}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-2.5 w-2.5 text-muted-foreground hover:text-destructive" })
                    }
                  )
                ]
              },
              skill
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Add a skill…",
                  value: newSkill,
                  onChange: (e) => setNewSkill(e.target.value),
                  onKeyDown: (e) => e.key === "Enter" && addSkill(),
                  "data-ocid": "profile.add_skill.input",
                  className: "max-w-xs text-sm",
                  style: formInput
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: addSkill,
                  "data-ocid": "profile.add_skill.button",
                  className: "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-smooth",
                  style: {
                    background: "oklch(0.55 0.18 280 / 0.15)",
                    color: "oklch(0.72 0.22 190)",
                    border: "1px solid oklch(0.5 0.16 280 / 0.3)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
                    " Add"
                  ]
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-6",
          style: glassCard,
          "data-ocid": "profile.experience.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { icon: Briefcase, title: "Work Experience" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setAddingExp(true);
                    setExpDraft({
                      title: "",
                      company: "",
                      startDate: "",
                      endDate: ""
                    });
                  },
                  "data-ocid": "profile.add_experience.button",
                  className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-smooth",
                  style: {
                    background: "oklch(0.55 0.18 280 / 0.12)",
                    color: "oklch(0.72 0.22 190)",
                    border: "1px solid oklch(0.5 0.16 280 / 0.3)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
                    " Add"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
              profile.experience.map((exp, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "data-ocid": `profile.experience.item.${i + 1}`,
                  children: editingExpIdx === i ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ExpForm,
                    {
                      expDraft,
                      setExpDraft,
                      onSave: saveExp,
                      onCancel: () => {
                        setEditingExpIdx(null);
                        setExpDraft(null);
                      },
                      saveOcid: "profile.save_experience.button",
                      cancelOcid: "profile.cancel_experience.button"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center shrink-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-9 h-9 rounded-xl flex items-center justify-center",
                          style: {
                            background: "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.2), oklch(0.72 0.22 190 / 0.15))",
                            border: "1px solid oklch(0.5 0.16 280 / 0.25)"
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Briefcase,
                            {
                              className: "h-4 w-4",
                              style: { color: "oklch(0.72 0.22 190)" }
                            }
                          )
                        }
                      ),
                      i < profile.experience.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-px flex-1 mt-2",
                          style: {
                            background: "linear-gradient(180deg, oklch(0.5 0.16 280 / 0.4), oklch(0.28 0.015 260 / 0.2))",
                            minHeight: "24px"
                          }
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 pb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: exp.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: exp.company }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-xs mt-0.5 px-2 py-0.5 rounded-full inline-block",
                              style: {
                                background: "oklch(0.55 0.18 280 / 0.1)",
                                color: "oklch(0.65 0.15 280)",
                                border: "1px solid oklch(0.5 0.16 280 / 0.2)"
                              },
                              children: formatDateRange(exp.startDate, exp.endDate)
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => startEditExp(i),
                              "data-ocid": `profile.edit_experience.${i + 1}`,
                              className: "w-7 h-7 flex items-center justify-center rounded-lg transition-smooth hover:bg-primary/10",
                              style: { color: "oklch(0.62 0.01 250)" },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "h-3.5 w-3.5" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => deleteExp(i),
                              "data-ocid": `profile.delete_experience.${i + 1}`,
                              className: "w-7 h-7 flex items-center justify-center rounded-lg transition-smooth",
                              style: { color: "oklch(0.72 0.18 28 / 0.7)" },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" })
                            }
                          )
                        ] })
                      ] }),
                      exp.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 leading-relaxed", children: exp.description })
                    ] })
                  ] }) })
                },
                `${exp.company}-${exp.startDate}`
              )),
              addingExp && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground mb-3", children: "Add Experience" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ExpForm,
                  {
                    expDraft,
                    setExpDraft,
                    onSave: addExp,
                    onCancel: () => {
                      setAddingExp(false);
                      setExpDraft(null);
                    },
                    saveLabel: "Add Experience",
                    saveOcid: "profile.confirm_add_experience.button",
                    cancelOcid: "profile.cancel_add_experience.button"
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-6",
          style: glassCard,
          "data-ocid": "profile.resume.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { icon: FileText, title: "Resume" }),
            profile.resumeFileName ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-4 p-4 rounded-xl",
                style: {
                  background: "oklch(0.17 0.01 260 / 0.6)",
                  border: "1px solid oklch(0.28 0.015 260 / 0.4)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.2), oklch(0.72 0.22 190 / 0.15))",
                        border: "1px solid oklch(0.5 0.16 280 / 0.25)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        FileText,
                        {
                          className: "h-5 w-5",
                          style: { color: "oklch(0.72 0.22 190)" }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm text-foreground truncate", children: profile.resumeFileName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Uploaded successfully" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        var _a;
                        return (_a = fileInputRef.current) == null ? void 0 : _a.click();
                      },
                      "data-ocid": "profile.replace_resume.button",
                      className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 transition-smooth",
                      style: {
                        background: "oklch(0.55 0.18 280 / 0.12)",
                        color: "oklch(0.72 0.22 190)",
                        border: "1px solid oklch(0.5 0.16 280 / 0.3)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3.5 w-3.5" }),
                        " Replace"
                      ]
                    }
                  )
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-2xl w-full transition-smooth group",
                onClick: () => {
                  var _a;
                  return (_a = fileInputRef.current) == null ? void 0 : _a.click();
                },
                "aria-label": "Upload resume",
                "data-ocid": "profile.resume.dropzone",
                style: {
                  borderColor: "oklch(0.28 0.015 260 / 0.5)",
                  background: "oklch(0.12 0.008 255 / 0.3)"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.borderColor = "oklch(0.5 0.16 280 / 0.5)";
                  e.currentTarget.style.background = "oklch(0.55 0.18 280 / 0.05)";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.borderColor = "oklch(0.28 0.015 260 / 0.5)";
                  e.currentTarget.style.background = "oklch(0.12 0.008 255 / 0.3)";
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-12 h-12 rounded-2xl flex items-center justify-center mb-3",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.15), oklch(0.72 0.22 190 / 0.1))",
                        border: "1px solid oklch(0.5 0.16 280 / 0.25)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Upload,
                        {
                          className: "h-6 w-6",
                          style: { color: "oklch(0.72 0.22 190)" }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: "Upload your resume" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "PDF, DOC, or DOCX (max 5MB)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "mt-4 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium",
                      style: {
                        background: "oklch(0.55 0.18 280 / 0.15)",
                        color: "oklch(0.72 0.22 190)",
                        border: "1px solid oklch(0.5 0.16 280 / 0.3)"
                      },
                      "data-ocid": "profile.upload_resume.button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3.5 w-3.5" }),
                        " Choose File"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: fileInputRef,
                type: "file",
                accept: ".pdf,.doc,.docx",
                className: "hidden",
                onChange: handleResumeUpload,
                "aria-label": "Upload resume file"
              }
            )
          ]
        }
      )
    ] })
  ] }) }) });
}
function ExpForm({
  expDraft,
  setExpDraft,
  onSave,
  onCancel,
  saveLabel = "Save",
  saveOcid,
  cancelOcid
}) {
  const formInput2 = {
    background: "oklch(0.18 0.012 260)",
    border: "1px solid oklch(0.3 0.012 260 / 0.6)"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "space-y-3 p-4 rounded-xl",
      style: {
        background: "oklch(0.55 0.18 280 / 0.06)",
        border: "1px solid oklch(0.5 0.16 280 / 0.25)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-1.5 block text-muted-foreground", children: "Job Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: (expDraft == null ? void 0 : expDraft.title) ?? "",
                onChange: (e) => setExpDraft((d) => d ? { ...d, title: e.target.value } : null),
                "data-ocid": "profile.exp_title.input",
                style: formInput2,
                className: "text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-1.5 block text-muted-foreground", children: "Company" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: (expDraft == null ? void 0 : expDraft.company) ?? "",
                onChange: (e) => setExpDraft((d) => d ? { ...d, company: e.target.value } : null),
                "data-ocid": "profile.exp_company.input",
                style: formInput2,
                className: "text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-1.5 block text-muted-foreground", children: "Start Date (YYYY-MM)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "2020-01",
                value: (expDraft == null ? void 0 : expDraft.startDate) ?? "",
                onChange: (e) => setExpDraft(
                  (d) => d ? { ...d, startDate: e.target.value } : null
                ),
                "data-ocid": "profile.exp_start.input",
                style: formInput2,
                className: "text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-1.5 block text-muted-foreground", children: "End Date (blank = current)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "2023-06",
                value: (expDraft == null ? void 0 : expDraft.endDate) ?? "",
                onChange: (e) => setExpDraft(
                  (d) => d ? { ...d, endDate: e.target.value || void 0 } : null
                ),
                "data-ocid": "profile.exp_end.input",
                style: formInput2,
                className: "text-sm"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-1.5 block text-muted-foreground", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              rows: 3,
              value: (expDraft == null ? void 0 : expDraft.description) ?? "",
              onChange: (e) => setExpDraft(
                (d) => d ? { ...d, description: e.target.value } : null
              ),
              "data-ocid": "profile.exp_description.textarea",
              style: formInput2,
              className: "text-sm resize-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: onSave,
              "data-ocid": saveOcid,
              className: "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-smooth hover:opacity-90",
              style: {
                background: "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                color: "white"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-3.5 w-3.5" }),
                " ",
                saveLabel
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onCancel,
              "data-ocid": cancelOcid,
              className: "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-smooth",
              style: {
                background: "oklch(0.18 0.012 260)",
                color: "oklch(0.62 0.01 250)",
                border: "1px solid oklch(0.28 0.015 260 / 0.5)"
              },
              children: "Cancel"
            }
          )
        ] })
      ]
    }
  );
}
export {
  EmployeeProfilePage as default
};
