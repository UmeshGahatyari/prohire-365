import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle,
  Clock,
  DollarSign,
  MapPin,
  Search,
  Users,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { EmptyState } from "../../components/EmptyState";
import { Layout } from "../../components/Layout";
import { PageHeader } from "../../components/PageHeader";
import { ProtectedRoute } from "../../components/ProtectedRoute";

type JobStatus = "active" | "closed" | "draft" | "pending";

interface MockJob {
  id: number;
  title: string;
  employer: string;
  status: JobStatus;
  postedDate: string;
  location: string;
  salaryRange: string;
  type: string;
  skills: string[];
  applicants: number;
  description: string;
  deadline: string;
}

const mockJobs: MockJob[] = [
  {
    id: 1,
    title: "Senior React Developer",
    employer: "Nexus Technologies",
    status: "active",
    postedDate: "Apr 18, 2026",
    location: "San Francisco, CA",
    salaryRange: "$120k–$160k",
    type: "Full-time",
    skills: ["React", "TypeScript", "GraphQL"],
    applicants: 24,
    description:
      "We're looking for a Senior React Developer to lead our frontend team building next-gen SaaS products. You'll architect scalable component systems and mentor junior developers.",
    deadline: "May 15, 2026",
  },
  {
    id: 2,
    title: "Product Manager",
    employer: "Horizon Ventures",
    status: "active",
    postedDate: "Apr 17, 2026",
    location: "New York, NY",
    salaryRange: "$110k–$140k",
    type: "Full-time",
    skills: ["Product Strategy", "Agile", "Roadmapping"],
    applicants: 17,
    description:
      "Drive product vision and strategy for our B2B SaaS platform. Collaborate with engineering, design, and stakeholders to ship world-class features.",
    deadline: "May 20, 2026",
  },
  {
    id: 3,
    title: "Data Engineer",
    employer: "DataSphere Inc.",
    status: "closed",
    postedDate: "Mar 28, 2026",
    location: "Remote",
    salaryRange: "$130k–$170k",
    type: "Full-time",
    skills: ["Python", "Spark", "Snowflake", "SQL"],
    applicants: 32,
    description:
      "Build and maintain our data pipelines and infrastructure. Design ETL processes and data warehouse solutions to power business insights.",
    deadline: "Apr 15, 2026",
  },
  {
    id: 4,
    title: "DevOps Lead",
    employer: "CloudScale",
    status: "draft",
    postedDate: "Apr 20, 2026",
    location: "Austin, TX",
    salaryRange: "$140k–$180k",
    type: "Full-time",
    skills: ["Kubernetes", "Terraform", "AWS", "CI/CD"],
    applicants: 0,
    description:
      "Lead our infrastructure team in modernizing our cloud operations. Champion DevSecOps practices and build automation frameworks.",
    deadline: "Jun 1, 2026",
  },
  {
    id: 5,
    title: "UX Designer",
    employer: "Luminary Tech",
    status: "pending",
    postedDate: "Apr 19, 2026",
    location: "Seattle, WA",
    salaryRange: "$95k–$125k",
    type: "Full-time",
    skills: ["Figma", "User Research", "Prototyping"],
    applicants: 0,
    description:
      "Shape user experiences across our product suite. Conduct user research, create wireframes, and collaborate with engineering to implement designs.",
    deadline: "May 30, 2026",
  },
  {
    id: 6,
    title: "Backend Engineer – Go",
    employer: "Orbit Analytics",
    status: "pending",
    postedDate: "Apr 18, 2026",
    location: "Remote",
    salaryRange: "$115k–$150k",
    type: "Contract",
    skills: ["Go", "Microservices", "gRPC", "PostgreSQL"],
    applicants: 0,
    description:
      "Join our platform team building high-throughput APIs and distributed systems. Work with Go, gRPC, and Kafka to deliver reliable data pipelines.",
    deadline: "May 25, 2026",
  },
  {
    id: 7,
    title: "Engineering Manager",
    employer: "Nexus Technologies",
    status: "active",
    postedDate: "Apr 10, 2026",
    location: "San Francisco, CA",
    salaryRange: "$170k–$220k",
    type: "Full-time",
    skills: ["Leadership", "System Design", "Agile"],
    applicants: 9,
    description:
      "Lead a team of 8–12 engineers delivering core platform features. Drive technical strategy, hiring, and career development.",
    deadline: "May 10, 2026",
  },
  {
    id: 8,
    title: "ML Engineer",
    employer: "DataSphere Inc.",
    status: "closed",
    postedDate: "Mar 15, 2026",
    location: "New York, NY",
    salaryRange: "$140k–$180k",
    type: "Full-time",
    skills: ["PyTorch", "MLflow", "Python", "Kubeflow"],
    applicants: 41,
    description:
      "Build and deploy machine learning models at scale. Collaborate with data scientists to productionize research models.",
    deadline: "Apr 1, 2026",
  },
];

const statusConfig: Record<
  JobStatus,
  {
    label: string;
    bg: string;
    border: string;
    color: string;
    dot: string;
    rowHighlight?: string;
  }
> = {
  active: {
    label: "Active",
    bg: "oklch(0.55 0.18 155 / 0.12)",
    border: "oklch(0.55 0.18 155 / 0.3)",
    color: "oklch(0.72 0.2 155)",
    dot: "oklch(0.7 0.2 155)",
  },
  pending: {
    label: "Pending Review",
    bg: "oklch(0.55 0.18 65 / 0.12)",
    border: "oklch(0.55 0.18 65 / 0.3)",
    color: "oklch(0.78 0.16 65)",
    dot: "oklch(0.75 0.18 65)",
    rowHighlight: "oklch(0.55 0.18 65 / 0.04)",
  },
  draft: {
    label: "Draft",
    bg: "oklch(0.3 0.01 260 / 0.2)",
    border: "oklch(0.35 0.015 260 / 0.3)",
    color: "oklch(0.55 0.01 260)",
    dot: "oklch(0.45 0.01 260)",
  },
  closed: {
    label: "Closed",
    bg: "oklch(0.55 0.2 28 / 0.12)",
    border: "oklch(0.55 0.2 28 / 0.3)",
    color: "oklch(0.72 0.18 28)",
    dot: "oklch(0.62 0.2 28)",
  },
};

export default function JobModerationPage() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<"all" | JobStatus>("all");
  const [jobs, setJobs] = useState(mockJobs);
  const [selectedJob, setSelectedJob] = useState<MockJob | null>(null);

  const filtered = jobs.filter((j) => {
    const matchesTab = tab === "all" || j.status === tab;
    const matchesSearch =
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.employer.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const approveJob = (id: number) => {
    setJobs((prev) =>
      prev.map((j) =>
        j.id === id ? { ...j, status: "active" as JobStatus } : j,
      ),
    );
    setSelectedJob(null);
  };
  const rejectJob = (id: number) => {
    setJobs((prev) =>
      prev.map((j) =>
        j.id === id ? { ...j, status: "closed" as JobStatus } : j,
      ),
    );
    setSelectedJob(null);
  };

  const pendingCount = jobs.filter((j) => j.status === "pending").length;

  return (
    <ProtectedRoute requiredRole="admin">
      <Layout showSidebar sidebarRole="admin">
        <div className="p-6 max-w-6xl mx-auto space-y-6">
          <PageHeader
            title="Job Moderation"
            description="Review and manage all job listings on the platform"
            icon={Briefcase}
            actions={
              pendingCount > 0 ? (
                <span
                  className="text-xs px-3 py-1.5 rounded-full font-semibold flex items-center gap-1.5"
                  style={{
                    background: "oklch(0.55 0.18 65 / 0.15)",
                    border: "1px solid oklch(0.55 0.18 65 / 0.35)",
                    color: "oklch(0.78 0.16 65)",
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                      style={{ background: "oklch(0.75 0.18 65)" }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-2 w-2"
                      style={{ background: "oklch(0.75 0.18 65)" }}
                    />
                  </span>
                  {pendingCount} pending review
                </span>
              ) : undefined
            }
          />

          {/* Filters — glassmorphic */}
          <div
            className="flex flex-col sm:flex-row gap-3 items-start sm:items-center p-4 rounded-2xl flex-wrap"
            style={{
              background: "oklch(0.14 0.009 255 / 0.7)",
              border: "1px solid oklch(0.28 0.015 260 / 0.35)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search jobs or employers…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 bg-transparent border-border/50 focus:border-primary/50 rounded-xl"
                data-ocid="jobs.search_input"
              />
            </div>
            <Tabs value={tab} onValueChange={(v) => setTab(v as typeof tab)}>
              <TabsList
                className="rounded-xl"
                style={{
                  background: "oklch(0.1 0.008 255 / 0.8)",
                  border: "1px solid oklch(0.28 0.015 260 / 0.3)",
                }}
                data-ocid="jobs.status.tab"
              >
                {(["all", "active", "pending", "closed", "draft"] as const).map(
                  (v) => (
                    <TabsTrigger
                      key={v}
                      value={v}
                      className="rounded-lg text-xs capitalize"
                      data-ocid={`jobs.filter_${v}.tab`}
                    >
                      {v === "all"
                        ? "All"
                        : (statusConfig[v as JobStatus]?.label ?? v)}
                    </TabsTrigger>
                  ),
                )}
              </TabsList>
            </Tabs>
          </div>

          {/* Job Table */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "oklch(0.14 0.009 255 / 0.8)",
              border: "1px solid oklch(0.28 0.015 260 / 0.35)",
              backdropFilter: "blur(10px)",
            }}
          >
            {filtered.length === 0 ? (
              <EmptyState
                icon={Briefcase}
                title="No jobs found"
                description="Try adjusting your search or filter to see job listings."
              />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm" data-ocid="jobs.table">
                  <thead>
                    <tr
                      style={{
                        background: "oklch(0.1 0.008 255 / 0.6)",
                        borderBottom: "1px solid oklch(0.28 0.015 260 / 0.3)",
                      }}
                    >
                      {[
                        { h: "Job Title", cls: "text-left" },
                        {
                          h: "Employer",
                          cls: "text-left hidden md:table-cell",
                        },
                        { h: "Status", cls: "text-left" },
                        { h: "Posted", cls: "text-left hidden lg:table-cell" },
                        {
                          h: "Applicants",
                          cls: "text-right hidden lg:table-cell",
                        },
                        { h: "Actions", cls: "text-right" },
                      ].map(({ h, cls }) => (
                        <th
                          key={h}
                          className={`px-4 py-3 font-semibold text-xs uppercase tracking-wider ${cls}`}
                          style={{ color: "oklch(0.6 0.015 260)" }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((job, i) => {
                      const sc = statusConfig[job.status];
                      return (
                        <tr
                          key={job.id}
                          className="hover:bg-primary/5 transition-smooth"
                          style={{
                            borderBottom:
                              "1px solid oklch(0.28 0.015 260 / 0.2)",
                            background:
                              job.status === "pending"
                                ? sc.rowHighlight
                                : undefined,
                          }}
                          data-ocid={`jobs.item.${i + 1}`}
                        >
                          <td className="px-4 py-3.5">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                style={{
                                  background:
                                    "linear-gradient(135deg, oklch(0.65 0.22 190 / 0.2), oklch(0.5 0.16 280 / 0.15))",
                                  border:
                                    "1px solid oklch(0.65 0.22 190 / 0.25)",
                                }}
                              >
                                <Briefcase
                                  className="h-3.5 w-3.5"
                                  style={{ color: "oklch(0.72 0.22 190)" }}
                                />
                              </div>
                              <div className="min-w-0">
                                <p className="font-medium text-foreground truncate">
                                  {job.title}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {job.type}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3.5 hidden md:table-cell">
                            <div className="flex items-center gap-1.5">
                              <Building2 className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                              <span className="text-muted-foreground truncate max-w-[140px]">
                                {job.employer}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <span
                              className="flex items-center gap-1.5 text-xs w-fit px-2.5 py-1 rounded-full font-medium"
                              style={{
                                background: sc.bg,
                                border: `1px solid ${sc.border}`,
                                color: sc.color,
                              }}
                            >
                              <span className="relative flex h-1.5 w-1.5">
                                {job.status === "pending" && (
                                  <span
                                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                                    style={{ background: sc.dot }}
                                  />
                                )}
                                <span
                                  className="relative inline-flex rounded-full h-1.5 w-1.5"
                                  style={{ background: sc.dot }}
                                />
                              </span>
                              {sc.label}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-muted-foreground hidden lg:table-cell">
                            {job.postedDate}
                          </td>
                          <td className="px-4 py-3.5 text-right font-mono text-muted-foreground hidden lg:table-cell">
                            {job.applicants}
                          </td>
                          <td className="px-4 py-3.5 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="h-7 text-xs rounded-lg border"
                                style={{
                                  borderColor: "oklch(0.28 0.015 260 / 0.4)",
                                  color: "oklch(0.72 0.22 190)",
                                }}
                                onClick={() => setSelectedJob(job)}
                                data-ocid={`jobs.view_button.${i + 1}`}
                              >
                                View
                              </Button>
                              {job.status === "pending" && (
                                <>
                                  <Button
                                    type="button"
                                    size="sm"
                                    className="h-7 text-xs rounded-lg"
                                    style={{
                                      background:
                                        "linear-gradient(135deg, oklch(0.55 0.18 155), oklch(0.5 0.16 165))",
                                      color: "white",
                                    }}
                                    onClick={() => approveJob(job.id)}
                                    data-ocid={`jobs.approve_button.${i + 1}`}
                                  >
                                    Approve
                                  </Button>
                                  <Button
                                    type="button"
                                    variant="destructive"
                                    size="sm"
                                    className="h-7 text-xs rounded-lg"
                                    onClick={() => rejectJob(job.id)}
                                    data-ocid={`jobs.reject_button.${i + 1}`}
                                  >
                                    Reject
                                  </Button>
                                </>
                              )}
                              {job.status === "active" && (
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  className="h-7 text-xs rounded-lg"
                                  style={{
                                    borderColor: "oklch(0.55 0.2 28 / 0.4)",
                                    color: "oklch(0.72 0.18 28)",
                                  }}
                                  onClick={() => rejectJob(job.id)}
                                  data-ocid={`jobs.close_button.${i + 1}`}
                                >
                                  Close
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Job Detail Dialog */}
        <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
          <DialogContent
            className="max-w-lg max-h-[80vh] overflow-y-auto"
            style={{
              background: "oklch(0.13 0.009 258)",
              border: "1px solid oklch(0.28 0.015 260 / 0.5)",
            }}
            data-ocid="job_detail.dialog"
          >
            <DialogHeader>
              <DialogTitle className="font-display flex items-center gap-2">
                <Briefcase
                  className="h-5 w-5"
                  style={{ color: "oklch(0.72 0.22 190)" }}
                />
                Job Details
              </DialogTitle>
            </DialogHeader>

            {selectedJob &&
              (() => {
                const sc = statusConfig[selectedJob.status];
                return (
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h2 className="font-display font-bold text-lg text-foreground leading-tight">
                          {selectedJob.title}
                        </h2>
                        <span
                          className="flex items-center gap-1.5 text-xs shrink-0 px-2.5 py-1 rounded-full font-medium"
                          style={{
                            background: sc.bg,
                            border: `1px solid ${sc.border}`,
                            color: sc.color,
                          }}
                        >
                          <span
                            className="inline-flex rounded-full h-1.5 w-1.5"
                            style={{ background: sc.dot }}
                          />
                          {sc.label}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5" />{" "}
                        {selectedJob.employer}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 shrink-0" />{" "}
                        {selectedJob.location}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSign className="h-4 w-4 shrink-0" />{" "}
                        {selectedJob.salaryRange}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 shrink-0" />{" "}
                        {selectedJob.type}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CalendarDays className="h-4 w-4 shrink-0" /> Deadline:{" "}
                        {selectedJob.deadline}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                        <Users className="h-4 w-4 shrink-0" />{" "}
                        {selectedJob.applicants} applicants
                      </div>
                    </div>

                    <Separator
                      style={{ background: "oklch(0.28 0.015 260 / 0.3)" }}
                    />

                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Description
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        {selectedJob.description}
                      </p>
                    </div>

                    {selectedJob.skills.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Required Skills
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedJob.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded-full text-xs font-medium"
                              style={{
                                background: "oklch(0.5 0.16 280 / 0.15)",
                                border: "1px solid oklch(0.5 0.16 280 / 0.3)",
                                color: "oklch(0.78 0.14 280)",
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <Separator
                      style={{ background: "oklch(0.28 0.015 260 / 0.3)" }}
                    />

                    <div className="flex justify-end gap-2">
                      {selectedJob.status === "pending" && (
                        <>
                          <Button
                            type="button"
                            size="sm"
                            className="h-8 text-xs gap-1.5"
                            style={{
                              background:
                                "linear-gradient(135deg, oklch(0.55 0.18 155), oklch(0.5 0.16 165))",
                              color: "white",
                            }}
                            onClick={() => approveJob(selectedJob.id)}
                            data-ocid="job_detail.approve_button"
                          >
                            <CheckCircle className="h-3.5 w-3.5" /> Approve
                          </Button>
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="h-8 text-xs gap-1.5"
                            onClick={() => rejectJob(selectedJob.id)}
                            data-ocid="job_detail.reject_button"
                          >
                            <XCircle className="h-3.5 w-3.5" /> Reject
                          </Button>
                        </>
                      )}
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-8 text-xs"
                        style={{ borderColor: "oklch(0.28 0.015 260 / 0.5)" }}
                        onClick={() => setSelectedJob(null)}
                        data-ocid="job_detail.close_button"
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                );
              })()}
          </DialogContent>
        </Dialog>
      </Layout>
    </ProtectedRoute>
  );
}
