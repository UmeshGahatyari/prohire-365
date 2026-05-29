import { j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
import { b as cn } from "./useAuth-OLjIzFBE.js";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground/60 flex h-10 w-full min-w-0 rounded-xl px-3.5 py-2 text-sm shadow-xs transition-all duration-200 outline-none",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "md:text-sm",
        className
      ),
      style: {
        background: "oklch(0.18 0.012 258 / 0.8)",
        border: "1px solid oklch(0.30 0.015 260 / 0.6)",
        color: "oklch(0.92 0.01 250)"
      },
      onFocus: (e) => {
        e.currentTarget.style.border = "1px solid oklch(0.72 0.22 190 / 0.6)";
        e.currentTarget.style.boxShadow = "0 0 0 3px oklch(0.72 0.22 190 / 0.12), 0 2px 8px oklch(0 0 0 / 0.2)";
        e.currentTarget.style.background = "oklch(0.19 0.014 260 / 0.9)";
      },
      onBlur: (e) => {
        e.currentTarget.style.border = "1px solid oklch(0.30 0.015 260 / 0.6)";
        e.currentTarget.style.boxShadow = "";
        e.currentTarget.style.background = "oklch(0.18 0.012 258 / 0.8)";
      },
      ...props
    }
  );
}
export {
  Input as I
};
