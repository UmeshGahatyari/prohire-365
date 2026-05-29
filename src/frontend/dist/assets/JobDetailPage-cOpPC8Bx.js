import { u as useNavigate, a as useParams, r as reactExports, j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
import { u as ue } from "./index-DbnOXoCg.js";
import { L as Layout, e as Bookmark } from "./Layout-JeuDnHZC.js";
import { P as ProtectedRoute } from "./ProtectedRoute-BSLymTUa.js";
import { S as SkillTag } from "./SkillTag-B1i5fcDw.js";
import { c as createLucideIcon, B as Briefcase } from "./useAuth-OLjIzFBE.js";
import { A as ArrowLeft } from "./arrow-left-Bhp7ehvg.js";
import { M as MapPin } from "./map-pin-BkrrQ4Wc.js";
import { D as DollarSign } from "./dollar-sign-Ds7SrE6t.js";
import { C as Clock } from "./clock-BzSeebma.js";
import { U as Users } from "./users-C2-7Zdip.js";
import { C as CircleCheck } from "./circle-check-BDUMJT2q.js";
import { Z as Zap } from "./zap-CK0f-2JC.js";
import { B as BookmarkCheck } from "./bookmark-check-B5yX-SWK.js";
import { C as Calendar } from "./calendar-COUjOv3V.js";
import { B as Building2, S as Sparkles } from "./sparkles-mukiyukd.js";
import "./useCurrentUser-BEN-7rG2.js";
import "./badge-DE0nWNx8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode);
const JOB_DATA = {
  "1": {
    jobId: BigInt(1),
    employerId: {},
    title: "Senior React Developer",
    description: `We are seeking a talented Senior React Developer to join our innovative team at Meridian Software. In this role, you will lead frontend architecture decisions, mentor junior developers, and build high-performance web applications that serve hundreds of thousands of users.

You will collaborate closely with product managers, designers, and backend engineers to deliver exceptional user experiences. You'll have the autonomy to propose and implement best practices, introduce new technologies, and shape the technical direction of our frontend platform.`,
    location: "San Francisco, CA",
    salaryMin: BigInt(11e4),
    salaryMax: BigInt(15e4),
    experienceRequired: "4–6 yrs",
    jobType: "fullTime",
    skillsRequired: [
      "React",
      "TypeScript",
      "Redux",
      "GraphQL",
      "Node.js",
      "Testing",
      "CI/CD"
    ],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 30 * 24 * 3600 * 1e3) * 1e6
    ),
    createdAt: BigInt((Date.now() - 2 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt(Date.now() * 1e6),
    companyName: "Meridian Software",
    companyDescription: "Meridian Software is a leading technology company specializing in enterprise SaaS solutions. Founded in 2015, we serve over 2,000 clients globally and have consistently ranked among the best places to work in tech.",
    companySize: "500–1,000 employees",
    benefits: [
      "Health & dental insurance",
      "Flexible remote work",
      "401(k) with 6% match",
      "Annual learning stipend",
      "Unlimited PTO",
      "Home office setup budget"
    ]
  },
  "2": {
    jobId: BigInt(2),
    employerId: {},
    title: "Full Stack Engineer",
    description: "CloudPeak Systems is looking for a Full Stack Engineer to help build the next generation of our cloud platform. You will work across the entire stack—from React frontends to Node.js microservices to PostgreSQL schemas—and own features end-to-end from design to deployment.\n\nWe value engineers who think deeply about system design, care about code quality, and are excited to tackle complex distributed systems challenges.",
    location: "Remote",
    salaryMin: BigInt(95e3),
    salaryMax: BigInt(13e4),
    experienceRequired: "3–5 yrs",
    jobType: "fullTime",
    skillsRequired: [
      "Node.js",
      "React",
      "PostgreSQL",
      "Docker",
      "AWS",
      "REST APIs",
      "Git"
    ],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 20 * 24 * 3600 * 1e3) * 1e6
    ),
    createdAt: BigInt((Date.now() - 1 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt(Date.now() * 1e6),
    companyName: "CloudPeak Systems",
    companyDescription: "CloudPeak Systems provides infrastructure and developer tooling for modern software teams. Our platform processes billions of events daily and is trusted by engineering teams at Fortune 500 companies.",
    companySize: "200–500 employees",
    benefits: [
      "Fully remote",
      "Competitive salary",
      "Equity options",
      "Wellness stipend",
      "Top-tier health coverage",
      "4-day work week trial"
    ]
  }
};
const REQUIREMENTS = [
  "5+ years of professional software development experience",
  "Strong proficiency in the required technical skills",
  "Experience with agile/scrum development methodologies",
  "Excellent problem-solving and communication skills",
  "Ability to work independently and as part of a team",
  "Experience with version control (Git) and code review practices"
];
function formatSalary(min, max) {
  const fmt = (n) => `$${(Number(n) / 1e3).toFixed(0)}k`;
  return `${fmt(min)} – ${fmt(max)} / year`;
}
function deadlineDays(ns) {
  const ms = Number(ns) / 1e6;
  const days = Math.ceil((ms - Date.now()) / (1e3 * 60 * 60 * 24));
  if (days < 0) return "Expired";
  if (days === 0) return "Today";
  return `${days} days left`;
}
function getCompanyGradient(name) {
  const gradients = [
    "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
    "linear-gradient(135deg, oklch(0.55 0.16 200), oklch(0.65 0.18 150))",
    "linear-gradient(135deg, oklch(0.6 0.18 30), oklch(0.7 0.15 45))"
  ];
  return gradients[name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % gradients.length];
}
const jobTypeLabel = {
  fullTime: "Full-time",
  partTime: "Part-time",
  contract: "Contract"
};
const glassCard = {
  background: "oklch(0.14 0.009 255 / 0.85)",
  backdropFilter: "blur(12px)",
  border: "1px solid oklch(0.28 0.015 260 / 0.45)"
};
function JobDetailPage() {
  const navigate = useNavigate();
  const params = useParams({ strict: false });
  const jobId = params.jobId ?? "1";
  const job = JOB_DATA[jobId];
  const [saved, setSaved] = reactExports.useState(false);
  const [applying, setApplying] = reactExports.useState(false);
  if (!job) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { requiredRole: "employee", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { showSidebar: true, sidebarRole: "employee", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-4xl mx-auto flex flex-col items-center justify-center py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-12 w-12 text-muted-foreground mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-xl text-foreground mb-2", children: "Job not found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "This listing may have been removed." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => navigate({ to: "/employee/jobs" }),
          "data-ocid": "job_detail.back_to_search.button",
          className: "px-5 py-2.5 rounded-xl text-sm font-semibold transition-smooth hover:opacity-90",
          style: {
            background: "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
            color: "white"
          },
          children: "Back to Job Search"
        }
      )
    ] }) }) });
  }
  const handleApply = async () => {
    setApplying(true);
    await new Promise((r) => setTimeout(r, 800));
    setApplying(false);
    ue.success("Application submitted!", {
      description: `Your application for ${job.title} has been sent.`
    });
  };
  const handleSave = () => {
    setSaved((s) => !s);
    ue.success(saved ? "Job removed from saved" : "Job saved successfully");
  };
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
                background: "radial-gradient(ellipse at 20% 60%, oklch(0.5 0.16 280 / 0.1) 0%, transparent 55%), radial-gradient(ellipse at 80% 30%, oklch(0.72 0.22 190 / 0.08) 0%, transparent 50%)"
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl mx-auto px-6 py-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => navigate({ to: "/employee/jobs" }),
                "data-ocid": "job_detail.back.button",
                className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth mb-6",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
                  " Back to jobs"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 font-display font-bold text-2xl text-white shadow-glow-primary",
                  style: {
                    background: getCompanyGradient(job.companyName ?? "")
                  },
                  children: (job.companyName ?? "C")[0]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs font-semibold px-2 py-0.5 rounded-full",
                      style: {
                        background: "oklch(0.72 0.22 190 / 0.15)",
                        color: "oklch(0.72 0.22 190)",
                        border: "1px solid oklch(0.72 0.22 190 / 0.3)"
                      },
                      children: jobTypeLabel[job.jobType]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Posted 2 days ago" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl md:text-3xl text-foreground", children: job.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground mt-1 font-medium", children: job.companyName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-sm text-muted-foreground", children: [
                  { icon: MapPin, text: job.location },
                  {
                    icon: DollarSign,
                    text: formatSalary(job.salaryMin, job.salaryMax)
                  },
                  { icon: Clock, text: `${job.experienceRequired} exp` },
                  { icon: Users, text: "201–500 employees" }
                ].map(({ icon: Icon, text }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Icon,
                    {
                      className: "h-4 w-4 shrink-0",
                      style: { color: "oklch(0.72 0.22 190 / 0.7)" }
                    }
                  ),
                  text
                ] }, text)) })
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 max-w-5xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-6",
            style: glassCard,
            "data-ocid": "job_detail.description.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-1 h-5 rounded-full",
                    style: {
                      background: "linear-gradient(180deg, oklch(0.72 0.22 190), oklch(0.55 0.18 280))"
                    }
                  }
                ),
                "Job Description"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground leading-relaxed whitespace-pre-line", children: job.description })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-6", style: glassCard, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-1 h-5 rounded-full",
                style: {
                  background: "linear-gradient(180deg, oklch(0.72 0.22 190), oklch(0.55 0.18 280))"
                }
              }
            ),
            "Requirements"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: REQUIREMENTS.map((req) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-start gap-3 text-sm text-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CircleCheck,
                  {
                    className: "h-4 w-4 shrink-0 mt-0.5",
                    style: { color: "oklch(0.72 0.22 190)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: req })
              ]
            },
            req
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-6", style: glassCard, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-1 h-5 rounded-full",
                style: {
                  background: "linear-gradient(180deg, oklch(0.72 0.22 190), oklch(0.55 0.18 280))"
                }
              }
            ),
            "Required Skills"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: job.skillsRequired.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillTag, { skill }, skill)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-6", style: glassCard, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-1 h-5 rounded-full",
                style: {
                  background: "linear-gradient(180deg, oklch(0.72 0.22 190), oklch(0.55 0.18 280))"
                }
              }
            ),
            "About ",
            job.companyName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-display font-bold text-lg text-white",
                style: {
                  background: getCompanyGradient(job.companyName ?? "")
                },
                children: (job.companyName ?? "C")[0]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: job.companyName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3" }),
                  job.companySize
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
                  job.location
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: job.companyDescription })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-5 space-y-4 sticky top-4",
            style: {
              background: "oklch(0.14 0.009 255 / 0.9)",
              backdropFilter: "blur(16px)",
              border: "1px solid oklch(0.35 0.015 260 / 0.5)",
              boxShadow: "0 0 40px oklch(0.55 0.18 280 / 0.12)"
            },
            "data-ocid": "job_detail.actions.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center pb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold text-foreground", children: formatSalary(job.salaryMin, job.salaryMax) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Annual salary" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-px",
                  style: { background: "oklch(0.25 0.012 260 / 0.5)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleApply,
                  disabled: applying,
                  "data-ocid": "job_detail.apply_now.button",
                  className: "w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-smooth hover:opacity-90 shadow-glow-accent disabled:opacity-60",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                    color: "white"
                  },
                  children: applying ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
                    "Applying…"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4" }),
                    "Apply Now"
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleSave,
                  "data-ocid": "job_detail.save_job.button",
                  className: "w-full py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-smooth",
                  style: saved ? {
                    background: "oklch(0.72 0.22 190 / 0.12)",
                    color: "oklch(0.72 0.22 190)",
                    border: "1px solid oklch(0.72 0.22 190 / 0.35)"
                  } : {
                    background: "oklch(0.18 0.012 260)",
                    color: "oklch(0.62 0.01 250)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.5)"
                  },
                  children: [
                    saved ? /* @__PURE__ */ jsxRuntimeExports.jsx(BookmarkCheck, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-4 w-4" }),
                    saved ? "Saved" : "Save Job"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    navigator.clipboard.writeText(window.location.href);
                    ue.success("Link copied!");
                  },
                  "data-ocid": "job_detail.share.button",
                  className: "w-full py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-smooth text-muted-foreground hover:text-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-3.5 w-3.5" }),
                    " Share Job"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-5 space-y-3", style: glassCard, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold text-sm text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Briefcase,
              {
                className: "h-4 w-4",
                style: { color: "oklch(0.72 0.22 190)" }
              }
            ),
            "Job Overview"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-px",
              style: { background: "oklch(0.25 0.012 260 / 0.5)" }
            }
          ),
          [
            {
              icon: Calendar,
              label: "Deadline",
              value: deadlineDays(job.applicationDeadline)
            },
            {
              icon: Briefcase,
              label: "Experience",
              value: job.experienceRequired
            },
            { icon: MapPin, label: "Location", value: job.location },
            {
              icon: Building2,
              label: "Job Type",
              value: jobTypeLabel[job.jobType]
            }
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-3 text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-7 h-7 rounded-lg flex items-center justify-center shrink-0",
                    style: {
                      background: "oklch(0.55 0.18 280 / 0.15)",
                      border: "1px solid oklch(0.5 0.16 280 / 0.2)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      item.icon,
                      {
                        className: "h-3.5 w-3.5",
                        style: { color: "oklch(0.72 0.22 190)" }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: item.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-xs", children: item.value })
                ] })
              ]
            },
            item.label
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-5", style: glassCard, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold text-sm text-foreground flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Sparkles,
              {
                className: "h-4 w-4",
                style: { color: "oklch(0.72 0.22 190)" }
              }
            ),
            "Benefits"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: job.benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2 text-xs text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CircleCheck,
                  {
                    className: "h-3.5 w-3.5 shrink-0",
                    style: { color: "oklch(0.7 0.2 150)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
              ]
            },
            b
          )) })
        ] })
      ] })
    ] }) })
  ] }) }) });
}
export {
  JobDetailPage as default
};
