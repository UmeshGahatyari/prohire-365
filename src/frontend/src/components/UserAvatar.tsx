import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { UserRole } from "../types";

interface UserAvatarProps {
  name?: string | null;
  role?: UserRole | null;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClass = {
  sm: "h-7 w-7 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-12 w-12 text-base",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const roleColorClass: Record<string, string> = {
  employee: "bg-primary/15 text-primary",
  employer: "bg-accent/15 text-accent",
  admin: "bg-chart-4/15 text-chart-4",
};

export function UserAvatar({
  name,
  role,
  size = "md",
  className = "",
}: UserAvatarProps) {
  const initials = name ? getInitials(name) : "?";
  const colorClass = role
    ? roleColorClass[role]
    : "bg-muted text-muted-foreground";

  return (
    <Avatar
      className={`${sizeClass[size]} ${className}`}
      data-ocid="user_avatar"
    >
      <AvatarFallback className={`font-medium ${colorClass}`}>
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}
