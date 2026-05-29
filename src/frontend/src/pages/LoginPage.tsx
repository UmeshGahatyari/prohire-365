import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Loader2,
  Lock,
  Mail,
  Shield,
  Star,
  User,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useCurrentUser } from "../hooks/useCurrentUser";
import type { UserRole } from "../types";

const roleTabs: {
  value: UserRole;
  label: string;
  icon: typeof User;
  desc: string;
  color: string;
}[] = [
  {
    value: "employee",
    label: "Job Seeker",
    icon: User,
    desc: "Find your dream job",
    color: "190",
  },
  {
    value: "employer",
    label: "Employer",
    icon: Briefcase,
    desc: "Hire top talent",
    color: "280",
  },
  {
    value: "admin",
    label: "Admin",
    icon: Shield,
    desc: "Manage platform",
    color: "280",
  },
];

const highlights = [
  { icon: Star, text: "10,000+ verified job listings updated daily" },
  { icon: Zap, text: "Apply to top companies with one click" },
  { icon: CheckCircle, text: "Real-time application tracking & alerts" },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, isAuthenticated, isLoading } = useAuth();
  const { role } = useCurrentUser();
  const [selectedRole, setSelectedRole] = useState<UserRole>("employee");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated && role) {
      const dest =
        role === "employee"
          ? "/employee"
          : role === "employer"
            ? "/employer"
            : "/admin";
      navigate({ to: dest as never });
    } else if (isAuthenticated) {
      navigate({ to: "/signup" });
    }
  }, [isAuthenticated, role, navigate]);

  const handleLogin = () => {
    localStorage.setItem("prohire365_role", selectedRole);
    login();
  };

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* ── LEFT PANEL ── */}
      <div
        className="hidden lg:flex lg:w-[48%] relative flex-col justify-between p-12 overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, oklch(0.08 0.03 280) 0%, oklch(0.12 0.04 270) 35%, oklch(0.10 0.03 260) 65%, oklch(0.07 0.025 250) 100%)",
        }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "url('/assets/generated/auth-bg-premium.dim_800x900.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />

        {/* Mesh gradient overlays */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 20%, oklch(0.55 0.18 280 / 0.25) 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 85%, oklch(0.72 0.22 190 / 0.18) 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />

        {/* Logo */}
        <div className="relative z-10">
          <button
            type="button"
            onClick={() => navigate({ to: "/" })}
            className="flex items-center gap-3 transition-smooth hover:opacity-90 group"
            data-ocid="login.logo.link"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-glow-accent"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
              }}
            >
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <span
              className="font-display font-bold text-2xl"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.9 0.04 280) 0%, oklch(0.72 0.22 190) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ProHire 365
            </span>
          </button>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-4"
              style={{ color: "oklch(0.72 0.22 190)" }}
            >
              Welcome Back
            </p>
            <h1 className="font-display font-black text-4xl xl:text-5xl text-foreground leading-[1.1] mb-5">
              Your Next Big
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.22 190) 0%, oklch(0.6 0.2 230) 50%, oklch(0.55 0.18 280) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Career Move
              </span>
              <br />
              Awaits You.
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Sign in to access thousands of curated opportunities, track your
              applications, and connect with industry-leading employers.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {highlights.map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "oklch(0.72 0.22 190 / 0.12)",
                    border: "1px solid oklch(0.72 0.22 190 / 0.25)",
                  }}
                >
                  <item.icon
                    className="h-4 w-4"
                    style={{ color: "oklch(0.72 0.22 190)" }}
                  />
                </div>
                <p className="text-sm text-foreground/80">{item.text}</p>
              </div>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {[
              { value: "10K+", label: "Open Roles" },
              { value: "500+", label: "Companies" },
              { value: "1M+", label: "Professionals" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-display font-black text-2xl"
                  style={{ color: "oklch(0.72 0.22 190)" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom decoration */}
        <div className="relative z-10">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} ProHire 365 — Built with{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              className="transition-smooth"
              style={{ color: "oklch(0.72 0.22 190 / 0.8)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div
        className="flex-1 flex items-center justify-center px-6 py-12 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.08 0.01 255) 0%, oklch(0.10 0.012 260) 100%)",
        }}
      >
        {/* Subtle background glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.5 0.16 280 / 0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <motion.div
          className="w-full max-w-md relative z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center justify-center gap-2 mb-8">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
              }}
            >
              <Briefcase className="h-4 w-4 text-white" />
            </div>
            <span
              className="font-display font-bold text-xl"
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

          {/* Card */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-6"
            style={{
              background: "oklch(0.13 0.008 255 / 0.9)",
              backdropFilter: "blur(24px)",
              border: "1px solid oklch(0.30 0.015 260 / 0.5)",
              boxShadow:
                "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px oklch(0.72 0.22 190 / 0.06) inset",
            }}
          >
            {/* Header */}
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-1.5">
                Sign in to your account
              </h2>
              <p className="text-sm text-muted-foreground">
                Access your dashboard and manage opportunities
              </p>
            </div>

            {/* Role selector */}
            <div data-ocid="login.role_selector">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Sign in as
              </p>
              <div className="grid grid-cols-3 gap-2">
                {roleTabs.map((tab) => (
                  <button
                    type="button"
                    key={tab.value}
                    onClick={() => setSelectedRole(tab.value)}
                    data-ocid={`login.role.${tab.value}.tab`}
                    className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border transition-smooth text-center"
                    style={
                      selectedRole === tab.value
                        ? {
                            background: `oklch(0.22 0.06 ${tab.color} / 0.3)`,
                            borderColor: `oklch(0.6 0.2 ${tab.color} / 0.5)`,
                            boxShadow: `0 0 16px oklch(0.5 0.16 ${tab.color} / 0.2)`,
                          }
                        : {
                            background: "oklch(0.16 0.008 255)",
                            borderColor: "oklch(0.28 0.015 260 / 0.5)",
                          }
                    }
                  >
                    <tab.icon
                      className="h-4 w-4 transition-smooth"
                      style={{
                        color:
                          selectedRole === tab.value
                            ? `oklch(0.72 0.22 ${tab.color})`
                            : "oklch(0.55 0.01 260)",
                      }}
                    />
                    <span
                      className="text-xs font-semibold transition-smooth"
                      style={{
                        color:
                          selectedRole === tab.value
                            ? `oklch(0.82 0.12 ${tab.color})`
                            : "oklch(0.62 0.01 260)",
                      }}
                    >
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Form fields */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold text-foreground/80"
                >
                  Email address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10 h-11 rounded-xl transition-smooth focus-visible:ring-1"
                    style={{
                      background: "oklch(0.16 0.008 255)",
                      borderColor: "oklch(0.28 0.015 260 / 0.6)",
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    data-ocid="login.email.input"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="password"
                    className="text-sm font-semibold text-foreground/80"
                  >
                    Password
                  </Label>
                  <button
                    type="button"
                    className="text-xs font-medium transition-smooth hover:underline"
                    data-ocid="login.forgot_password.link"
                    style={{ color: "oklch(0.72 0.22 190)" }}
                    onClick={() =>
                      alert(
                        "Password reset is not available yet. Please contact support.",
                      )
                    }
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10 h-11 rounded-xl transition-smooth focus-visible:ring-1"
                    style={{
                      background: "oklch(0.16 0.008 255)",
                      borderColor: "oklch(0.28 0.015 260 / 0.6)",
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    data-ocid="login.password.input"
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={handleLogin}
              disabled={isLoading}
              data-ocid="login.submit_button"
              className="w-full h-12 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-smooth hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-white"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
                boxShadow: "0 4px 24px oklch(0.72 0.22 190 / 0.4)",
              }}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Connecting…
                </>
              ) : (
                <>
                  Continue with Internet Identity{" "}
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            <p className="text-xs text-center text-muted-foreground">
              Secured by Internet Identity — decentralised, passwordless
              authentication.
            </p>

            <Separator style={{ background: "oklch(0.25 0.012 260 / 0.6)" }} />

            <p className="text-sm text-center text-muted-foreground">
              New to ProHire 365?{" "}
              <button
                type="button"
                onClick={() => navigate({ to: "/signup" })}
                data-ocid="login.signup.link"
                className="font-semibold transition-smooth hover:underline"
                style={{ color: "oklch(0.72 0.22 190)" }}
              >
                Create a free account
              </button>
            </p>
          </div>

          {/* Back link */}
          <p className="text-xs text-center text-muted-foreground mt-6">
            <button
              type="button"
              onClick={() => navigate({ to: "/" })}
              data-ocid="login.back_home.link"
              className="hover:underline transition-smooth"
            >
              ← Back to ProHire 365 Home
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
