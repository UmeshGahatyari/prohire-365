import { j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `flex flex-col items-center justify-center py-20 px-6 text-center ${className}`,
      "data-ocid": "empty_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 rounded-3xl blur-xl opacity-40 animate-pulse-soft",
              style: {
                background: "radial-gradient(circle, oklch(0.72 0.22 190 / 0.5) 0%, oklch(0.5 0.16 280 / 0.3) 60%, transparent 100%)",
                transform: "scale(1.6)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-portal",
              style: {
                background: "linear-gradient(135deg, oklch(0.18 0.015 260 / 0.9) 0%, oklch(0.20 0.018 265 / 0.8) 100%)",
                border: "1px solid oklch(0.5 0.16 280 / 0.3)",
                boxShadow: "0 0 30px oklch(0.72 0.22 190 / 0.15), 0 8px 24px oklch(0 0 0 / 0.3)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-9 w-9", style: { color: "oklch(0.72 0.22 190)" } })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: "font-display font-bold text-xl mb-2",
            style: {
              background: "linear-gradient(135deg, oklch(0.92 0.01 250) 0%, oklch(0.82 0.06 280) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            },
            children: title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-sm max-w-xs leading-relaxed mb-8",
            style: { color: "oklch(0.58 0.01 250)" },
            children: description
          }
        ),
        action && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: action.onClick,
            "data-ocid": "empty_state.cta_button",
            className: "inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm text-white transition-smooth hover:opacity-90 hover:shadow-portal active:scale-95",
            style: {
              background: "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
              boxShadow: "0 4px 20px oklch(0.72 0.22 190 / 0.3), 0 2px 8px oklch(0 0 0 / 0.2)"
            },
            children: action.label
          }
        )
      ]
    }
  );
}
export {
  EmptyState as E
};
