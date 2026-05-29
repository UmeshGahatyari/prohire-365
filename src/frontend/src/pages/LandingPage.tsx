import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle,
  ClipboardList,
  FileText,
  MapPin,
  Search,
  Sparkles,
  Star,
  TrendingUp,
  UserPlus,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Layout } from "../components/Layout";

const stats = [
  { label: "Live Jobs", value: "10,000+", icon: Briefcase, color: "190" },
  { label: "Companies Hiring", value: "500+", icon: Building2, color: "280" },
  { label: "Professionals", value: "1M+", icon: Users, color: "190" },
  {
    label: "Placed This Month",
    value: "5,200+",
    icon: TrendingUp,
    color: "280",
  },
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
    iconBg: "190",
  },
  {
    icon: Zap,
    title: "Instant Hiring",
    desc: "Post a job in minutes, receive qualified applications within hours. Our matching engine surfaces top candidates automatically.",
    cta: "Post a Job",
    role: "employer",
    gradient: "from-primary/20 to-accent/10",
    border: "border-primary/30",
    iconBg: "280",
  },
  {
    icon: ClipboardList,
    title: "Real-Time Tracking",
    desc: "Live application status updates, interview scheduling, and smart notifications keep you always informed.",
    cta: "Get Started",
    role: "employee",
    gradient: "from-accent/15 to-primary/8",
    border: "border-accent/20",
    iconBg: "190",
  },
];

const employeeSteps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Build Your Profile",
    desc: "Create a standout profile with skills, experience, and your resume in under 5 minutes.",
    color: "190",
  },
  {
    step: "02",
    icon: Search,
    title: "Discover & Apply",
    desc: "Browse thousands of verified roles and apply with a single click — no cover letters needed.",
    color: "280",
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "Get Hired Fast",
    desc: "Track every application in real time and land your dream role.",
    color: "190",
  },
];

const employerSteps = [
  {
    step: "01",
    icon: Building2,
    title: "Register Company",
    desc: "Create a verified employer profile and showcase your company culture to top talent.",
    color: "280",
  },
  {
    step: "02",
    icon: FileText,
    title: "Post Your Job",
    desc: "Describe your role in detail. Listings go live instantly and reach thousands of candidates.",
    color: "190",
  },
  {
    step: "03",
    icon: Users,
    title: "Hire the Best",
    desc: "Review applications, shortlist talent, and schedule interviews — all from one dashboard.",
    color: "280",
  },
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
    hot: true,
  },
  {
    id: 2,
    title: "Full-Stack Engineer",
    company: "Apex Solutions",
    location: "New York, NY",
    salary: "$110k–$150k",
    type: "Full-time",
    skills: ["React", "Node.js", "PostgreSQL"],
    hot: false,
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Orbit Analytics",
    location: "Austin, TX",
    salary: "$100k–$140k",
    type: "Full-time",
    skills: ["Python", "ML", "SQL"],
    hot: true,
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudScale",
    location: "San Francisco, CA",
    salary: "$120k–$160k",
    type: "Contract",
    skills: ["Kubernetes", "AWS", "Terraform"],
    hot: false,
  },
  {
    id: 5,
    title: "Marketing Manager",
    company: "Brightpath Media",
    location: "Chicago, IL",
    salary: "$75k–$95k",
    type: "Full-time",
    skills: ["SEO", "Analytics", "Content"],
    hot: false,
  },
  {
    id: 6,
    title: "Backend Engineer",
    company: "Streamline Corp",
    location: "Remote",
    salary: "$105k–$145k",
    type: "Part-time",
    skills: ["Go", "Redis", "Docker"],
    hot: true,
  },
];

const topCompanies = [
  { name: "Luminary Tech", industry: "SaaS", openRoles: 12 },
  { name: "Apex Solutions", industry: "Consulting", openRoles: 8 },
  { name: "CloudScale", industry: "Cloud", openRoles: 15 },
  { name: "Orbit Analytics", industry: "Data", openRoles: 6 },
  { name: "Streamline Corp", industry: "Engineering", openRoles: 9 },
  { name: "Brightpath Media", industry: "Marketing", openRoles: 4 },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const handleSearch = () => {
    navigate({ to: "/signup", search: { role: "employee" } as never });
  };

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden min-h-[88vh] flex items-center justify-center px-4 py-24"
        data-ocid="hero.section"
      >
        {/* Full bleed background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-landing-premium.dim_1440x720.jpg')",
          }}
          aria-hidden="true"
        />
        {/* Gradient overlays for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.06 0.02 270 / 0.97) 0%, oklch(0.08 0.03 280 / 0.92) 40%, oklch(0.06 0.025 250 / 0.95) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Radial glow effects */}
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.5 0.16 280 / 0.12) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.22 190 / 0.10) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-[15%] w-3 h-3 rounded-full pointer-events-none"
          style={{ background: "oklch(0.72 0.22 190 / 0.8)" }}
          animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-32 left-[12%] w-2 h-2 rounded-full pointer-events-none"
          style={{ background: "oklch(0.55 0.18 280 / 0.7)" }}
          animate={{ y: [0, 15, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute top-1/2 left-[8%] w-1.5 h-1.5 rounded-full pointer-events-none"
          style={{ background: "oklch(0.72 0.22 190 / 0.6)" }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-screen-xl mx-auto w-full">
          <div className="max-w-3xl mx-auto text-center">
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 border"
                style={{
                  background: "oklch(0.72 0.22 190 / 0.12)",
                  borderColor: "oklch(0.72 0.22 190 / 0.3)",
                  color: "oklch(0.72 0.22 190)",
                }}
                data-ocid="hero.badge"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "oklch(0.72 0.22 190)" }}
                />
                <Sparkles className="h-3 w-3" />
                #1 Premium Job Platform for Modern Professionals
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <span className="text-foreground">Your Dream Career</span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.22 190) 0%, oklch(0.65 0.2 220) 50%, oklch(0.55 0.18 280) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Starts Here
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ProHire 365 connects ambitious professionals with world-class
              employers. Discover roles tailored to your skills and take the
              next step in your career — today.
            </motion.p>

            {/* Glassmorphic search bar */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div
                className="flex flex-col sm:flex-row max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-portal"
                style={{
                  background: "oklch(0.15 0.008 250 / 0.85)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid oklch(0.72 0.22 190 / 0.25)",
                  boxShadow:
                    "0 8px 40px oklch(0.5 0.16 280 / 0.25), 0 0 0 1px oklch(0.72 0.22 190 / 0.1) inset",
                }}
                data-ocid="hero.search_bar"
              >
                <div
                  className="flex items-center gap-2.5 flex-1 px-5 py-3.5 border-b sm:border-b-0 sm:border-r"
                  style={{ borderColor: "oklch(0.72 0.22 190 / 0.15)" }}
                >
                  <Search
                    className="h-4 w-4 shrink-0"
                    style={{ color: "oklch(0.72 0.22 190)" }}
                  />
                  <Input
                    placeholder="Job title, keywords, skills…"
                    className="border-0 bg-transparent shadow-none px-0 focus-visible:ring-0 text-sm h-auto text-foreground placeholder:text-muted-foreground/70"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    data-ocid="hero.search_title.input"
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>
                <div
                  className="flex items-center gap-2.5 flex-1 px-5 py-3.5 border-b sm:border-b-0 sm:border-r"
                  style={{ borderColor: "oklch(0.72 0.22 190 / 0.15)" }}
                >
                  <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <Input
                    placeholder="City, state, or remote"
                    className="border-0 bg-transparent shadow-none px-0 focus-visible:ring-0 text-sm h-auto text-foreground placeholder:text-muted-foreground/70"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    data-ocid="hero.search_location.input"
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSearch}
                  data-ocid="hero.search_button"
                  className="shrink-0 px-8 py-3.5 text-sm font-bold transition-smooth hover:opacity-90 active:scale-[0.98] text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
                  }}
                >
                  Search Jobs
                </button>
              </div>

              <p className="mt-5 text-sm text-muted-foreground/80">
                <span className="font-medium text-foreground/60">
                  Trending:{" "}
                </span>
                {[
                  "Software Engineer",
                  "Product Manager",
                  "Designer",
                  "Data Analyst",
                ].map((term, i) => (
                  <button
                    type="button"
                    key={term}
                    className="hover:underline transition-smooth cursor-pointer"
                    style={{ color: "oklch(0.72 0.22 190 / 0.85)" }}
                    onClick={handleSearch}
                    data-ocid={`hero.popular_search.${i + 1}`}
                  >
                    {term}
                    {i < 3 ? " · " : ""}
                  </button>
                ))}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <button
                type="button"
                onClick={() =>
                  navigate({
                    to: "/signup",
                    search: { role: "employee" } as never,
                  })
                }
                data-ocid="hero.get_started.button"
                className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-base transition-smooth hover:scale-[1.03] active:scale-[0.98] shadow-glow-accent text-white"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
                  boxShadow: "0 4px 24px oklch(0.72 0.22 190 / 0.45)",
                }}
              >
                Get Started Free <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  navigate({
                    to: "/signup",
                    search: { role: "employer" } as never,
                  })
                }
                data-ocid="hero.post_job.button"
                className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-base transition-smooth hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: "oklch(0.18 0.01 260 / 0.7)",
                  border: "1px solid oklch(0.72 0.22 190 / 0.35)",
                  color: "oklch(0.72 0.22 190)",
                  backdropFilter: "blur(10px)",
                }}
              >
                Post a Job <Briefcase className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section
        className="relative px-4 py-14 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.018 275) 0%, oklch(0.10 0.015 265) 50%, oklch(0.12 0.018 255) 100%)",
          borderTop: "1px solid oklch(0.28 0.015 260 / 0.4)",
          borderBottom: "1px solid oklch(0.28 0.015 260 / 0.4)",
        }}
        data-ocid="stats.section"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, oklch(0.5 0.16 280 / 0.08) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-screen-xl mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, oklch(0.25 0.05 ${s.color}) 0%, oklch(0.20 0.04 ${s.color}) 100%)`,
                    border: `1px solid oklch(0.5 0.16 ${s.color} / 0.3)`,
                    boxShadow: `0 4px 16px oklch(0.5 0.16 ${s.color} / 0.2)`,
                  }}
                >
                  <s.icon
                    className="h-5 w-5"
                    style={{ color: `oklch(0.72 0.22 ${s.color})` }}
                  />
                </div>
                <p className="font-display font-black text-3xl md:text-4xl text-foreground mb-1">
                  {s.value}
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────── */}
      <section
        className="relative px-4 py-20 overflow-hidden bg-background"
        data-ocid="features.section"
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.5 0.16 280 / 0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-screen-xl mx-auto relative">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge
              className="mb-4 px-3 py-1 text-xs font-semibold"
              style={{
                background: "oklch(0.55 0.18 280 / 0.12)",
                border: "1px solid oklch(0.55 0.18 280 / 0.3)",
                color: "oklch(0.7 0.15 280)",
              }}
            >
              Platform Features
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              Everything You Need,{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.22 190) 0%, oklch(0.55 0.18 280) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                In One Place
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Whether you're searching for your next role or building your dream
              team — ProHire 365 delivers premium tools at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <button
                  type="button"
                  className="h-full w-full rounded-2xl p-6 flex flex-col gap-5 cursor-pointer group transition-smooth hover:scale-[1.02] text-left"
                  style={{
                    background: "oklch(0.14 0.008 255 / 0.8)",
                    backdropFilter: "blur(16px)",
                    border: `1px solid oklch(0.5 0.16 ${card.iconBg} / 0.2)`,
                    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                  }}
                  data-ocid={`feature.card.${i + 1}`}
                  onClick={() =>
                    navigate({
                      to: "/signup",
                      search: { role: card.role } as never,
                    })
                  }
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, oklch(0.22 0.06 ${card.iconBg}) 0%, oklch(0.18 0.04 ${card.iconBg}) 100%)`,
                      border: `1px solid oklch(0.6 0.2 ${card.iconBg} / 0.3)`,
                      boxShadow: `0 4px 16px oklch(0.5 0.16 ${card.iconBg} / 0.25)`,
                    }}
                  >
                    <card.icon
                      className="h-6 w-6"
                      style={{ color: `oklch(0.72 0.22 ${card.iconBg})` }}
                    />
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-smooth">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  {/* CTA */}
                  <div
                    className="flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-smooth"
                    style={{ color: `oklch(0.72 0.22 ${card.iconBg})` }}
                  >
                    {card.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section
        className="relative px-4 py-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.10 0.012 260) 0%, oklch(0.08 0.01 250) 100%)",
        }}
        data-ocid="how_it_works.section"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, oklch(0.5 0.16 280 / 0.05) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-screen-xl mx-auto relative">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              How It{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.22 190) 0%, oklch(0.55 0.18 280) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Works
              </span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Get started in minutes — whether you're hiring top talent or
              hunting for your next opportunity.
            </p>
          </motion.div>

          <Tabs
            defaultValue="employees"
            className="w-full"
            data-ocid="how_it_works.tabs"
          >
            <TabsList
              className="mx-auto flex w-fit mb-12 p-1.5 rounded-2xl gap-1"
              style={{
                background: "oklch(0.14 0.008 255)",
                border: "1px solid oklch(0.28 0.015 260 / 0.5)",
              }}
            >
              <TabsTrigger
                value="employees"
                data-ocid="how_it_works.employees.tab"
                className="px-7 py-2.5 rounded-xl text-sm font-semibold transition-smooth data-[state=active]:text-white"
                style={undefined}
              >
                For Job Seekers
              </TabsTrigger>
              <TabsTrigger
                value="employers"
                data-ocid="how_it_works.employers.tab"
                className="px-7 py-2.5 rounded-xl text-sm font-semibold transition-smooth data-[state=active]:text-white"
              >
                For Employers
              </TabsTrigger>
            </TabsList>

            {[
              {
                key: "employees",
                steps: employeeSteps,
                ctaLabel: "Start Your Job Search",
                ctaRole: "employee",
              },
              {
                key: "employers",
                steps: employerSteps,
                ctaLabel: "Post Your First Job",
                ctaRole: "employer",
              },
            ].map(({ key, steps, ctaLabel, ctaRole }) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                  {/* Connector */}
                  <div
                    className="hidden md:block absolute top-8 left-[calc(16.6%+2rem)] right-[calc(16.6%+2rem)] h-px pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, oklch(0.72 0.22 190 / 0.3) 0%, oklch(0.55 0.18 280 / 0.3) 100%)",
                    }}
                  />
                  {steps.map((step, i) => (
                    <motion.div
                      key={step.step}
                      className="flex flex-col items-center text-center gap-5 relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      data-ocid={`how_it_works.${key === "employees" ? "employee" : "employer"}_step.${i + 1}`}
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center z-10"
                        style={{
                          background: `linear-gradient(135deg, oklch(0.25 0.07 ${step.color}) 0%, oklch(0.18 0.05 ${step.color}) 100%)`,
                          border: `2px solid oklch(0.6 0.2 ${step.color} / 0.4)`,
                          boxShadow: `0 8px 24px oklch(0.5 0.16 ${step.color} / 0.3)`,
                        }}
                      >
                        <step.icon
                          className="h-7 w-7"
                          style={{ color: `oklch(0.75 0.22 ${step.color})` }}
                        />
                      </div>
                      <div>
                        <span
                          className="text-xs font-black tracking-[0.2em] uppercase"
                          style={{ color: `oklch(0.65 0.18 ${step.color})` }}
                        >
                          Step {step.step}
                        </span>
                        <h3 className="font-display font-bold text-lg text-foreground mt-1.5 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-center mt-10">
                  <button
                    type="button"
                    onClick={() =>
                      navigate({
                        to: "/signup",
                        search: { role: ctaRole } as never,
                      })
                    }
                    data-ocid={`how_it_works.${key === "employees" ? "employee" : "employer"}_cta.button`}
                    className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm transition-smooth hover:scale-[1.03] active:scale-[0.98] text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
                      boxShadow: "0 4px 20px oklch(0.72 0.22 190 / 0.4)",
                    }}
                  >
                    {ctaLabel} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* ── FEATURED JOBS ─────────────────────────────────────── */}
      <section
        className="relative px-4 py-20 bg-background overflow-hidden"
        data-ocid="featured_jobs.section"
      >
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.22 190 / 0.05) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-screen-xl mx-auto relative">
          <div className="flex items-end justify-between mb-10">
            <div>
              <Badge
                className="mb-3 px-3 py-1 text-xs font-semibold"
                style={{
                  background: "oklch(0.72 0.22 190 / 0.12)",
                  border: "1px solid oklch(0.72 0.22 190 / 0.3)",
                  color: "oklch(0.72 0.22 190)",
                }}
              >
                Hand-Picked Roles
              </Badge>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                Featured Opportunities
              </h2>
              <p className="text-muted-foreground text-sm mt-2">
                Verified roles from leading companies
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                navigate({
                  to: "/signup",
                  search: { role: "employee" } as never,
                })
              }
              data-ocid="featured_jobs.view_all.button"
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold transition-smooth hover:gap-3"
              style={{ color: "oklch(0.72 0.22 190)" }}
            >
              View all jobs <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredJobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <button
                  type="button"
                  className="group w-full rounded-2xl p-5 cursor-pointer transition-smooth hover:scale-[1.02] h-full flex flex-col text-left"
                  style={{
                    background: "oklch(0.14 0.008 255 / 0.9)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.6)",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.25)",
                  }}
                  data-ocid={`featured_job.item.${i + 1}`}
                  onClick={() =>
                    navigate({
                      to: "/signup",
                      search: { role: "employee" } as never,
                    })
                  }
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.22 0.05 280) 0%, oklch(0.18 0.04 290) 100%)",
                        border: "1px solid oklch(0.55 0.18 280 / 0.3)",
                      }}
                    >
                      <Building2
                        className="h-5 w-5"
                        style={{ color: "oklch(0.65 0.18 280)" }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-sm text-foreground group-hover:text-accent transition-smooth truncate">
                        {job.title}
                      </h3>
                      <p className="text-xs text-muted-foreground truncate mt-0.5">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      {job.hot && (
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{
                            background: "oklch(0.72 0.22 190 / 0.15)",
                            border: "1px solid oklch(0.72 0.22 190 / 0.3)",
                            color: "oklch(0.72 0.22 190)",
                          }}
                        >
                          🔥 Hot
                        </span>
                      )}
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: "oklch(0.22 0.015 260)",
                          border: "1px solid oklch(0.35 0.015 260 / 0.6)",
                          color: "oklch(0.75 0.01 260)",
                        }}
                      >
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {job.location}
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: "oklch(0.72 0.22 190)" }}
                    >
                      {job.salary}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-0.5 rounded-lg font-medium"
                        style={{
                          background: "oklch(0.20 0.015 260)",
                          border: "1px solid oklch(0.32 0.015 260 / 0.7)",
                          color: "oklch(0.72 0.01 260)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOP COMPANIES ─────────────────────────────────────── */}
      <section
        className="relative px-4 py-16 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.11 0.015 270) 0%, oklch(0.09 0.012 260) 100%)",
          borderTop: "1px solid oklch(0.28 0.015 260 / 0.3)",
          borderBottom: "1px solid oklch(0.28 0.015 260 / 0.3)",
        }}
        data-ocid="companies.section"
      >
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
              Trusted By Industry Leaders
            </p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
              Companies Actively Hiring
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {topCompanies.map((company, i) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <button
                  type="button"
                  className="w-full rounded-2xl p-4 text-center cursor-pointer transition-smooth hover:scale-[1.04] group"
                  style={{
                    background: "oklch(0.15 0.008 255 / 0.7)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.5)",
                    backdropFilter: "blur(10px)",
                  }}
                  data-ocid={`company.card.${i + 1}`}
                  onClick={() =>
                    navigate({
                      to: "/signup",
                      search: { role: "employee" } as never,
                    })
                  }
                >
                  <div
                    className="w-10 h-10 rounded-xl mx-auto mb-2.5 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.22 0.05 280) 0%, oklch(0.20 0.06 190) 100%)",
                    }}
                  >
                    <Building2 className="h-5 w-5 text-accent group-hover:scale-110 transition-smooth" />
                  </div>
                  <p className="text-xs font-semibold text-foreground truncate">
                    {company.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {company.industry}
                  </p>
                  <p
                    className="text-[10px] font-medium mt-1"
                    style={{ color: "oklch(0.72 0.22 190)" }}
                  >
                    {company.openRoles} open roles
                  </p>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DUAL CTA ──────────────────────────────────────────── */}
      <section
        className="relative px-4 py-20 bg-background overflow-hidden"
        data-ocid="cta.section"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, oklch(0.5 0.16 280 / 0.06) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-screen-xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Employee CTA */}
            <motion.div
              className="relative rounded-2xl p-8 flex flex-col gap-5 overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.18 0.06 190) 0%, oklch(0.14 0.04 220) 50%, oklch(0.12 0.03 260) 100%)",
                border: "1px solid oklch(0.72 0.22 190 / 0.25)",
                boxShadow: "0 8px 32px oklch(0.72 0.22 190 / 0.15)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.72 0.22 190 / 0.15) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10"
                style={{
                  background: "oklch(0.72 0.22 190 / 0.15)",
                  border: "1px solid oklch(0.72 0.22 190 / 0.3)",
                }}
              >
                <Star
                  className="h-6 w-6"
                  style={{ color: "oklch(0.72 0.22 190)" }}
                />
              </div>
              <div className="relative z-10">
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  Looking for a Job?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Create your profile, upload your resume, and let top employers
                  find you. Thousands of new roles added every day.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  navigate({
                    to: "/signup",
                    search: { role: "employee" } as never,
                  })
                }
                data-ocid="cta.employee_signup.button"
                className="self-start flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm font-bold transition-smooth hover:scale-[1.04] active:scale-[0.98] relative z-10"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
                  boxShadow: "0 4px 20px oklch(0.72 0.22 190 / 0.4)",
                  color: "white",
                }}
              >
                Get Started Free <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            {/* Employer CTA */}
            <motion.div
              className="relative rounded-2xl p-8 flex flex-col gap-5 overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.16 0.06 280) 0%, oklch(0.12 0.04 270) 50%, oklch(0.10 0.025 260) 100%)",
                border: "1px solid oklch(0.55 0.18 280 / 0.25)",
                boxShadow: "0 8px 32px oklch(0.5 0.16 280 / 0.15)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.5 0.16 280 / 0.12) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10"
                style={{
                  background: "oklch(0.55 0.18 280 / 0.15)",
                  border: "1px solid oklch(0.55 0.18 280 / 0.3)",
                }}
              >
                <Building2
                  className="h-6 w-6"
                  style={{ color: "oklch(0.65 0.18 280)" }}
                />
              </div>
              <div className="relative z-10">
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  Hiring Talent?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Post jobs for free, manage applications from one dashboard,
                  and connect with highly qualified candidates ready to
                  contribute from day one.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  navigate({
                    to: "/signup",
                    search: { role: "employer" } as never,
                  })
                }
                data-ocid="cta.employer_signup.button"
                className="self-start flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm font-bold transition-smooth hover:scale-[1.04] active:scale-[0.98] relative z-10"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.45 0.16 280) 0%, oklch(0.6 0.2 280) 100%)",
                  boxShadow: "0 4px 20px oklch(0.5 0.16 280 / 0.4)",
                  color: "white",
                }}
              >
                Post a Job <Briefcase className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
