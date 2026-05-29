import { r as reactExports, j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
import { L as Layout, S as Search, B as Button } from "./Layout-JeuDnHZC.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, C as CircleX } from "./dialog-8rDSVgZ4.js";
import { I as Input } from "./input-Bnuh1-dr.js";
import { S as Separator } from "./separator-CEt-SyGN.js";
import { T as Tabs, a as TabsList, b as TabsTrigger } from "./tabs-M0OANnau.js";
import { E as EmptyState } from "./EmptyState-B1Y1EQq_.js";
import { P as PageHeader } from "./PageHeader-CuM3Df3J.js";
import { P as ProtectedRoute } from "./ProtectedRoute-BSLymTUa.js";
import { U as Users } from "./users-C2-7Zdip.js";
import { B as Building2 } from "./sparkles-mukiyukd.js";
import { S as Shield } from "./useCurrentUser-BEN-7rG2.js";
import { M as Mail } from "./mail-Dj4xtjkY.js";
import { M as MapPin } from "./map-pin-BkrrQ4Wc.js";
import { P as Phone } from "./phone-uC1LFejI.js";
import { B as Briefcase } from "./useAuth-OLjIzFBE.js";
import { F as FileText } from "./file-text-Ncu6psUp.js";
import { C as CircleCheckBig } from "./circle-check-big-4iKIR8FP.js";
import "./index-DiKJEy-t.js";
const mockUsers = [
  {
    id: 1,
    name: "Jordan Mitchell",
    email: "jordan.m@example.com",
    role: "employee",
    status: "active",
    joined: "Apr 18, 2026",
    location: "San Francisco, CA",
    phone: "+1 415-555-0102",
    skills: ["React", "TypeScript", "Node.js", "GraphQL"],
    experience: "5 years in full-stack development at tech startups",
    resumeLink: "#"
  },
  {
    id: 2,
    name: "Alex Chen",
    email: "alex.chen@example.com",
    role: "employee",
    status: "active",
    joined: "Apr 16, 2026",
    location: "Austin, TX",
    phone: "+1 512-555-0144",
    skills: ["Python", "Machine Learning", "TensorFlow", "SQL"],
    experience: "3 years as data scientist at fintech firms",
    resumeLink: "#"
  },
  {
    id: 3,
    name: "Morgan Rivera",
    email: "morgan.r@example.com",
    role: "employee",
    status: "inactive",
    joined: "Apr 14, 2026",
    location: "Seattle, WA",
    phone: "+1 206-555-0198",
    skills: ["UX Design", "Figma", "User Research"],
    experience: "4 years of UX/UI design experience",
    resumeLink: "#"
  },
  {
    id: 4,
    name: "Priya Sharma",
    email: "priya.s@example.com",
    role: "employee",
    status: "active",
    joined: "Apr 12, 2026",
    location: "New York, NY",
    phone: "+1 212-555-0177",
    skills: ["Java", "Spring Boot", "AWS", "Docker"],
    experience: "6 years backend engineering",
    resumeLink: "#"
  },
  {
    id: 5,
    name: "Luminary Tech",
    email: "hr@luminarytech.io",
    role: "employer",
    status: "active",
    joined: "Apr 19, 2026",
    companyName: "Luminary Tech",
    industry: "Software & SaaS",
    companySize: "51–200"
  },
  {
    id: 6,
    name: "Orbit Analytics",
    email: "jobs@orbitanalytics.com",
    role: "employer",
    status: "pending",
    joined: "Apr 17, 2026",
    companyName: "Orbit Analytics",
    industry: "Data & Analytics",
    companySize: "11–50"
  },
  {
    id: 7,
    name: "Nexus Technologies",
    email: "talent@nexustech.com",
    role: "employer",
    status: "active",
    joined: "Apr 10, 2026",
    companyName: "Nexus Technologies",
    industry: "Enterprise Software",
    companySize: "201–500"
  },
  {
    id: 8,
    name: "CloudScale",
    email: "recruiting@cloudscale.io",
    role: "employer",
    status: "active",
    joined: "Apr 8, 2026",
    companyName: "CloudScale",
    industry: "Cloud Infrastructure",
    companySize: "51–200"
  },
  {
    id: 9,
    name: "Devon Parker",
    email: "devon.p@example.com",
    role: "employee",
    status: "active",
    joined: "Apr 5, 2026",
    location: "Chicago, IL",
    phone: "+1 312-555-0139",
    skills: ["Product Management", "Agile", "Jira", "Roadmapping"],
    experience: "7 years in product strategy",
    resumeLink: "#"
  },
  {
    id: 10,
    name: "Riley Thompson",
    email: "riley.t@example.com",
    role: "employee",
    status: "inactive",
    joined: "Apr 1, 2026",
    location: "Denver, CO",
    phone: "+1 720-555-0162",
    skills: ["Go", "Kubernetes", "CI/CD"],
    experience: "4 years DevOps engineering",
    resumeLink: "#"
  }
];
const roleChip = {
  employee: {
    label: "Employee",
    gradient: "oklch(0.5 0.16 280 / 0.18)",
    border: "oklch(0.5 0.16 280 / 0.35)",
    color: "oklch(0.78 0.14 280)"
  },
  employer: {
    label: "Employer",
    gradient: "oklch(0.65 0.22 190 / 0.18)",
    border: "oklch(0.65 0.22 190 / 0.35)",
    color: "oklch(0.72 0.22 190)"
  }
};
const statusConfig = {
  active: {
    label: "Active",
    dot: "oklch(0.7 0.2 155)",
    text: "oklch(0.75 0.2 155)",
    bg: "oklch(0.55 0.18 155 / 0.12)",
    border: "oklch(0.55 0.18 155 / 0.3)"
  },
  pending: {
    label: "Pending",
    dot: "oklch(0.75 0.18 65)",
    text: "oklch(0.78 0.16 65)",
    bg: "oklch(0.55 0.18 65 / 0.12)",
    border: "oklch(0.55 0.18 65 / 0.3)"
  },
  inactive: {
    label: "Inactive",
    dot: "oklch(0.45 0.01 260)",
    text: "oklch(0.55 0.01 260)",
    bg: "oklch(0.3 0.01 260 / 0.2)",
    border: "oklch(0.35 0.015 260 / 0.3)"
  }
};
function UserManagementPage() {
  const [search, setSearch] = reactExports.useState("");
  const [tab, setTab] = reactExports.useState("all");
  const [users, setUsers] = reactExports.useState(mockUsers);
  const [selectedUser, setSelectedUser] = reactExports.useState(null);
  const filtered = users.filter((u) => {
    const matchesTab = tab === "all" || u.role === tab;
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });
  const toggleStatus = (id) => {
    setUsers(
      (prev) => prev.map(
        (u) => u.id === id ? { ...u, status: u.status === "active" ? "inactive" : "active" } : u
      )
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { requiredRole: "admin", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { showSidebar: true, sidebarRole: "admin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-6xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PageHeader,
        {
          title: "User Management",
          description: "Search, filter, and manage all platform users",
          icon: Users
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col sm:flex-row gap-3 items-start sm:items-center p-4 rounded-2xl",
          style: {
            background: "oklch(0.14 0.009 255 / 0.7)",
            border: "1px solid oklch(0.28 0.015 260 / 0.35)",
            backdropFilter: "blur(10px)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "text",
                  placeholder: "Search by name or email…",
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  className: "pl-9 bg-transparent border-border/50 focus:border-primary/50 rounded-xl",
                  "data-ocid": "users.search_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: tab, onValueChange: (v) => setTab(v), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsList,
              {
                className: "rounded-xl",
                style: {
                  background: "oklch(0.1 0.008 255 / 0.8)",
                  border: "1px solid oklch(0.28 0.015 260 / 0.3)"
                },
                "data-ocid": "users.role.tab",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TabsTrigger,
                    {
                      value: "all",
                      className: "rounded-lg text-xs",
                      "data-ocid": "users.filter_all.tab",
                      children: "All"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TabsTrigger,
                    {
                      value: "employee",
                      className: "rounded-lg text-xs",
                      "data-ocid": "users.filter_employees.tab",
                      children: "Employees"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TabsTrigger,
                    {
                      value: "employer",
                      className: "rounded-lg text-xs",
                      "data-ocid": "users.filter_employers.tab",
                      children: "Employers"
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "text-xs px-3 py-1.5 rounded-full font-medium",
                style: {
                  background: "oklch(0.5 0.16 280 / 0.15)",
                  border: "1px solid oklch(0.5 0.16 280 / 0.3)",
                  color: "oklch(0.78 0.14 280)"
                },
                children: [
                  filtered.length,
                  " user",
                  filtered.length !== 1 ? "s" : ""
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl overflow-hidden",
          style: {
            background: "oklch(0.14 0.009 255 / 0.8)",
            border: "1px solid oklch(0.28 0.015 260 / 0.35)",
            backdropFilter: "blur(10px)"
          },
          children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            EmptyState,
            {
              icon: Users,
              title: "No users found",
              description: "Try adjusting your search or filter to find users."
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-ocid": "users.table", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "tr",
              {
                style: {
                  background: "oklch(0.1 0.008 255 / 0.6)",
                  borderBottom: "1px solid oklch(0.28 0.015 260 / 0.3)"
                },
                children: [
                  "Name",
                  "Email",
                  "Role",
                  "Status",
                  "Joined",
                  "Actions"
                ].map((h, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    className: `px-4 py-3 font-semibold text-xs uppercase tracking-wider ${idx === 5 ? "text-right" : "text-left"} ${idx === 1 ? "hidden md:table-cell" : ""} ${idx === 4 ? "hidden lg:table-cell" : ""}`,
                    style: { color: "oklch(0.6 0.015 260)" },
                    children: h
                  },
                  h
                ))
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((user, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "hover:bg-primary/5 transition-smooth cursor-pointer",
                style: {
                  borderBottom: "1px solid oklch(0.28 0.015 260 / 0.2)"
                },
                "data-ocid": `users.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
                        style: {
                          background: "linear-gradient(135deg, oklch(0.5 0.16 280), oklch(0.65 0.22 190))",
                          color: "white"
                        },
                        children: user.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground truncate", children: user.name })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5 text-muted-foreground hidden md:table-cell truncate max-w-[180px]", children: user.email }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs px-2.5 py-1 rounded-full font-medium",
                      style: {
                        background: roleChip[user.role].gradient,
                        border: `1px solid ${roleChip[user.role].border}`,
                        color: roleChip[user.role].color
                      },
                      children: roleChip[user.role].label
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "flex items-center gap-1.5 text-xs w-fit px-2.5 py-1 rounded-full font-medium",
                      style: {
                        background: statusConfig[user.status].bg,
                        border: `1px solid ${statusConfig[user.status].border}`,
                        color: statusConfig[user.status].text
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                          user.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "animate-ping absolute inline-flex h-full w-full rounded-full opacity-60",
                              style: {
                                background: statusConfig[user.status].dot
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "relative inline-flex rounded-full h-1.5 w-1.5",
                              style: {
                                background: statusConfig[user.status].dot
                              }
                            }
                          )
                        ] }),
                        statusConfig[user.status].label
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5 text-muted-foreground hidden lg:table-cell", children: user.joined }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        variant: "ghost",
                        size: "sm",
                        className: "h-7 text-xs rounded-lg border",
                        style: {
                          borderColor: "oklch(0.28 0.015 260 / 0.4)",
                          color: "oklch(0.72 0.22 190)"
                        },
                        onClick: () => setSelectedUser(user),
                        "data-ocid": `users.view_button.${i + 1}`,
                        children: "View"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        variant: user.status === "active" ? "destructive" : "outline",
                        size: "sm",
                        className: "h-7 text-xs rounded-lg",
                        onClick: () => toggleStatus(user.id),
                        "data-ocid": `users.toggle_status_button.${i + 1}`,
                        children: user.status === "active" ? "Suspend" : "Reactivate"
                      }
                    )
                  ] }) })
                ]
              },
              user.id
            )) })
          ] }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!selectedUser,
        onOpenChange: () => setSelectedUser(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DialogContent,
          {
            className: "max-w-lg",
            style: {
              background: "oklch(0.13 0.009 258)",
              border: "1px solid oklch(0.28 0.015 260 / 0.5)"
            },
            "data-ocid": "user_detail.dialog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display flex items-center gap-2", children: [
                (selectedUser == null ? void 0 : selectedUser.role) === "employer" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Building2,
                  {
                    className: "h-5 w-5",
                    style: { color: "oklch(0.72 0.22 190)" }
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Shield,
                  {
                    className: "h-5 w-5",
                    style: { color: "oklch(0.72 0.14 280)" }
                  }
                ),
                "User Details"
              ] }) }),
              selectedUser && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-12 h-12 rounded-full flex items-center justify-center text-base font-bold shrink-0",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.5 0.16 280), oklch(0.65 0.22 190))",
                        color: "white"
                      },
                      children: selectedUser.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: selectedUser.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3 w-3" }),
                      " ",
                      selectedUser.email
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex gap-2 flex-wrap justify-end", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs px-2.5 py-1 rounded-full font-medium",
                        style: {
                          background: roleChip[selectedUser.role].gradient,
                          border: `1px solid ${roleChip[selectedUser.role].border}`,
                          color: roleChip[selectedUser.role].color
                        },
                        children: roleChip[selectedUser.role].label
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium",
                        style: {
                          background: statusConfig[selectedUser.status].bg,
                          border: `1px solid ${statusConfig[selectedUser.status].border}`,
                          color: statusConfig[selectedUser.status].text
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "inline-flex rounded-full h-1.5 w-1.5",
                              style: {
                                background: statusConfig[selectedUser.status].dot
                              }
                            }
                          ),
                          statusConfig[selectedUser.status].label
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Separator,
                  {
                    style: { background: "oklch(0.28 0.015 260 / 0.3)" }
                  }
                ),
                selectedUser.role === "employee" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  selectedUser.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 shrink-0" }),
                    " ",
                    selectedUser.location
                  ] }),
                  selectedUser.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 shrink-0" }),
                    " ",
                    selectedUser.phone
                  ] }),
                  selectedUser.experience && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4 shrink-0" }),
                    " ",
                    selectedUser.experience
                  ] }),
                  selectedUser.skills && selectedUser.skills.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2", children: "Skills" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: selectedUser.skills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "px-2 py-0.5 rounded-full text-xs font-medium",
                        style: {
                          background: "oklch(0.5 0.16 280 / 0.15)",
                          border: "1px solid oklch(0.5 0.16 280 / 0.3)",
                          color: "oklch(0.78 0.14 280)"
                        },
                        children: skill
                      },
                      skill
                    )) })
                  ] }),
                  selectedUser.resumeLink && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: selectedUser.resumeLink,
                      className: "inline-flex items-center gap-1.5 text-sm hover:opacity-80 transition-smooth",
                      style: { color: "oklch(0.72 0.22 190)" },
                      "data-ocid": "user_detail.resume.link",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }),
                        " View Resume"
                      ]
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  selectedUser.companyName && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4 shrink-0" }),
                    " ",
                    selectedUser.companyName
                  ] }),
                  selectedUser.industry && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4 shrink-0" }),
                    " ",
                    selectedUser.industry
                  ] }),
                  selectedUser.companySize && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4 shrink-0" }),
                    " ",
                    selectedUser.companySize,
                    " employees"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Separator,
                  {
                    style: { background: "oklch(0.28 0.015 260 / 0.3)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
                  selectedUser.role === "employer" && selectedUser.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "button",
                      size: "sm",
                      className: "text-xs h-8 gap-1.5",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.55 0.18 155), oklch(0.5 0.16 165))",
                        color: "white"
                      },
                      onClick: () => {
                        setUsers(
                          (prev) => prev.map(
                            (u) => u.id === selectedUser.id ? { ...u, status: "active" } : u
                          )
                        );
                        setSelectedUser(null);
                      },
                      "data-ocid": "user_detail.approve_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-3.5 w-3.5" }),
                        " Approve"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "button",
                      variant: selectedUser.status === "active" ? "destructive" : "outline",
                      size: "sm",
                      className: "h-8 text-xs gap-1.5",
                      onClick: () => {
                        toggleStatus(selectedUser.id);
                        setSelectedUser(null);
                      },
                      "data-ocid": "user_detail.toggle_status_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3.5 w-3.5" }),
                        selectedUser.status === "active" ? "Suspend" : "Reactivate"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      className: "h-8 text-xs",
                      style: { borderColor: "oklch(0.28 0.015 260 / 0.5)" },
                      onClick: () => setSelectedUser(null),
                      "data-ocid": "user_detail.close_button",
                      children: "Close"
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    )
  ] }) });
}
export {
  UserManagementPage as default
};
