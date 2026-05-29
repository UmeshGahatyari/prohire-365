import { u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
import { I as Input } from "./input-Bnuh1-dr.js";
import { L as Label } from "./label-Bzq5IhRt.js";
import { S as Separator } from "./separator-CEt-SyGN.js";
import { c as createLucideIcon, u as useAuth, B as Briefcase, U as User } from "./useAuth-OLjIzFBE.js";
import { u as useCurrentUser, S as Shield } from "./useCurrentUser-BEN-7rG2.js";
import { m as motion } from "./proxy-BwDENFEW.js";
import { S as Star } from "./star-CJQlCY4a.js";
import { Z as Zap } from "./zap-CK0f-2JC.js";
import { C as CircleCheckBig } from "./circle-check-big-4iKIR8FP.js";
import { M as Mail } from "./mail-Dj4xtjkY.js";
import { L as LoaderCircle } from "./loader-circle-CBBHHiqf.js";
import { A as ArrowRight } from "./arrow-right-Bx_bron2.js";
import "./index-DiKJEy-t.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode);
const roleTabs = [
  {
    value: "employee",
    label: "Job Seeker",
    icon: User,
    desc: "Find your dream job",
    color: "190"
  },
  {
    value: "employer",
    label: "Employer",
    icon: Briefcase,
    desc: "Hire top talent",
    color: "280"
  },
  {
    value: "admin",
    label: "Admin",
    icon: Shield,
    desc: "Manage platform",
    color: "280"
  }
];
const highlights = [
  { icon: Star, text: "10,000+ verified job listings updated daily" },
  { icon: Zap, text: "Apply to top companies with one click" },
  { icon: CircleCheckBig, text: "Real-time application tracking & alerts" }
];
function LoginPage() {
  const navigate = useNavigate();
  const { login, isAuthenticated, isLoading } = useAuth();
  const { role } = useCurrentUser();
  const [selectedRole, setSelectedRole] = reactExports.useState("employee");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (isAuthenticated && role) {
      const dest = role === "employee" ? "/employee" : role === "employer" ? "/employer" : "/admin";
      navigate({ to: dest });
    } else if (isAuthenticated) {
      navigate({ to: "/signup" });
    }
  }, [isAuthenticated, role, navigate]);
  const handleLogin = () => {
    localStorage.setItem("prohire365_role", selectedRole);
    login();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "hidden lg:flex lg:w-[48%] relative flex-col justify-between p-12 overflow-hidden",
        style: {
          background: "linear-gradient(145deg, oklch(0.08 0.03 280) 0%, oklch(0.12 0.04 270) 35%, oklch(0.10 0.03 260) 65%, oklch(0.07 0.025 250) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-25",
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
              className: "absolute top-0 left-0 w-full h-full pointer-events-none",
              style: {
                background: "radial-gradient(ellipse at 20% 20%, oklch(0.55 0.18 280 / 0.25) 0%, transparent 50%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 right-0 w-full h-full pointer-events-none",
              style: {
                background: "radial-gradient(ellipse at 80% 85%, oklch(0.72 0.22 190 / 0.18) 0%, transparent 50%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => navigate({ to: "/" }),
              className: "flex items-center gap-3 transition-smooth hover:opacity-90 group",
              "data-ocid": "login.logo.link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-10 h-10 rounded-xl flex items-center justify-center shadow-glow-accent",
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
                      children: "Welcome Back"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-4xl xl:text-5xl text-foreground leading-[1.1] mb-5", children: [
                    "Your Next Big",
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
                        children: "Career Move"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "Awaits You."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed max-w-sm", children: "Sign in to access thousands of curated opportunities, track your applications, and connect with industry-leading employers." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "flex flex-col gap-4",
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.7, delay: 0.4 },
                children: highlights.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                      style: {
                        background: "oklch(0.72 0.22 190 / 0.12)",
                        border: "1px solid oklch(0.72 0.22 190 / 0.25)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        item.icon,
                        {
                          className: "h-4 w-4",
                          style: { color: "oklch(0.72 0.22 190)" }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80", children: item.text })
                ] }, item.text))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "flex gap-8",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.7, delay: 0.6 },
                children: [
                  { value: "10K+", label: "Open Roles" },
                  { value: "500+", label: "Companies" },
                  { value: "1M+", label: "Professionals" }
                ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display font-black text-2xl",
                      style: { color: "oklch(0.72 0.22 190)" },
                      children: stat.value
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: stat.label })
                ] }, stat.label))
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
        className: "flex-1 flex items-center justify-center px-6 py-12 relative overflow-hidden",
        style: {
          background: "linear-gradient(180deg, oklch(0.08 0.01 255) 0%, oklch(0.10 0.012 260) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none",
              style: {
                background: "radial-gradient(circle, oklch(0.5 0.16 280 / 0.06) 0%, transparent 70%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "w-full max-w-md relative z-10",
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
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-1.5", children: "Sign in to your account" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Access your dashboard and manage opportunities" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "login.role_selector", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3", children: "Sign in as" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: roleTabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () => setSelectedRole(tab.value),
                            "data-ocid": `login.role.${tab.value}.tab`,
                            className: "flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border transition-smooth text-center",
                            style: selectedRole === tab.value ? {
                              background: `oklch(0.22 0.06 ${tab.color} / 0.3)`,
                              borderColor: `oklch(0.6 0.2 ${tab.color} / 0.5)`,
                              boxShadow: `0 0 16px oklch(0.5 0.16 ${tab.color} / 0.2)`
                            } : {
                              background: "oklch(0.16 0.008 255)",
                              borderColor: "oklch(0.28 0.015 260 / 0.5)"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                tab.icon,
                                {
                                  className: "h-4 w-4 transition-smooth",
                                  style: {
                                    color: selectedRole === tab.value ? `oklch(0.72 0.22 ${tab.color})` : "oklch(0.55 0.01 260)"
                                  }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "text-xs font-semibold transition-smooth",
                                  style: {
                                    color: selectedRole === tab.value ? `oklch(0.82 0.12 ${tab.color})` : "oklch(0.62 0.01 260)"
                                  },
                                  children: tab.label
                                }
                              )
                            ]
                          },
                          tab.value
                        )) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Label,
                            {
                              htmlFor: "email",
                              className: "text-sm font-semibold text-foreground/80",
                              children: "Email address"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                id: "email",
                                type: "email",
                                placeholder: "you@example.com",
                                className: "pl-10 h-11 rounded-xl transition-smooth focus-visible:ring-1",
                                style: {
                                  background: "oklch(0.16 0.008 255)",
                                  borderColor: "oklch(0.28 0.015 260 / 0.6)"
                                },
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                "data-ocid": "login.email.input"
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Label,
                              {
                                htmlFor: "password",
                                className: "text-sm font-semibold text-foreground/80",
                                children: "Password"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                className: "text-xs font-medium transition-smooth hover:underline",
                                "data-ocid": "login.forgot_password.link",
                                style: { color: "oklch(0.72 0.22 190)" },
                                onClick: () => alert(
                                  "Password reset is not available yet. Please contact support."
                                ),
                                children: "Forgot password?"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                id: "password",
                                type: "password",
                                placeholder: "Enter your password",
                                className: "pl-10 h-11 rounded-xl transition-smooth focus-visible:ring-1",
                                style: {
                                  background: "oklch(0.16 0.008 255)",
                                  borderColor: "oklch(0.28 0.015 260 / 0.6)"
                                },
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                "data-ocid": "login.password.input",
                                onKeyDown: (e) => e.key === "Enter" && handleLogin()
                              }
                            )
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: handleLogin,
                          disabled: isLoading,
                          "data-ocid": "login.submit_button",
                          className: "w-full h-12 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-smooth hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-white",
                          style: {
                            background: "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
                            boxShadow: "0 4px 24px oklch(0.72 0.22 190 / 0.4)"
                          },
                          children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                            " Connecting…"
                          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            "Continue with Internet Identity",
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                          ] })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-center text-muted-foreground", children: "Secured by Internet Identity — decentralised, passwordless authentication." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { style: { background: "oklch(0.25 0.012 260 / 0.6)" } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-center text-muted-foreground", children: [
                        "New to ProHire 365?",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => navigate({ to: "/signup" }),
                            "data-ocid": "login.signup.link",
                            className: "font-semibold transition-smooth hover:underline",
                            style: { color: "oklch(0.72 0.22 190)" },
                            children: "Create a free account"
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
                    "data-ocid": "login.back_home.link",
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
  LoginPage as default
};
