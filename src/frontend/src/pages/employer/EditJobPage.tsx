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
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  Briefcase,
  CalendarDays,
  DollarSign,
  Edit,
  MapPin,
  Plus,
  Sparkles,
  Tag,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import type {
  JobStatus as JobStatusEnum,
  JobType as JobTypeEnum,
} from "../../backend.d";
import { Layout } from "../../components/Layout";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { useJobDetails, useUpdateJob } from "../../hooks/useQueries";
import type { JobStatus, JobType } from "../../types";

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
      <div>
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

export default function EditJobPage() {
  const navigate = useNavigate();
  const params = useParams({ strict: false }) as { jobId?: string };
  const jobId = BigInt(params.jobId ?? "0");
  const { data: job, isLoading } = useJobDetails(jobId);
  const { mutateAsync: updateJob, isPending } = useUpdateJob();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const [experienceRequired, setExperienceRequired] = useState("");
  const [jobType, setJobType] = useState<JobType>("fullTime");
  const [status, setStatus] = useState<JobStatus>("active");
  const [deadline, setDeadline] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!job) return;
    setTitle(job.title);
    setDescription(job.description);
    setLocation(job.location);
    setSalaryMin(String(job.salaryMin));
    setSalaryMax(String(job.salaryMax));
    setExperienceRequired(String(job.experienceRequired));
    setJobType(job.jobType as JobType);
    setStatus(job.status as JobStatus);
    setSkills(job.skillsRequired);
    const dl = new Date(Number(job.applicationDeadline) / 1_000_000);
    setDeadline(dl.toISOString().split("T")[0]);
  }, [job]);

  const addSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (!trimmed || skills.includes(trimmed)) return;
    setSkills((prev) => [...prev, trimmed]);
    setSkillInput("");
  };

  const removeSkill = (s: string) =>
    setSkills((prev) => prev.filter((x) => x !== s));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!title.trim()) e.title = "Job title is required";
    if (!description.trim()) e.description = "Description is required";
    if (!location.trim()) e.location = "Location is required";
    if (!salaryMin) e.salaryMin = "Min salary required";
    if (!salaryMax || Number(salaryMax) <= Number(salaryMin))
      e.salaryMax = "Max salary must exceed min";
    if (!experienceRequired) e.experienceRequired = "Experience required";
    if (!deadline) e.deadline = "Deadline required";
    if (skills.length === 0) e.skills = "At least one skill required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    try {
      await updateJob({
        jobId,
        title,
        description,
        location,
        salaryMin: BigInt(salaryMin),
        salaryMax: BigInt(salaryMax),
        experienceRequired: BigInt(experienceRequired),
        jobType: jobType as JobTypeEnum,
        skillsRequired: skills,
        status: status as JobStatusEnum,
        applicationDeadline: BigInt(new Date(deadline).getTime()),
      });
      toast.success("Job updated successfully!");
      navigate({ to: "/employer/jobs" });
    } catch {
      toast.error("Failed to update job. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <ProtectedRoute requiredRole="employer">
        <Layout showSidebar sidebarRole="employer">
          <div
            className="p-6 max-w-3xl mx-auto space-y-6"
            data-ocid="edit_job.loading_state"
          >
            <div
              className="rounded-2xl p-6 space-y-4"
              style={{
                background: "oklch(0.13 0.008 260)",
                border: "1px solid oklch(0.28 0.015 260 / 0.5)",
              }}
            >
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-48" />
            </div>
            {(["a", "b", "c"] as const).map((k) => (
              <div
                key={k}
                className="rounded-2xl p-6 space-y-4"
                style={{
                  background: "oklch(0.13 0.008 260)",
                  border: "1px solid oklch(0.28 0.015 260 / 0.5)",
                }}
              >
                {(["x", "y", "z"] as const).map((j) => (
                  <Skeleton key={j} className="h-10 w-full" />
                ))}
              </div>
            ))}
          </div>
        </Layout>
      </ProtectedRoute>
    );
  }

  if (!job) {
    return (
      <ProtectedRoute requiredRole="employer">
        <Layout showSidebar sidebarRole="employer">
          <div className="p-6 max-w-3xl mx-auto">
            <div
              className="text-center py-16 text-muted-foreground"
              data-ocid="edit_job.error_state"
            >
              Job not found.
            </div>
          </div>
        </Layout>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute requiredRole="employer">
      <Layout showSidebar sidebarRole="employer">
        <div className="p-6 max-w-3xl mx-auto space-y-6">
          {/* Header */}
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
                  <Edit className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-display font-bold text-foreground">
                    Edit Job Listing
                  </h1>
                  <p className="text-sm text-muted-foreground truncate max-w-xs">
                    Editing: {job.title}
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => navigate({ to: "/employer/jobs" })}
                data-ocid="edit_job.cancel.button"
                className="rounded-xl border-border/50 hover:bg-primary/10 hover:border-primary/40"
              >
                Cancel
              </Button>
            </div>
          </div>

          {/* Section 1 */}
          <GlassSection>
            <SectionHeader
              icon={Briefcase}
              title="Basic Information"
              subtitle="Update role details"
              step={1}
            />
            <div className="space-y-1.5">
              <Label
                htmlFor="edit-title"
                className="text-sm font-medium text-foreground/80"
              >
                Job Title
              </Label>
              <Input
                id="edit-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                data-ocid="edit_job.title.input"
                className="rounded-xl border-border/50 focus:border-accent transition-smooth"
                style={{ background: "oklch(0.17 0.01 260)" }}
              />
              {errors.title && (
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.65 0.21 30)" }}
                  data-ocid="edit_job.title.field_error"
                >
                  {errors.title}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="edit-description"
                className="text-sm font-medium text-foreground/80"
              >
                Job Description
              </Label>
              <Textarea
                id="edit-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={8}
                data-ocid="edit_job.description.textarea"
                className="resize-y min-h-[160px] rounded-xl border-border/50 focus:border-accent transition-smooth"
                style={{ background: "oklch(0.17 0.01 260)" }}
              />
              {errors.description && (
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.65 0.21 30)" }}
                  data-ocid="edit_job.description.field_error"
                >
                  {errors.description}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label
                  htmlFor="edit-location"
                  className="text-sm font-medium text-foreground/80"
                >
                  Location
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="edit-location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    data-ocid="edit_job.location.input"
                    className="pl-10 rounded-xl border-border/50 focus:border-accent transition-smooth"
                    style={{ background: "oklch(0.17 0.01 260)" }}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="edit-job-type"
                  className="text-sm font-medium text-foreground/80"
                >
                  Job Type
                </Label>
                <Select
                  value={jobType}
                  onValueChange={(v) => setJobType(v as JobType)}
                >
                  <SelectTrigger
                    id="edit-job-type"
                    data-ocid="edit_job.job_type.select"
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

          {/* Section 2 */}
          <GlassSection>
            <SectionHeader
              icon={DollarSign}
              title="Compensation & Status"
              subtitle="Update salary range and listing status"
              step={2}
            />
            <div className="grid grid-cols-4 gap-4">
              {[
                {
                  id: "edit-salary-min",
                  label: "Min Salary",
                  value: salaryMin,
                  onChange: setSalaryMin,
                  ocid: "edit_job.salary_min.input",
                  icon: DollarSign,
                  err: errors.salaryMin,
                },
                {
                  id: "edit-salary-max",
                  label: "Max Salary",
                  value: salaryMax,
                  onChange: setSalaryMax,
                  ocid: "edit_job.salary_max.input",
                  icon: DollarSign,
                  err: errors.salaryMax,
                },
                {
                  id: "edit-experience",
                  label: "Experience (yrs)",
                  value: experienceRequired,
                  onChange: setExperienceRequired,
                  ocid: "edit_job.experience.input",
                  icon: null,
                  err: errors.experienceRequired,
                },
              ].map((f) => (
                <div key={f.id} className="space-y-1.5">
                  <Label
                    htmlFor={f.id}
                    className="text-sm font-medium text-foreground/80"
                  >
                    {f.label}
                  </Label>
                  <div className="relative">
                    {f.icon && (
                      <f.icon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    )}
                    <Input
                      id={f.id}
                      type="number"
                      value={f.value}
                      onChange={(e) => f.onChange(e.target.value)}
                      data-ocid={f.ocid}
                      className={`${f.icon ? "pl-10" : ""} rounded-xl border-border/50 focus:border-accent transition-smooth`}
                      style={{ background: "oklch(0.17 0.01 260)" }}
                    />
                  </div>
                  {f.err && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.65 0.21 30)" }}
                    >
                      {f.err}
                    </p>
                  )}
                </div>
              ))}
              <div className="space-y-1.5">
                <Label
                  htmlFor="edit-status"
                  className="text-sm font-medium text-foreground/80"
                >
                  Status
                </Label>
                <Select
                  value={status}
                  onValueChange={(v) => setStatus(v as JobStatus)}
                >
                  <SelectTrigger
                    id="edit-status"
                    data-ocid="edit_job.status.select"
                    className="rounded-xl border-border/50"
                    style={{ background: "oklch(0.17 0.01 260)" }}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="max-w-xs space-y-1.5">
              <Label
                htmlFor="edit-deadline"
                className="text-sm font-medium text-foreground/80"
              >
                Application Deadline
              </Label>
              <div className="relative">
                <CalendarDays className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="edit-deadline"
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  data-ocid="edit_job.deadline.input"
                  className="pl-10 rounded-xl border-border/50 focus:border-accent transition-smooth"
                  style={{ background: "oklch(0.17 0.01 260)" }}
                />
              </div>
            </div>
          </GlassSection>

          {/* Section 3 */}
          <GlassSection>
            <SectionHeader
              icon={Tag}
              title="Skills Required"
              subtitle="Update required skill set"
              step={3}
            />
            <div className="space-y-1.5">
              <Label
                htmlFor="edit-skill-input"
                className="text-sm font-medium text-foreground/80"
              >
                Add Skills
              </Label>
              <div className="flex gap-2">
                <Input
                  id="edit-skill-input"
                  placeholder="Type a skill and press Enter"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addSkill(skillInput);
                    }
                  }}
                  data-ocid="edit_job.skill_input.input"
                  className="rounded-xl border-border/50 focus:border-accent transition-smooth flex-1"
                  style={{ background: "oklch(0.17 0.01 260)" }}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addSkill(skillInput)}
                  data-ocid="edit_job.add_skill.button"
                  className="rounded-xl border-border/50 hover:bg-primary/10 hover:border-primary/40 px-4"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {errors.skills && (
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.65 0.21 30)" }}
                  data-ocid="edit_job.skills.field_error"
                >
                  {errors.skills}
                </p>
              )}
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2">
                Suggestions:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_SKILLS.filter((s) => !skills.includes(s)).map(
                  (s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => addSkill(s)}
                      className="text-xs px-3 py-1 rounded-full transition-smooth"
                      style={{
                        background: "oklch(0.17 0.01 260)",
                        border: "1px solid oklch(0.28 0.015 260 / 0.6)",
                        color: "oklch(0.72 0.22 190)",
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
                      className="hover:opacity-70"
                      aria-label={`Remove ${s}`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </GlassSection>

          {/* Submit */}
          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate({ to: "/employer/jobs" })}
              data-ocid="edit_job.cancel_bottom.button"
              className="rounded-xl border-border/50 hover:bg-primary/10"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={isPending}
              data-ocid="edit_job.submit.submit_button"
              className="min-w-[160px] rounded-xl font-semibold shadow-lg"
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
                  data-ocid="edit_job.submit.loading_state"
                >
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Saving...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" /> Save Changes
                </span>
              )}
            </Button>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
