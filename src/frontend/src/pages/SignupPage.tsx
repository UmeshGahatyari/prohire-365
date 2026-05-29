import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import type { UserRole } from "../types";

type SignupRole = "employee" | "employer";

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
  "Other",
];

const companySizes = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "501–1,000 employees",
  "1,000+ employees",
];

const benefitList = [
  "Access 10,000+ verified job listings daily",
  "One-click application to top companies",
  "Real-time status tracking & alerts",
  "Free profile hosting and resume uploads",
];

export default function SignupPage() {
  const navigate = useNavigate();
  const { login, isAuthenticated, isLoading } = useAuth();
  const [selectedRole, setSelectedRole] = useState<SignupRole>("employee");

  // Employee fields
  const [empName, setEmpName] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empPhone, setEmpPhone] = useState("");
  const [empLocation, setEmpLocation] = useState("");

  // Employer fields
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [employerEmail, setEmployerEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      const role = localStorage.getItem("prohire365_role") as UserRole | null;
      const dest =
        role === "employer"
          ? "/employer"
          : role === "admin"
            ? "/admin"
            : "/employee";
      navigate({ to: dest as never });
    }
  }, [isAuthenticated, navigate]);

  const isEmployeeValid = empName.trim() && empEmail.trim();
  const isEmployerValid =
    companyName.trim() && contactName.trim() && employerEmail.trim();
  const canSubmit =
    selectedRole === "employee" ? isEmployeeValid : isEmployerValid;

  const handleSignup = () => {
    localStorage.setItem("prohire365_role", selectedRole);
    const displayName =
      selectedRole === "employee" ? empName.trim() : contactName.trim();
    if (displayName) localStorage.setItem("prohire365_name", displayName);
    login();
  };

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* ── LEFT PANEL ── */}
      <div
        className="hidden lg:flex lg:w-[45%] relative flex-col justify-between p-12 overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, oklch(0.07 0.025 260) 0%, oklch(0.11 0.04 275) 40%, oklch(0.09 0.03 265) 70%, oklch(0.07 0.02 250) 100%)",
        }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('/assets/generated/auth-bg-premium.dim_800x900.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        {/* Radial glows */}
        <div
          className="absolute top-0 right-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 15%, oklch(0.72 0.22 190 / 0.18) 0%, transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 15% 90%, oklch(0.55 0.18 280 / 0.20) 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />

        {/* Logo */}
        <div className="relative z-10">
          <button
            type="button"
            onClick={() => navigate({ to: "/" })}
            className="flex items-center gap-3 transition-smooth hover:opacity-90"
            data-ocid="signup.logo.link"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
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

        {/* Content */}
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
              Join 1 Million+ Professionals
            </p>
            <h1 className="font-display font-black text-4xl xl:text-5xl text-foreground leading-[1.1] mb-5">
              Start Your
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
                Journey Today.
              </span>
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Create your free account and unlock access to thousands of curated
              job opportunities from world-class companies.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3.5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {benefitList.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "oklch(0.72 0.22 190 / 0.2)",
                    border: "1px solid oklch(0.72 0.22 190 / 0.4)",
                  }}
                >
                  <CheckCircle
                    className="h-3 w-3"
                    style={{ color: "oklch(0.72 0.22 190)" }}
                  />
                </div>
                <p className="text-sm text-foreground/80">{benefit}</p>
              </div>
            ))}
          </motion.div>

          {/* Role preview cards */}
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div
              className="rounded-xl p-4 flex flex-col gap-2"
              style={{
                background: "oklch(0.72 0.22 190 / 0.08)",
                border: "1px solid oklch(0.72 0.22 190 / 0.2)",
              }}
            >
              <User
                className="h-5 w-5"
                style={{ color: "oklch(0.72 0.22 190)" }}
              />
              <p className="text-sm font-semibold text-foreground">
                Job Seekers
              </p>
              <p className="text-xs text-muted-foreground">
                Find & apply to roles
              </p>
            </div>
            <div
              className="rounded-xl p-4 flex flex-col gap-2"
              style={{
                background: "oklch(0.55 0.18 280 / 0.08)",
                border: "1px solid oklch(0.55 0.18 280 / 0.2)",
              }}
            >
              <Building2
                className="h-5 w-5"
                style={{ color: "oklch(0.65 0.18 280)" }}
              />
              <p className="text-sm font-semibold text-foreground">Employers</p>
              <p className="text-xs text-muted-foreground">
                Post jobs & hire talent
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
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
        className="flex-1 flex items-start justify-center px-6 py-12 relative overflow-y-auto"
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
              "radial-gradient(circle, oklch(0.5 0.16 280 / 0.05) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <motion.div
          className="w-full max-w-lg relative z-10 mt-4"
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
              <div className="flex items-center gap-2 mb-2">
                <Sparkles
                  className="h-4 w-4"
                  style={{ color: "oklch(0.72 0.22 190)" }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "oklch(0.72 0.22 190)" }}
                >
                  Free Account
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-1">
                Create your account
              </h2>
              <p className="text-sm text-muted-foreground">
                Join thousands of professionals on ProHire 365 — no credit card
                required
              </p>
            </div>

            {/* Role selector */}
            <div data-ocid="signup.role_selector">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                I want to…
              </p>
              <div className="grid grid-cols-2 gap-3">
                {(
                  [
                    {
                      value: "employee" as SignupRole,
                      label: "Find a Job",
                      desc: "Browse & apply to top roles",
                      icon: User,
                      color: "190",
                    },
                    {
                      value: "employer" as SignupRole,
                      label: "Hire Talent",
                      desc: "Post jobs & find candidates",
                      icon: Building2,
                      color: "280",
                    },
                  ] as const
                ).map((tab) => (
                  <button
                    type="button"
                    key={tab.value}
                    onClick={() => setSelectedRole(tab.value)}
                    data-ocid={`signup.role.${tab.value}`}
                    className="flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-smooth"
                    style={
                      selectedRole === tab.value
                        ? {
                            background: `oklch(0.20 0.06 ${tab.color} / 0.25)`,
                            borderColor: `oklch(0.65 0.2 ${tab.color} / 0.55)`,
                            boxShadow: `0 0 20px oklch(0.5 0.16 ${tab.color} / 0.2)`,
                          }
                        : {
                            background: "oklch(0.16 0.008 255)",
                            borderColor: "oklch(0.28 0.015 260 / 0.5)",
                          }
                    }
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-smooth"
                      style={
                        selectedRole === tab.value
                          ? {
                              background: `oklch(0.65 0.2 ${tab.color} / 0.2)`,
                              border: `1px solid oklch(0.65 0.2 ${tab.color} / 0.4)`,
                            }
                          : {
                              background: "oklch(0.20 0.008 260)",
                              border: "1px solid oklch(0.30 0.01 260 / 0.5)",
                            }
                      }
                    >
                      <tab.icon
                        className="h-4 w-4 transition-smooth"
                        style={{
                          color:
                            selectedRole === tab.value
                              ? `oklch(0.72 0.22 ${tab.color})`
                              : "oklch(0.5 0.01 260)",
                        }}
                      />
                    </div>
                    <div>
                      <p
                        className="text-sm font-bold transition-smooth"
                        style={{
                          color:
                            selectedRole === tab.value
                              ? "oklch(0.92 0.01 260)"
                              : "oklch(0.65 0.01 260)",
                        }}
                      >
                        {tab.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {tab.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <Separator style={{ background: "oklch(0.22 0.012 260 / 0.6)" }} />

            {/* Form fields */}
            {selectedRole === "employee" ? (
              <div
                className="flex flex-col gap-4"
                data-ocid="signup.employee_form"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="emp-name"
                      className="text-xs font-semibold text-foreground/70"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                      <Input
                        id="emp-name"
                        placeholder="Jane Smith"
                        className="pl-9 h-10 rounded-xl text-sm"
                        style={{
                          background: "oklch(0.16 0.008 255)",
                          borderColor: "oklch(0.28 0.015 260 / 0.6)",
                        }}
                        value={empName}
                        onChange={(e) => setEmpName(e.target.value)}
                        data-ocid="signup.employee.name.input"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="emp-email"
                      className="text-xs font-semibold text-foreground/70"
                    >
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                      <Input
                        id="emp-email"
                        type="email"
                        placeholder="jane@example.com"
                        className="pl-9 h-10 rounded-xl text-sm"
                        style={{
                          background: "oklch(0.16 0.008 255)",
                          borderColor: "oklch(0.28 0.015 260 / 0.6)",
                        }}
                        value={empEmail}
                        onChange={(e) => setEmpEmail(e.target.value)}
                        data-ocid="signup.employee.email.input"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="emp-phone"
                      className="text-xs font-semibold text-foreground/70"
                    >
                      Phone
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                      <Input
                        id="emp-phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="pl-9 h-10 rounded-xl text-sm"
                        style={{
                          background: "oklch(0.16 0.008 255)",
                          borderColor: "oklch(0.28 0.015 260 / 0.6)",
                        }}
                        value={empPhone}
                        onChange={(e) => setEmpPhone(e.target.value)}
                        data-ocid="signup.employee.phone.input"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="emp-location"
                      className="text-xs font-semibold text-foreground/70"
                    >
                      Location
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                      <Input
                        id="emp-location"
                        placeholder="City, State"
                        className="pl-9 h-10 rounded-xl text-sm"
                        style={{
                          background: "oklch(0.16 0.008 255)",
                          borderColor: "oklch(0.28 0.015 260 / 0.6)",
                        }}
                        value={empLocation}
                        onChange={(e) => setEmpLocation(e.target.value)}
                        data-ocid="signup.employee.location.input"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="flex flex-col gap-4"
                data-ocid="signup.employer_form"
              >
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="company-name"
                    className="text-xs font-semibold text-foreground/70"
                  >
                    Company Name <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                    <Input
                      id="company-name"
                      placeholder="Acme Corporation"
                      className="pl-9 h-10 rounded-xl text-sm"
                      style={{
                        background: "oklch(0.16 0.008 255)",
                        borderColor: "oklch(0.28 0.015 260 / 0.6)",
                      }}
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      data-ocid="signup.employer.company_name.input"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="contact-name"
                      className="text-xs font-semibold text-foreground/70"
                    >
                      Contact Name <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                      <Input
                        id="contact-name"
                        placeholder="John Doe"
                        className="pl-9 h-10 rounded-xl text-sm"
                        style={{
                          background: "oklch(0.16 0.008 255)",
                          borderColor: "oklch(0.28 0.015 260 / 0.6)",
                        }}
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        data-ocid="signup.employer.contact_name.input"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="employer-email"
                      className="text-xs font-semibold text-foreground/70"
                    >
                      Work Email <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                      <Input
                        id="employer-email"
                        type="email"
                        placeholder="hr@company.com"
                        className="pl-9 h-10 rounded-xl text-sm"
                        style={{
                          background: "oklch(0.16 0.008 255)",
                          borderColor: "oklch(0.28 0.015 260 / 0.6)",
                        }}
                        value={employerEmail}
                        onChange={(e) => setEmployerEmail(e.target.value)}
                        data-ocid="signup.employer.email.input"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="industry"
                      className="text-xs font-semibold text-foreground/70"
                    >
                      Industry
                    </Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
                      <select
                        id="industry"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        data-ocid="signup.employer.industry.select"
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl focus:outline-none focus:ring-1 focus:ring-ring transition-smooth appearance-none"
                        style={{
                          background: "oklch(0.16 0.008 255)",
                          border: "1px solid oklch(0.28 0.015 260 / 0.6)",
                          color: "oklch(0.90 0.01 260)",
                        }}
                      >
                        <option value="">Select industry</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="company-size"
                      className="text-xs font-semibold text-foreground/70"
                    >
                      Company Size
                    </Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
                      <select
                        id="company-size"
                        value={companySize}
                        onChange={(e) => setCompanySize(e.target.value)}
                        data-ocid="signup.employer.company_size.select"
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl focus:outline-none focus:ring-1 focus:ring-ring transition-smooth appearance-none"
                        style={{
                          background: "oklch(0.16 0.008 255)",
                          border: "1px solid oklch(0.28 0.015 260 / 0.6)",
                          color: "oklch(0.90 0.01 260)",
                        }}
                      >
                        <option value="">Select size</option>
                        {companySizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              type="button"
              onClick={handleSignup}
              disabled={isLoading || !canSubmit}
              data-ocid="signup.submit_button"
              className="w-full h-12 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-smooth hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 text-white"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
                boxShadow: canSubmit
                  ? "0 4px 24px oklch(0.72 0.22 190 / 0.4)"
                  : "none",
              }}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Connecting…
                </>
              ) : (
                <>
                  Create Free Account <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            {!canSubmit && !isLoading && (
              <p
                className="text-xs text-center text-muted-foreground -mt-3"
                data-ocid="signup.validation.error_state"
              >
                Please fill in all required fields to continue.
              </p>
            )}

            <p className="text-xs text-center text-muted-foreground">
              By creating an account you agree to our{" "}
              <span
                className="underline cursor-pointer transition-smooth"
                style={{ color: "oklch(0.72 0.22 190 / 0.9)" }}
              >
                Terms of Service
              </span>{" "}
              and{" "}
              <span
                className="underline cursor-pointer transition-smooth"
                style={{ color: "oklch(0.72 0.22 190 / 0.9)" }}
              >
                Privacy Policy
              </span>
            </p>

            <Separator style={{ background: "oklch(0.22 0.012 260 / 0.6)" }} />

            <p className="text-sm text-center text-muted-foreground">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate({ to: "/login" })}
                data-ocid="signup.login.link"
                className="font-semibold transition-smooth hover:underline"
                style={{ color: "oklch(0.72 0.22 190)" }}
              >
                Sign in instead
              </button>
            </p>
          </div>

          {/* Back link */}
          <p className="text-xs text-center text-muted-foreground mt-6">
            <button
              type="button"
              onClick={() => navigate({ to: "/" })}
              data-ocid="signup.back_home.link"
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
