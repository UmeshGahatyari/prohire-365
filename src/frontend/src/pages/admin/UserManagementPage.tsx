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
  CheckCircle,
  FileText,
  Mail,
  MapPin,
  Phone,
  Search,
  Shield,
  Users,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { EmptyState } from "../../components/EmptyState";
import { Layout } from "../../components/Layout";
import { PageHeader } from "../../components/PageHeader";
import { ProtectedRoute } from "../../components/ProtectedRoute";

type MockRole = "employee" | "employer";
type MockStatus = "active" | "inactive" | "pending";

interface MockUser {
  id: number;
  name: string;
  email: string;
  role: MockRole;
  status: MockStatus;
  joined: string;
  location?: string;
  phone?: string;
  skills?: string[];
  experience?: string;
  resumeLink?: string;
  companyName?: string;
  industry?: string;
  companySize?: string;
}

const mockUsers: MockUser[] = [
  {
    id: 1,
    name: "Jordan Mitchell",
    email: "jordan.m@example.com",
    role: "employee",
    status: "active",
    joined: "Apr 18, 2026",
    location: "San Francisco, CA",
    phone: "+1 415-555-0102",
    skills: ["React", "TypeScript", "Node.js", "GraphQL"],
    experience: "5 years in full-stack development at tech startups",
    resumeLink: "#",
  },
  {
    id: 2,
    name: "Alex Chen",
    email: "alex.chen@example.com",
    role: "employee",
    status: "active",
    joined: "Apr 16, 2026",
    location: "Austin, TX",
    phone: "+1 512-555-0144",
    skills: ["Python", "Machine Learning", "TensorFlow", "SQL"],
    experience: "3 years as data scientist at fintech firms",
    resumeLink: "#",
  },
  {
    id: 3,
    name: "Morgan Rivera",
    email: "morgan.r@example.com",
    role: "employee",
    status: "inactive",
    joined: "Apr 14, 2026",
    location: "Seattle, WA",
    phone: "+1 206-555-0198",
    skills: ["UX Design", "Figma", "User Research"],
    experience: "4 years of UX/UI design experience",
    resumeLink: "#",
  },
  {
    id: 4,
    name: "Priya Sharma",
    email: "priya.s@example.com",
    role: "employee",
    status: "active",
    joined: "Apr 12, 2026",
    location: "New York, NY",
    phone: "+1 212-555-0177",
    skills: ["Java", "Spring Boot", "AWS", "Docker"],
    experience: "6 years backend engineering",
    resumeLink: "#",
  },
  {
    id: 5,
    name: "Luminary Tech",
    email: "hr@luminarytech.io",
    role: "employer",
    status: "active",
    joined: "Apr 19, 2026",
    companyName: "Luminary Tech",
    industry: "Software & SaaS",
    companySize: "51–200",
  },
  {
    id: 6,
    name: "Orbit Analytics",
    email: "jobs@orbitanalytics.com",
    role: "employer",
    status: "pending",
    joined: "Apr 17, 2026",
    companyName: "Orbit Analytics",
    industry: "Data & Analytics",
    companySize: "11–50",
  },
  {
    id: 7,
    name: "Nexus Technologies",
    email: "talent@nexustech.com",
    role: "employer",
    status: "active",
    joined: "Apr 10, 2026",
    companyName: "Nexus Technologies",
    industry: "Enterprise Software",
    companySize: "201–500",
  },
  {
    id: 8,
    name: "CloudScale",
    email: "recruiting@cloudscale.io",
    role: "employer",
    status: "active",
    joined: "Apr 8, 2026",
    companyName: "CloudScale",
    industry: "Cloud Infrastructure",
    companySize: "51–200",
  },
  {
    id: 9,
    name: "Devon Parker",
    email: "devon.p@example.com",
    role: "employee",
    status: "active",
    joined: "Apr 5, 2026",
    location: "Chicago, IL",
    phone: "+1 312-555-0139",
    skills: ["Product Management", "Agile", "Jira", "Roadmapping"],
    experience: "7 years in product strategy",
    resumeLink: "#",
  },
  {
    id: 10,
    name: "Riley Thompson",
    email: "riley.t@example.com",
    role: "employee",
    status: "inactive",
    joined: "Apr 1, 2026",
    location: "Denver, CO",
    phone: "+1 720-555-0162",
    skills: ["Go", "Kubernetes", "CI/CD"],
    experience: "4 years DevOps engineering",
    resumeLink: "#",
  },
];

const roleChip: Record<
  MockRole,
  { gradient: string; border: string; color: string; label: string }
> = {
  employee: {
    label: "Employee",
    gradient: "oklch(0.5 0.16 280 / 0.18)",
    border: "oklch(0.5 0.16 280 / 0.35)",
    color: "oklch(0.78 0.14 280)",
  },
  employer: {
    label: "Employer",
    gradient: "oklch(0.65 0.22 190 / 0.18)",
    border: "oklch(0.65 0.22 190 / 0.35)",
    color: "oklch(0.72 0.22 190)",
  },
};

const statusConfig: Record<
  MockStatus,
  { label: string; dot: string; text: string; bg: string; border: string }
> = {
  active: {
    label: "Active",
    dot: "oklch(0.7 0.2 155)",
    text: "oklch(0.75 0.2 155)",
    bg: "oklch(0.55 0.18 155 / 0.12)",
    border: "oklch(0.55 0.18 155 / 0.3)",
  },
  pending: {
    label: "Pending",
    dot: "oklch(0.75 0.18 65)",
    text: "oklch(0.78 0.16 65)",
    bg: "oklch(0.55 0.18 65 / 0.12)",
    border: "oklch(0.55 0.18 65 / 0.3)",
  },
  inactive: {
    label: "Inactive",
    dot: "oklch(0.45 0.01 260)",
    text: "oklch(0.55 0.01 260)",
    bg: "oklch(0.3 0.01 260 / 0.2)",
    border: "oklch(0.35 0.015 260 / 0.3)",
  },
};

export default function UserManagementPage() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<"all" | MockRole>("all");
  const [users, setUsers] = useState(mockUsers);
  const [selectedUser, setSelectedUser] = useState<MockUser | null>(null);

  const filtered = users.filter((u) => {
    const matchesTab = tab === "all" || u.role === tab;
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const toggleStatus = (id: number) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "active" ? "inactive" : "active" }
          : u,
      ),
    );
  };

  return (
    <ProtectedRoute requiredRole="admin">
      <Layout showSidebar sidebarRole="admin">
        <div className="p-6 max-w-6xl mx-auto space-y-6">
          <PageHeader
            title="User Management"
            description="Search, filter, and manage all platform users"
            icon={Users}
          />

          {/* Filter Bar — glassmorphic */}
          <div
            className="flex flex-col sm:flex-row gap-3 items-start sm:items-center p-4 rounded-2xl"
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
                placeholder="Search by name or email…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 bg-transparent border-border/50 focus:border-primary/50 rounded-xl"
                data-ocid="users.search_input"
              />
            </div>
            <Tabs value={tab} onValueChange={(v) => setTab(v as typeof tab)}>
              <TabsList
                className="rounded-xl"
                style={{
                  background: "oklch(0.1 0.008 255 / 0.8)",
                  border: "1px solid oklch(0.28 0.015 260 / 0.3)",
                }}
                data-ocid="users.role.tab"
              >
                <TabsTrigger
                  value="all"
                  className="rounded-lg text-xs"
                  data-ocid="users.filter_all.tab"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="employee"
                  className="rounded-lg text-xs"
                  data-ocid="users.filter_employees.tab"
                >
                  Employees
                </TabsTrigger>
                <TabsTrigger
                  value="employer"
                  className="rounded-lg text-xs"
                  data-ocid="users.filter_employers.tab"
                >
                  Employers
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <span
              className="text-xs px-3 py-1.5 rounded-full font-medium"
              style={{
                background: "oklch(0.5 0.16 280 / 0.15)",
                border: "1px solid oklch(0.5 0.16 280 / 0.3)",
                color: "oklch(0.78 0.14 280)",
              }}
            >
              {filtered.length} user{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Table */}
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
                icon={Users}
                title="No users found"
                description="Try adjusting your search or filter to find users."
              />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm" data-ocid="users.table">
                  <thead>
                    <tr
                      style={{
                        background: "oklch(0.1 0.008 255 / 0.6)",
                        borderBottom: "1px solid oklch(0.28 0.015 260 / 0.3)",
                      }}
                    >
                      {[
                        "Name",
                        "Email",
                        "Role",
                        "Status",
                        "Joined",
                        "Actions",
                      ].map((h, idx) => (
                        <th
                          key={h}
                          className={`px-4 py-3 font-semibold text-xs uppercase tracking-wider ${idx === 5 ? "text-right" : "text-left"} ${idx === 1 ? "hidden md:table-cell" : ""} ${idx === 4 ? "hidden lg:table-cell" : ""}`}
                          style={{ color: "oklch(0.6 0.015 260)" }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((user, i) => (
                      <tr
                        key={user.id}
                        className="hover:bg-primary/5 transition-smooth cursor-pointer"
                        style={{
                          borderBottom: "1px solid oklch(0.28 0.015 260 / 0.2)",
                        }}
                        data-ocid={`users.item.${i + 1}`}
                      >
                        <td className="px-4 py-3.5">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                              style={{
                                background:
                                  "linear-gradient(135deg, oklch(0.5 0.16 280), oklch(0.65 0.22 190))",
                                color: "white",
                              }}
                            >
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .slice(0, 2)}
                            </div>
                            <span className="font-medium text-foreground truncate">
                              {user.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3.5 text-muted-foreground hidden md:table-cell truncate max-w-[180px]">
                          {user.email}
                        </td>
                        <td className="px-4 py-3.5">
                          <span
                            className="text-xs px-2.5 py-1 rounded-full font-medium"
                            style={{
                              background: roleChip[user.role].gradient,
                              border: `1px solid ${roleChip[user.role].border}`,
                              color: roleChip[user.role].color,
                            }}
                          >
                            {roleChip[user.role].label}
                          </span>
                        </td>
                        <td className="px-4 py-3.5">
                          <span
                            className="flex items-center gap-1.5 text-xs w-fit px-2.5 py-1 rounded-full font-medium"
                            style={{
                              background: statusConfig[user.status].bg,
                              border: `1px solid ${statusConfig[user.status].border}`,
                              color: statusConfig[user.status].text,
                            }}
                          >
                            <span className="relative flex h-1.5 w-1.5">
                              {user.status === "active" && (
                                <span
                                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                                  style={{
                                    background: statusConfig[user.status].dot,
                                  }}
                                />
                              )}
                              <span
                                className="relative inline-flex rounded-full h-1.5 w-1.5"
                                style={{
                                  background: statusConfig[user.status].dot,
                                }}
                              />
                            </span>
                            {statusConfig[user.status].label}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-muted-foreground hidden lg:table-cell">
                          {user.joined}
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
                              onClick={() => setSelectedUser(user)}
                              data-ocid={`users.view_button.${i + 1}`}
                            >
                              View
                            </Button>
                            <Button
                              type="button"
                              variant={
                                user.status === "active"
                                  ? "destructive"
                                  : "outline"
                              }
                              size="sm"
                              className="h-7 text-xs rounded-lg"
                              onClick={() => toggleStatus(user.id)}
                              data-ocid={`users.toggle_status_button.${i + 1}`}
                            >
                              {user.status === "active"
                                ? "Suspend"
                                : "Reactivate"}
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* User Detail Dialog */}
        <Dialog
          open={!!selectedUser}
          onOpenChange={() => setSelectedUser(null)}
        >
          <DialogContent
            className="max-w-lg"
            style={{
              background: "oklch(0.13 0.009 258)",
              border: "1px solid oklch(0.28 0.015 260 / 0.5)",
            }}
            data-ocid="user_detail.dialog"
          >
            <DialogHeader>
              <DialogTitle className="font-display flex items-center gap-2">
                {selectedUser?.role === "employer" ? (
                  <Building2
                    className="h-5 w-5"
                    style={{ color: "oklch(0.72 0.22 190)" }}
                  />
                ) : (
                  <Shield
                    className="h-5 w-5"
                    style={{ color: "oklch(0.72 0.14 280)" }}
                  />
                )}
                User Details
              </DialogTitle>
            </DialogHeader>

            {selectedUser && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.5 0.16 280), oklch(0.65 0.22 190))",
                      color: "white",
                    }}
                  >
                    {selectedUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">
                      {selectedUser.name}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Mail className="h-3 w-3" /> {selectedUser.email}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-2 flex-wrap justify-end">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: roleChip[selectedUser.role].gradient,
                        border: `1px solid ${roleChip[selectedUser.role].border}`,
                        color: roleChip[selectedUser.role].color,
                      }}
                    >
                      {roleChip[selectedUser.role].label}
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: statusConfig[selectedUser.status].bg,
                        border: `1px solid ${statusConfig[selectedUser.status].border}`,
                        color: statusConfig[selectedUser.status].text,
                      }}
                    >
                      <span
                        className="inline-flex rounded-full h-1.5 w-1.5"
                        style={{
                          background: statusConfig[selectedUser.status].dot,
                        }}
                      />
                      {statusConfig[selectedUser.status].label}
                    </span>
                  </div>
                </div>

                <Separator
                  style={{ background: "oklch(0.28 0.015 260 / 0.3)" }}
                />

                {selectedUser.role === "employee" ? (
                  <div className="space-y-3">
                    {selectedUser.location && (
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="h-4 w-4 shrink-0" />{" "}
                        {selectedUser.location}
                      </p>
                    )}
                    {selectedUser.phone && (
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Phone className="h-4 w-4 shrink-0" />{" "}
                        {selectedUser.phone}
                      </p>
                    )}
                    {selectedUser.experience && (
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Briefcase className="h-4 w-4 shrink-0" />{" "}
                        {selectedUser.experience}
                      </p>
                    )}
                    {selectedUser.skills && selectedUser.skills.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Skills
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedUser.skills.map((skill) => (
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
                    {selectedUser.resumeLink && (
                      <a
                        href={selectedUser.resumeLink}
                        className="inline-flex items-center gap-1.5 text-sm hover:opacity-80 transition-smooth"
                        style={{ color: "oklch(0.72 0.22 190)" }}
                        data-ocid="user_detail.resume.link"
                      >
                        <FileText className="h-4 w-4" /> View Resume
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {selectedUser.companyName && (
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Building2 className="h-4 w-4 shrink-0" />{" "}
                        {selectedUser.companyName}
                      </p>
                    )}
                    {selectedUser.industry && (
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Briefcase className="h-4 w-4 shrink-0" />{" "}
                        {selectedUser.industry}
                      </p>
                    )}
                    {selectedUser.companySize && (
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Users className="h-4 w-4 shrink-0" />{" "}
                        {selectedUser.companySize} employees
                      </p>
                    )}
                  </div>
                )}

                <Separator
                  style={{ background: "oklch(0.28 0.015 260 / 0.3)" }}
                />

                <div className="flex justify-end gap-2">
                  {selectedUser.role === "employer" &&
                    selectedUser.status === "pending" && (
                      <Button
                        type="button"
                        size="sm"
                        className="text-xs h-8 gap-1.5"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.55 0.18 155), oklch(0.5 0.16 165))",
                          color: "white",
                        }}
                        onClick={() => {
                          setUsers((prev) =>
                            prev.map((u) =>
                              u.id === selectedUser.id
                                ? { ...u, status: "active" as MockStatus }
                                : u,
                            ),
                          );
                          setSelectedUser(null);
                        }}
                        data-ocid="user_detail.approve_button"
                      >
                        <CheckCircle className="h-3.5 w-3.5" /> Approve
                      </Button>
                    )}
                  <Button
                    type="button"
                    variant={
                      selectedUser.status === "active"
                        ? "destructive"
                        : "outline"
                    }
                    size="sm"
                    className="h-8 text-xs gap-1.5"
                    onClick={() => {
                      toggleStatus(selectedUser.id);
                      setSelectedUser(null);
                    }}
                    data-ocid="user_detail.toggle_status_button"
                  >
                    <XCircle className="h-3.5 w-3.5" />
                    {selectedUser.status === "active"
                      ? "Suspend"
                      : "Reactivate"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-8 text-xs"
                    style={{ borderColor: "oklch(0.28 0.015 260 / 0.5)" }}
                    onClick={() => setSelectedUser(null)}
                    data-ocid="user_detail.close_button"
                  >
                    Close
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </Layout>
    </ProtectedRoute>
  );
}
