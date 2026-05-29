import { j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
function PageHeader({
  title,
  description,
  icon: Icon,
  actions,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative rounded-2xl overflow-hidden mb-6 ${className}`,
      "data-ocid": "page_header",
      style: {
        background: "linear-gradient(135deg, oklch(0.14 0.012 265 / 0.8) 0%, oklch(0.16 0.014 275 / 0.6) 100%)",
        border: "1px solid oklch(0.28 0.015 260 / 0.4)",
        backdropFilter: "blur(10px)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 right-0 h-px",
            style: {
              background: "linear-gradient(90deg, transparent 0%, oklch(0.5 0.16 280 / 0.7) 30%, oklch(0.72 0.22 190 / 0.9) 50%, oklch(0.5 0.16 280 / 0.7) 70%, transparent 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse at 20% 50%, oklch(0.5 0.16 280 / 0.07) 0%, transparent 60%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-6 py-5 flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 min-w-0", children: [
            Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "shrink-0 w-11 h-11 rounded-xl flex items-center justify-center shadow-card",
                style: {
                  background: "linear-gradient(135deg, oklch(0.5 0.16 280 / 0.3) 0%, oklch(0.72 0.22 190 / 0.2) 100%)",
                  border: "1px solid oklch(0.5 0.16 280 / 0.35)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Icon,
                  {
                    className: "h-5 w-5",
                    style: { color: "oklch(0.72 0.22 190)" }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "font-display font-bold text-2xl truncate",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.95 0.01 250) 0%, oklch(0.85 0.08 280) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  },
                  children: title
                }
              ),
              description && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm mt-0.5 line-clamp-2",
                  style: { color: "oklch(0.65 0.01 250)" },
                  children: description
                }
              )
            ] })
          ] }),
          actions && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 flex items-center gap-2", children: actions })
        ] })
      ]
    }
  );
}
export {
  PageHeader as P
};
