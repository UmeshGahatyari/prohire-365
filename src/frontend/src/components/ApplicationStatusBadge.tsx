import type { ApplicationStatus } from "../types";

interface ApplicationStatusBadgeProps {
  status: ApplicationStatus;
  className?: string;
}

interface StatusConfig {
  label: string;
  dot: string;
  color: string;
  bg: string;
  border: string;
}

const statusConfig: Record<ApplicationStatus, StatusConfig> = {
  applied: {
    label: "Applied",
    dot: "oklch(0.65 0.18 230)",
    color: "oklch(0.75 0.15 230)",
    bg: "oklch(0.65 0.18 230 / 0.1)",
    border: "oklch(0.65 0.18 230 / 0.3)",
  },
  shortlisted: {
    label: "Shortlisted",
    dot: "oklch(0.75 0.16 65)",
    color: "oklch(0.82 0.14 65)",
    bg: "oklch(0.75 0.16 65 / 0.1)",
    border: "oklch(0.75 0.16 65 / 0.3)",
  },
  interview: {
    label: "Interview",
    dot: "oklch(0.65 0.2 290)",
    color: "oklch(0.75 0.18 290)",
    bg: "oklch(0.65 0.2 290 / 0.1)",
    border: "oklch(0.65 0.2 290 / 0.3)",
  },
  rejected: {
    label: "Rejected",
    dot: "oklch(0.62 0.2 28)",
    color: "oklch(0.72 0.18 28)",
    bg: "oklch(0.62 0.2 28 / 0.1)",
    border: "oklch(0.62 0.2 28 / 0.3)",
  },
  offer: {
    label: "Offer 🎉",
    dot: "oklch(0.7 0.2 150)",
    color: "oklch(0.78 0.18 150)",
    bg: "oklch(0.7 0.2 150 / 0.1)",
    border: "oklch(0.7 0.2 150 / 0.3)",
  },
};

export function ApplicationStatusBadge({
  status,
  className = "",
}: ApplicationStatusBadgeProps) {
  const cfg = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${className}`}
      style={{
        color: cfg.color,
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
      }}
      data-ocid={`application_status.${status}`}
    >
      {/* Animated dot */}
      <span className="relative flex h-1.5 w-1.5">
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
          style={{ background: cfg.dot }}
        />
        <span
          className="relative inline-flex rounded-full h-1.5 w-1.5"
          style={{ background: cfg.dot }}
        />
      </span>
      {cfg.label}
    </span>
  );
}
