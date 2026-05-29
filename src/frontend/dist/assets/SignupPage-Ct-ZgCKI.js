import { u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
import { I as Input } from "./input-Bnuh1-dr.js";
import { L as Label } from "./label-Bzq5IhRt.js";
import { S as Separator } from "./separator-CEt-SyGN.js";
import { u as useAuth, B as Briefcase, U as User } from "./useAuth-OLjIzFBE.js";
import { m as motion } from "./proxy-BwDENFEW.js";
import { C as CircleCheckBig } from "./circle-check-big-4iKIR8FP.js";
import { B as Building2, S as Sparkles } from "./sparkles-mukiyukd.js";
import { M as Mail } from "./mail-Dj4xtjkY.js";
import { P as Phone } from "./phone-uC1LFejI.js";
import { M as MapPin } from "./map-pin-BkrrQ4Wc.js";
import { U as Users } from "./users-C2-7Zdip.js";
import { L as LoaderCircle } from "./loader-circle-CBBHHiqf.js";
import { A as ArrowRight } from "./arrow-right-Bx_bron2.js";
import "./index-DiKJEy-t.js";
const industries = [
  "Technology",
  "Finance & Banking",
  "Healthcare",
  "Education",
  "Retail & E-commerce",
  "Manufacturing",
  "Media & Entertainment",
  "Consulting",
  "Real Estate",
  "Other"
];
const companySizes = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "501–1,000 employees",
  "1,000+ employees"
];
const benefitList = [
  "Access 10,000+ verified job listings daily",
  "One-click application to top companies",
  "Real-time status tracking & alerts",
  "Free profile hosting and resume uploads"
];
function SignupPage() {
  const navigate = useNavigate();
  const { login, isAuthenticated, isLoading } = useAuth();
  const [selectedRole, setSelectedRole] = reactExports.useState("employee");
  const [empName, setEmpName] = reactExports.useState("");
  const [empEmail, setEmpEmail] = reactExports.useState("");
  const [empPhone, setEmpPhone] = reactExports.useState("");
  const [empLocation, setEmpLocation] = reactExports.useState("");
  const [companyName, setCompanyName] = reactExports.useState("");
  const [contactName, setContactName] = reactExports.useState("");
  const [employerEmail, setEmployerEmail] = reactExports.useState("");
  const [industry, setIndustry] = reactExports.useState("");
  const [companySize, setCompanySize] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (isAuthenticated) {
      const role = localStorage.getItem("prohire365_role");
      const dest = role === "employer" ? "/employer" : role === "admin" ? "/admin" : "/employee";
      navigate({ to: dest });
    }
  }, [isAuthenticated, navigate]);
  const isEmployeeValid = empName.trim() && empEmail.trim();
  const isEmployerValid = companyName.trim() && contactName.trim() && employerEmail.trim();
  const canSubmit = selectedRole === "employee" ? isEmployeeValid : isEmployerValid;
  const handleSignup = () => {
    localStorage.setItem("prohire365_role", selectedRole);
    const displayName = selectedRole === "employee" ? empName.trim() : contactName.trim();
    if (displayName) localStorage.setItem("prohire365_name", displayName);
    login();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "hidden lg:flex lg:w-[45%] relative flex-col justify-between p-12 overflow-hidden",
        style: {
          background: "linear-gradient(145deg, oklch(0.07 0.025 260) 0%, oklch(0.11 0.04 275) 40%, oklch(0.09 0.03 265) 70%, oklch(0.07 0.02 250) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-20",
              style: {
                backgroundImage: "url('/assets/generated/auth-bg-premium.dim_800x900.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 right-0 w-full h-full pointer-events-none",
              style: {
                background: "radial-gradient(ellipse at 80% 15%, oklch(0.72 0.22 190 / 0.18) 0%, transparent 55%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 w-full h-full pointer-events-none",
              style: {
                background: "radial-gradient(ellipse at 15% 90%, oklch(0.55 0.18 280 / 0.20) 0%, transparent 50%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => navigate({ to: "/" }),
              className: "flex items-center gap-3 transition-smooth hover:opacity-90",
              "data-ocid": "signup.logo.link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-10 h-10 rounded-xl flex items-center justify-center",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-5 w-5 text-white" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-display font-bold text-2xl",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.9 0.04 280) 0%, oklch(0.72 0.22 190) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    },
                    children: "ProHire 365"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col gap-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -30 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.7, delay: 0.2 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs font-bold uppercase tracking-[0.25em] mb-4",
                      style: { color: "oklch(0.72 0.22 190)" },
                      children: "Join 1 Million+ Professionals"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-4xl xl:text-5xl text-foreground leading-[1.1] mb-5", children: [
                    "Start Your",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          background: "linear-gradient(135deg, oklch(0.72 0.22 190) 0%, oklch(0.6 0.2 230) 50%, oklch(0.55 0.18 280) 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        },
                        children: "Journey Today."
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed max-w-sm", children: "Create your free account and unlock access to thousands of curated job opportunities from world-class companies." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "flex flex-col gap-3.5",
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.7, delay: 0.4 },
                children: benefitList.map((benefit) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                      style: {
                        background: "oklch(0.72 0.22 190 / 0.2)",
                        border: "1px solid oklch(0.72 0.22 190 / 0.4)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheckBig,
                        {
                          className: "h-3 w-3",
                          style: { color: "oklch(0.72 0.22 190)" }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80", children: benefit })
                ] }, benefit))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "grid grid-cols-2 gap-3",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.7, delay: 0.6 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded-xl p-4 flex flex-col gap-2",
                      style: {
                        background: "oklch(0.72 0.22 190 / 0.08)",
                        border: "1px solid oklch(0.72 0.22 190 / 0.2)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          User,
                          {
                            className: "h-5 w-5",
                            style: { color: "oklch(0.72 0.22 190)" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Job Seekers" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Find & apply to roles" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded-xl p-4 flex flex-col gap-2",
                      style: {
                        background: "oklch(0.55 0.18 280 / 0.08)",
                        border: "1px solid oklch(0.55 0.18 280 / 0.2)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Building2,
                          {
                            className: "h-5 w-5",
                            style: { color: "oklch(0.65 0.18 280)" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Employers" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Post jobs & hire talent" })
                      ]
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground/60", children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " ProHire 365 — Built with",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
                className: "transition-smooth",
                style: { color: "oklch(0.72 0.22 190 / 0.8)" },
                target: "_blank",
                rel: "noopener noreferrer",
                children: "caffeine.ai"
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex-1 flex items-start justify-center px-6 py-12 relative overflow-y-auto",
        style: {
          background: "linear-gradient(180deg, oklch(0.08 0.01 255) 0%, oklch(0.10 0.012 260) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none",
              style: {
                background: "radial-gradient(circle, oklch(0.5 0.16 280 / 0.05) 0%, transparent 70%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "w-full max-w-lg relative z-10 mt-4",
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex lg:hidden items-center justify-center gap-2 mb-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-lg flex items-center justify-center",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4 text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-display font-bold text-xl",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.85 0.06 280) 0%, oklch(0.72 0.22 190) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      },
                      children: "ProHire 365"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-2xl p-8 flex flex-col gap-6",
                    style: {
                      background: "oklch(0.13 0.008 255 / 0.9)",
                      backdropFilter: "blur(24px)",
                      border: "1px solid oklch(0.30 0.015 260 / 0.5)",
                      boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px oklch(0.72 0.22 190 / 0.06) inset"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Sparkles,
                            {
                              className: "h-4 w-4",
                              style: { color: "oklch(0.72 0.22 190)" }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-xs font-bold uppercase tracking-wider",
                              style: { color: "oklch(0.72 0.22 190)" },
                              children: "Free Account"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-1", children: "Create your account" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Join thousands of professionals on ProHire 365 — no credit card required" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "signup.role_selector", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3", children: "I want to…" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
                          {
                            value: "employee",
                            label: "Find a Job",
                            desc: "Browse & apply to top roles",
                            icon: User,
                            color: "190"
                          },
                          {
                            value: "employer",
                            label: "Hire Talent",
                            desc: "Post jobs & find candidates",
                            icon: Building2,
                            color: "280"
                          }
                        ].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () => setSelectedRole(tab.value),
                            "data-ocid": `signup.role.${tab.value}`,
                            className: "flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-smooth",
                            style: selectedRole === tab.value ? {
                              background: `oklch(0.20 0.06 ${tab.color} / 0.25)`,
                              borderColor: `oklch(0.65 0.2 ${tab.color} / 0.55)`,
                              boxShadow: `0 0 20px oklch(0.5 0.16 ${tab.color} / 0.2)`
                            } : {
                              background: "oklch(0.16 0.008 255)",
                              borderColor: "oklch(0.28 0.015 260 / 0.5)"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-smooth",
                                  style: selectedRole === tab.value ? {
                                    background: `oklch(0.65 0.2 ${tab.color} / 0.2)`,
                                    border: `1px solid oklch(0.65 0.2 ${tab.color} / 0.4)`
                                  } : {
                                    background: "oklch(0.20 0.008 260)",
                                    border: "1px solid oklch(0.30 0.01 260 / 0.5)"
                                  },
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    tab.icon,
                                    {
                                      className: "h-4 w-4 transition-smooth",
                                      style: {
                                        color: selectedRole === tab.value ? `oklch(0.72 0.22 ${tab.color})` : "oklch(0.5 0.01 260)"
                                      }
                                    }
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "p",
                                  {
                                    className: "text-sm font-bold transition-smooth",
                                    style: {
                                      color: selectedRole === tab.value ? "oklch(0.92 0.01 260)" : "oklch(0.65 0.01 260)"
                                    },
                                    children: tab.label
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: tab.desc })
                              ] })
                            ]
                          },
                          tab.value
                        )) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { style: { background: "oklch(0.22 0.012 260 / 0.6)" } }),
                      selectedRole === "employee" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "flex flex-col gap-4",
                          "data-ocid": "signup.employee_form",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  Label,
                                  {
                                    htmlFor: "emp-name",
                                    className: "text-xs font-semibold text-foreground/70",
                                    children: [
                                      "Full Name ",
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    Input,
                                    {
                                      id: "emp-name",
                                      placeholder: "Jane Smith",
                                      className: "pl-9 h-10 rounded-xl text-sm",
                                      style: {
                                        background: "oklch(0.16 0.008 255)",
                                        borderColor: "oklch(0.28 0.015 260 / 0.6)"
                                      },
                                      value: empName,
                                      onChange: (e) => setEmpName(e.target.value),
                                      "data-ocid": "signup.employee.name.input"
                                    }
                                  )
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  Label,
                                  {
                                    htmlFor: "emp-email",
                                    className: "text-xs font-semibold text-foreground/70",
                                    children: [
                                      "Email ",
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    Input,
                                    {
                                      id: "emp-email",
                                      type: "email",
                                      placeholder: "jane@example.com",
                                      className: "pl-9 h-10 rounded-xl text-sm",
                                      style: {
                                        background: "oklch(0.16 0.008 255)",
                                        borderColor: "oklch(0.28 0.015 260 / 0.6)"
                                      },
                                      value: empEmail,
                                      onChange: (e) => setEmpEmail(e.target.value),
                                      "data-ocid": "signup.employee.email.input"
                                    }
                                  )
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Label,
                                  {
                                    htmlFor: "emp-phone",
                                    className: "text-xs font-semibold text-foreground/70",
                                    children: "Phone"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    Input,
                                    {
                                      id: "emp-phone",
                                      type: "tel",
                                      placeholder: "+1 (555) 000-0000",
                                      className: "pl-9 h-10 rounded-xl text-sm",
                                      style: {
                                        background: "oklch(0.16 0.008 255)",
                                        borderColor: "oklch(0.28 0.015 260 / 0.6)"
                                      },
                                      value: empPhone,
                                      onChange: (e) => setEmpPhone(e.target.value),
                                      "data-ocid": "signup.employee.phone.input"
                                    }
                                  )
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Label,
                                  {
                                    htmlFor: "emp-location",
                                    className: "text-xs font-semibold text-foreground/70",
                                    children: "Location"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    Input,
                                    {
                                      id: "emp-location",
                                      placeholder: "City, State",
                                      className: "pl-9 h-10 rounded-xl text-sm",
                                      style: {
                                        background: "oklch(0.16 0.008 255)",
                                        borderColor: "oklch(0.28 0.015 260 / 0.6)"
                                      },
                                      value: empLocation,
                                      onChange: (e) => setEmpLocation(e.target.value),
                                      "data-ocid": "signup.employee.location.input"
                                    }
                                  )
                                ] })
                              ] })
                            ] })
                          ]
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "flex flex-col gap-4",
                          "data-ocid": "signup.employer_form",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                Label,
                                {
                                  htmlFor: "company-name",
                                  className: "text-xs font-semibold text-foreground/70",
                                  children: [
                                    "Company Name ",
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Input,
                                  {
                                    id: "company-name",
                                    placeholder: "Acme Corporation",
                                    className: "pl-9 h-10 rounded-xl text-sm",
                                    style: {
                                      background: "oklch(0.16 0.008 255)",
                                      borderColor: "oklch(0.28 0.015 260 / 0.6)"
                                    },
                                    value: companyName,
                                    onChange: (e) => setCompanyName(e.target.value),
                                    "data-ocid": "signup.employer.company_name.input"
                                  }
                                )
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  Label,
                                  {
                                    htmlFor: "contact-name",
                                    className: "text-xs font-semibold text-foreground/70",
                                    children: [
                                      "Contact Name ",
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    Input,
                                    {
                                      id: "contact-name",
                                      placeholder: "John Doe",
                                      className: "pl-9 h-10 rounded-xl text-sm",
                                      style: {
                                        background: "oklch(0.16 0.008 255)",
                                        borderColor: "oklch(0.28 0.015 260 / 0.6)"
                                      },
                                      value: contactName,
                                      onChange: (e) => setContactName(e.target.value),
                                      "data-ocid": "signup.employer.contact_name.input"
                                    }
                                  )
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  Label,
                                  {
                                    htmlFor: "employer-email",
                                    className: "text-xs font-semibold text-foreground/70",
                                    children: [
                                      "Work Email ",
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    Input,
                                    {
                                      id: "employer-email",
                                      type: "email",
                                      placeholder: "hr@company.com",
                                      className: "pl-9 h-10 rounded-xl text-sm",
                                      style: {
                                        background: "oklch(0.16 0.008 255)",
                                        borderColor: "oklch(0.28 0.015 260 / 0.6)"
                                      },
                                      value: employerEmail,
                                      onChange: (e) => setEmployerEmail(e.target.value),
                                      "data-ocid": "signup.employer.email.input"
                                    }
                                  )
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Label,
                                  {
                                    htmlFor: "industry",
                                    className: "text-xs font-semibold text-foreground/70",
                                    children: "Industry"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "select",
                                    {
                                      id: "industry",
                                      value: industry,
                                      onChange: (e) => setIndustry(e.target.value),
                                      "data-ocid": "signup.employer.industry.select",
                                      className: "w-full pl-9 pr-3 py-2.5 text-sm rounded-xl focus:outline-none focus:ring-1 focus:ring-ring transition-smooth appearance-none",
                                      style: {
                                        background: "oklch(0.16 0.008 255)",
                                        border: "1px solid oklch(0.28 0.015 260 / 0.6)",
                                        color: "oklch(0.90 0.01 260)"
                                      },
                                      children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select industry" }),
                                        industries.map((ind) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: ind, children: ind }, ind))
                                      ]
                                    }
                                  )
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Label,
                                  {
                                    htmlFor: "company-size",
                                    className: "text-xs font-semibold text-foreground/70",
                                    children: "Company Size"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "select",
                                    {
                                      id: "company-size",
                                      value: companySize,
                                      onChange: (e) => setCompanySize(e.target.value),
                                      "data-ocid": "signup.employer.company_size.select",
                                      className: "w-full pl-9 pr-3 py-2.5 text-sm rounded-xl focus:outline-none focus:ring-1 focus:ring-ring transition-smooth appearance-none",
                                      style: {
                                        background: "oklch(0.16 0.008 255)",
                                        border: "1px solid oklch(0.28 0.015 260 / 0.6)",
                                        color: "oklch(0.90 0.01 260)"
                                      },
                                      children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select size" }),
                                        companySizes.map((size) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: size, children: size }, size))
                                      ]
                                    }
                                  )
                                ] })
                              ] })
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: handleSignup,
                          disabled: isLoading || !canSubmit,
                          "data-ocid": "signup.submit_button",
                          className: "w-full h-12 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-smooth hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 text-white",
                          style: {
                            background: "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
                            boxShadow: canSubmit ? "0 4px 24px oklch(0.72 0.22 190 / 0.4)" : "none"
                          },
                          children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                            " Connecting…"
                          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            "Create Free Account ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                          ] })
                        }
                      ),
                      !canSubmit && !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-xs text-center text-muted-foreground -mt-3",
                          "data-ocid": "signup.validation.error_state",
                          children: "Please fill in all required fields to continue."
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-center text-muted-foreground", children: [
                        "By creating an account you agree to our",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "underline cursor-pointer transition-smooth",
                            style: { color: "oklch(0.72 0.22 190 / 0.9)" },
                            children: "Terms of Service"
                          }
                        ),
                        " ",
                        "and",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "underline cursor-pointer transition-smooth",
                            style: { color: "oklch(0.72 0.22 190 / 0.9)" },
                            children: "Privacy Policy"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { style: { background: "oklch(0.22 0.012 260 / 0.6)" } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-center text-muted-foreground", children: [
                        "Already have an account?",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => navigate({ to: "/login" }),
                            "data-ocid": "signup.login.link",
                            className: "font-semibold transition-smooth hover:underline",
                            style: { color: "oklch(0.72 0.22 190)" },
                            children: "Sign in instead"
                          }
                        )
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-center text-muted-foreground mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => navigate({ to: "/" }),
                    "data-ocid": "signup.back_home.link",
                    className: "hover:underline transition-smooth",
                    children: "← Back to ProHire 365 Home"
                  }
                ) })
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  SignupPage as default
};
