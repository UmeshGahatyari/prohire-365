import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "@tanstack/react-router";
import {
  Briefcase,
  CalendarDays,
  CheckCircle2,
  DollarSign,
  MapPin,
  Plus,
  Sparkles,
  Tag,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "../../components/Layout";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { usePostJob } from "../../hooks/useQueries";
import type { JobType } from "../../types";

const SUGGESTED_SKILLS = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "SQL",
  "Java",
  "Go",
  "Kubernetes",
  "GraphQL",
  "Figma",
];

function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  step,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  step: number;
}) {
  return (
    <div
      className="flex items-start gap-4 pb-4"
      style={{ borderBottom: "1px solid oklch(0.28 0.015 260 / 0.4)" }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold text-white shadow-lg"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
        }}
      >
        {step}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4" style={{ color: "oklch(0.72 0.22 190)" }} />
          <h3 className="font-display font-semibold text-foreground">
            {title}
          </h3>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}

function GlassSection({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-6 space-y-5"
      style={{
        background: "oklch(0.13 0.008 260)",
        border: "1px solid oklch(0.28 0.015 260 / 0.5)",
      }}
    >
      {children}
    </div>
  );
}

function StyledInput({
  id,
  label,
  required,
  error,
  icon: Icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  required?: boolean;
  error?: string;
  icon?: React.ElementType;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm font-medium text-foreground/80">
        {label}{" "}
        {required && <span style={{ color: "oklch(0.65 0.21 30)" }}>*</span>}
      </Label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        )}
        <Input
          id={id}
          {...props}
          className={`${Icon ? "pl-10" : ""} bg-transparent border-border/50 focus:border-accent focus:ring-1 transition-smooth rounded-xl`}
          style={{ background: "oklch(0.17 0.01 260)" }}
        />
      </div>
      {error && (
        <p
          className="text-xs"
          style={{ color: "oklch(0.65 0.21 30)" }}
          data-ocid={`post_job.${id}.field_error`}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default function PostJobPage() {
  const navigate = useNavigate();
  const { mutateAsync: postJob, isPending } = usePostJob();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const [experienceRequired, setExperienceRequired] = useState("");
  const [jobType, setJobType] = useState<JobType>("fullTime");
  const [deadline, setDeadline] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const addSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (!trimmed || skills.includes(trimmed)) return;
    setSkills((prev) => [...prev, trimmed]);
    setSkillInput("");
  };

  const removeSkill = (skill: string) =>
    setSkills((prev) => prev.filter((s) => s !== skill));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!title.trim()) e.title = "Job title is required";
    if (!description.trim()) e.description = "Description is required";
    if (!location.trim()) e.location = "Location is required";
    if (!salaryMin || Number(salaryMin) <= 0)
      e.salaryMin = "Minimum salary is required";
    if (!salaryMax || Number(salaryMax) <= Number(salaryMin))
      e.salaryMax = "Max salary must be greater than min";
    if (!experienceRequired) e.experienceRequired = "Experience is required";
    if (!deadline) e.deadline = "Application deadline is required";
    if (skills.length === 0) e.skills = "At least one skill is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    try {
      await postJob({
        title,
        description,
        location,
        salaryMin: BigInt(salaryMin),
        salaryMax: BigInt(salaryMax),
        experienceRequired: BigInt(experienceRequired),
        jobType: jobType as never,
        skillsRequired: skills,
        applicationDeadline: BigInt(new Date(deadline).getTime()),
      });
      toast.success("Job posted successfully! Candidates can now apply.");
      navigate({ to: "/employer/jobs" });
    } catch {
      toast.error("Failed to post job. Please try again.");
    }
  };

  return (
    <ProtectedRoute requiredRole="employer">
      <Layout showSidebar sidebarRole="employer">
        <div className="p-6 max-w-3xl mx-auto space-y-6">
          {/* Page Header */}
          <div
            className="relative rounded-2xl overflow-hidden p-6"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.14 0.04 280) 0%, oklch(0.12 0.02 260) 100%)",
              border: "1px solid oklch(0.5 0.16 280 / 0.25)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none opacity-20"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.72 0.22 190), transparent 70%)",
              }}
            />
            <div className="relative z-10 flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                  }}
                >
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-display font-bold text-foreground">
                    Post a New Job
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Reach 2M+ qualified candidates instantly
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => navigate({ to: "/employer/jobs" })}
                data-ocid="post_job.cancel.button"
                className="rounded-xl border-border/50 hover:bg-primary/10 hover:border-primary/40"
              >
                Cancel
              </Button>
            </div>
          </div>

          {/* Section 1 – Basic Info */}
          <GlassSection>
            <SectionHeader
              icon={Briefcase}
              title="Basic Information"
              subtitle="Tell candidates about this role"
              step={1}
            />
            <StyledInput
              id="job-title"
              label="Job Title"
              required
              placeholder="e.g. Senior Frontend Engineer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              data-ocid="post_job.title.input"
              error={errors.title}
            />
            <div className="space-y-1.5">
              <Label
                htmlFor="job-description"
                className="text-sm font-medium text-foreground/80"
              >
                Job Description{" "}
                <span style={{ color: "oklch(0.65 0.21 30)" }}>*</span>
              </Label>
              <Textarea
                id="job-description"
                placeholder="Describe the role, key responsibilities, and what makes this opportunity exciting..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={8}
                data-ocid="post_job.description.textarea"
                className="resize-y min-h-[160px] rounded-xl border-border/50 focus:border-accent transition-smooth"
                style={{ background: "oklch(0.17 0.01 260)" }}
              />
              {errors.description && (
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.65 0.21 30)" }}
                  data-ocid="post_job.description.field_error"
                >
                  {errors.description}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StyledInput
                id="job-location"
                label="Location"
                required
                icon={MapPin}
                placeholder="e.g. Mumbai / Remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                data-ocid="post_job.location.input"
                error={errors.location}
              />
              <div className="space-y-1.5">
                <Label
                  htmlFor="job-type"
                  className="text-sm font-medium text-foreground/80"
                >
                  Job Type
                </Label>
                <Select
                  value={jobType}
                  onValueChange={(v) => setJobType(v as JobType)}
                >
                  <SelectTrigger
                    id="job-type"
                    data-ocid="post_job.job_type.select"
                    className="rounded-xl border-border/50"
                    style={{ background: "oklch(0.17 0.01 260)" }}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fullTime">Full-time</SelectItem>
                    <SelectItem value="partTime">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </GlassSection>

          {/* Section 2 – Compensation */}
          <GlassSection>
            <SectionHeader
              icon={DollarSign}
              title="Compensation & Experience"
              subtitle="Set salary range and requirements"
              step={2}
            />
            <div className="grid grid-cols-3 gap-4">
              <StyledInput
                id="salary-min"
                label="Min Salary (₹/yr)"
                required
                type="number"
                icon={DollarSign}
                placeholder="600000"
                value={salaryMin}
                onChange={(e) => setSalaryMin(e.target.value)}
                data-ocid="post_job.salary_min.input"
                error={errors.salaryMin}
              />
              <StyledInput
                id="salary-max"
                label="Max Salary (₹/yr)"
                required
                type="number"
                icon={DollarSign}
                placeholder="1200000"
                value={salaryMax}
                onChange={(e) => setSalaryMax(e.target.value)}
                data-ocid="post_job.salary_max.input"
                error={errors.salaryMax}
              />
              <StyledInput
                id="experience"
                label="Experience (years)"
                required
                type="number"
                placeholder="3"
                min="0"
                max="30"
                value={experienceRequired}
                onChange={(e) => setExperienceRequired(e.target.value)}
                data-ocid="post_job.experience.input"
                error={errors.experienceRequired}
              />
            </div>
            <div className="max-w-xs">
              <StyledInput
                id="deadline"
                label="Application Deadline"
                required
                type="date"
                icon={CalendarDays}
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                data-ocid="post_job.deadline.input"
                error={errors.deadline}
              />
            </div>
          </GlassSection>

          {/* Section 3 – Skills */}
          <GlassSection>
            <SectionHeader
              icon={Tag}
              title="Skills Required"
              subtitle="Help candidates understand what you're looking for"
              step={3}
            />
            <div className="space-y-1.5">
              <Label
                htmlFor="skill-input"
                className="text-sm font-medium text-foreground/80"
              >
                Add Skills
              </Label>
              <div className="flex gap-2">
                <Input
                  id="skill-input"
                  placeholder="Type a skill and press Enter..."
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addSkill(skillInput);
                    }
                  }}
                  data-ocid="post_job.skill_input.input"
                  className="rounded-xl border-border/50 focus:border-accent transition-smooth flex-1"
                  style={{ background: "oklch(0.17 0.01 260)" }}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addSkill(skillInput)}
                  data-ocid="post_job.add_skill.button"
                  className="rounded-xl border-border/50 hover:bg-primary/10 hover:border-primary/40 px-4"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {errors.skills && (
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.65 0.21 30)" }}
                  data-ocid="post_job.skills.field_error"
                >
                  {errors.skills}
                </p>
              )}
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2">
                Quick add suggestions:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_SKILLS.filter((s) => !skills.includes(s)).map(
                  (s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => addSkill(s)}
                      data-ocid={`post_job.suggested_skill.${s.toLowerCase()}`}
                      className="text-xs px-3 py-1 rounded-full transition-smooth"
                      style={{
                        background: "oklch(0.17 0.01 260)",
                        border: "1px solid oklch(0.28 0.015 260 / 0.6)",
                        color: "oklch(0.72 0.22 190)",
                      }}
                      onMouseEnter={(e) => {
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.background = "oklch(0.72 0.22 190 / 0.12)";
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.borderColor = "oklch(0.72 0.22 190 / 0.5)";
                      }}
                      onMouseLeave={(e) => {
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.background = "oklch(0.17 0.01 260)";
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.borderColor = "oklch(0.28 0.015 260 / 0.6)";
                      }}
                    >
                      + {s}
                    </button>
                  ),
                )}
              </div>
            </div>
            {skills.length > 0 && (
              <div
                className="flex flex-wrap gap-2 p-4 rounded-xl"
                style={{
                  background: "oklch(0.17 0.01 260)",
                  border: "1px solid oklch(0.28 0.015 260 / 0.4)",
                }}
              >
                {skills.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.2), oklch(0.72 0.22 190 / 0.15))",
                      border: "1px solid oklch(0.72 0.22 190 / 0.35)",
                      color: "oklch(0.82 0.15 190)",
                    }}
                  >
                    {s}
                    <button
                      type="button"
                      onClick={() => removeSkill(s)}
                      className="hover:opacity-70 transition-opacity"
                      aria-label={`Remove ${s}`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </GlassSection>

          {/* Submit Row */}
          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate({ to: "/employer/jobs" })}
              data-ocid="post_job.cancel_bottom.button"
              className="rounded-xl border-border/50 hover:bg-primary/10"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={isPending}
              data-ocid="post_job.submit.submit_button"
              className="min-w-[160px] rounded-xl font-semibold shadow-lg transition-smooth"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                color: "white",
                border: "none",
                boxShadow: "0 4px 20px oklch(0.72 0.22 190 / 0.3)",
              }}
            >
              {isPending ? (
                <span
                  className="flex items-center gap-2"
                  data-ocid="post_job.submit.loading_state"
                >
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Publishing...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" /> Publish Job
                </span>
              )}
            </Button>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
