import { r as reactExports, j as jsxRuntimeExports, u as useNavigate } from "./index-ByYMEgVg.js";
import { c as createLucideIcon, a as useComposedRefs, b as cn, B as Briefcase } from "./useAuth-OLjIzFBE.js";
import { P as Presence, a as Primitive, u as useControllableState, c as composeEventHandlers, b as useSize, d as createContextScope, L as Layout, S as Search, X } from "./Layout-JeuDnHZC.js";
import { u as usePrevious } from "./index-DOPMB26m.js";
import { C as Check, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Aauoc0tp.js";
import { I as Input } from "./input-Bnuh1-dr.js";
import { L as Label } from "./label-Bzq5IhRt.js";
import { S as Separator } from "./separator-CEt-SyGN.js";
import { E as EmptyState } from "./EmptyState-B1Y1EQq_.js";
import { J as JobCard } from "./JobCard-UmY3hSt1.js";
import { P as ProtectedRoute } from "./ProtectedRoute-BSLymTUa.js";
import { S as Sparkles } from "./sparkles-mukiyukd.js";
import { Z as Zap } from "./zap-CK0f-2JC.js";
import { S as SlidersHorizontal } from "./sliders-horizontal-w3QSE1Zz.js";
import { M as MapPin } from "./map-pin-BkrrQ4Wc.js";
import { C as ChevronLeft } from "./chevron-left-BmNiawf-.js";
import { C as ChevronRight } from "./chevron-right-uQ8Lupyx.js";
import "./useCurrentUser-BEN-7rG2.js";
import "./index-DiKJEy-t.js";
import "./SkillTag-B1i5fcDw.js";
import "./badge-DE0nWNx8.js";
import "./dollar-sign-Ds7SrE6t.js";
import "./calendar-COUjOv3V.js";
import "./bookmark-check-B5yX-SWK.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode);
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext] = createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
  const {
    __scopeCheckbox,
    checked: checkedProp,
    children,
    defaultChecked,
    disabled,
    form,
    name,
    onCheckedChange,
    required,
    value = "on",
    // @ts-expect-error
    internal_do_not_use_render
  } = props;
  const [checked, setChecked] = useControllableState({
    prop: checkedProp,
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
    caller: CHECKBOX_NAME
  });
  const [control, setControl] = reactExports.useState(null);
  const [bubbleInput, setBubbleInput] = reactExports.useState(null);
  const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
  const isFormControl = control ? !!form || !!control.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    true
  );
  const context = {
    checked,
    disabled,
    setChecked,
    control,
    setControl,
    name,
    form,
    value,
    hasConsumerStoppedPropagationRef,
    required,
    defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
    isFormControl,
    bubbleInput,
    setBubbleInput
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CheckboxProviderImpl,
    {
      scope: __scopeCheckbox,
      ...context,
      children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
    }
  );
}
var TRIGGER_NAME = "CheckboxTrigger";
var CheckboxTrigger = reactExports.forwardRef(
  ({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) => {
    const {
      control,
      value,
      disabled,
      checked,
      required,
      setControl,
      setChecked,
      hasConsumerStoppedPropagationRef,
      isFormControl,
      bubbleInput
    } = useCheckboxContext(TRIGGER_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setControl);
    const initialCheckedStateRef = reactExports.useRef(checked);
    reactExports.useEffect(() => {
      const form = control == null ? void 0 : control.form;
      if (form) {
        const reset = () => setChecked(initialCheckedStateRef.current);
        form.addEventListener("reset", reset);
        return () => form.removeEventListener("reset", reset);
      }
    }, [control, setChecked]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        "aria-required": required,
        "data-state": getState(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        value,
        ...checkboxProps,
        ref: composedRefs,
        onKeyDown: composeEventHandlers(onKeyDown, (event) => {
          if (event.key === "Enter") event.preventDefault();
        }),
        onClick: composeEventHandlers(onClick, (event) => {
          setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
          if (bubbleInput && isFormControl) {
            hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
            if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
          }
        })
      }
    );
  }
);
CheckboxTrigger.displayName = TRIGGER_NAME;
var Checkbox$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCheckbox,
      name,
      checked,
      defaultChecked,
      required,
      disabled,
      value,
      onCheckedChange,
      form,
      ...checkboxProps
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CheckboxProvider,
      {
        __scopeCheckbox,
        checked,
        defaultChecked,
        disabled,
        required,
        onCheckedChange,
        name,
        form,
        value,
        internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxTrigger,
            {
              ...checkboxProps,
              ref: forwardedRef,
              __scopeCheckbox
            }
          ),
          isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxBubbleInput,
            {
              __scopeCheckbox
            }
          )
        ] })
      }
    );
  }
);
Checkbox$1.displayName = CHECKBOX_NAME;
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
    const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Presence,
      {
        present: forceMount || isIndeterminate(context.checked) || context.checked === true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.span,
          {
            "data-state": getState(context.checked),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef,
            style: { pointerEvents: "none", ...props.style }
          }
        )
      }
    );
  }
);
CheckboxIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "CheckboxBubbleInput";
var CheckboxBubbleInput = reactExports.forwardRef(
  ({ __scopeCheckbox, ...props }, forwardedRef) => {
    const {
      control,
      hasConsumerStoppedPropagationRef,
      checked,
      defaultChecked,
      required,
      disabled,
      name,
      value,
      form,
      bubbleInput,
      setBubbleInput
    } = useCheckboxContext(BUBBLE_INPUT_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = bubbleInput;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      const bubbles = !hasConsumerStoppedPropagationRef.current;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        input.indeterminate = isIndeterminate(checked);
        setChecked.call(input, isIndeterminate(checked) ? false : checked);
        input.dispatchEvent(event);
      }
    }, [bubbleInput, prevChecked, checked, hasConsumerStoppedPropagationRef]);
    const defaultCheckedRef = reactExports.useRef(isIndeterminate(checked) ? false : checked);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.input,
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: defaultChecked ?? defaultCheckedRef.current,
        required,
        disabled,
        name,
        value,
        form,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
CheckboxBubbleInput.displayName = BUBBLE_INPUT_NAME;
function isFunction(value) {
  return typeof value === "function";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Checkbox$1,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CheckboxIndicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" })
        }
      )
    }
  );
}
const ALL_JOBS = [
  {
    jobId: BigInt(1),
    employerId: {},
    title: "Senior React Developer",
    description: "Lead our frontend team and build cutting-edge web applications.",
    location: "San Francisco, CA",
    salaryMin: BigInt(11e4),
    salaryMax: BigInt(15e4),
    experienceRequired: "4–6 yrs",
    jobType: "fullTime",
    skillsRequired: ["React", "TypeScript", "Redux", "GraphQL", "Node.js"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 30 * 24 * 3600 * 1e3) * 1e6
    ),
    createdAt: BigInt((Date.now() - 2 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt(Date.now() * 1e6),
    companyName: "Meridian Software"
  },
  {
    jobId: BigInt(2),
    employerId: {},
    title: "Full Stack Engineer",
    description: "Build scalable services powering our platform for millions of users.",
    location: "Remote",
    salaryMin: BigInt(95e3),
    salaryMax: BigInt(13e4),
    experienceRequired: "3–5 yrs",
    jobType: "fullTime",
    skillsRequired: ["Node.js", "React", "PostgreSQL", "Docker", "AWS"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 20 * 24 * 3600 * 1e3) * 1e6
    ),
    createdAt: BigInt((Date.now() - 1 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt(Date.now() * 1e6),
    companyName: "CloudPeak Systems"
  },
  {
    jobId: BigInt(3),
    employerId: {},
    title: "UX Engineer",
    description: "Bridge design and engineering to deliver beautiful, accessible product experiences.",
    location: "New York, NY",
    salaryMin: BigInt(9e4),
    salaryMax: BigInt(12e4),
    experienceRequired: "3–6 yrs",
    jobType: "contract",
    skillsRequired: ["Figma", "React", "CSS", "Accessibility", "Storybook"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 15 * 24 * 3600 * 1e3) * 1e6
    ),
    createdAt: BigInt((Date.now() - 3 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt(Date.now() * 1e6),
    companyName: "Blueprint Interactive"
  },
  {
    jobId: BigInt(4),
    employerId: {},
    title: "React Native Developer",
    description: "Create seamless cross-platform mobile experiences for iOS and Android.",
    location: "Austin, TX",
    salaryMin: BigInt(85e3),
    salaryMax: BigInt(115e3),
    experienceRequired: "2–4 yrs",
    jobType: "fullTime",
    skillsRequired: ["React Native", "TypeScript", "Redux", "iOS", "Android"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 25 * 24 * 3600 * 1e3) * 1e6
    ),
    createdAt: BigInt((Date.now() - 4 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt(Date.now() * 1e6),
    companyName: "Appvance Technologies"
  },
  {
    jobId: BigInt(5),
    employerId: {},
    title: "Data Engineer",
    description: "Design and build robust data pipelines to support analytics and ML teams at scale.",
    location: "Seattle, WA",
    salaryMin: BigInt(115e3),
    salaryMax: BigInt(155e3),
    experienceRequired: "3–6 yrs",
    jobType: "fullTime",
    skillsRequired: ["Spark", "Python", "Airflow", "BigQuery", "dbt"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 10 * 24 * 3600 * 1e3) * 1e6
    ),
    createdAt: BigInt((Date.now() - 5 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt(Date.now() * 1e6),
    companyName: "DataSphere Inc."
  },
  {
    jobId: BigInt(6),
    employerId: {},
    title: "DevOps Engineer",
    description: "Own our infrastructure as code, CI/CD pipelines, and cloud platform reliability.",
    location: "Chicago, IL",
    salaryMin: BigInt(1e5),
    salaryMax: BigInt(135e3),
    experienceRequired: "3–5 yrs",
    jobType: "fullTime",
    skillsRequired: ["Kubernetes", "Terraform", "AWS", "CI/CD", "Monitoring"],
    status: "active",
    applicationDeadline: BigInt(
      (Date.now() + 18 * 24 * 3600 * 1e3) * 1e6
    ),
    createdAt: BigInt((Date.now() - 6 * 24 * 3600 * 1e3) * 1e6),
    updatedAt: BigInt(Date.now() * 1e6),
    companyName: "Stratum Cloud"
  }
];
const LOCATIONS = [
  "Remote",
  "San Francisco, CA",
  "New York, NY",
  "Austin, TX",
  "Seattle, WA",
  "Chicago, IL"
];
const JOB_TYPES = [
  { value: "fullTime", label: "Full-time" },
  { value: "partTime", label: "Part-time" },
  { value: "contract", label: "Contract" }
];
const SALARY_RANGES = [
  { label: "Any", min: 0, max: Number.POSITIVE_INFINITY },
  { label: "$50k – $80k", min: 5e4, max: 8e4 },
  { label: "$80k – $110k", min: 8e4, max: 11e4 },
  { label: "$110k – $140k", min: 11e4, max: 14e4 },
  { label: "$140k+", min: 14e4, max: Number.POSITIVE_INFINITY }
];
const PAGE_SIZE = 4;
function JobSearchPage() {
  const navigate = useNavigate();
  const [query, setQuery] = reactExports.useState("");
  const [location, setLocation] = reactExports.useState("");
  const [salaryIdx, setSalaryIdx] = reactExports.useState(0);
  const [selectedTypes, setSelectedTypes] = reactExports.useState(/* @__PURE__ */ new Set());
  const [sortBy, setSortBy] = reactExports.useState("date");
  const [page, setPage] = reactExports.useState(1);
  const [filtersOpen, setFiltersOpen] = reactExports.useState(false);
  const toggleType = (type) => {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
    setPage(1);
  };
  const filtered = ALL_JOBS.filter((job) => {
    var _a;
    if (query && !job.title.toLowerCase().includes(query.toLowerCase()) && !((_a = job.companyName) == null ? void 0 : _a.toLowerCase().includes(query.toLowerCase())) && !job.skillsRequired.some(
      (s) => s.toLowerCase().includes(query.toLowerCase())
    ))
      return false;
    if (location && job.location !== location) return false;
    if (selectedTypes.size > 0 && !selectedTypes.has(job.jobType)) return false;
    const range = SALARY_RANGES[salaryIdx];
    if (Number(job.salaryMin) < range.min || Number(job.salaryMax) > range.max)
      return false;
    return true;
  });
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "date") return Number(b.createdAt - a.createdAt);
    if (sortBy === "salary") return Number(b.salaryMax - a.salaryMax);
    return 0;
  });
  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const paginated = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const clearFilters = () => {
    setQuery("");
    setLocation("");
    setSalaryIdx(0);
    setSelectedTypes(/* @__PURE__ */ new Set());
    setSortBy("date");
    setPage(1);
  };
  const hasFilters = location || salaryIdx > 0 || selectedTypes.size > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { requiredRole: "employee", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { showSidebar: true, sidebarRole: "employee", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative overflow-hidden px-6 pt-8 pb-8",
        style: {
          background: "linear-gradient(135deg, oklch(0.13 0.015 265) 0%, oklch(0.11 0.01 255) 60%, oklch(0.10 0.008 250) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse at 30% 50%, oklch(0.5 0.16 280 / 0.1) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, oklch(0.72 0.22 190 / 0.08) 0%, transparent 50%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 left-0 right-0 h-px",
              style: {
                background: "linear-gradient(90deg, transparent, oklch(0.72 0.22 190 / 0.5), transparent)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Sparkles,
                {
                  className: "h-4 w-4",
                  style: { color: "oklch(0.72 0.22 190)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-sm font-medium",
                  style: { color: "oklch(0.72 0.22 190)" },
                  children: "2,450+ active roles"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-3xl text-foreground mb-6", children: [
              "Find Your Next",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  style: {
                    background: "linear-gradient(135deg, oklch(0.85 0.08 280), oklch(0.72 0.22 190))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  },
                  children: "Dream Role"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex gap-2 p-1.5 rounded-2xl",
                style: {
                  background: "oklch(0.18 0.012 260 / 0.8)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid oklch(0.35 0.015 260 / 0.5)",
                  boxShadow: "0 8px 32px oklch(0 0 0 / 0.3), 0 0 0 1px oklch(0.72 0.22 190 / 0.08)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-1 px-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Search,
                      {
                        className: "h-4 w-4 shrink-0",
                        style: { color: "oklch(0.72 0.22 190)" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        placeholder: "Search job title, skill, or company…",
                        value: query,
                        onChange: (e) => {
                          setQuery(e.target.value);
                          setPage(1);
                        },
                        className: "border-0 bg-transparent shadow-none px-0 focus-visible:ring-0 text-sm",
                        "data-ocid": "job_search.search_input"
                      }
                    ),
                    query && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setQuery(""),
                        className: "text-muted-foreground hover:text-foreground transition-smooth",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setFiltersOpen((o) => !o),
                      "data-ocid": "job_search.filters_toggle.button",
                      className: "md:hidden px-3 py-2 rounded-xl text-sm font-medium flex items-center gap-1.5 transition-smooth",
                      style: {
                        background: "oklch(0.22 0.015 260)",
                        color: "oklch(0.75 0.01 250)",
                        border: "1px solid oklch(0.3 0.015 260)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-4 w-4" }),
                        " Filters"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      "data-ocid": "job_search.search_button",
                      onClick: () => setPage(1),
                      className: "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-smooth hover:opacity-90 shadow-glow-accent",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                        color: "white"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Search" })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 max-w-5xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "aside",
        {
          className: `w-60 shrink-0 space-y-0 ${filtersOpen ? "block" : "hidden"} md:block`,
          "data-ocid": "job_search.filters.panel",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-2xl overflow-hidden",
              style: {
                background: "oklch(0.14 0.009 255 / 0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid oklch(0.28 0.015 260 / 0.5)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "p-4 flex items-center justify-between",
                    style: {
                      borderBottom: "1px solid oklch(0.22 0.012 260 / 0.6)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-semibold text-sm text-foreground flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          SlidersHorizontal,
                          {
                            className: "h-4 w-4",
                            style: { color: "oklch(0.72 0.22 190)" }
                          }
                        ),
                        "Filters"
                      ] }),
                      hasFilters && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: clearFilters,
                          "data-ocid": "job_search.clear_filters.button",
                          className: "text-xs transition-smooth hover:opacity-80",
                          style: { color: "oklch(0.72 0.22 190)" },
                          children: "Clear all"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        className: "text-xs font-semibold uppercase tracking-wide mb-2.5 block",
                        style: { color: "oklch(0.55 0.01 250)" },
                        children: "Location"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: location,
                        onValueChange: (v) => {
                          setLocation(v === "any" ? "" : v);
                          setPage(1);
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            SelectTrigger,
                            {
                              "data-ocid": "job_search.location.select",
                              className: "text-sm h-8",
                              style: {
                                background: "oklch(0.18 0.01 260)",
                                border: "1px solid oklch(0.3 0.012 260 / 0.6)"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  MapPin,
                                  {
                                    className: "h-3.5 w-3.5 mr-1 shrink-0",
                                    style: { color: "oklch(0.72 0.22 190)" }
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Any location" })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "any", children: "Any location" }),
                            LOCATIONS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: l, children: l }, l))
                          ] })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Separator,
                    {
                      style: { background: "oklch(0.22 0.012 260 / 0.5)" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        className: "text-xs font-semibold uppercase tracking-wide mb-2.5 block",
                        style: { color: "oklch(0.55 0.01 250)" },
                        children: "Salary Range"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: SALARY_RANGES.map((range, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          setSalaryIdx(idx);
                          setPage(1);
                        },
                        "data-ocid": `job_search.salary_range.${idx + 1}`,
                        className: "w-full text-left text-sm px-3 py-1.5 rounded-lg transition-smooth",
                        style: salaryIdx === idx ? {
                          background: "oklch(0.55 0.18 280 / 0.2)",
                          color: "oklch(0.72 0.22 190)",
                          border: "1px solid oklch(0.5 0.16 280 / 0.35)",
                          fontWeight: 600
                        } : {
                          color: "oklch(0.62 0.01 250)",
                          border: "1px solid transparent"
                        },
                        children: range.label
                      },
                      range.label
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Separator,
                    {
                      style: { background: "oklch(0.22 0.012 260 / 0.5)" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        className: "text-xs font-semibold uppercase tracking-wide mb-2.5 block",
                        style: { color: "oklch(0.55 0.01 250)" },
                        children: "Job Type"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: JOB_TYPES.map((jt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-2.5",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Checkbox,
                            {
                              id: `type-${jt.value}`,
                              checked: selectedTypes.has(jt.value),
                              onCheckedChange: () => toggleType(jt.value),
                              "data-ocid": `job_search.type_filter.${jt.value}`
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Label,
                            {
                              htmlFor: `type-${jt.value}`,
                              className: "text-sm font-normal cursor-pointer text-muted-foreground",
                              children: jt.label
                            }
                          )
                        ]
                      },
                      jt.value
                    )) })
                  ] })
                ] })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between px-4 py-2.5 rounded-xl",
            style: {
              background: "oklch(0.14 0.009 255 / 0.7)",
              border: "1px solid oklch(0.25 0.012 260 / 0.4)",
              backdropFilter: "blur(8px)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: filtered.length }),
                " ",
                "jobs found"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Sort by" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: sortBy,
                    onValueChange: (v) => setSortBy(v),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          className: "h-7 text-xs w-28",
                          "data-ocid": "job_search.sort_by.select",
                          style: {
                            background: "oklch(0.18 0.012 260)",
                            border: "1px solid oklch(0.3 0.012 260 / 0.5)"
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "date", children: "Newest" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "salary", children: "Salary" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "relevance", children: "Relevance" })
                      ] })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        paginated.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyState,
          {
            icon: Briefcase,
            title: "No jobs found",
            description: "Try adjusting your search or filters to discover more opportunities.",
            action: { label: "Clear Filters", onClick: clearFilters }
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "space-y-3",
            "data-ocid": "job_search.results.list",
            children: paginated.map((job, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => navigate({
                  to: "/employee/jobs/$jobId",
                  params: { jobId: job.jobId.toString() }
                }),
                className: "w-full text-left block",
                "data-ocid": `job_search.result.item.${(page - 1) * PAGE_SIZE + i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(JobCard, { job, index: (page - 1) * PAGE_SIZE + i })
              },
              job.jobId.toString()
            ))
          }
        ),
        totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-center gap-2 pt-4",
            "data-ocid": "job_search.pagination",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setPage((p) => Math.max(1, p - 1)),
                  disabled: page === 1,
                  "data-ocid": "job_search.pagination_prev",
                  className: "p-2 rounded-lg transition-smooth disabled:opacity-30",
                  style: {
                    background: "oklch(0.18 0.012 260)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.5)",
                    color: "oklch(0.75 0.01 250)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
                }
              ),
              Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setPage(p),
                    "data-ocid": `job_search.page.${p}`,
                    className: "w-8 h-8 rounded-lg text-sm font-medium transition-smooth",
                    style: p === page ? {
                      background: "linear-gradient(135deg, oklch(0.55 0.18 280), oklch(0.72 0.22 190))",
                      color: "white",
                      boxShadow: "0 0 12px oklch(0.72 0.22 190 / 0.4)"
                    } : {
                      background: "oklch(0.18 0.012 260)",
                      border: "1px solid oklch(0.28 0.015 260 / 0.5)",
                      color: "oklch(0.62 0.01 250)"
                    },
                    children: p
                  },
                  p
                )
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
                  disabled: page === totalPages,
                  "data-ocid": "job_search.pagination_next",
                  className: "p-2 rounded-lg transition-smooth disabled:opacity-30",
                  style: {
                    background: "oklch(0.18 0.012 260)",
                    border: "1px solid oklch(0.28 0.015 260 / 0.5)",
                    color: "oklch(0.75 0.01 250)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
                }
              )
            ]
          }
        )
      ] })
    ] }) })
  ] }) }) });
}
export {
  JobSearchPage as default
};
