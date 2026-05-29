import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import {
  Bookmark,
  Briefcase,
  Building2,
  ChevronDown,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  Menu,
  Moon,
  Search,
  Settings,
  Shield,
  Sparkles,
  Sun,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useCurrentUser } from "../hooks/useCurrentUser";
import type { UserRole } from "../types";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  sidebarRole?: UserRole;
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const dark = stored === "dark" || (!stored && prefersDark);
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label="Toggle dark mode"
      data-ocid="theme.toggle"
      className="relative rounded-xl hover:bg-primary/10 hover:text-primary transition-smooth"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}

const employeeSidebarNav = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/employee" },
  { icon: Search, label: "Find Jobs", href: "/employee/jobs" },
  {
    icon: ClipboardList,
    label: "My Applications",
    href: "/employee/applications",
  },
  { icon: Bookmark, label: "Saved Jobs", href: "/employee/saved" },
  { icon: User, label: "My Profile", href: "/employee/profile" },
];

const employerSidebarNav = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/employer" },
  { icon: Briefcase, label: "Post a Job", href: "/employer/post-job" },
  { icon: Building2, label: "My Jobs", href: "/employer/jobs" },
  { icon: User, label: "Candidates", href: "/employer/candidates" },
  { icon: Settings, label: "Analytics", href: "/employer/analytics" },
];

const adminSidebarNav = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: User, label: "Users", href: "/admin/users" },
  { icon: Briefcase, label: "Job Listings", href: "/admin/jobs" },
  { icon: Shield, label: "Analytics", href: "/admin/analytics" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

function Sidebar({ role }: { role: UserRole }) {
  const nav =
    role === "employee"
      ? employeeSidebarNav
      : role === "employer"
        ? employerSidebarNav
        : adminSidebarNav;

  const state = useRouterState();
  const navigate = useNavigate();
  const currentPath = state.location.pathname;

  return (
    <aside
      className="w-60 shrink-0 flex flex-col py-5 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.13 0.01 260) 0%, oklch(0.10 0.008 255) 100%)",
        borderRight: "1px solid oklch(0.28 0.015 260 / 0.5)",
      }}
    >
      {/* Ambient glow top */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.5 0.16 280 / 0.12) 0%, transparent 70%)",
        }}
      />

      <nav
        className="flex flex-col gap-1 px-3 relative z-10"
        data-ocid="sidebar.nav"
      >
        {nav.map((item) => {
          const active = currentPath === item.href;
          return (
            <button
              type="button"
              key={item.href}
              onClick={() => navigate({ to: item.href as never })}
              data-ocid={`sidebar.${item.label.toLowerCase().replace(/\s+/g, "_")}.link`}
              className={`group flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-smooth relative overflow-hidden
                ${
                  active
                    ? "text-foreground shadow-card"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              style={
                active
                  ? {
                      background:
                        "linear-gradient(135deg, oklch(0.5 0.16 280 / 0.25) 0%, oklch(0.72 0.22 190 / 0.12) 100%)",
                      border: "1px solid oklch(0.5 0.16 280 / 0.35)",
                    }
                  : {}
              }
            >
              {active && (
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 rounded-r"
                  style={{
                    background:
                      "linear-gradient(180deg, oklch(0.72 0.22 190), oklch(0.5 0.16 280))",
                  }}
                />
              )}
              {!active && (
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth rounded-xl"
                  style={{ background: "oklch(0.5 0.16 280 / 0.08)" }}
                />
              )}
              <item.icon
                className={`h-4 w-4 shrink-0 transition-smooth ${
                  active
                    ? "text-accent"
                    : "text-muted-foreground group-hover:text-primary"
                }`}
              />
              <span className="relative z-10">{item.label}</span>
              {active && (
                <div
                  className="ml-auto w-1.5 h-1.5 rounded-full"
                  style={{ background: "oklch(0.72 0.22 190)" }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom decorative element */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, oklch(0.72 0.22 190 / 0.06) 0%, transparent 70%)",
        }}
      />
    </aside>
  );
}

export function Layout({
  children,
  showSidebar = false,
  sidebarRole,
}: LayoutProps) {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const { role, name } = useCurrentUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate({ to: "/" });
  };

  const dashboardHref =
    role === "employee"
      ? "/employee"
      : role === "employer"
        ? "/employer"
        : "/admin";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-smooth ${
          scrolled ? "shadow-portal" : "shadow-card"
        }`}
        style={{
          background: scrolled
            ? "oklch(0.12 0.008 255 / 0.92)"
            : "oklch(0.13 0.01 260 / 0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid oklch(0.28 0.015 260 / 0.4)",
        }}
      >
        {/* Accent line at very top */}
        <div
          className="h-[2px] w-full"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.5 0.16 280) 0%, oklch(0.72 0.22 190) 50%, oklch(0.5 0.16 280) 100%)",
          }}
        />

        <div className="max-w-screen-xl mx-auto px-4 h-14 flex items-center gap-4">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate({ to: "/" })}
            data-ocid="header.logo.link"
            className="flex items-center gap-2.5 font-display font-bold text-xl transition-smooth hover:opacity-90 shrink-0"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shadow-card"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
              }}
            >
              <Briefcase className="h-4 w-4 text-white" />
            </div>
            <span
              className="gradient-text hidden sm:block"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.85 0.06 280) 0%, oklch(0.72 0.22 190) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ProHire 365
            </span>
          </button>

          {/* Nav links (desktop) */}
          <nav
            className="hidden md:flex items-center gap-0.5 ml-6"
            data-ocid="header.nav"
          >
            {[
              {
                label: "Find Jobs",
                to: "/employee/jobs" as const,
                isRoute: true,
              },
              { label: "Companies", href: "/#companies", isRoute: false },
              { label: "Resources", href: "/#resources", isRoute: false },
            ].map((item) =>
              item.isRoute ? (
                <button
                  type="button"
                  key={item.label}
                  onClick={() => navigate({ to: item.to as never })}
                  data-ocid={`header.${item.label.toLowerCase().replace(/\s+/g, "_")}.link`}
                  className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-lg hover:bg-primary/8"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  data-ocid={`header.${item.label.toLowerCase().replace(/\s+/g, "_")}.link`}
                  className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-lg hover:bg-primary/8"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <div className="flex-1" />

          {/* Right actions */}
          <div className="flex items-center gap-1.5">
            <ThemeToggle />

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    data-ocid="header.user_menu.toggle"
                    className="gap-2 rounded-xl hover:bg-primary/10 px-3"
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                        color: "white",
                      }}
                    >
                      {name ? name[0].toUpperCase() : "U"}
                    </div>
                    <span className="hidden sm:inline max-w-[110px] truncate text-sm">
                      {name ?? "Account"}
                    </span>
                    <ChevronDown className="h-3 w-3 opacity-60" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48"
                  style={{
                    background: "oklch(0.16 0.01 260)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.6)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <DropdownMenuItem
                    onClick={() => navigate({ to: dashboardHref as never })}
                    data-ocid="header.go_dashboard.button"
                    className="cursor-pointer hover:bg-primary/10"
                  >
                    <LayoutDashboard className="h-4 w-4 mr-2" /> Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-border/40" />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    data-ocid="header.logout.button"
                    className="text-destructive focus:text-destructive cursor-pointer"
                  >
                    <LogOut className="h-4 w-4 mr-2" /> Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate({ to: "/login" })}
                  data-ocid="header.login.button"
                  className="rounded-xl hover:bg-primary/10 hover:text-primary transition-smooth"
                >
                  Log in
                </Button>
                <Button
                  size="sm"
                  onClick={() => navigate({ to: "/signup" })}
                  data-ocid="header.signup.button"
                  className="rounded-xl font-semibold transition-smooth shadow-card relative overflow-hidden group"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
                    color: "white",
                    border: "none",
                  }}
                >
                  <span className="relative z-10">Get Started</span>
                </Button>
              </div>
            )}

            {/* Mobile menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-xl"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              data-ocid="header.mobile_menu.toggle"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div
            className="md:hidden px-4 py-3 flex flex-col gap-1 animate-slide-down"
            style={{
              borderTop: "1px solid oklch(0.28 0.015 260 / 0.4)",
              background: "oklch(0.12 0.008 255 / 0.97)",
            }}
          >
            {["Find Jobs", "Companies", "Resources"].map((item) => (
              <button
                type="button"
                key={item}
                className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground text-left rounded-lg hover:bg-primary/8 transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Body */}
      <div className="flex flex-1 min-h-0">
        {showSidebar && sidebarRole && <Sidebar role={sidebarRole} />}
        <main className="flex-1 min-w-0 overflow-auto">{children}</main>
      </div>

      {/* Footer (public pages only) */}
      {!showSidebar && (
        <footer
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.10 0.008 255) 0%, oklch(0.08 0.01 250) 100%)",
            borderTop: "1px solid oklch(0.28 0.015 260 / 0.4)",
          }}
        >
          {/* Top accent gradient line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, oklch(0.5 0.16 280 / 0.6) 30%, oklch(0.72 0.22 190 / 0.8) 50%, oklch(0.5 0.16 280 / 0.6) 70%, transparent 100%)",
            }}
          />

          <div className="max-w-screen-xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2.5 font-display font-bold text-lg mb-3">
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
                    }}
                  >
                    <Briefcase className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.85 0.06 280) 0%, oklch(0.72 0.22 190) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    ProHire 365
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
                  The premium job platform connecting top talent with
                  world-class companies.
                </p>
              </div>

              {/* Links */}
              <div className="flex gap-12 md:justify-center">
                <div>
                  <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">
                    Platform
                  </p>
                  {["Find Jobs", "For Employers", "Pricing"].map((l) => (
                    <p
                      key={l}
                      className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-smooth mb-1.5"
                    >
                      {l}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">
                    Legal
                  </p>
                  {["Privacy", "Terms", "Help"].map((l) => (
                    <p
                      key={l}
                      className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-smooth mb-1.5"
                    >
                      {l}
                    </p>
                  ))}
                </div>
              </div>

              {/* Built with */}
              <div className="md:text-right">
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-muted-foreground"
                  style={{
                    background: "oklch(0.16 0.01 260 / 0.6)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.4)",
                  }}
                >
                  <Sparkles className="h-3 w-3 text-accent" />
                  Built with{" "}
                  <a
                    href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                      typeof window !== "undefined"
                        ? window.location.hostname
                        : "",
                    )}`}
                    className="text-accent hover:text-accent/80 underline transition-smooth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    caffeine.ai
                  </a>
                </div>
                <p className="text-xs text-muted-foreground/60 mt-3">
                  © {new Date().getFullYear()} ProHire 365. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
