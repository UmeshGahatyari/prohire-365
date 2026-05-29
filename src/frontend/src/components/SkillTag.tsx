import { Badge } from "@/components/ui/badge";

interface SkillTagProps {
  skill: string;
  removable?: boolean;
  onRemove?: (skill: string) => void;
  className?: string;
}

export function SkillTag({
  skill,
  removable = false,
  onRemove,
  className = "",
}: SkillTagProps) {
  return (
    <Badge
      variant="secondary"
      className={`text-xs font-normal px-2 py-0.5 gap-1 ${className}`}
      data-ocid={`skill_tag.${skill.toLowerCase().replace(/\s+/g, "_")}`}
    >
      {skill}
      {removable && onRemove && (
        <button
          type="button"
          onClick={() => onRemove(skill)}
          aria-label={`Remove ${skill}`}
          className="ml-0.5 rounded-full hover:bg-muted-foreground/20 transition-smooth"
        >
          ×
        </button>
      )}
    </Badge>
  );
}
