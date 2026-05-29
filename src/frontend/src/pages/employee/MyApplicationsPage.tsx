import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "@tanstack/react-router";
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Search,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { ApplicationStatusBadge } from "../../components/ApplicationStatusBadge";
import { EmptyState } from "../../components/EmptyState";
import { Layout } from "../../components/Layout";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import type { ApplicationStatus, JobApplication } from "../../types";

const ALL_APPLICATIONS: (JobApplication & {
  jobTitle: string;
  company: string;
  location: string;
})[] = [
  {
    applicationId: BigInt(1),
    jobId: BigInt(101),
    employeeId: {} as never,
    status: "shortlisted",
    appliedAt: BigInt((Date.now() - 2 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt((Date.now() - 1 * 24 * 3600 * 1000) * 1_000_000),
    jobTitle: "Senior React Developer",
    company: "TechNova Inc.",
    location: "San Francisco, CA",
  },
  {
    applicationId: BigInt(2),
    jobId: BigInt(102),
    employeeId: {} as never,
    status: "interview",
    appliedAt: BigInt((Date.now() - 5 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt((Date.now() - 2 * 24 * 3600 * 1000) * 1_000_000),
    jobTitle: "Full Stack Engineer",
    company: "CloudPeak Systems",
    location: "Remote",
  },
  {
    applicationId: BigInt(3),
    jobId: BigInt(103),
    employeeId: {} as never,
    status: "applied",
    appliedAt: BigInt((Date.now() - 1 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt((Date.now() - 1 * 24 * 3600 * 1000) * 1_000_000),
    jobTitle: "Product Designer",
    company: "DesignCraft Studio",
    location: "New York, NY",
  },
  {
    applicationId: BigInt(4),
    jobId: BigInt(104),
    employeeId: {} as never,
    status: "rejected",
    appliedAt: BigInt((Date.now() - 10 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt((Date.now() - 7 * 24 * 3600 * 1000) * 1_000_000),
    jobTitle: "UI/UX Lead",
    company: "Pixel Labs",
    location: "Austin, TX",
  },
  {
    applicationId: BigInt(5),
    jobId: BigInt(105),
    employeeId: {} as never,
    status: "offer",
    appliedAt: BigInt((Date.now() - 20 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt((Date.now() - 3 * 24 * 3600 * 1000) * 1_000_000),
    jobTitle: "React Native Developer",
    company: "Appvance Technologies",
    location: "Seattle, WA",
  },
  {
    applicationId: BigInt(6),
    jobId: BigInt(106),
    employeeId: {} as never,
    status: "applied",
    appliedAt: BigInt((Date.now() - 3 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt((Date.now() - 3 * 24 * 3600 * 1000) * 1_000_000),
    jobTitle: "DevOps Engineer",
    company: "Stratum Cloud",
    location: "Chicago, IL",
  },
];

const STATUS_FILTERS = [
  { value: "all", label: "All statuses" },
  { value: "applied", label: "Applied" },
  { value: "shortlisted", label: "Shortlisted" },
  { value: "interview", label: "Interview" },
  { value: "rejected", label: "Rejected" },
  { value: "offer", label: "Offer" },
];

const STATUS_STATS = [
  {
    status: "applied",
    label: "Applied",
    color: "oklch(0.65 0.18 230)",
    bg: "oklch(0.65 0.18 230 / 0.12)",
    border: "oklch(0.65 0.18 230 / 0.3)",
  },
  {
    status: "shortlisted",
    label: "Shortlisted",
    color: "oklch(0.82 0.14 65)",
    bg: "oklch(0.75 0.16 65 / 0.12)",
    border: "oklch(0.75 0.16 65 / 0.3)",
  },
  {
    status: "interview",
    label: "Interview",
    color: "oklch(0.75 0.18 290)",
    bg: "oklch(0.65 0.2 290 / 0.12)",
    border: "oklch(0.65 0.2 290 / 0.3)",
  },
  {
    status: "offer",
    label: "Offers",
    color: "oklch(0.78 0.18 150)",
    bg: "oklch(0.7 0.2 150 / 0.12)",
    border: "oklch(0.7 0.2 150 / 0.3)",
  },
];

const PAGE_SIZE = 5;

function formatDate(ns: bigint): string {
  return new Date(Number(ns) / 1_000_000).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getCompanyInitial(name: string): string {
  return name[0].toUpperCase();
}

function getCompanyGradient(name: string): string {
  const g = [
    "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
    "linear-gradient(135deg, oklch(0.55 0.16 200), oklch(0.65 0.18 150))",
    "linear-gradient(135deg, oklch(0.52 0.14 310), oklch(0.55 0.18 280))",
  ];
  return g[name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % g.length];
}

export default function MyApplicationsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);

  const filtered = ALL_APPLICATIONS.filter((app) => {
    if (statusFilter !== "all" && app.status !== statusFilter) return false;
    if (
      search &&
      !app.jobTitle.toLowerCase().includes(search.toLowerCase()) &&
      !app.company.toLowerCase().includes(search.toLowerCase())
    )
      return false;
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <ProtectedRoute requiredRole="employee">
      <Layout showSidebar sidebarRole="employee">
        <div className="min-h-full">
          {/* Hero header */}
          <div
            className="relative overflow-hidden px-6 pt-8 pb-8"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.13 0.015 265) 0%, oklch(0.11 0.01 255) 60%, oklch(0.10 0.008 250) 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 50%, oklch(0.5 0.16 280 / 0.1) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, oklch(0.72 0.22 190 / 0.08) 0%, transparent 50%)",
              }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.72 0.22 190 / 0.5), transparent)",
              }}
            />

            <div className="relative z-10 max-w-5xl mx-auto">
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase
                      className="h-4 w-4"
                      style={{ color: "oklch(0.72 0.22 190)" }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: "oklch(0.72 0.22 190)" }}
                    >
                      Application Tracker
                    </span>
                  </div>
                  <h1 className="font-display font-bold text-3xl text-foreground">
                    My Applications
                  </h1>
                  <p className="text-muted-foreground mt-1.5">
                    Track every step of your job search journey.
                  </p>
                </div>
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-xl shrink-0"
                  style={{
                    background: "oklch(0.18 0.012 260 / 0.8)",
                    border: "1px solid oklch(0.3 0.015 260 / 0.5)",
                  }}
                >
                  <TrendingUp
                    className="h-4 w-4"
                    style={{ color: "oklch(0.72 0.22 190)" }}
                  />
                  <span className="text-sm font-semibold text-foreground">
                    {ALL_APPLICATIONS.length} total
                  </span>
                </div>
              </div>

              {/* Status stat pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {STATUS_STATS.map((s) => {
                  const count = ALL_APPLICATIONS.filter(
                    (a) => a.status === s.status,
                  ).length;
                  return (
                    <button
                      key={s.status}
                      type="button"
                      onClick={() => {
                        setStatusFilter(s.status);
                        setPage(1);
                      }}
                      data-ocid={`applications.status_stat.${s.status}`}
                      className="flex flex-col gap-1 p-3 rounded-xl text-left transition-smooth hover:scale-[1.02]"
                      style={{
                        background: s.bg,
                        border: `1px solid ${s.border}`,
                        boxShadow:
                          statusFilter === s.status
                            ? `0 0 16px ${s.color}40`
                            : undefined,
                      }}
                    >
                      <span
                        className="text-2xl font-display font-bold"
                        style={{ color: s.color }}
                      >
                        {count}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {s.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="p-6 max-w-5xl mx-auto space-y-5">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div
                className="flex items-center gap-2 flex-1 px-3 rounded-xl"
                style={{
                  background: "oklch(0.14 0.009 255 / 0.8)",
                  border: "1px solid oklch(0.28 0.015 260 / 0.4)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Search
                  className="h-4 w-4 shrink-0"
                  style={{ color: "oklch(0.72 0.22 190)" }}
                />
                <Input
                  placeholder="Search by job title or company…"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  className="border-0 bg-transparent shadow-none px-0 focus-visible:ring-0 text-sm"
                  data-ocid="applications.search_input"
                />
              </div>
              <Select
                value={statusFilter}
                onValueChange={(v) => {
                  setStatusFilter(v);
                  setPage(1);
                }}
              >
                <SelectTrigger
                  className="w-44 h-9 text-sm"
                  data-ocid="applications.status_filter.select"
                  style={{
                    background: "oklch(0.14 0.009 255 / 0.8)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.4)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {STATUS_FILTERS.map((f) => (
                    <SelectItem key={f.value} value={f.value}>
                      {f.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {paginated.length === 0 ? (
              <EmptyState
                icon={Briefcase}
                title="No applications found"
                description="You haven't applied to any jobs yet, or no results match your search."
                action={{
                  label: "Find Jobs",
                  onClick: () => navigate({ to: "/employee/jobs" }),
                }}
                data-ocid="applications.empty_state"
              />
            ) : (
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "oklch(0.14 0.009 255 / 0.8)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid oklch(0.28 0.015 260 / 0.45)",
                }}
                data-ocid="applications.table"
              >
                <Table>
                  <TableHeader>
                    <TableRow
                      style={{
                        borderBottom: "1px solid oklch(0.22 0.012 260 / 0.5)",
                        background: "oklch(0.12 0.008 255 / 0.6)",
                      }}
                    >
                      <TableHead className="font-display font-semibold text-foreground">
                        Position
                      </TableHead>
                      <TableHead className="font-display font-semibold text-foreground hidden sm:table-cell">
                        Company
                      </TableHead>
                      <TableHead className="font-display font-semibold text-foreground hidden md:table-cell">
                        Location
                      </TableHead>
                      <TableHead className="font-display font-semibold text-foreground hidden md:table-cell">
                        Applied
                      </TableHead>
                      <TableHead className="font-display font-semibold text-foreground">
                        Status
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginated.map((app, i) => (
                      <TableRow
                        key={app.applicationId.toString()}
                        data-ocid={`applications.item.${(page - 1) * PAGE_SIZE + i + 1}`}
                        className="cursor-pointer transition-smooth"
                        style={{
                          borderBottom: "1px solid oklch(0.2 0.01 260 / 0.3)",
                        }}
                        onClick={() =>
                          navigate({
                            to: "/employee/jobs/$jobId",
                            params: { jobId: app.jobId.toString() },
                          })
                        }
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            "oklch(0.18 0.012 260 / 0.5)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            "";
                        }}
                      >
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-display font-bold text-sm text-white"
                              style={{
                                background: getCompanyGradient(app.company),
                              }}
                            >
                              {getCompanyInitial(app.company)}
                            </div>
                            <div>
                              <p className="font-semibold text-sm text-foreground">
                                {app.jobTitle}
                              </p>
                              <p className="text-xs text-muted-foreground sm:hidden">
                                {app.company}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell text-sm text-muted-foreground">
                          {app.company}
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                          {app.location}
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                          {formatDate(app.appliedAt)}
                        </TableCell>
                        <TableCell>
                          <ApplicationStatusBadge
                            status={app.status as ApplicationStatus}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}

            {totalPages > 1 && (
              <div
                className="flex items-center justify-between pt-2"
                data-ocid="applications.pagination"
              >
                <p className="text-xs text-muted-foreground">
                  Showing {(page - 1) * PAGE_SIZE + 1}–
                  {Math.min(page * PAGE_SIZE, filtered.length)} of{" "}
                  {filtered.length}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    data-ocid="applications.pagination_prev"
                    className="p-1.5 rounded-lg transition-smooth disabled:opacity-30"
                    style={{
                      background: "oklch(0.18 0.012 260)",
                      border: "1px solid oklch(0.28 0.015 260 / 0.5)",
                    }}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    data-ocid="applications.pagination_next"
                    className="p-1.5 rounded-lg transition-smooth disabled:opacity-30"
                    style={{
                      background: "oklch(0.18 0.012 260)",
                      border: "1px solid oklch(0.28 0.015 260 / 0.5)",
                    }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
