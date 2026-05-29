import { Button } from "@/components/ui/button";
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
  ArrowLeft,
  Briefcase,
  Calendar,
  ChevronRight,
  FileText,
  MapPin,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { ApplicationStatus } from "../../backend.d";
import { ApplicationStatusBadge } from "../../components/ApplicationStatusBadge";
import { EmptyState } from "../../components/EmptyState";
import { Layout } from "../../components/Layout";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { SkillTag } from "../../components/SkillTag";
import {
  useJobApplications,
  useJobDetails,
  useUpdateApplicationStatus,
} from "../../hooks/useQueries";

const MOCK_CANDIDATES = [
  {
    name: "Priya Sharma",
    title: "Senior Frontend Engineer",
    skills: ["React", "TypeScript", "Node.js"],
    location: "Mumbai",
    exp: "5y",
    color: "oklch(0.55 0.18 280)",
  },
  {
    name: "Rohan Mehta",
    title: "Full Stack Developer",
    skills: ["Python", "Django", "PostgreSQL"],
    location: "Bangalore",
    exp: "4y",
    color: "oklch(0.72 0.22 190)",
  },
  {
    name: "Anjali Patel",
    title: "UX/UI Designer",
    skills: ["Figma", "UX Research", "Wireframing"],
    location: "Pune",
    exp: "3y",
    color: "oklch(0.65 0.2 290)",
  },
  {
    name: "Vikram Singh",
    title: "Backend Developer",
    skills: ["Java", "Spring Boot", "AWS"],
    location: "Delhi",
    exp: "6y",
    color: "oklch(0.7 0.2 150)",
  },
  {
    name: "Deepa Nair",
    title: "DevOps Engineer",
    skills: ["React", "GraphQL", "Docker"],
    location: "Chennai",
    exp: "4y",
    color: "oklch(0.65 0.18 230)",
  },
];

const STATUS_COUNTS_LABEL: Record<
  string,
  { label: string; color: string; bg: string }
> = {
  applied: {
    label: "Applied",
    color: "oklch(0.65 0.18 230)",
    bg: "oklch(0.65 0.18 230 / 0.1)",
  },
  shortlisted: {
    label: "Shortlisted",
    color: "oklch(0.75 0.16 65)",
    bg: "oklch(0.75 0.16 65 / 0.1)",
  },
  interview: {
    label: "Interview",
    color: "oklch(0.65 0.2 290)",
    bg: "oklch(0.65 0.2 290 / 0.1)",
  },
  offer: {
    label: "Offer",
    color: "oklch(0.7 0.2 150)",
    bg: "oklch(0.7 0.2 150 / 0.1)",
  },
  rejected: {
    label: "Rejected",
    color: "oklch(0.62 0.2 28)",
    bg: "oklch(0.62 0.2 28 / 0.1)",
  },
};

function ApplicantCard({
  application,
  index,
}: {
  application: {
    applicationId: bigint;
    jobId: bigint;
    employeeId: { toString(): string };
    status: string;
    appliedAt: bigint;
    notes?: string;
  };
  index: number;
}) {
  const { mutateAsync: updateStatus, isPending } = useUpdateApplicationStatus();
  const [selectedStatus, setSelectedStatus] = useState<ApplicationStatus>(
    application.status as ApplicationStatus,
  );
  const [notes, setNotes] = useState(application.notes ?? "");
  const [showNotes, setShowNotes] = useState(false);

  const candidate = MOCK_CANDIDATES[index % MOCK_CANDIDATES.length];
  const initials = candidate.name
    .split(" ")
    .map((n) => n[0])
    .join("");
  const appliedDate = new Date(
    Number(application.appliedAt) / 1_000_000,
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const handleUpdateStatus = async () => {
    try {
      await updateStatus({
        applicationId: application.applicationId,
        status: selectedStatus as never,
        notes: notes || null,
      });
      toast.success("Status updated successfully");
    } catch {
      toast.error("Failed to update status");
    }
  };

  return (
    <div
      className="rounded-2xl overflow-hidden group transition-smooth"
      style={{
        background: "oklch(0.13 0.008 260)",
        border: "1px solid oklch(0.28 0.015 260 / 0.5)",
      }}
      data-ocid={`applicants.item.${index + 1}`}
    >
      {/* Top glow bar */}
      <div
        className="h-px w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${candidate.color}, transparent)`,
        }}
      />

      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-sm font-bold text-white shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${candidate.color}, ${candidate.color.replace("0.55 ", "0.72 ").replace("0.65 ", "0.8 ")})`,
            }}
          >
            {initials}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <div>
                <p className="font-display font-semibold text-foreground">
                  {candidate.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {candidate.title}
                </p>
              </div>
              <ApplicationStatusBadge
                status={application.status as ApplicationStatus}
              />
            </div>

            <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {candidate.location}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="h-3 w-3" /> {candidate.exp} exp
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" /> Applied {appliedDate}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {candidate.skills.map((s) => (
                <SkillTag key={s} skill={s} />
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 mt-4 flex-wrap">
              <Select
                value={selectedStatus}
                onValueChange={(v) => setSelectedStatus(v as ApplicationStatus)}
              >
                <SelectTrigger
                  className="w-[155px] h-8 text-xs rounded-xl border-border/50"
                  style={{ background: "oklch(0.17 0.01 260)" }}
                  data-ocid={`applicants.status_select.${index + 1}`}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="applied">Applied</SelectItem>
                  <SelectItem value="shortlisted">Shortlisted</SelectItem>
                  <SelectItem value="interview">Interview</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                  <SelectItem value="offer">Offer</SelectItem>
                </SelectContent>
              </Select>

              <Button
                type="button"
                size="sm"
                variant="outline"
                className="h-8 text-xs rounded-xl border-border/50 hover:bg-primary/10 hover:border-primary/40"
                onClick={() => setShowNotes((p) => !p)}
                data-ocid={`applicants.toggle_notes.${index + 1}`}
              >
                <FileText className="h-3 w-3 mr-1.5" />
                {showNotes ? "Hide Notes" : "Add Notes"}
              </Button>

              <Button
                type="button"
                size="sm"
                onClick={handleUpdateStatus}
                disabled={isPending}
                data-ocid={`applicants.update_status.${index + 1}`}
                className="h-8 text-xs rounded-xl font-semibold"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                  color: "white",
                  border: "none",
                }}
              >
                {isPending ? (
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />{" "}
                    Saving...
                  </span>
                ) : (
                  "Update Status"
                )}
              </Button>

              <button
                type="button"
                className="h-8 text-xs font-medium flex items-center gap-1 transition-smooth"
                style={{ color: "oklch(0.72 0.22 190)" }}
                data-ocid={`applicants.view_profile.${index + 1}`}
              >
                View Profile <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {showNotes && (
              <div className="mt-3">
                <Textarea
                  placeholder="Add internal notes about this applicant..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="text-sm rounded-xl border-border/50 focus:border-accent transition-smooth"
                  style={{ background: "oklch(0.17 0.01 260)" }}
                  data-ocid={`applicants.notes.${index + 1}`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function JobApplicantsPage() {
  const navigate = useNavigate();
  const params = useParams({ strict: false }) as { jobId?: string };
  const jobId = BigInt(params.jobId ?? "0");

  const { data: job, isLoading: jobLoading } = useJobDetails(jobId);
  const { data: applications, isLoading: appsLoading } =
    useJobApplications(jobId);
  const isLoading = jobLoading || appsLoading;

  return (
    <ProtectedRoute requiredRole="employer">
      <Layout showSidebar sidebarRole="employer">
        <div className="p-6 max-w-4xl mx-auto space-y-6">
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
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-display font-bold text-foreground">
                    {job ? `Applicants — ${job.title}` : "Job Applicants"}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    {applications
                      ? `${applications.length} application${applications.length !== 1 ? "s" : ""} received`
                      : "Loading..."}
                  </p>
                </div>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate({ to: "/employer/jobs" })}
                data-ocid="applicants.back.button"
                className="rounded-xl border-border/50 hover:bg-primary/10 hover:border-primary/40"
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Jobs
              </Button>
            </div>
          </div>

          {/* Status Summary Pills */}
          {applications && applications.length > 0 && (
            <div
              className="flex flex-wrap gap-2"
              data-ocid="applicants.status_summary.section"
            >
              {(
                [
                  "applied",
                  "shortlisted",
                  "interview",
                  "offer",
                  "rejected",
                ] as ApplicationStatus[]
              ).map((s) => {
                const count = applications.filter((a) => a.status === s).length;
                if (count === 0) return null;
                const cfg = STATUS_COUNTS_LABEL[s];
                return (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold"
                    style={{
                      color: cfg.color,
                      background: cfg.bg,
                      border: `1px solid ${cfg.color}40`,
                    }}
                    data-ocid={`applicants.status_pill.${s}`}
                  >
                    <span className="font-bold text-sm">{count}</span>{" "}
                    {cfg.label}
                  </span>
                );
              })}
            </div>
          )}

          {/* List */}
          {isLoading ? (
            <div className="space-y-4" data-ocid="applicants.loading_state">
              {(["a", "b", "c"] as const).map((k) => (
                <div
                  key={k}
                  className="rounded-2xl p-5"
                  style={{
                    background: "oklch(0.13 0.008 260)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.5)",
                  }}
                >
                  <div className="flex gap-4">
                    <Skeleton className="w-12 h-12 rounded-2xl" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-5 w-40" />
                      <Skeleton className="h-4 w-64" />
                      <Skeleton className="h-3 w-48" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : !applications || applications.length === 0 ? (
            <EmptyState
              icon={Users}
              title="No applicants yet"
              description="Share your job listing to start receiving applications from qualified candidates."
              data-ocid="applicants.empty_state"
            />
          ) : (
            <div className="space-y-4" data-ocid="applicants.list">
              {applications.map((app, i) => (
                <ApplicantCard
                  key={String(app.applicationId)}
                  application={app}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
