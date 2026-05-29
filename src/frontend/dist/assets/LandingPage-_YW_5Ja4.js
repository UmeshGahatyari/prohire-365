import { u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
import { B as Badge } from "./badge-DE0nWNx8.js";
import { I as Input } from "./input-Bnuh1-dr.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-M0OANnau.js";
import { L as Layout, S as Search, C as ClipboardList } from "./Layout-JeuDnHZC.js";
import { m as motion } from "./proxy-BwDENFEW.js";
import { S as Sparkles, B as Building2 } from "./sparkles-mukiyukd.js";
import { M as MapPin } from "./map-pin-BkrrQ4Wc.js";
import { A as ArrowRight } from "./arrow-right-Bx_bron2.js";
import { c as createLucideIcon, B as Briefcase } from "./useAuth-OLjIzFBE.js";
import { U as Users } from "./users-C2-7Zdip.js";
import { T as TrendingUp } from "./trending-up-dHM4qZ7e.js";
import { Z as Zap } from "./zap-CK0f-2JC.js";
import { C as CircleCheckBig } from "./circle-check-big-4iKIR8FP.js";
import { F as FileText } from "./file-text-Ncu6psUp.js";
import { S as Star } from "./star-CJQlCY4a.js";
import "./useCurrentUser-BEN-7rG2.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
];
const UserPlus = createLucideIcon("user-plus", __iconNode);
const stats = [
  { label: "Live Jobs", value: "10,000+", icon: Briefcase, color: "190" },
  { label: "Companies Hiring", value: "500+", icon: Building2, color: "280" },
  { label: "Professionals", value: "1M+", icon: Users, color: "190" },
  {
    label: "Placed This Month",
    value: "5,200+",
    icon: TrendingUp,
    color: "280"
  }
];
const featureCards = [
  {
    icon: Search,
    title: "Smart Job Search",
    desc: "AI-powered search surfaces the most relevant jobs for your skills, experience, and career goals — no more endless scrolling.",
    cta: "Explore Jobs",
    role: "employee",
    gradient: "from-accent/20 to-primary/10",
    border: "border-accent/30",
    iconBg: "190"
  },
  {
    icon: Zap,
    title: "Instant Hiring",
    desc: "Post a job in minutes, receive qualified applications within hours. Our matching engine surfaces top candidates automatically.",
    cta: "Post a Job",
    role: "employer",
    gradient: "from-primary/20 to-accent/10",
    border: "border-primary/30",
    iconBg: "280"
  },
  {
    icon: ClipboardList,
    title: "Real-Time Tracking",
    desc: "Live application status updates, interview scheduling, and smart notifications keep you always informed.",
    cta: "Get Started",
    role: "employee",
    gradient: "from-accent/15 to-primary/8",
    border: "border-accent/20",
    iconBg: "190"
  }
];
const employeeSteps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Build Your Profile",
    desc: "Create a standout profile with skills, experience, and your resume in under 5 minutes.",
    color: "190"
  },
  {
    step: "02",
    icon: Search,
    title: "Discover & Apply",
    desc: "Browse thousands of verified roles and apply with a single click — no cover letters needed.",
    color: "280"
  },
  {
    step: "03",
    icon: CircleCheckBig,
    title: "Get Hired Fast",
    desc: "Track every application in real time and land your dream role.",
    color: "190"
  }
];
const employerSteps = [
  {
    step: "01",
    icon: Building2,
    title: "Register Company",
    desc: "Create a verified employer profile and showcase your company culture to top talent.",
    color: "280"
  },
  {
    step: "02",
    icon: FileText,
    title: "Post Your Job",
    desc: "Describe your role in detail. Listings go live instantly and reach thousands of candidates.",
    color: "190"
  },
  {
    step: "03",
    icon: Users,
    title: "Hire the Best",
    desc: "Review applications, shortlist talent, and schedule interviews — all from one dashboard.",
    color: "280"
  }
];
const featuredJobs = [
  {
    id: 1,
    title: "Senior Product Designer",
    company: "Luminary Tech",
    location: "Remote",
    salary: "$95k–$130k",
    type: "Full-time",
    skills: ["Figma", "UX Research", "Prototyping"],
    hot: true
  },
  {
    id: 2,
    title: "Full-Stack Engineer",
    company: "Apex Solutions",
    location: "New York, NY",
    salary: "$110k–$150k",
    type: "Full-time",
    skills: ["React", "Node.js", "PostgreSQL"],
    hot: false
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Orbit Analytics",
    location: "Austin, TX",
    salary: "$100k–$140k",
    type: "Full-time",
    skills: ["Python", "ML", "SQL"],
    hot: true
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudScale",
    location: "San Francisco, CA",
    salary: "$120k–$160k",
    type: "Contract",
    skills: ["Kubernetes", "AWS", "Terraform"],
    hot: false
  },
  {
    id: 5,
    title: "Marketing Manager",
    company: "Brightpath Media",
    location: "Chicago, IL",
    salary: "$75k–$95k",
    type: "Full-time",
    skills: ["SEO", "Analytics", "Content"],
    hot: false
  },
  {
    id: 6,
    title: "Backend Engineer",
    company: "Streamline Corp",
    location: "Remote",
    salary: "$105k–$145k",
    type: "Part-time",
    skills: ["Go", "Redis", "Docker"],
    hot: true
  }
];
const topCompanies = [
  { name: "Luminary Tech", industry: "SaaS", openRoles: 12 },
  { name: "Apex Solutions", industry: "Consulting", openRoles: 8 },
  { name: "CloudScale", industry: "Cloud", openRoles: 15 },
  { name: "Orbit Analytics", industry: "Data", openRoles: 6 },
  { name: "Streamline Corp", industry: "Engineering", openRoles: 9 },
  { name: "Brightpath Media", industry: "Marketing", openRoles: 4 }
];
function LandingPage() {
  const navigate = useNavigate();
  const [searchTitle, setSearchTitle] = reactExports.useState("");
  const [searchLocation, setSearchLocation] = reactExports.useState("");
  const handleSearch = () => {
    navigate({ to: "/signup", search: { role: "employee" } });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden min-h-[88vh] flex items-center justify-center px-4 py-24",
        "data-ocid": "hero.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-cover bg-center",
              style: {
                backgroundImage: "url('/assets/generated/hero-landing-premium.dim_1440x720.jpg')"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(135deg, oklch(0.06 0.02 270 / 0.97) 0%, oklch(0.08 0.03 280 / 0.92) 40%, oklch(0.06 0.025 250 / 0.95) 100%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none",
              style: {
                background: "radial-gradient(circle, oklch(0.5 0.16 280 / 0.12) 0%, transparent 70%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none",
              style: {
                background: "radial-gradient(circle, oklch(0.72 0.22 190 / 0.10) 0%, transparent 70%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute top-20 right-[15%] w-3 h-3 rounded-full pointer-events-none",
              style: { background: "oklch(0.72 0.22 190 / 0.8)" },
              animate: { y: [0, -20, 0], opacity: [0.6, 1, 0.6] },
              transition: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute bottom-32 left-[12%] w-2 h-2 rounded-full pointer-events-none",
              style: { background: "oklch(0.55 0.18 280 / 0.7)" },
              animate: { y: [0, 15, 0], opacity: [0.5, 0.9, 0.5] },
              transition: {
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute top-1/2 left-[8%] w-1.5 h-1.5 rounded-full pointer-events-none",
              style: { background: "oklch(0.72 0.22 190 / 0.6)" },
              animate: { y: [0, -12, 0] },
              transition: {
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-screen-xl mx-auto w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 border",
                    style: {
                      background: "oklch(0.72 0.22 190 / 0.12)",
                      borderColor: "oklch(0.72 0.22 190 / 0.3)",
                      color: "oklch(0.72 0.22 190)"
                    },
                    "data-ocid": "hero.badge",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "w-1.5 h-1.5 rounded-full animate-pulse",
                          style: { background: "oklch(0.72 0.22 190)" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
                      "#1 Premium Job Platform for Modern Professionals"
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                className: "font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6",
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.65, delay: 0.1 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Your Dream Career" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        background: "linear-gradient(135deg, oklch(0.72 0.22 190) 0%, oklch(0.65 0.2 220) 50%, oklch(0.55 0.18 280) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      },
                      children: "Starts Here"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                className: "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                children: "ProHire 365 connects ambitious professionals with world-class employers. Discover roles tailored to your skills and take the next step in your career — today."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20, scale: 0.97 },
                animate: { opacity: 1, y: 0, scale: 1 },
                transition: { duration: 0.6, delay: 0.3 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex flex-col sm:flex-row max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-portal",
                      style: {
                        background: "oklch(0.15 0.008 250 / 0.85)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid oklch(0.72 0.22 190 / 0.25)",
                        boxShadow: "0 8px 40px oklch(0.5 0.16 280 / 0.25), 0 0 0 1px oklch(0.72 0.22 190 / 0.1) inset"
                      },
                      "data-ocid": "hero.search_bar",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "flex items-center gap-2.5 flex-1 px-5 py-3.5 border-b sm:border-b-0 sm:border-r",
                            style: { borderColor: "oklch(0.72 0.22 190 / 0.15)" },
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
                                  placeholder: "Job title, keywords, skills…",
                                  className: "border-0 bg-transparent shadow-none px-0 focus-visible:ring-0 text-sm h-auto text-foreground placeholder:text-muted-foreground/70",
                                  value: searchTitle,
                                  onChange: (e) => setSearchTitle(e.target.value),
                                  "data-ocid": "hero.search_title.input",
                                  onKeyDown: (e) => e.key === "Enter" && handleSearch()
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "flex items-center gap-2.5 flex-1 px-5 py-3.5 border-b sm:border-b-0 sm:border-r",
                            style: { borderColor: "oklch(0.72 0.22 190 / 0.15)" },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Input,
                                {
                                  placeholder: "City, state, or remote",
                                  className: "border-0 bg-transparent shadow-none px-0 focus-visible:ring-0 text-sm h-auto text-foreground placeholder:text-muted-foreground/70",
                                  value: searchLocation,
                                  onChange: (e) => setSearchLocation(e.target.value),
                                  "data-ocid": "hero.search_location.input",
                                  onKeyDown: (e) => e.key === "Enter" && handleSearch()
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: handleSearch,
                            "data-ocid": "hero.search_button",
                            className: "shrink-0 px-8 py-3.5 text-sm font-bold transition-smooth hover:opacity-90 active:scale-[0.98] text-white",
                            style: {
                              background: "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)"
                            },
                            children: "Search Jobs"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-sm text-muted-foreground/80", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground/60", children: [
                      "Trending:",
                      " "
                    ] }),
                    [
                      "Software Engineer",
                      "Product Manager",
                      "Designer",
                      "Data Analyst"
                    ].map((term, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "hover:underline transition-smooth cursor-pointer",
                        style: { color: "oklch(0.72 0.22 190 / 0.85)" },
                        onClick: handleSearch,
                        "data-ocid": `hero.popular_search.${i + 1}`,
                        children: [
                          term,
                          i < 3 ? " · " : ""
                        ]
                      },
                      term
                    ))
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "flex flex-wrap gap-4 justify-center mt-10",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.45 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => navigate({
                        to: "/signup",
                        search: { role: "employee" }
                      }),
                      "data-ocid": "hero.get_started.button",
                      className: "flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-base transition-smooth hover:scale-[1.03] active:scale-[0.98] shadow-glow-accent text-white",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
                        boxShadow: "0 4px 24px oklch(0.72 0.22 190 / 0.45)"
                      },
                      children: [
                        "Get Started Free ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => navigate({
                        to: "/signup",
                        search: { role: "employer" }
                      }),
                      "data-ocid": "hero.post_job.button",
                      className: "flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-base transition-smooth hover:scale-[1.03] active:scale-[0.98]",
                      style: {
                        background: "oklch(0.18 0.01 260 / 0.7)",
                        border: "1px solid oklch(0.72 0.22 190 / 0.35)",
                        color: "oklch(0.72 0.22 190)",
                        backdropFilter: "blur(10px)"
                      },
                      children: [
                        "Post a Job ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4" })
                      ]
                    }
                  )
                ]
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative px-4 py-14 overflow-hidden",
        style: {
          background: "linear-gradient(135deg, oklch(0.12 0.018 275) 0%, oklch(0.10 0.015 265) 50%, oklch(0.12 0.018 255) 100%)",
          borderTop: "1px solid oklch(0.28 0.015 260 / 0.4)",
          borderBottom: "1px solid oklch(0.28 0.015 260 / 0.4)"
        },
        "data-ocid": "stats.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse at 50% 0%, oklch(0.5 0.16 280 / 0.08) 0%, transparent 60%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-screen-xl mx-auto relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "flex flex-col items-center text-center",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-12 h-12 rounded-2xl flex items-center justify-center mb-4",
                    style: {
                      background: `linear-gradient(135deg, oklch(0.25 0.05 ${s.color}) 0%, oklch(0.20 0.04 ${s.color}) 100%)`,
                      border: `1px solid oklch(0.5 0.16 ${s.color} / 0.3)`,
                      boxShadow: `0 4px 16px oklch(0.5 0.16 ${s.color} / 0.2)`
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      s.icon,
                      {
                        className: "h-5 w-5",
                        style: { color: `oklch(0.72 0.22 ${s.color})` }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-black text-3xl md:text-4xl text-foreground mb-1", children: s.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-medium", children: s.label })
              ]
            },
            s.label
          )) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative px-4 py-20 overflow-hidden bg-background",
        "data-ocid": "features.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none",
              style: {
                background: "radial-gradient(circle, oklch(0.5 0.16 280 / 0.06) 0%, transparent 70%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-screen-xl mx-auto relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "text-center mb-14",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: "mb-4 px-3 py-1 text-xs font-semibold",
                      style: {
                        background: "oklch(0.55 0.18 280 / 0.12)",
                        border: "1px solid oklch(0.55 0.18 280 / 0.3)",
                        color: "oklch(0.7 0.15 280)"
                      },
                      children: "Platform Features"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl md:text-4xl text-foreground mb-3", children: [
                    "Everything You Need,",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          background: "linear-gradient(135deg, oklch(0.72 0.22 190) 0%, oklch(0.55 0.18 280) 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        },
                        children: "In One Place"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "Whether you're searching for your next role or building your dream team — ProHire 365 delivers premium tools at every step." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: featureCards.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.12 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "h-full w-full rounded-2xl p-6 flex flex-col gap-5 cursor-pointer group transition-smooth hover:scale-[1.02] text-left",
                    style: {
                      background: "oklch(0.14 0.008 255 / 0.8)",
                      backdropFilter: "blur(16px)",
                      border: `1px solid oklch(0.5 0.16 ${card.iconBg} / 0.2)`,
                      boxShadow: "0 4px 24px rgba(0,0,0,0.3)"
                    },
                    "data-ocid": `feature.card.${i + 1}`,
                    onClick: () => navigate({
                      to: "/signup",
                      search: { role: card.role }
                    }),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-14 h-14 rounded-xl flex items-center justify-center",
                          style: {
                            background: `linear-gradient(135deg, oklch(0.22 0.06 ${card.iconBg}) 0%, oklch(0.18 0.04 ${card.iconBg}) 100%)`,
                            border: `1px solid oklch(0.6 0.2 ${card.iconBg} / 0.3)`,
                            boxShadow: `0 4px 16px oklch(0.5 0.16 ${card.iconBg} / 0.25)`
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            card.icon,
                            {
                              className: "h-6 w-6",
                              style: { color: `oklch(0.72 0.22 ${card.iconBg})` }
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-smooth", children: card.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: card.desc })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-smooth",
                          style: { color: `oklch(0.72 0.22 ${card.iconBg})` },
                          children: [
                            card.cta,
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                          ]
                        }
                      )
                    ]
                  }
                )
              },
              card.title
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative px-4 py-20 overflow-hidden",
        style: {
          background: "linear-gradient(180deg, oklch(0.10 0.012 260) 0%, oklch(0.08 0.01 250) 100%)"
        },
        "data-ocid": "how_it_works.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse at 50% 50%, oklch(0.5 0.16 280 / 0.05) 0%, transparent 70%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-screen-xl mx-auto relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "text-center mb-12",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl md:text-4xl text-foreground mb-3", children: [
                    "How It",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          background: "linear-gradient(135deg, oklch(0.72 0.22 190) 0%, oklch(0.55 0.18 280) 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        },
                        children: "Works"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md mx-auto", children: "Get started in minutes — whether you're hiring top talent or hunting for your next opportunity." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Tabs,
              {
                defaultValue: "employees",
                className: "w-full",
                "data-ocid": "how_it_works.tabs",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    TabsList,
                    {
                      className: "mx-auto flex w-fit mb-12 p-1.5 rounded-2xl gap-1",
                      style: {
                        background: "oklch(0.14 0.008 255)",
                        border: "1px solid oklch(0.28 0.015 260 / 0.5)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          TabsTrigger,
                          {
                            value: "employees",
                            "data-ocid": "how_it_works.employees.tab",
                            className: "px-7 py-2.5 rounded-xl text-sm font-semibold transition-smooth data-[state=active]:text-white",
                            style: void 0,
                            children: "For Job Seekers"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          TabsTrigger,
                          {
                            value: "employers",
                            "data-ocid": "how_it_works.employers.tab",
                            className: "px-7 py-2.5 rounded-xl text-sm font-semibold transition-smooth data-[state=active]:text-white",
                            children: "For Employers"
                          }
                        )
                      ]
                    }
                  ),
                  [
                    {
                      key: "employees",
                      steps: employeeSteps,
                      ctaLabel: "Start Your Job Search",
                      ctaRole: "employee"
                    },
                    {
                      key: "employers",
                      steps: employerSteps,
                      ctaLabel: "Post Your First Job",
                      ctaRole: "employer"
                    }
                  ].map(({ key, steps, ctaLabel, ctaRole }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: key, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "hidden md:block absolute top-8 left-[calc(16.6%+2rem)] right-[calc(16.6%+2rem)] h-px pointer-events-none",
                          style: {
                            background: "linear-gradient(90deg, oklch(0.72 0.22 190 / 0.3) 0%, oklch(0.55 0.18 280 / 0.3) 100%)"
                          }
                        }
                      ),
                      steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          className: "flex flex-col items-center text-center gap-5 relative",
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: true },
                          transition: { delay: i * 0.15 },
                          "data-ocid": `how_it_works.${key === "employees" ? "employee" : "employer"}_step.${i + 1}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "w-16 h-16 rounded-2xl flex items-center justify-center z-10",
                                style: {
                                  background: `linear-gradient(135deg, oklch(0.25 0.07 ${step.color}) 0%, oklch(0.18 0.05 ${step.color}) 100%)`,
                                  border: `2px solid oklch(0.6 0.2 ${step.color} / 0.4)`,
                                  boxShadow: `0 8px 24px oklch(0.5 0.16 ${step.color} / 0.3)`
                                },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  step.icon,
                                  {
                                    className: "h-7 w-7",
                                    style: { color: `oklch(0.75 0.22 ${step.color})` }
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "span",
                                {
                                  className: "text-xs font-black tracking-[0.2em] uppercase",
                                  style: { color: `oklch(0.65 0.18 ${step.color})` },
                                  children: [
                                    "Step ",
                                    step.step
                                  ]
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mt-1.5 mb-2", children: step.title }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto", children: step.desc })
                            ] })
                          ]
                        },
                        step.step
                      ))
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => navigate({
                          to: "/signup",
                          search: { role: ctaRole }
                        }),
                        "data-ocid": `how_it_works.${key === "employees" ? "employee" : "employer"}_cta.button`,
                        className: "flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm transition-smooth hover:scale-[1.03] active:scale-[0.98] text-white",
                        style: {
                          background: "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
                          boxShadow: "0 4px 20px oklch(0.72 0.22 190 / 0.4)"
                        },
                        children: [
                          ctaLabel,
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                        ]
                      }
                    ) })
                  ] }, key))
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative px-4 py-20 bg-background overflow-hidden",
        "data-ocid": "featured_jobs.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none",
              style: {
                background: "radial-gradient(circle, oklch(0.72 0.22 190 / 0.05) 0%, transparent 70%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-screen-xl mx-auto relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: "mb-3 px-3 py-1 text-xs font-semibold",
                    style: {
                      background: "oklch(0.72 0.22 190 / 0.12)",
                      border: "1px solid oklch(0.72 0.22 190 / 0.3)",
                      color: "oklch(0.72 0.22 190)"
                    },
                    children: "Hand-Picked Roles"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-foreground", children: "Featured Opportunities" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-2", children: "Verified roles from leading companies" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => navigate({
                    to: "/signup",
                    search: { role: "employee" }
                  }),
                  "data-ocid": "featured_jobs.view_all.button",
                  className: "hidden sm:flex items-center gap-1.5 text-sm font-semibold transition-smooth hover:gap-3",
                  style: { color: "oklch(0.72 0.22 190)" },
                  children: [
                    "View all jobs ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: featuredJobs.map((job, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.08 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "group w-full rounded-2xl p-5 cursor-pointer transition-smooth hover:scale-[1.02] h-full flex flex-col text-left",
                    style: {
                      background: "oklch(0.14 0.008 255 / 0.9)",
                      border: "1px solid oklch(0.28 0.015 260 / 0.6)",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.25)"
                    },
                    "data-ocid": `featured_job.item.${i + 1}`,
                    onClick: () => navigate({
                      to: "/signup",
                      search: { role: "employee" }
                    }),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-11 h-11 rounded-xl flex items-center justify-center shrink-0",
                            style: {
                              background: "linear-gradient(135deg, oklch(0.22 0.05 280) 0%, oklch(0.18 0.04 290) 100%)",
                              border: "1px solid oklch(0.55 0.18 280 / 0.3)"
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Building2,
                              {
                                className: "h-5 w-5",
                                style: { color: "oklch(0.65 0.18 280)" }
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-foreground group-hover:text-accent transition-smooth truncate", children: job.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate mt-0.5", children: job.company })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1.5", children: [
                          job.hot && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-[10px] font-bold px-2 py-0.5 rounded-full",
                              style: {
                                background: "oklch(0.72 0.22 190 / 0.15)",
                                border: "1px solid oklch(0.72 0.22 190 / 0.3)",
                                color: "oklch(0.72 0.22 190)"
                              },
                              children: "🔥 Hot"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-[10px] font-semibold px-2 py-0.5 rounded-full",
                              style: {
                                background: "oklch(0.22 0.015 260)",
                                border: "1px solid oklch(0.35 0.015 260 / 0.6)",
                                color: "oklch(0.75 0.01 260)"
                              },
                              children: job.type
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
                          " ",
                          job.location
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "font-semibold",
                            style: { color: "oklch(0.72 0.22 190)" },
                            children: job.salary
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mt-auto", children: job.skills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs px-2.5 py-0.5 rounded-lg font-medium",
                          style: {
                            background: "oklch(0.20 0.015 260)",
                            border: "1px solid oklch(0.32 0.015 260 / 0.7)",
                            color: "oklch(0.72 0.01 260)"
                          },
                          children: skill
                        },
                        skill
                      )) })
                    ]
                  }
                )
              },
              job.id
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "relative px-4 py-16 overflow-hidden",
        style: {
          background: "linear-gradient(135deg, oklch(0.11 0.015 270) 0%, oklch(0.09 0.012 260) 100%)",
          borderTop: "1px solid oklch(0.28 0.015 260 / 0.3)",
          borderBottom: "1px solid oklch(0.28 0.015 260 / 0.3)"
        },
        "data-ocid": "companies.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-screen-xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-10",
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2", children: "Trusted By Industry Leaders" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl md:text-3xl text-foreground", children: "Companies Actively Hiring" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", children: topCompanies.map((company, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { delay: i * 0.07 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "w-full rounded-2xl p-4 text-center cursor-pointer transition-smooth hover:scale-[1.04] group",
                  style: {
                    background: "oklch(0.15 0.008 255 / 0.7)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.5)",
                    backdropFilter: "blur(10px)"
                  },
                  "data-ocid": `company.card.${i + 1}`,
                  onClick: () => navigate({
                    to: "/signup",
                    search: { role: "employee" }
                  }),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-10 h-10 rounded-xl mx-auto mb-2.5 flex items-center justify-center",
                        style: {
                          background: "linear-gradient(135deg, oklch(0.22 0.05 280) 0%, oklch(0.20 0.06 190) 100%)"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5 text-accent group-hover:scale-110 transition-smooth" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate", children: company.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: company.industry }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "text-[10px] font-medium mt-1",
                        style: { color: "oklch(0.72 0.22 190)" },
                        children: [
                          company.openRoles,
                          " open roles"
                        ]
                      }
                    )
                  ]
                }
              )
            },
            company.name
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative px-4 py-20 bg-background overflow-hidden",
        "data-ocid": "cta.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse at 50% 100%, oklch(0.5 0.16 280 / 0.06) 0%, transparent 60%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-screen-xl mx-auto relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "relative rounded-2xl p-8 flex flex-col gap-5 overflow-hidden",
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                style: {
                  background: "linear-gradient(135deg, oklch(0.18 0.06 190) 0%, oklch(0.14 0.04 220) 50%, oklch(0.12 0.03 260) 100%)",
                  border: "1px solid oklch(0.72 0.22 190 / 0.25)",
                  boxShadow: "0 8px 32px oklch(0.72 0.22 190 / 0.15)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute top-0 right-0 w-64 h-64 pointer-events-none",
                      style: {
                        background: "radial-gradient(circle, oklch(0.72 0.22 190 / 0.15) 0%, transparent 70%)"
                      },
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-14 h-14 rounded-2xl flex items-center justify-center relative z-10",
                      style: {
                        background: "oklch(0.72 0.22 190 / 0.15)",
                        border: "1px solid oklch(0.72 0.22 190 / 0.3)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Star,
                        {
                          className: "h-6 w-6",
                          style: { color: "oklch(0.72 0.22 190)" }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-2xl text-foreground mb-2", children: "Looking for a Job?" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Create your profile, upload your resume, and let top employers find you. Thousands of new roles added every day." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => navigate({
                        to: "/signup",
                        search: { role: "employee" }
                      }),
                      "data-ocid": "cta.employee_signup.button",
                      className: "self-start flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm font-bold transition-smooth hover:scale-[1.04] active:scale-[0.98] relative z-10",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
                        boxShadow: "0 4px 20px oklch(0.72 0.22 190 / 0.4)",
                        color: "white"
                      },
                      children: [
                        "Get Started Free ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "relative rounded-2xl p-8 flex flex-col gap-5 overflow-hidden",
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: 0.12 },
                style: {
                  background: "linear-gradient(135deg, oklch(0.16 0.06 280) 0%, oklch(0.12 0.04 270) 50%, oklch(0.10 0.025 260) 100%)",
                  border: "1px solid oklch(0.55 0.18 280 / 0.25)",
                  boxShadow: "0 8px 32px oklch(0.5 0.16 280 / 0.15)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute top-0 right-0 w-64 h-64 pointer-events-none",
                      style: {
                        background: "radial-gradient(circle, oklch(0.5 0.16 280 / 0.12) 0%, transparent 70%)"
                      },
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-14 h-14 rounded-2xl flex items-center justify-center relative z-10",
                      style: {
                        background: "oklch(0.55 0.18 280 / 0.15)",
                        border: "1px solid oklch(0.55 0.18 280 / 0.3)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Building2,
                        {
                          className: "h-6 w-6",
                          style: { color: "oklch(0.65 0.18 280)" }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-2xl text-foreground mb-2", children: "Hiring Talent?" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Post jobs for free, manage applications from one dashboard, and connect with highly qualified candidates ready to contribute from day one." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => navigate({
                        to: "/signup",
                        search: { role: "employer" }
                      }),
                      "data-ocid": "cta.employer_signup.button",
                      className: "self-start flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm font-bold transition-smooth hover:scale-[1.04] active:scale-[0.98] relative z-10",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.45 0.16 280) 0%, oklch(0.6 0.2 280) 100%)",
                        boxShadow: "0 4px 20px oklch(0.5 0.16 280 / 0.4)",
                        color: "white"
                      },
                      children: [
                        "Post a Job ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4" })
                      ]
                    }
                  )
                ]
              }
            )
          ] }) })
        ]
      }
    )
  ] });
}
export {
  LandingPage as default
};
