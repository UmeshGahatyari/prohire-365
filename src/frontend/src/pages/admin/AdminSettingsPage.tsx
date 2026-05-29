import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Bell, Globe, Palette, Save, Settings, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "../../components/Layout";
import { PageHeader } from "../../components/PageHeader";
import { ProtectedRoute } from "../../components/ProtectedRoute";

interface SettingsState {
  platformName: string;
  tagline: string;
  supportEmail: string;
  emailNewSignup: boolean;
  emailNewJob: boolean;
  emailJobApproval: boolean;
  emailWeeklyReport: boolean;
  maintenanceMode: boolean;
  requireEmployerApproval: boolean;
  requireJobApproval: boolean;
  maxJobsPerEmployer: string;
  platformDescription: string;
}

const sectionStyle = {
  background: "oklch(0.14 0.009 255 / 0.8)",
  border: "1px solid oklch(0.28 0.015 260 / 0.35)",
  backdropFilter: "blur(10px)",
};

interface SettingsSectionProps {
  icon: React.ElementType;
  title: string;
  description: string;
  iconGradient: string;
  iconBorder: string;
  iconColor: string;
  children: React.ReactNode;
  ocid: string;
}

function SettingsSection({
  icon: Icon,
  title,
  description,
  iconGradient,
  iconBorder,
  iconColor,
  children,
  ocid,
}: SettingsSectionProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={sectionStyle}
      data-ocid={ocid}
    >
      <div className="px-5 py-4 flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{
            background: iconGradient,
            border: `1px solid ${iconBorder}`,
          }}
        >
          <Icon className="h-4 w-4" style={{ color: iconColor }} />
        </div>
        <div>
          <h2 className="font-display font-semibold text-sm text-foreground">
            {title}
          </h2>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
      <Separator style={{ background: "oklch(0.28 0.015 260 / 0.3)" }} />
      <div className="p-5">{children}</div>
    </div>
  );
}

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SettingsState>({
    platformName: "ProHire 365",
    tagline: "Find Your Next Opportunity — Every Day of the Year",
    supportEmail: "support@prohire365.com",
    emailNewSignup: true,
    emailNewJob: false,
    emailJobApproval: true,
    emailWeeklyReport: true,
    maintenanceMode: false,
    requireEmployerApproval: true,
    requireJobApproval: false,
    maxJobsPerEmployer: "25",
    platformDescription:
      "ProHire 365 connects talented professionals with top employers across industries. Our platform provides a seamless hiring experience for both candidates and companies.",
  });
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
    toast.success("Settings saved successfully", { duration: 4000 });
  };

  const updateField = <K extends keyof SettingsState>(
    key: K,
    value: SettingsState[K],
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <ProtectedRoute requiredRole="admin">
      <Layout showSidebar sidebarRole="admin">
        <div className="p-6 max-w-3xl mx-auto space-y-8">
          <PageHeader
            title="Platform Settings"
            description="Configure platform preferences, notifications, and policies"
            icon={Settings}
            actions={
              <Button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className="gap-2 rounded-xl font-semibold"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.65 0.22 190) 0%, oklch(0.55 0.2 200) 100%)",
                  color: "oklch(0.08 0.01 250)",
                  border: "none",
                  boxShadow: "0 4px 16px oklch(0.65 0.22 190 / 0.3)",
                }}
                data-ocid="settings.save_button"
              >
                <Save className="h-4 w-4" />
                {saving ? "Saving…" : "Save Changes"}
              </Button>
            }
          />

          {/* General Settings */}
          <SettingsSection
            icon={Globe}
            title="General"
            description="Platform identity and contact information"
            iconGradient="oklch(0.5 0.16 280 / 0.2)"
            iconBorder="oklch(0.5 0.16 280 / 0.35)"
            iconColor="oklch(0.78 0.14 280)"
            ocid="settings.general.section"
          >
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="platformName" className="text-sm font-medium">
                  Platform Name
                </Label>
                <Input
                  id="platformName"
                  value={settings.platformName}
                  onChange={(e) => updateField("platformName", e.target.value)}
                  placeholder="ProHire 365"
                  className="bg-transparent border-border/50 focus:border-primary/50 rounded-xl"
                  data-ocid="settings.platform_name.input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tagline" className="text-sm font-medium">
                  Tagline
                </Label>
                <Input
                  id="tagline"
                  value={settings.tagline}
                  onChange={(e) => updateField("tagline", e.target.value)}
                  placeholder="Platform tagline"
                  className="bg-transparent border-border/50 focus:border-primary/50 rounded-xl"
                  data-ocid="settings.tagline.input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supportEmail" className="text-sm font-medium">
                  Support Email
                </Label>
                <Input
                  id="supportEmail"
                  type="email"
                  value={settings.supportEmail}
                  onChange={(e) => updateField("supportEmail", e.target.value)}
                  placeholder="support@yourplatform.com"
                  className="bg-transparent border-border/50 focus:border-primary/50 rounded-xl"
                  data-ocid="settings.support_email.input"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="platformDescription"
                  className="text-sm font-medium"
                >
                  Platform Description
                </Label>
                <Textarea
                  id="platformDescription"
                  value={settings.platformDescription}
                  onChange={(e) =>
                    updateField("platformDescription", e.target.value)
                  }
                  rows={3}
                  className="resize-none bg-transparent border-border/50 focus:border-primary/50 rounded-xl"
                  data-ocid="settings.description.textarea"
                />
              </div>
            </div>
          </SettingsSection>

          {/* Notification Settings */}
          <SettingsSection
            icon={Bell}
            title="Email Notifications"
            description="Control which events trigger admin email alerts"
            iconGradient="oklch(0.48 0.15 310 / 0.2)"
            iconBorder="oklch(0.48 0.15 310 / 0.35)"
            iconColor="oklch(0.76 0.12 310)"
            ocid="settings.notifications.section"
          >
            <div className="space-y-4">
              {[
                {
                  key: "emailNewSignup" as const,
                  label: "New User Signup",
                  description: "Notify when a new user registers",
                },
                {
                  key: "emailNewJob" as const,
                  label: "New Job Posted",
                  description: "Notify when a new job listing is created",
                },
                {
                  key: "emailJobApproval" as const,
                  label: "Job Approval Requests",
                  description: "Notify when a job requires approval",
                },
                {
                  key: "emailWeeklyReport" as const,
                  label: "Weekly Summary Report",
                  description: "Receive weekly platform activity digest",
                },
              ].map((item, idx) => (
                <div key={item.key}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        {item.label}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <Switch
                      checked={settings[item.key]}
                      onCheckedChange={(v) => updateField(item.key, v)}
                      data-ocid={`settings.${item.key}.switch`}
                    />
                  </div>
                  {idx < 3 && (
                    <Separator
                      className="mt-4"
                      style={{ background: "oklch(0.28 0.015 260 / 0.2)" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </SettingsSection>

          {/* Platform Policies */}
          <SettingsSection
            icon={Shield}
            title="Platform Policies"
            description="Control moderation and approval workflows"
            iconGradient="oklch(0.65 0.22 190 / 0.2)"
            iconBorder="oklch(0.65 0.22 190 / 0.35)"
            iconColor="oklch(0.72 0.22 190)"
            ocid="settings.policies.section"
          >
            <div className="space-y-4">
              {[
                {
                  key: "requireEmployerApproval" as const,
                  label: "Require Employer Approval",
                  description:
                    "New employers must be manually approved before posting jobs",
                },
                {
                  key: "requireJobApproval" as const,
                  label: "Require Job Approval",
                  description:
                    "All new job postings must be approved before going live",
                },
                {
                  key: "maintenanceMode" as const,
                  label: "Maintenance Mode",
                  description:
                    "Temporarily disable public access to the platform",
                  danger: true,
                },
              ].map((item, idx) => (
                <div key={item.key}>
                  <div
                    className={`flex items-center justify-between gap-4 ${item.danger && settings[item.key] ? "p-3 rounded-xl" : ""}`}
                    style={
                      item.danger && settings[item.key]
                        ? {
                            background: "oklch(0.55 0.2 28 / 0.08)",
                            border: "1px solid oklch(0.55 0.2 28 / 0.25)",
                          }
                        : {}
                    }
                  >
                    <div className="min-w-0">
                      <p
                        className={`text-sm font-medium ${item.danger && settings[item.key] ? "" : "text-foreground"}`}
                        style={
                          item.danger && settings[item.key]
                            ? { color: "oklch(0.72 0.18 28)" }
                            : {}
                        }
                      >
                        {item.label}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <Switch
                      checked={settings[item.key]}
                      onCheckedChange={(v) => updateField(item.key, v)}
                      data-ocid={`settings.${item.key}.switch`}
                    />
                  </div>
                  {idx < 2 && (
                    <Separator
                      className="mt-4"
                      style={{ background: "oklch(0.28 0.015 260 / 0.2)" }}
                    />
                  )}
                </div>
              ))}
              <Separator
                className="my-2"
                style={{ background: "oklch(0.28 0.015 260 / 0.2)" }}
              />
              <div className="space-y-2">
                <Label htmlFor="maxJobs" className="text-sm font-medium">
                  Max Jobs per Employer
                </Label>
                <Input
                  id="maxJobs"
                  type="number"
                  value={settings.maxJobsPerEmployer}
                  onChange={(e) =>
                    updateField("maxJobsPerEmployer", e.target.value)
                  }
                  className="w-32 bg-transparent border-border/50 focus:border-primary/50 rounded-xl"
                  min="1"
                  max="999"
                  data-ocid="settings.max_jobs.input"
                />
                <p className="text-xs text-muted-foreground">
                  Maximum active job postings an employer can maintain at one
                  time.
                </p>
              </div>
            </div>
          </SettingsSection>

          {/* Appearance */}
          <SettingsSection
            icon={Palette}
            title="Appearance"
            description="Theme and display preferences"
            iconGradient="oklch(0.42 0.16 220 / 0.2)"
            iconBorder="oklch(0.42 0.16 220 / 0.35)"
            iconColor="oklch(0.72 0.14 220)"
            ocid="settings.appearance.section"
          >
            <p className="text-sm text-muted-foreground">
              Theme is controlled per-user via the toggle in the top navigation
              bar. Light and dark mode are both supported.
            </p>
          </SettingsSection>

          {/* Save Button */}
          <div className="flex justify-end pt-2 pb-4">
            <Button
              type="button"
              onClick={handleSave}
              disabled={saving}
              size="lg"
              className="gap-2 rounded-xl font-semibold"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.65 0.22 190) 0%, oklch(0.55 0.2 200) 100%)",
                color: "oklch(0.08 0.01 250)",
                border: "none",
                boxShadow: "0 4px 16px oklch(0.65 0.22 190 / 0.3)",
              }}
              data-ocid="settings.save_bottom_button"
            >
              <Save className="h-4 w-4" />
              {saving ? "Saving…" : "Save All Settings"}
            </Button>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
