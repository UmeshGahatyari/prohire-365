import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "@tanstack/react-router";
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Filter,
  MapPin,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { EmptyState } from "../../components/EmptyState";
import { JobCard } from "../../components/JobCard";
import { Layout } from "../../components/Layout";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import type { JobListing, JobType } from "../../types";

const ALL_JOBS: JobListing[] = [
  {
    jobId: BigInt(1),
    employerId: {} as never,
    title: "Senior React Developer",
    description:
      "Lead our frontend team and build cutting-edge web applications.",
    location: "San Francisco, CA",
    salaryMin: BigInt(110000),
    salaryMax: BigInt(150000),
    experienceRequired: "4–6 yrs",
    jobType: "fullTime",
    skillsRequired: ["React", "TypeScript", "Redux", "GraphQL", "Node.js"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 30 * 24 * 3600 * 1000) * 1_000_000,
    ),
    createdAt: BigInt((Date.now() - 2 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt(Date.now() * 1_000_000),
    companyName: "Meridian Software",
  },
  {
    jobId: BigInt(2),
    employerId: {} as never,
    title: "Full Stack Engineer",
    description:
      "Build scalable services powering our platform for millions of users.",
    location: "Remote",
    salaryMin: BigInt(95000),
    salaryMax: BigInt(130000),
    experienceRequired: "3–5 yrs",
    jobType: "fullTime",
    skillsRequired: ["Node.js", "React", "PostgreSQL", "Docker", "AWS"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 20 * 24 * 3600 * 1000) * 1_000_000,
    ),
    createdAt: BigInt((Date.now() - 1 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt(Date.now() * 1_000_000),
    companyName: "CloudPeak Systems",
  },
  {
    jobId: BigInt(3),
    employerId: {} as never,
    title: "UX Engineer",
    description:
      "Bridge design and engineering to deliver beautiful, accessible product experiences.",
    location: "New York, NY",
    salaryMin: BigInt(90000),
    salaryMax: BigInt(120000),
    experienceRequired: "3–6 yrs",
    jobType: "contract",
    skillsRequired: ["Figma", "React", "CSS", "Accessibility", "Storybook"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 15 * 24 * 3600 * 1000) * 1_000_000,
    ),
    createdAt: BigInt((Date.now() - 3 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt(Date.now() * 1_000_000),
    companyName: "Blueprint Interactive",
  },
  {
    jobId: BigInt(4),
    employerId: {} as never,
    title: "React Native Developer",
    description:
      "Create seamless cross-platform mobile experiences for iOS and Android.",
    location: "Austin, TX",
    salaryMin: BigInt(85000),
    salaryMax: BigInt(115000),
    experienceRequired: "2–4 yrs",
    jobType: "fullTime",
    skillsRequired: ["React Native", "TypeScript", "Redux", "iOS", "Android"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 25 * 24 * 3600 * 1000) * 1_000_000,
    ),
    createdAt: BigInt((Date.now() - 4 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt(Date.now() * 1_000_000),
    companyName: "Appvance Technologies",
  },
  {
    jobId: BigInt(5),
    employerId: {} as never,
    title: "Data Engineer",
    description:
      "Design and build robust data pipelines to support analytics and ML teams at scale.",
    location: "Seattle, WA",
    salaryMin: BigInt(115000),
    salaryMax: BigInt(155000),
    experienceRequired: "3–6 yrs",
    jobType: "fullTime",
    skillsRequired: ["Spark", "Python", "Airflow", "BigQuery", "dbt"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 10 * 24 * 3600 * 1000) * 1_000_000,
    ),
    createdAt: BigInt((Date.now() - 5 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt(Date.now() * 1_000_000),
    companyName: "DataSphere Inc.",
  },
  {
    jobId: BigInt(6),
    employerId: {} as never,
    title: "DevOps Engineer",
    description:
      "Own our infrastructure as code, CI/CD pipelines, and cloud platform reliability.",
    location: "Chicago, IL",
    salaryMin: BigInt(100000),
    salaryMax: BigInt(135000),
    experienceRequired: "3–5 yrs",
    jobType: "fullTime",
    skillsRequired: ["Kubernetes", "Terraform", "AWS", "CI/CD", "Monitoring"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 18 * 24 * 3600 * 1000) * 1_000_000,
    ),
    createdAt: BigInt((Date.now() - 6 * 24 * 3600 * 1000) * 1_000_000),
    updatedAt: BigInt(Date.now() * 1_000_000),
    companyName: "Stratum Cloud",
  },
];

const LOCATIONS = [
  "Remote",
  "San Francisco, CA",
  "New York, NY",
  "Austin, TX",
  "Seattle, WA",
  "Chicago, IL",
];
const JOB_TYPES: { value: JobType; label: string }[] = [
  { value: "fullTime", label: "Full-time" },
  { value: "partTime", label: "Part-time" },
  { value: "contract", label: "Contract" },
];
const SALARY_RANGES = [
  { label: "Any", min: 0, max: Number.POSITIVE_INFINITY },
  { label: "$50k – $80k", min: 50000, max: 80000 },
  { label: "$80k – $110k", min: 80000, max: 110000 },
  { label: "$110k – $140k", min: 110000, max: 140000 },
  { label: "$140k+", min: 140000, max: Number.POSITIVE_INFINITY },
];
const PAGE_SIZE = 4;

export default function JobSearchPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [salaryIdx, setSalaryIdx] = useState(0);
  const [selectedTypes, setSelectedTypes] = useState<Set<JobType>>(new Set());
  const [sortBy, setSortBy] = useState<"date" | "salary" | "relevance">("date");
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleType = (type: JobType) => {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
    setPage(1);
  };

  const filtered = ALL_JOBS.filter((job) => {
    if (
      query &&
      !job.title.toLowerCase().includes(query.toLowerCase()) &&
      !job.companyName?.toLowerCase().includes(query.toLowerCase()) &&
      !job.skillsRequired.some((s) =>
        s.toLowerCase().includes(query.toLowerCase()),
      )
    )
      return false;
    if (location && job.location !== location) return false;
    if (selectedTypes.size > 0 && !selectedTypes.has(job.jobType)) return false;
    const range = SALARY_RANGES[salaryIdx];
    if (Number(job.salaryMin) < range.min || Number(job.salaryMax) > range.max)
      return false;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "date") return Number(b.createdAt - a.createdAt);
    if (sortBy === "salary") return Number(b.salaryMax - a.salaryMax);
    return 0;
  });

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const paginated = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const clearFilters = () => {
    setQuery("");
    setLocation("");
    setSalaryIdx(0);
    setSelectedTypes(new Set());
    setSortBy("date");
    setPage(1);
  };
  const hasFilters = location || salaryIdx > 0 || selectedTypes.size > 0;

  return (
    <ProtectedRoute requiredRole="employee">
      <Layout showSidebar sidebarRole="employee">
        <div className="min-h-full">
          {/* Premium search hero */}
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
                  "radial-gradient(ellipse at 30% 50%, oklch(0.5 0.16 280 / 0.1) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, oklch(0.72 0.22 190 / 0.08) 0%, transparent 50%)",
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
              <div className="flex items-center gap-2 mb-3">
                <Sparkles
                  className="h-4 w-4"
                  style={{ color: "oklch(0.72 0.22 190)" }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.72 0.22 190)" }}
                >
                  2,450+ active roles
                </span>
              </div>
              <h1 className="font-display font-bold text-3xl text-foreground mb-6">
                Find Your Next{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.85 0.08 280), oklch(0.72 0.22 190))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Dream Role
                </span>
              </h1>

              {/* Glassmorphic search bar */}
              <div
                className="flex gap-2 p-1.5 rounded-2xl"
                style={{
                  background: "oklch(0.18 0.012 260 / 0.8)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid oklch(0.35 0.015 260 / 0.5)",
                  boxShadow:
                    "0 8px 32px oklch(0 0 0 / 0.3), 0 0 0 1px oklch(0.72 0.22 190 / 0.08)",
                }}
              >
                <div className="flex items-center gap-2 flex-1 px-3">
                  <Search
                    className="h-4 w-4 shrink-0"
                    style={{ color: "oklch(0.72 0.22 190)" }}
                  />
                  <Input
                    placeholder="Search job title, skill, or company…"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setPage(1);
                    }}
                    className="border-0 bg-transparent shadow-none px-0 focus-visible:ring-0 text-sm"
                    data-ocid="job_search.search_input"
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      className="text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setFiltersOpen((o) => !o)}
                  data-ocid="job_search.filters_toggle.button"
                  className="md:hidden px-3 py-2 rounded-xl text-sm font-medium flex items-center gap-1.5 transition-smooth"
                  style={{
                    background: "oklch(0.22 0.015 260)",
                    color: "oklch(0.75 0.01 250)",
                    border: "1px solid oklch(0.3 0.015 260)",
                  }}
                >
                  <Filter className="h-4 w-4" /> Filters
                </button>
                <button
                  type="button"
                  data-ocid="job_search.search_button"
                  onClick={() => setPage(1)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-smooth hover:opacity-90 shadow-glow-accent"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                    color: "white",
                  }}
                >
                  <Zap className="h-4 w-4" />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 max-w-5xl mx-auto">
            <div className="flex gap-6">
              {/* Glassmorphic Filters Sidebar */}
              <aside
                className={`w-60 shrink-0 space-y-0 ${filtersOpen ? "block" : "hidden"} md:block`}
                data-ocid="job_search.filters.panel"
              >
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "oklch(0.14 0.009 255 / 0.85)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.5)",
                  }}
                >
                  {/* Filter header */}
                  <div
                    className="p-4 flex items-center justify-between"
                    style={{
                      borderBottom: "1px solid oklch(0.22 0.012 260 / 0.6)",
                    }}
                  >
                    <span className="font-display font-semibold text-sm text-foreground flex items-center gap-2">
                      <SlidersHorizontal
                        className="h-4 w-4"
                        style={{ color: "oklch(0.72 0.22 190)" }}
                      />
                      Filters
                    </span>
                    {hasFilters && (
                      <button
                        type="button"
                        onClick={clearFilters}
                        data-ocid="job_search.clear_filters.button"
                        className="text-xs transition-smooth hover:opacity-80"
                        style={{ color: "oklch(0.72 0.22 190)" }}
                      >
                        Clear all
                      </button>
                    )}
                  </div>

                  <div className="p-4 space-y-5">
                    {/* Location */}
                    <div>
                      <Label
                        className="text-xs font-semibold uppercase tracking-wide mb-2.5 block"
                        style={{ color: "oklch(0.55 0.01 250)" }}
                      >
                        Location
                      </Label>
                      <Select
                        value={location}
                        onValueChange={(v) => {
                          setLocation(v === "any" ? "" : v);
                          setPage(1);
                        }}
                      >
                        <SelectTrigger
                          data-ocid="job_search.location.select"
                          className="text-sm h-8"
                          style={{
                            background: "oklch(0.18 0.01 260)",
                            border: "1px solid oklch(0.3 0.012 260 / 0.6)",
                          }}
                        >
                          <MapPin
                            className="h-3.5 w-3.5 mr-1 shrink-0"
                            style={{ color: "oklch(0.72 0.22 190)" }}
                          />
                          <SelectValue placeholder="Any location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any location</SelectItem>
                          {LOCATIONS.map((l) => (
                            <SelectItem key={l} value={l}>
                              {l}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator
                      style={{ background: "oklch(0.22 0.012 260 / 0.5)" }}
                    />

                    {/* Salary */}
                    <div>
                      <Label
                        className="text-xs font-semibold uppercase tracking-wide mb-2.5 block"
                        style={{ color: "oklch(0.55 0.01 250)" }}
                      >
                        Salary Range
                      </Label>
                      <div className="space-y-1">
                        {SALARY_RANGES.map((range, idx) => (
                          <button
                            type="button"
                            key={range.label}
                            onClick={() => {
                              setSalaryIdx(idx);
                              setPage(1);
                            }}
                            data-ocid={`job_search.salary_range.${idx + 1}`}
                            className="w-full text-left text-sm px-3 py-1.5 rounded-lg transition-smooth"
                            style={
                              salaryIdx === idx
                                ? {
                                    background: "oklch(0.55 0.18 280 / 0.2)",
                                    color: "oklch(0.72 0.22 190)",
                                    border:
                                      "1px solid oklch(0.5 0.16 280 / 0.35)",
                                    fontWeight: 600,
                                  }
                                : {
                                    color: "oklch(0.62 0.01 250)",
                                    border: "1px solid transparent",
                                  }
                            }
                          >
                            {range.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <Separator
                      style={{ background: "oklch(0.22 0.012 260 / 0.5)" }}
                    />

                    {/* Job Type */}
                    <div>
                      <Label
                        className="text-xs font-semibold uppercase tracking-wide mb-2.5 block"
                        style={{ color: "oklch(0.55 0.01 250)" }}
                      >
                        Job Type
                      </Label>
                      <div className="space-y-2.5">
                        {JOB_TYPES.map((jt) => (
                          <div
                            key={jt.value}
                            className="flex items-center gap-2.5"
                          >
                            <Checkbox
                              id={`type-${jt.value}`}
                              checked={selectedTypes.has(jt.value)}
                              onCheckedChange={() => toggleType(jt.value)}
                              data-ocid={`job_search.type_filter.${jt.value}`}
                            />
                            <Label
                              htmlFor={`type-${jt.value}`}
                              className="text-sm font-normal cursor-pointer text-muted-foreground"
                            >
                              {jt.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Job Listings */}
              <div className="flex-1 min-w-0 space-y-4">
                {/* Sort bar */}
                <div
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl"
                  style={{
                    background: "oklch(0.14 0.009 255 / 0.7)",
                    border: "1px solid oklch(0.25 0.012 260 / 0.4)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {filtered.length}
                    </span>{" "}
                    jobs found
                  </p>
                  <div className="flex items-center gap-2">
                    <Label className="text-xs text-muted-foreground">
                      Sort by
                    </Label>
                    <Select
                      value={sortBy}
                      onValueChange={(v) => setSortBy(v as typeof sortBy)}
                    >
                      <SelectTrigger
                        className="h-7 text-xs w-28"
                        data-ocid="job_search.sort_by.select"
                        style={{
                          background: "oklch(0.18 0.012 260)",
                          border: "1px solid oklch(0.3 0.012 260 / 0.5)",
                        }}
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="date">Newest</SelectItem>
                        <SelectItem value="salary">Salary</SelectItem>
                        <SelectItem value="relevance">Relevance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {paginated.length === 0 ? (
                  <EmptyState
                    icon={Briefcase}
                    title="No jobs found"
                    description="Try adjusting your search or filters to discover more opportunities."
                    action={{ label: "Clear Filters", onClick: clearFilters }}
                  />
                ) : (
                  <div
                    className="space-y-3"
                    data-ocid="job_search.results.list"
                  >
                    {paginated.map((job, i) => (
                      <button
                        type="button"
                        key={job.jobId.toString()}
                        onClick={() =>
                          navigate({
                            to: "/employee/jobs/$jobId",
                            params: { jobId: job.jobId.toString() },
                          })
                        }
                        className="w-full text-left block"
                        data-ocid={`job_search.result.item.${(page - 1) * PAGE_SIZE + i + 1}`}
                      >
                        <JobCard job={job} index={(page - 1) * PAGE_SIZE + i} />
                      </button>
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div
                    className="flex items-center justify-center gap-2 pt-4"
                    data-ocid="job_search.pagination"
                  >
                    <button
                      type="button"
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page === 1}
                      data-ocid="job_search.pagination_prev"
                      className="p-2 rounded-lg transition-smooth disabled:opacity-30"
                      style={{
                        background: "oklch(0.18 0.012 260)",
                        border: "1px solid oklch(0.28 0.015 260 / 0.5)",
                        color: "oklch(0.75 0.01 250)",
                      }}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (p) => (
                        <button
                          type="button"
                          key={p}
                          onClick={() => setPage(p)}
                          data-ocid={`job_search.page.${p}`}
                          className="w-8 h-8 rounded-lg text-sm font-medium transition-smooth"
                          style={
                            p === page
                              ? {
                                  background:
                                    "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                                  color: "white",
                                  boxShadow:
                                    "0 0 12px oklch(0.72 0.22 190 / 0.4)",
                                }
                              : {
                                  background: "oklch(0.18 0.012 260)",
                                  border:
                                    "1px solid oklch(0.28 0.015 260 / 0.5)",
                                  color: "oklch(0.62 0.01 250)",
                                }
                          }
                        >
                          {p}
                        </button>
                      ),
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        setPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={page === totalPages}
                      data-ocid="job_search.pagination_next"
                      className="p-2 rounded-lg transition-smooth disabled:opacity-30"
                      style={{
                        background: "oklch(0.18 0.012 260)",
                        border: "1px solid oklch(0.28 0.015 260 / 0.5)",
                        color: "oklch(0.75 0.01 250)",
                      }}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
