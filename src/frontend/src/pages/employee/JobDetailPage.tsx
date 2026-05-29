import { useNavigate, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  MapPin,
  Share2,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "../../components/Layout";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { SkillTag } from "../../components/SkillTag";
import type { JobListing } from "../../types";

const JOB_DATA: Record<
  string,
  JobListing & {
    companyDescription: string;
    companySize: string;
    benefits: string[];
  }
> = {
  "1": {
    jobId: BigInt(1),
    employerId: {} as never,
    title: "Senior React Developer",
    description: `We are seeking a talented Senior React Developer to join our innovative team at Meridian Software. In this role, you will lead frontend architecture decisions, mentor junior developers, and build high-performance web applications that serve hundreds of thousands of users.\n\nYou will collaborate closely with product managers, designers, and backend engineers to deliver exceptional user experiences. You'll have the autonomy to propose and implement best practices, introduce new technologies, and shape the technical direction of our frontend platform.`,
    location: "San Francisco, CA",
    salaryMin: BigInt(110000),
    salaryMax: BigInt(150000),
    experienceRequired: "4–6 yrs",
    jobType: "fullTime",
    skillsRequired: [
      "React",
      "TypeScript",
      "Redux",
      "GraphQL",
      "Node.js",
      "Testing",
      "CI/CD",
    ],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 30 * 24 * 3600 * 1000) * 1_000_000,
    ),
    createdAt: BigInt((Date.now() - 2 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt(Date.now() * 1_000_000),
    companyName: "Meridian Software",
    companyDescription:
      "Meridian Software is a leading technology company specializing in enterprise SaaS solutions. Founded in 2015, we serve over 2,000 clients globally and have consistently ranked among the best places to work in tech.",
    companySize: "500–1,000 employees",
    benefits: [
      "Health & dental insurance",
      "Flexible remote work",
      "401(k) with 6% match",
      "Annual learning stipend",
      "Unlimited PTO",
      "Home office setup budget",
    ],
  },
  "2": {
    jobId: BigInt(2),
    employerId: {} as never,
    title: "Full Stack Engineer",
    description:
      "CloudPeak Systems is looking for a Full Stack Engineer to help build the next generation of our cloud platform. You will work across the entire stack—from React frontends to Node.js microservices to PostgreSQL schemas—and own features end-to-end from design to deployment.\n\nWe value engineers who think deeply about system design, care about code quality, and are excited to tackle complex distributed systems challenges.",
    location: "Remote",
    salaryMin: BigInt(95000),
    salaryMax: BigInt(130000),
    experienceRequired: "3–5 yrs",
    jobType: "fullTime",
    skillsRequired: [
      "Node.js",
      "React",
      "PostgreSQL",
      "Docker",
      "AWS",
      "REST APIs",
      "Git",
    ],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 20 * 24 * 3600 * 1000) * 1_000_000,
    ),
    createdAt: BigInt((Date.now() - 1 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt(Date.now() * 1_000_000),
    companyName: "CloudPeak Systems",
    companyDescription:
      "CloudPeak Systems provides infrastructure and developer tooling for modern software teams. Our platform processes billions of events daily and is trusted by engineering teams at Fortune 500 companies.",
    companySize: "200–500 employees",
    benefits: [
      "Fully remote",
      "Competitive salary",
      "Equity options",
      "Wellness stipend",
      "Top-tier health coverage",
      "4-day work week trial",
    ],
  },
};

const REQUIREMENTS = [
  "5+ years of professional software development experience",
  "Strong proficiency in the required technical skills",
  "Experience with agile/scrum development methodologies",
  "Excellent problem-solving and communication skills",
  "Ability to work independently and as part of a team",
  "Experience with version control (Git) and code review practices",
];

function formatSalary(min: bigint, max: bigint): string {
  const fmt = (n: bigint) => `$${(Number(n) / 1000).toFixed(0)}k`;
  return `${fmt(min)} – ${fmt(max)} / year`;
}

function deadlineDays(ns: bigint): string {
  const ms = Number(ns) / 1_000_000;
  const days = Math.ceil((ms - Date.now()) / (1000 * 60 * 60 * 24));
  if (days < 0) return "Expired";
  if (days === 0) return "Today";
  return `${days} days left`;
}

function getCompanyGradient(name: string): string {
  const gradients = [
    "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
    "linear-gradient(135deg, oklch(0.55 0.16 200), oklch(0.65 0.18 150))",
    "linear-gradient(135deg, oklch(0.6 0.18 30), oklch(0.7 0.15 45))",
  ];
  return gradients[
    name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % gradients.length
  ];
}

const jobTypeLabel: Record<string, string> = {
  fullTime: "Full-time",
  partTime: "Part-time",
  contract: "Contract",
};

const glassCard = {
  background: "oklch(0.14 0.009 255 / 0.85)",
  backdropFilter: "blur(12px)",
  border: "1px solid oklch(0.28 0.015 260 / 0.45)",
};

export default function JobDetailPage() {
  const navigate = useNavigate();
  const params = useParams({ strict: false }) as { jobId?: string };
  const jobId = params.jobId ?? "1";
  const job = JOB_DATA[jobId];
  const [saved, setSaved] = useState(false);
  const [applying, setApplying] = useState(false);

  if (!job) {
    return (
      <ProtectedRoute requiredRole="employee">
        <Layout showSidebar sidebarRole="employee">
          <div className="p-6 max-w-4xl mx-auto flex flex-col items-center justify-center py-24">
            <Briefcase className="h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="font-display font-semibold text-xl text-foreground mb-2">
              Job not found
            </h2>
            <p className="text-muted-foreground mb-6">
              This listing may have been removed.
            </p>
            <button
              type="button"
              onClick={() => navigate({ to: "/employee/jobs" })}
              data-ocid="job_detail.back_to_search.button"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-smooth hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                color: "white",
              }}
            >
              Back to Job Search
            </button>
          </div>
        </Layout>
      </ProtectedRoute>
    );
  }

  const handleApply = async () => {
    setApplying(true);
    await new Promise((r) => setTimeout(r, 800));
    setApplying(false);
    toast.success("Application submitted!", {
      description: `Your application for ${job.title} has been sent.`,
    });
  };

  const handleSave = () => {
    setSaved((s) => !s);
    toast.success(saved ? "Job removed from saved" : "Job saved successfully");
  };

  return (
    <ProtectedRoute requiredRole="employee">
      <Layout showSidebar sidebarRole="employee">
        <div className="min-h-full">
          {/* Hero banner */}
          <div
            className="relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.13 0.015 265) 0%, oklch(0.11 0.01 255) 60%, oklch(0.10 0.008 250) 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 60%, oklch(0.5 0.16 280 / 0.1) 0%, transparent 55%), radial-gradient(ellipse at 80% 30%, oklch(0.72 0.22 190 / 0.08) 0%, transparent 50%)",
              }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.72 0.22 190 / 0.5), transparent)",
              }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-8">
              <button
                type="button"
                onClick={() => navigate({ to: "/employee/jobs" })}
                data-ocid="job_detail.back.button"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth mb-6"
              >
                <ArrowLeft className="h-4 w-4" /> Back to jobs
              </button>

              <div className="flex items-start gap-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 font-display font-bold text-2xl text-white shadow-glow-primary"
                  style={{
                    background: getCompanyGradient(job.companyName ?? ""),
                  }}
                >
                  {(job.companyName ?? "C")[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: "oklch(0.72 0.22 190 / 0.15)",
                        color: "oklch(0.72 0.22 190)",
                        border: "1px solid oklch(0.72 0.22 190 / 0.3)",
                      }}
                    >
                      {jobTypeLabel[job.jobType]}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Posted 2 days ago
                    </span>
                  </div>
                  <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                    {job.title}
                  </h1>
                  <p className="text-base text-muted-foreground mt-1 font-medium">
                    {job.companyName}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-sm text-muted-foreground">
                    {[
                      { icon: MapPin, text: job.location },
                      {
                        icon: DollarSign,
                        text: formatSalary(job.salaryMin, job.salaryMax),
                      },
                      { icon: Clock, text: `${job.experienceRequired} exp` },
                      { icon: Users, text: "201–500 employees" },
                    ].map(({ icon: Icon, text }) => (
                      <span key={text} className="flex items-center gap-1.5">
                        <Icon
                          className="h-4 w-4 shrink-0"
                          style={{ color: "oklch(0.72 0.22 190 / 0.7)" }}
                        />
                        {text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-5">
                {/* Description */}
                <div
                  className="rounded-2xl p-6"
                  style={glassCard}
                  data-ocid="job_detail.description.card"
                >
                  <h2 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                    <div
                      className="w-1 h-5 rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, oklch(0.72 0.22 190), oklch(0.55 0.18 280))",
                      }}
                    />
                    Job Description
                  </h2>
                  <div className="text-sm text-foreground leading-relaxed whitespace-pre-line">
                    {job.description}
                  </div>
                </div>

                {/* Requirements */}
                <div className="rounded-2xl p-6" style={glassCard}>
                  <h2 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                    <div
                      className="w-1 h-5 rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, oklch(0.72 0.22 190), oklch(0.55 0.18 280))",
                      }}
                    />
                    Requirements
                  </h2>
                  <ul className="space-y-2.5">
                    {REQUIREMENTS.map((req) => (
                      <li
                        key={req}
                        className="flex items-start gap-3 text-sm text-foreground"
                      >
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 mt-0.5"
                          style={{ color: "oklch(0.72 0.22 190)" }}
                        />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="rounded-2xl p-6" style={glassCard}>
                  <h2 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                    <div
                      className="w-1 h-5 rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, oklch(0.72 0.22 190), oklch(0.55 0.18 280))",
                      }}
                    />
                    Required Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {job.skillsRequired.map((skill) => (
                      <SkillTag key={skill} skill={skill} />
                    ))}
                  </div>
                </div>

                {/* Company */}
                <div className="rounded-2xl p-6" style={glassCard}>
                  <h2 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                    <div
                      className="w-1 h-5 rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, oklch(0.72 0.22 190), oklch(0.55 0.18 280))",
                      }}
                    />
                    About {job.companyName}
                  </h2>
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-display font-bold text-lg text-white"
                      style={{
                        background: getCompanyGradient(job.companyName ?? ""),
                      }}
                    >
                      {(job.companyName ?? "C")[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {job.companyName}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {job.companySize}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {job.companyDescription}
                  </p>
                </div>
              </div>

              {/* Sticky Sidebar */}
              <div className="space-y-4">
                {/* CTA Card */}
                <div
                  className="rounded-2xl p-5 space-y-4 sticky top-4"
                  style={{
                    background: "oklch(0.14 0.009 255 / 0.9)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid oklch(0.35 0.015 260 / 0.5)",
                    boxShadow: "0 0 40px oklch(0.55 0.18 280 / 0.12)",
                  }}
                  data-ocid="job_detail.actions.card"
                >
                  <div className="text-center pb-1">
                    <p className="text-2xl font-display font-bold text-foreground">
                      {formatSalary(job.salaryMin, job.salaryMax)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Annual salary
                    </p>
                  </div>
                  <div
                    className="h-px"
                    style={{ background: "oklch(0.25 0.012 260 / 0.5)" }}
                  />

                  {/* Apply gradient CTA */}
                  <button
                    type="button"
                    onClick={handleApply}
                    disabled={applying}
                    data-ocid="job_detail.apply_now.button"
                    className="w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-smooth hover:opacity-90 shadow-glow-accent disabled:opacity-60"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                      color: "white",
                    }}
                  >
                    {applying ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Applying…
                      </span>
                    ) : (
                      <>
                        <Zap className="h-4 w-4" />
                        Apply Now
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleSave}
                    data-ocid="job_detail.save_job.button"
                    className="w-full py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-smooth"
                    style={
                      saved
                        ? {
                            background: "oklch(0.72 0.22 190 / 0.12)",
                            color: "oklch(0.72 0.22 190)",
                            border: "1px solid oklch(0.72 0.22 190 / 0.35)",
                          }
                        : {
                            background: "oklch(0.18 0.012 260)",
                            color: "oklch(0.62 0.01 250)",
                            border: "1px solid oklch(0.28 0.015 260 / 0.5)",
                          }
                    }
                  >
                    {saved ? (
                      <BookmarkCheck className="h-4 w-4" />
                    ) : (
                      <Bookmark className="h-4 w-4" />
                    )}
                    {saved ? "Saved" : "Save Job"}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      toast.success("Link copied!");
                    }}
                    data-ocid="job_detail.share.button"
                    className="w-full py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-smooth text-muted-foreground hover:text-foreground"
                  >
                    <Share2 className="h-3.5 w-3.5" /> Share Job
                  </button>
                </div>

                {/* Job Overview */}
                <div className="rounded-2xl p-5 space-y-3" style={glassCard}>
                  <h3 className="font-display font-semibold text-sm text-foreground flex items-center gap-2">
                    <Briefcase
                      className="h-4 w-4"
                      style={{ color: "oklch(0.72 0.22 190)" }}
                    />
                    Job Overview
                  </h3>
                  <div
                    className="h-px"
                    style={{ background: "oklch(0.25 0.012 260 / 0.5)" }}
                  />
                  {[
                    {
                      icon: Calendar,
                      label: "Deadline",
                      value: deadlineDays(job.applicationDeadline),
                    },
                    {
                      icon: Briefcase,
                      label: "Experience",
                      value: job.experienceRequired,
                    },
                    { icon: MapPin, label: "Location", value: job.location },
                    {
                      icon: Building2,
                      label: "Job Type",
                      value: jobTypeLabel[job.jobType],
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          background: "oklch(0.55 0.18 280 / 0.15)",
                          border: "1px solid oklch(0.5 0.16 280 / 0.2)",
                        }}
                      >
                        <item.icon
                          className="h-3.5 w-3.5"
                          style={{ color: "oklch(0.72 0.22 190)" }}
                        />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="font-medium text-foreground text-xs">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="rounded-2xl p-5" style={glassCard}>
                  <h3 className="font-display font-semibold text-sm text-foreground flex items-center gap-2 mb-3">
                    <Sparkles
                      className="h-4 w-4"
                      style={{ color: "oklch(0.72 0.22 190)" }}
                    />
                    Benefits
                  </h3>
                  <div className="space-y-2">
                    {job.benefits.map((b) => (
                      <div
                        key={b}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle2
                          className="h-3.5 w-3.5 shrink-0"
                          style={{ color: "oklch(0.7 0.2 150)" }}
                        />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
