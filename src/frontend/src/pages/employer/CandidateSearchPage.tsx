import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Briefcase,
  MapPin,
  Search,
  SlidersHorizontal,
  Star,
  TrendingUp,
  X,
} from "lucide-react";
import { useState } from "react";
import { EmptyState } from "../../components/EmptyState";
import { Layout } from "../../components/Layout";
import { ProtectedRoute } from "../../components/ProtectedRoute";

interface MockCandidate {
  id: number;
  name: string;
  title: string;
  location: string;
  skills: string[];
  yearsExp: number;
  summary: string;
  available: boolean;
  matchPct: number;
  color: string;
  initials: string;
}

const MOCK_CANDIDATES: MockCandidate[] = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "Senior Frontend Engineer",
    location: "Mumbai, India",
    skills: ["React", "TypeScript", "GraphQL", "CSS"],
    yearsExp: 5,
    summary:
      "Passionate about building accessible, performant web apps with modern tooling.",
    available: true,
    matchPct: 96,
    color: "oklch(0.55 0.18 280)",
    initials: "PS",
  },
  {
    id: 2,
    name: "Rohan Mehta",
    title: "Full Stack Developer",
    location: "Bangalore, India",
    skills: ["Node.js", "Python", "PostgreSQL", "Docker"],
    yearsExp: 4,
    summary:
      "Experienced in building scalable backend services and microservices APIs.",
    available: true,
    matchPct: 88,
    color: "oklch(0.72 0.22 190)",
    initials: "RM",
  },
  {
    id: 3,
    name: "Anjali Patel",
    title: "UX/UI Designer",
    location: "Pune, India",
    skills: ["Figma", "UX Research", "Prototyping", "Design Systems"],
    yearsExp: 3,
    summary:
      "User-centric designer with a focus on research-driven, accessible design.",
    available: false,
    matchPct: 79,
    color: "oklch(0.65 0.2 290)",
    initials: "AP",
  },
  {
    id: 4,
    name: "Vikram Singh",
    title: "DevOps Engineer",
    location: "Delhi, India",
    skills: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
    yearsExp: 6,
    summary:
      "Cloud infrastructure specialist with deep AWS and multi-cloud expertise.",
    available: true,
    matchPct: 84,
    color: "oklch(0.7 0.2 150)",
    initials: "VS",
  },
  {
    id: 5,
    name: "Deepa Nair",
    title: "Data Scientist",
    location: "Chennai, India",
    skills: ["Python", "Machine Learning", "TensorFlow", "SQL"],
    yearsExp: 4,
    summary:
      "Building ML models that solve real-world business problems at scale.",
    available: true,
    matchPct: 72,
    color: "oklch(0.65 0.18 230)",
    initials: "DN",
  },
  {
    id: 6,
    name: "Arjun Kapoor",
    title: "Backend Engineer",
    location: "Hyderabad, India",
    skills: ["Java", "Spring Boot", "Kafka", "Redis"],
    yearsExp: 7,
    summary:
      "High-throughput distributed systems expert with 7 years of production experience.",
    available: false,
    matchPct: 67,
    color: "oklch(0.75 0.16 65)",
    initials: "AK",
  },
  {
    id: 7,
    name: "Meera Krishnan",
    title: "Product Manager",
    location: "Bangalore, India",
    skills: ["Product Strategy", "Agile", "Data Analysis", "Roadmapping"],
    yearsExp: 5,
    summary:
      "Bridging user needs and engineering capability to ship great products on time.",
    available: true,
    matchPct: 91,
    color: "oklch(0.62 0.2 28)",
    initials: "MK",
  },
  {
    id: 8,
    name: "Saurabh Joshi",
    title: "Mobile Developer",
    location: "Mumbai, India",
    skills: ["React Native", "iOS", "Android", "TypeScript"],
    yearsExp: 4,
    summary:
      "Cross-platform mobile expert with a pixel-perfect eye for UI detail.",
    available: true,
    matchPct: 83,
    color: "oklch(0.58 0.16 150)",
    initials: "SJ",
  },
];

function MatchBadge({ pct }: { pct: number }) {
  const color =
    pct >= 90
      ? "oklch(0.7 0.2 150)"
      : pct >= 80
        ? "oklch(0.72 0.22 190)"
        : "oklch(0.75 0.16 65)";
  return (
    <span
      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold shrink-0"
      style={{
        color,
        background: `${color.slice(0, -1)} / 0.12)`,
        border: `1px solid ${color.slice(0, -1)} / 0.3)`,
      }}
    >
      <TrendingUp className="h-3 w-3" /> {pct}% match
    </span>
  );
}

function CandidateCard({
  candidate,
  index,
}: { candidate: MockCandidate; index: number }) {
  const [shortlisted, setShortlisted] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden group transition-smooth hover:translate-y-[-2px]"
      style={{
        background: "oklch(0.13 0.008 260)",
        border: shortlisted
          ? "1px solid oklch(0.7 0.2 150 / 0.5)"
          : "1px solid oklch(0.28 0.015 260 / 0.5)",
        boxShadow: shortlisted
          ? "0 4px 20px oklch(0.7 0.2 150 / 0.15)"
          : "0 4px 12px rgba(0,0,0,0.2)",
      }}
      data-ocid={`candidates.item.${index + 1}`}
    >
      {/* Top gradient accent */}
      <div
        className="h-0.5 w-full opacity-60 group-hover:opacity-100 transition-smooth"
        style={{
          background: `linear-gradient(90deg, ${candidate.color}, transparent)`,
        }}
      />

      <div className="p-5">
        <div className="flex items-start gap-3">
          {/* Avatar */}
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-sm font-bold text-white shadow-lg relative"
            style={{
              background: `linear-gradient(135deg, ${candidate.color}, ${candidate.color.replace("0.55", "0.72").replace("0.65", "0.8")})`,
            }}
          >
            {candidate.initials}
            {candidate.available && (
              <span
                className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center"
                style={{
                  background: "oklch(0.7 0.2 150)",
                  borderColor: "oklch(0.13 0.008 260)",
                }}
              />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                  {candidate.name}
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  {candidate.title}
                </p>
              </div>
              <MatchBadge pct={candidate.matchPct} />
            </div>

            <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {candidate.location}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="h-3 w-3" /> {candidate.yearsExp}y exp
              </span>
            </div>

            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
              {candidate.summary}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {candidate.skills.slice(0, 3).map((s) => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                  style={{
                    background: "oklch(0.5 0.16 280 / 0.15)",
                    color: "oklch(0.72 0.22 190)",
                    border: "1px solid oklch(0.5 0.16 280 / 0.25)",
                  }}
                >
                  {s}
                </span>
              ))}
              {candidate.skills.length > 3 && (
                <span
                  className="text-xs px-2.5 py-0.5 rounded-full text-muted-foreground"
                  style={{
                    background: "oklch(0.17 0.01 260)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.6)",
                  }}
                >
                  +{candidate.skills.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div
          className="flex items-center gap-2 mt-4 pt-3"
          style={{ borderTop: "1px solid oklch(0.28 0.015 260 / 0.4)" }}
        >
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="flex-1 text-xs h-8 rounded-xl border-border/50 hover:bg-primary/10 hover:border-primary/40"
            data-ocid={`candidates.view_profile.${index + 1}`}
          >
            View Profile
          </Button>
          <Button
            type="button"
            size="sm"
            onClick={() => setShortlisted((p) => !p)}
            data-ocid={`candidates.contact.${index + 1}`}
            className="flex-1 text-xs h-8 rounded-xl font-semibold transition-smooth"
            style={
              shortlisted
                ? {
                    background: "oklch(0.7 0.2 150 / 0.2)",
                    color: "oklch(0.7 0.2 150)",
                    border: "1px solid oklch(0.7 0.2 150 / 0.4)",
                  }
                : {
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.3), oklch(0.72 0.22 190 / 0.2))",
                    color: "oklch(0.82 0.15 190)",
                    border: "1px solid oklch(0.72 0.22 190 / 0.3)",
                  }
            }
          >
            <Star
              className="h-3 w-3 mr-1.5"
              fill={shortlisted ? "currentColor" : "none"}
            />
            {shortlisted ? "Shortlisted" : "Shortlist"}
          </Button>
        </div>
      </div>
    </div>
  );
}

const SKILL_FILTERS = [
  "React",
  "Python",
  "Java",
  "Node.js",
  "AWS",
  "Figma",
  "TypeScript",
];

export default function CandidateSearchPage() {
  const [skillQuery, setSkillQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState<MockCandidate[]>(MOCK_CANDIDATES);
  const [expFilter, setExpFilter] = useState("Any");
  const [availableOnly, setAvailableOnly] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setHasSearched(true);
    setTimeout(() => {
      let filtered = MOCK_CANDIDATES.filter((c) => {
        const skillMatch =
          !skillQuery ||
          c.skills.some((s) =>
            s.toLowerCase().includes(skillQuery.toLowerCase()),
          ) ||
          c.title.toLowerCase().includes(skillQuery.toLowerCase());
        const locMatch =
          !locationQuery ||
          c.location.toLowerCase().includes(locationQuery.toLowerCase());
        const availMatch = !availableOnly || c.available;
        const expMatch =
          expFilter === "Any" ||
          (expFilter === "0-2 years" && c.yearsExp <= 2) ||
          (expFilter === "3-5 years" && c.yearsExp >= 3 && c.yearsExp <= 5) ||
          (expFilter === "5-8 years" && c.yearsExp >= 5 && c.yearsExp <= 8) ||
          (expFilter === "8+ years" && c.yearsExp > 8);
        return skillMatch && locMatch && availMatch && expMatch;
      });
      setResults(filtered);
      setIsSearching(false);
    }, 500);
  };

  const handleClear = () => {
    setSkillQuery("");
    setLocationQuery("");
    setResults(MOCK_CANDIDATES);
    setHasSearched(false);
    setExpFilter("Any");
    setAvailableOnly(false);
  };

  return (
    <ProtectedRoute requiredRole="employer">
      <Layout showSidebar sidebarRole="employer">
        <div className="p-6 max-w-6xl mx-auto space-y-6">
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
            <div className="relative z-10 flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                }}
              >
                <Search className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-foreground">
                  Search Candidates
                </h1>
                <p className="text-sm text-muted-foreground">
                  Find qualified candidates by skills, location, or job title
                </p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div
            className="rounded-2xl p-5 space-y-4"
            style={{
              background: "oklch(0.13 0.008 260)",
              border: "1px solid oklch(0.28 0.015 260 / 0.5)",
            }}
          >
            <div className="flex gap-3 flex-wrap">
              <div className="flex-1 min-w-[200px] relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Skills, job title, or keywords..."
                  value={skillQuery}
                  onChange={(e) => setSkillQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="pl-10 rounded-xl border-border/50 focus:border-accent transition-smooth"
                  style={{ background: "oklch(0.17 0.01 260)" }}
                  data-ocid="candidates.skill_search.search_input"
                />
              </div>
              <div className="flex-1 min-w-[160px] relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="City or region..."
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="pl-10 rounded-xl border-border/50 focus:border-accent transition-smooth"
                  style={{ background: "oklch(0.17 0.01 260)" }}
                  data-ocid="candidates.location_search.search_input"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  onClick={handleSearch}
                  data-ocid="candidates.search.button"
                  className="rounded-xl font-semibold"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                    color: "white",
                    border: "none",
                  }}
                >
                  <Search className="h-4 w-4 mr-2" /> Search
                </Button>
                {hasSearched && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClear}
                    data-ocid="candidates.clear.button"
                    className="rounded-xl border-border/50 hover:bg-primary/10 hover:border-primary/40"
                  >
                    <X className="h-4 w-4 mr-1.5" /> Clear
                  </Button>
                )}
              </div>
            </div>

            {/* Filter Row */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground font-medium">
                  Filters:
                </span>
              </div>
              {SKILL_FILTERS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setSkillQuery(s);
                    handleSearch();
                  }}
                  data-ocid={`candidates.filter_skill.${s.toLowerCase()}`}
                  className="text-xs px-3 py-1 rounded-full transition-smooth"
                  style={{
                    background: "oklch(0.17 0.01 260)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.6)",
                    color: "oklch(0.72 0.22 190)",
                  }}
                >
                  {s}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setAvailableOnly((p) => !p);
                }}
                data-ocid="candidates.filter_available.toggle"
                className="text-xs px-3 py-1.5 rounded-full transition-smooth flex items-center gap-1.5"
                style={
                  availableOnly
                    ? {
                        background: "oklch(0.7 0.2 150 / 0.15)",
                        border: "1px solid oklch(0.7 0.2 150 / 0.4)",
                        color: "oklch(0.7 0.2 150)",
                      }
                    : {
                        background: "oklch(0.17 0.01 260)",
                        border: "1px solid oklch(0.28 0.015 260 / 0.6)",
                        color: "oklch(0.62 0.01 250)",
                      }
                }
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "oklch(0.7 0.2 150)" }}
                />
                Available only
              </button>
            </div>
          </div>

          {/* Results Count */}
          {hasSearched && !isSearching && (
            <p className="text-sm text-muted-foreground px-1">
              <span className="font-semibold text-foreground">
                {results.length}
              </span>{" "}
              candidate{results.length !== 1 ? "s" : ""} found
            </p>
          )}

          {/* Results */}
          {isSearching ? (
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              data-ocid="candidates.loading_state"
            >
              {(["a", "b", "c", "d"] as const).map((k) => (
                <div
                  key={k}
                  className="rounded-2xl p-5"
                  style={{
                    background: "oklch(0.13 0.008 260)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.5)",
                  }}
                >
                  <div className="flex gap-3">
                    <Skeleton className="w-12 h-12 rounded-2xl shrink-0" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-5 w-36" />
                      <Skeleton className="h-4 w-48" />
                      <Skeleton className="h-3 w-full" />
                      <div className="flex gap-1.5 pt-1">
                        <Skeleton className="h-5 w-16 rounded-full" />
                        <Skeleton className="h-5 w-16 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : results.length === 0 ? (
            <EmptyState
              icon={Search}
              title="No candidates found"
              description="Try different skills or location keywords to broaden your search."
              action={{ label: "Clear filters", onClick: handleClear }}
              data-ocid="candidates.empty_state"
            />
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              data-ocid="candidates.list"
            >
              {results.map((c, i) => (
                <CandidateCard key={c.id} candidate={c} index={i} />
              ))}
            </div>
          )}
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
