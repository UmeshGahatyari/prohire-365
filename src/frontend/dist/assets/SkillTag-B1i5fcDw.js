import { j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
import { B as Badge } from "./badge-DE0nWNx8.js";
function SkillTag({
  skill,
  removable = false,
  onRemove,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Badge,
    {
      variant: "secondary",
      className: `text-xs font-normal px-2 py-0.5 gap-1 ${className}`,
      "data-ocid": `skill_tag.${skill.toLowerCase().replace(/\s+/g, "_")}`,
      children: [
        skill,
        removable && onRemove && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => onRemove(skill),
            "aria-label": `Remove ${skill}`,
            className: "ml-0.5 rounded-full hover:bg-muted-foreground/20 transition-smooth",
            children: "×"
          }
        )
      ]
    }
  );
}
export {
  SkillTag as S
};
