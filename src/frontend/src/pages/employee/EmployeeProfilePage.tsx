import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Briefcase,
  CheckCircle2,
  Edit2,
  FileText,
  MapPin,
  Phone,
  Plus,
  Save,
  Trash2,
  Upload,
  User,
  X,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Layout } from "../../components/Layout";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { SkillTag } from "../../components/SkillTag";
import type { ExperienceEntry } from "../../types";

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  location: string;
  professionalSummary: string;
  skills: string[];
  experience: ExperienceEntry[];
  resumeFileName: string;
}

const INITIAL_PROFILE: ProfileData = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  phone: "+1 (415) 555-0192",
  location: "San Francisco, CA",
  professionalSummary:
    "Full-stack engineer with 5+ years of experience building scalable web applications. Passionate about clean code, performance optimization, and delivering exceptional user experiences. Strong background in React, TypeScript, and Node.js.",
  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "AWS",
  ],
  experience: [
    {
      title: "Senior Frontend Engineer",
      company: "CloudPeak Systems",
      startDate: "2022-03",
      endDate: undefined,
      description:
        "Led development of core product features, mentored junior engineers, and improved frontend performance by 40%.",
    },
    {
      title: "Frontend Developer",
      company: "Nexus Technologies",
      startDate: "2019-06",
      endDate: "2022-02",
      description:
        "Built and maintained React applications for enterprise clients. Introduced TypeScript and improved test coverage from 20% to 80%.",
    },
  ],
  resumeFileName: "alex_johnson_resume.pdf",
};

const COMPLETION_ITEMS = [
  (p: ProfileData) => !!p.name,
  (p: ProfileData) => !!p.email,
  (p: ProfileData) => !!p.phone,
  (p: ProfileData) => !!p.location,
  (p: ProfileData) => !!p.professionalSummary,
  (p: ProfileData) => p.skills.length > 0,
  (p: ProfileData) => p.experience.length > 0,
  (p: ProfileData) => !!p.resumeFileName,
];

function calcCompletion(profile: ProfileData): number {
  return Math.round(
    (COMPLETION_ITEMS.filter((fn) => fn(profile)).length /
      COMPLETION_ITEMS.length) *
      100,
  );
}

function formatDateRange(start: string, end?: string): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const fmt = (d: string) => {
    const [y, m] = d.split("-");
    return `${months[Number(m) - 1]} ${y}`;
  };
  return `${fmt(start)} – ${end ? fmt(end) : "Present"}`;
}

const glassCard = {
  background: "oklch(0.14 0.009 255 / 0.85)",
  backdropFilter: "blur(12px)",
  border: "1px solid oklch(0.28 0.015 260 / 0.45)",
};
const formInput = {
  background: "oklch(0.18 0.012 260)",
  border: "1px solid oklch(0.3 0.012 260 / 0.6)",
};

function SectionHeader({
  icon: Icon,
  title,
}: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.2), oklch(0.72 0.22 190 / 0.15))",
          border: "1px solid oklch(0.5 0.16 280 / 0.25)",
        }}
      >
        <Icon className="h-4 w-4" style={{ color: "oklch(0.72 0.22 190)" }} />
      </div>
      <h2 className="font-display font-semibold text-base text-foreground">
        {title}
      </h2>
    </div>
  );
}

export default function EmployeeProfilePage() {
  const [profile, setProfile] = useState<ProfileData>(INITIAL_PROFILE);
  const [editingInfo, setEditingInfo] = useState(false);
  const [draft, setDraft] = useState<ProfileData>(INITIAL_PROFILE);
  const [newSkill, setNewSkill] = useState("");
  const [editingExpIdx, setEditingExpIdx] = useState<number | null>(null);
  const [expDraft, setExpDraft] = useState<ExperienceEntry | null>(null);
  const [addingExp, setAddingExp] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const completion = calcCompletion(profile);

  const saveInfo = () => {
    setProfile(draft);
    setEditingInfo(false);
    toast.success("Profile updated successfully");
  };
  const addSkill = () => {
    const t = newSkill.trim();
    if (!t || profile.skills.includes(t)) return;
    setProfile((p) => ({ ...p, skills: [...p.skills, t] }));
    setNewSkill("");
  };
  const removeSkill = (skill: string) =>
    setProfile((p) => ({ ...p, skills: p.skills.filter((s) => s !== skill) }));
  const startEditExp = (idx: number) => {
    setEditingExpIdx(idx);
    setExpDraft({ ...profile.experience[idx] });
  };
  const saveExp = () => {
    if (!expDraft || editingExpIdx === null) return;
    const u = [...profile.experience];
    u[editingExpIdx] = expDraft;
    setProfile((p) => ({ ...p, experience: u }));
    setEditingExpIdx(null);
    setExpDraft(null);
    toast.success("Experience updated");
  };
  const deleteExp = (idx: number) => {
    setProfile((p) => ({
      ...p,
      experience: p.experience.filter((_, i) => i !== idx),
    }));
    toast.success("Experience removed");
  };
  const addExp = () => {
    if (!expDraft) return;
    setProfile((p) => ({ ...p, experience: [...p.experience, expDraft] }));
    setAddingExp(false);
    setExpDraft(null);
    toast.success("Experience added");
  };
  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setProfile((p) => ({ ...p, resumeFileName: f.name }));
    toast.success("Resume uploaded successfully");
  };

  const completionItems = [
    { label: "Basic info", done: !!(profile.name && profile.email) },
    { label: "Contact details", done: !!(profile.phone && profile.location) },
    { label: "Professional summary", done: !!profile.professionalSummary },
    { label: "Work experience", done: profile.experience.length > 0 },
    { label: "Skills", done: profile.skills.length > 0 },
    { label: "Resume upload", done: !!profile.resumeFileName },
  ];

  return (
    <ProtectedRoute requiredRole="employee">
      <Layout showSidebar sidebarRole="employee">
        <div className="min-h-full">
          {/* Hero */}
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

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-8">
              <div className="flex items-start gap-5">
                {/* Avatar with gradient ring */}
                <div className="relative shrink-0">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center font-display font-bold text-3xl text-white shadow-glow-primary"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                    }}
                  >
                    {profile.name[0]}
                  </div>
                  {/* Completion ring */}
                  <svg
                    className="absolute -inset-1.5 w-[88px] h-[88px] -rotate-90"
                    viewBox="0 0 88 88"
                    role="img"
                    aria-label="Profile completion"
                  >
                    <title>Profile completion {completion}%</title>
                    <circle
                      cx="44"
                      cy="44"
                      r="40"
                      fill="none"
                      stroke="oklch(0.25 0.012 255)"
                      strokeWidth="3"
                    />
                    <circle
                      cx="44"
                      cy="44"
                      r="40"
                      fill="none"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - completion / 100)}`}
                      style={{
                        stroke: "oklch(0.72 0.22 190)",
                        filter:
                          "drop-shadow(0 0 4px oklch(0.72 0.22 190 / 0.7))",
                        transition: "stroke-dashoffset 0.5s ease",
                      }}
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="font-display font-bold text-3xl text-foreground">
                    {profile.name}
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    {profile.location} · {profile.email}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <div
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold"
                      style={{
                        background: "oklch(0.72 0.22 190 / 0.15)",
                        color: "oklch(0.72 0.22 190)",
                        border: "1px solid oklch(0.72 0.22 190 / 0.3)",
                      }}
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {completion}% Complete
                    </div>
                    {completion < 100 && (
                      <span className="text-xs text-muted-foreground">
                        {8 - completionItems.filter((i) => i.done).length} items
                        left
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Completion items */}
              <div className="mt-6 flex flex-wrap gap-2">
                {completionItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
                    style={
                      item.done
                        ? {
                            background: "oklch(0.72 0.22 190 / 0.1)",
                            color: "oklch(0.72 0.22 190)",
                            border: "1px solid oklch(0.72 0.22 190 / 0.25)",
                          }
                        : {
                            background: "oklch(0.18 0.012 260 / 0.5)",
                            color: "oklch(0.45 0.01 250)",
                            border: "1px solid oklch(0.28 0.012 260 / 0.3)",
                          }
                    }
                  >
                    <CheckCircle2 className="h-3 w-3" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 max-w-4xl mx-auto space-y-5">
            {/* Personal Info */}
            <div
              className="rounded-2xl p-6"
              style={glassCard}
              data-ocid="profile.personal_info.card"
            >
              <div className="flex items-start justify-between">
                <SectionHeader icon={User} title="Personal Information" />
                {!editingInfo && (
                  <button
                    type="button"
                    onClick={() => {
                      setDraft(profile);
                      setEditingInfo(true);
                    }}
                    data-ocid="profile.edit_info.button"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-smooth"
                    style={{
                      background: "oklch(0.55 0.18 280 / 0.12)",
                      color: "oklch(0.72 0.22 190)",
                      border: "1px solid oklch(0.5 0.16 280 / 0.3)",
                    }}
                  >
                    <Edit2 className="h-3.5 w-3.5" /> Edit
                  </button>
                )}
              </div>

              {editingInfo ? (
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        id: "name",
                        label: "Full Name",
                        value: draft.name,
                        key: "name" as keyof ProfileData,
                      },
                      {
                        id: "email",
                        label: "Email",
                        value: draft.email,
                        key: "email" as keyof ProfileData,
                      },
                      {
                        id: "phone",
                        label: "Phone",
                        value: draft.phone,
                        key: "phone" as keyof ProfileData,
                      },
                      {
                        id: "location",
                        label: "Location",
                        value: draft.location,
                        key: "location" as keyof ProfileData,
                      },
                    ].map((field) => (
                      <div key={field.id}>
                        <Label
                          htmlFor={field.id}
                          className="text-xs font-medium mb-1.5 block text-muted-foreground"
                        >
                          {field.label}
                        </Label>
                        <Input
                          id={field.id}
                          value={field.value as string}
                          onChange={(e) =>
                            setDraft((d) => ({
                              ...d,
                              [field.key]: e.target.value,
                            }))
                          }
                          className="text-sm"
                          style={formInput}
                          data-ocid={`profile.${field.id}.input`}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <Label
                      htmlFor="summary"
                      className="text-xs font-medium mb-1.5 block text-muted-foreground"
                    >
                      Professional Summary
                    </Label>
                    <Textarea
                      id="summary"
                      rows={4}
                      value={draft.professionalSummary}
                      onChange={(e) =>
                        setDraft((d) => ({
                          ...d,
                          professionalSummary: e.target.value,
                        }))
                      }
                      data-ocid="profile.summary.textarea"
                      placeholder="Write a brief professional summary…"
                      className="text-sm resize-none"
                      style={formInput}
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={saveInfo}
                      data-ocid="profile.save_info.button"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-smooth hover:opacity-90"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                        color: "white",
                      }}
                    >
                      <Save className="h-4 w-4" /> Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingInfo(false)}
                      data-ocid="profile.cancel_edit.button"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-smooth"
                      style={{
                        background: "oklch(0.18 0.012 260)",
                        color: "oklch(0.62 0.01 250)",
                        border: "1px solid oklch(0.28 0.015 260 / 0.5)",
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    {[
                      { icon: User, text: profile.name },
                      { icon: Phone, text: profile.phone },
                      { icon: MapPin, text: profile.location },
                    ].map(({ icon: Icon, text }) => (
                      <div
                        key={text}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl"
                        style={{
                          background: "oklch(0.18 0.012 260 / 0.5)",
                          border: "1px solid oklch(0.25 0.012 260 / 0.4)",
                        }}
                      >
                        <Icon
                          className="h-4 w-4 shrink-0"
                          style={{ color: "oklch(0.72 0.22 190)" }}
                        />
                        <span className="text-foreground truncate">{text}</span>
                      </div>
                    ))}
                    <div
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl"
                      style={{
                        background: "oklch(0.18 0.012 260 / 0.5)",
                        border: "1px solid oklch(0.25 0.012 260 / 0.4)",
                      }}
                    >
                      <span className="text-muted-foreground truncate text-xs">
                        {profile.email}
                      </span>
                    </div>
                  </div>
                  {profile.professionalSummary && (
                    <div
                      className="p-4 rounded-xl text-sm text-muted-foreground leading-relaxed"
                      style={{
                        background: "oklch(0.17 0.01 260 / 0.4)",
                        border: "1px solid oklch(0.24 0.012 260 / 0.3)",
                      }}
                    >
                      {profile.professionalSummary}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Skills */}
            <div
              className="rounded-2xl p-6"
              style={glassCard}
              data-ocid="profile.skills.card"
            >
              <SectionHeader icon={Zap} title="Skills" />
              <div className="flex flex-wrap gap-2 mb-4">
                {profile.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-1 rounded-full pl-1 pr-1"
                    style={{
                      background: "oklch(0.18 0.012 260 / 0.7)",
                      border: "1px solid oklch(0.28 0.015 260 / 0.4)",
                    }}
                  >
                    <SkillTag skill={skill} />
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      data-ocid={`profile.remove_skill.${skill}`}
                      className="flex items-center justify-center w-4 h-4 rounded-full transition-smooth hover:bg-destructive/20"
                      aria-label={`Remove ${skill}`}
                    >
                      <X className="h-2.5 w-2.5 text-muted-foreground hover:text-destructive" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a skill…"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addSkill()}
                  data-ocid="profile.add_skill.input"
                  className="max-w-xs text-sm"
                  style={formInput}
                />
                <button
                  type="button"
                  onClick={addSkill}
                  data-ocid="profile.add_skill.button"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-smooth"
                  style={{
                    background: "oklch(0.55 0.18 280 / 0.15)",
                    color: "oklch(0.72 0.22 190)",
                    border: "1px solid oklch(0.5 0.16 280 / 0.3)",
                  }}
                >
                  <Plus className="h-4 w-4" /> Add
                </button>
              </div>
            </div>

            {/* Experience */}
            <div
              className="rounded-2xl p-6"
              style={glassCard}
              data-ocid="profile.experience.card"
            >
              <div className="flex items-start justify-between">
                <SectionHeader icon={Briefcase} title="Work Experience" />
                <button
                  type="button"
                  onClick={() => {
                    setAddingExp(true);
                    setExpDraft({
                      title: "",
                      company: "",
                      startDate: "",
                      endDate: "",
                    });
                  }}
                  data-ocid="profile.add_experience.button"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-smooth"
                  style={{
                    background: "oklch(0.55 0.18 280 / 0.12)",
                    color: "oklch(0.72 0.22 190)",
                    border: "1px solid oklch(0.5 0.16 280 / 0.3)",
                  }}
                >
                  <Plus className="h-3.5 w-3.5" /> Add
                </button>
              </div>

              <div className="space-y-5">
                {profile.experience.map((exp, i) => (
                  <div
                    key={`${exp.company}-${exp.startDate}`}
                    data-ocid={`profile.experience.item.${i + 1}`}
                  >
                    {editingExpIdx === i ? (
                      <ExpForm
                        expDraft={expDraft}
                        setExpDraft={setExpDraft}
                        onSave={saveExp}
                        onCancel={() => {
                          setEditingExpIdx(null);
                          setExpDraft(null);
                        }}
                        saveOcid="profile.save_experience.button"
                        cancelOcid="profile.cancel_experience.button"
                      />
                    ) : (
                      <>
                        <div className="flex gap-4">
                          {/* Timeline dot */}
                          <div className="flex flex-col items-center shrink-0">
                            <div
                              className="w-9 h-9 rounded-xl flex items-center justify-center"
                              style={{
                                background:
                                  "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.2), oklch(0.72 0.22 190 / 0.15))",
                                border: "1px solid oklch(0.5 0.16 280 / 0.25)",
                              }}
                            >
                              <Briefcase
                                className="h-4 w-4"
                                style={{ color: "oklch(0.72 0.22 190)" }}
                              />
                            </div>
                            {i < profile.experience.length - 1 && (
                              <div
                                className="w-px flex-1 mt-2"
                                style={{
                                  background:
                                    "linear-gradient(180deg, oklch(0.5 0.16 280 / 0.4), oklch(0.28 0.015 260 / 0.2))",
                                  minHeight: "24px",
                                }}
                              />
                            )}
                          </div>
                          <div className="flex-1 min-w-0 pb-2">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <p className="font-semibold text-sm text-foreground">
                                  {exp.title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {exp.company}
                                </p>
                                <p
                                  className="text-xs mt-0.5 px-2 py-0.5 rounded-full inline-block"
                                  style={{
                                    background: "oklch(0.55 0.18 280 / 0.1)",
                                    color: "oklch(0.65 0.15 280)",
                                    border:
                                      "1px solid oklch(0.5 0.16 280 / 0.2)",
                                  }}
                                >
                                  {formatDateRange(exp.startDate, exp.endDate)}
                                </p>
                              </div>
                              <div className="flex items-center gap-1 shrink-0">
                                <button
                                  type="button"
                                  onClick={() => startEditExp(i)}
                                  data-ocid={`profile.edit_experience.${i + 1}`}
                                  className="w-7 h-7 flex items-center justify-center rounded-lg transition-smooth hover:bg-primary/10"
                                  style={{ color: "oklch(0.62 0.01 250)" }}
                                >
                                  <Edit2 className="h-3.5 w-3.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => deleteExp(i)}
                                  data-ocid={`profile.delete_experience.${i + 1}`}
                                  className="w-7 h-7 flex items-center justify-center rounded-lg transition-smooth"
                                  style={{ color: "oklch(0.72 0.18 28 / 0.7)" }}
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            </div>
                            {exp.description && (
                              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                                {exp.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}

                {addingExp && (
                  <div className="mt-2">
                    <p className="font-semibold text-sm text-foreground mb-3">
                      Add Experience
                    </p>
                    <ExpForm
                      expDraft={expDraft}
                      setExpDraft={setExpDraft}
                      onSave={addExp}
                      onCancel={() => {
                        setAddingExp(false);
                        setExpDraft(null);
                      }}
                      saveLabel="Add Experience"
                      saveOcid="profile.confirm_add_experience.button"
                      cancelOcid="profile.cancel_add_experience.button"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Resume */}
            <div
              className="rounded-2xl p-6"
              style={glassCard}
              data-ocid="profile.resume.card"
            >
              <SectionHeader icon={FileText} title="Resume" />
              {profile.resumeFileName ? (
                <div
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    background: "oklch(0.17 0.01 260 / 0.6)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.4)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.2), oklch(0.72 0.22 190 / 0.15))",
                      border: "1px solid oklch(0.5 0.16 280 / 0.25)",
                    }}
                  >
                    <FileText
                      className="h-5 w-5"
                      style={{ color: "oklch(0.72 0.22 190)" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground truncate">
                      {profile.resumeFileName}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Uploaded successfully
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    data-ocid="profile.replace_resume.button"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 transition-smooth"
                    style={{
                      background: "oklch(0.55 0.18 280 / 0.12)",
                      color: "oklch(0.72 0.22 190)",
                      border: "1px solid oklch(0.5 0.16 280 / 0.3)",
                    }}
                  >
                    <Upload className="h-3.5 w-3.5" /> Replace
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-2xl w-full transition-smooth group"
                  onClick={() => fileInputRef.current?.click()}
                  aria-label="Upload resume"
                  data-ocid="profile.resume.dropzone"
                  style={{
                    borderColor: "oklch(0.28 0.015 260 / 0.5)",
                    background: "oklch(0.12 0.008 255 / 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.5 0.16 280 / 0.5)";
                    (e.currentTarget as HTMLElement).style.background =
                      "oklch(0.55 0.18 280 / 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.28 0.015 260 / 0.5)";
                    (e.currentTarget as HTMLElement).style.background =
                      "oklch(0.12 0.008 255 / 0.3)";
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.18 280 / 0.15), oklch(0.72 0.22 190 / 0.1))",
                      border: "1px solid oklch(0.5 0.16 280 / 0.25)",
                    }}
                  >
                    <Upload
                      className="h-6 w-6"
                      style={{ color: "oklch(0.72 0.22 190)" }}
                    />
                  </div>
                  <p className="font-semibold text-sm text-foreground">
                    Upload your resume
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PDF, DOC, or DOCX (max 5MB)
                  </p>
                  <div
                    className="mt-4 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium"
                    style={{
                      background: "oklch(0.55 0.18 280 / 0.15)",
                      color: "oklch(0.72 0.22 190)",
                      border: "1px solid oklch(0.5 0.16 280 / 0.3)",
                    }}
                    data-ocid="profile.upload_resume.button"
                  >
                    <Upload className="h-3.5 w-3.5" /> Choose File
                  </div>
                </button>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleResumeUpload}
                aria-label="Upload resume file"
              />
            </div>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}

function ExpForm({
  expDraft,
  setExpDraft,
  onSave,
  onCancel,
  saveLabel = "Save",
  saveOcid,
  cancelOcid,
}: {
  expDraft: ExperienceEntry | null;
  setExpDraft: (
    fn: (d: ExperienceEntry | null) => ExperienceEntry | null,
  ) => void;
  onSave: () => void;
  onCancel: () => void;
  saveLabel?: string;
  saveOcid: string;
  cancelOcid: string;
}) {
  const formInput = {
    background: "oklch(0.18 0.012 260)",
    border: "1px solid oklch(0.3 0.012 260 / 0.6)",
  };
  return (
    <div
      className="space-y-3 p-4 rounded-xl"
      style={{
        background: "oklch(0.55 0.18 280 / 0.06)",
        border: "1px solid oklch(0.5 0.16 280 / 0.25)",
      }}
    >
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <Label className="text-xs mb-1.5 block text-muted-foreground">
            Job Title
          </Label>
          <Input
            value={expDraft?.title ?? ""}
            onChange={(e) =>
              setExpDraft((d) => (d ? { ...d, title: e.target.value } : null))
            }
            data-ocid="profile.exp_title.input"
            style={formInput}
            className="text-sm"
          />
        </div>
        <div>
          <Label className="text-xs mb-1.5 block text-muted-foreground">
            Company
          </Label>
          <Input
            value={expDraft?.company ?? ""}
            onChange={(e) =>
              setExpDraft((d) => (d ? { ...d, company: e.target.value } : null))
            }
            data-ocid="profile.exp_company.input"
            style={formInput}
            className="text-sm"
          />
        </div>
        <div>
          <Label className="text-xs mb-1.5 block text-muted-foreground">
            Start Date (YYYY-MM)
          </Label>
          <Input
            placeholder="2020-01"
            value={expDraft?.startDate ?? ""}
            onChange={(e) =>
              setExpDraft((d) =>
                d ? { ...d, startDate: e.target.value } : null,
              )
            }
            data-ocid="profile.exp_start.input"
            style={formInput}
            className="text-sm"
          />
        </div>
        <div>
          <Label className="text-xs mb-1.5 block text-muted-foreground">
            End Date (blank = current)
          </Label>
          <Input
            placeholder="2023-06"
            value={expDraft?.endDate ?? ""}
            onChange={(e) =>
              setExpDraft((d) =>
                d ? { ...d, endDate: e.target.value || undefined } : null,
              )
            }
            data-ocid="profile.exp_end.input"
            style={formInput}
            className="text-sm"
          />
        </div>
      </div>
      <div>
        <Label className="text-xs mb-1.5 block text-muted-foreground">
          Description
        </Label>
        <Textarea
          rows={3}
          value={expDraft?.description ?? ""}
          onChange={(e) =>
            setExpDraft((d) =>
              d ? { ...d, description: e.target.value } : null,
            )
          }
          data-ocid="profile.exp_description.textarea"
          style={formInput}
          className="text-sm resize-none"
        />
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onSave}
          data-ocid={saveOcid}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-smooth hover:opacity-90"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
            color: "white",
          }}
        >
          <Save className="h-3.5 w-3.5" /> {saveLabel}
        </button>
        <button
          type="button"
          onClick={onCancel}
          data-ocid={cancelOcid}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-smooth"
          style={{
            background: "oklch(0.18 0.012 260)",
            color: "oklch(0.62 0.01 250)",
            border: "1px solid oklch(0.28 0.015 260 / 0.5)",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
