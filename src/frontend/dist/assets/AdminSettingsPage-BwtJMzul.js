import { r as reactExports, j as jsxRuntimeExports } from "./index-ByYMEgVg.js";
import { u as useControllableState, a as Primitive, c as composeEventHandlers, b as useSize, d as createContextScope, L as Layout, t as Settings, B as Button } from "./Layout-JeuDnHZC.js";
import { I as Input } from "./input-Bnuh1-dr.js";
import { L as Label } from "./label-Bzq5IhRt.js";
import { S as Separator } from "./separator-CEt-SyGN.js";
import { c as createLucideIcon, a as useComposedRefs, b as cn } from "./useAuth-OLjIzFBE.js";
import { u as usePrevious } from "./index-DOPMB26m.js";
import { T as Textarea } from "./textarea-Qe8QtrpP.js";
import { u as ue } from "./index-DbnOXoCg.js";
import { P as PageHeader } from "./PageHeader-CuM3Df3J.js";
import { P as ProtectedRoute } from "./ProtectedRoute-BSLymTUa.js";
import { S as Save } from "./save-CJH1Cj4y.js";
import { S as Shield } from "./useCurrentUser-BEN-7rG2.js";
import "./sparkles-mukiyukd.js";
import "./index-DiKJEy-t.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
];
const Bell = createLucideIcon("bell", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$1);
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
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
];
const Palette = createLucideIcon("palette", __iconNode);
var SWITCH_NAME = "Switch";
var [createSwitchContext] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSwitch,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form,
      ...switchProps
    } = props;
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked ?? false,
      onChange: onCheckedChange,
      caller: SWITCH_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-required": required,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...switchProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchBubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
      }
    );
  }
);
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = reactExports.forwardRef(
  ({
    __scopeSwitch,
    control,
    checked,
    bubbles = true,
    ...props
  }, forwardedRef) => {
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var Root = Switch$1;
var Thumb = SwitchThumb;
function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
const sectionStyle = {
  background: "oklch(0.14 0.009 255 / 0.8)",
  border: "1px solid oklch(0.28 0.015 260 / 0.35)",
  backdropFilter: "blur(10px)"
};
function SettingsSection({
  icon: Icon,
  title,
  description,
  iconGradient,
  iconBorder,
  iconColor,
  children,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl overflow-hidden",
      style: sectionStyle,
      "data-ocid": ocid,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
              style: {
                background: iconGradient,
                border: `1px solid ${iconBorder}`
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4", style: { color: iconColor } })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm text-foreground", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: description })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { style: { background: "oklch(0.28 0.015 260 / 0.3)" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children })
      ]
    }
  );
}
function AdminSettingsPage() {
  const [settings, setSettings] = reactExports.useState({
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
    platformDescription: "ProHire 365 connects talented professionals with top employers across industries. Our platform provides a seamless hiring experience for both candidates and companies."
  });
  const [saving, setSaving] = reactExports.useState(false);
  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
    ue.success("Settings saved successfully", { duration: 4e3 });
  };
  const updateField = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { requiredRole: "admin", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { showSidebar: true, sidebarRole: "admin", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-3xl mx-auto space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Platform Settings",
        description: "Configure platform preferences, notifications, and policies",
        icon: Settings,
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            onClick: handleSave,
            disabled: saving,
            className: "gap-2 rounded-xl font-semibold",
            style: {
              background: "linear-gradient(135deg, oklch(0.65 0.22 190) 0%, oklch(0.55 0.2 200) 100%)",
              color: "oklch(0.08 0.01 250)",
              border: "none",
              boxShadow: "0 4px 16px oklch(0.65 0.22 190 / 0.3)"
            },
            "data-ocid": "settings.save_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
              saving ? "Saving…" : "Save Changes"
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SettingsSection,
      {
        icon: Globe,
        title: "General",
        description: "Platform identity and contact information",
        iconGradient: "oklch(0.5 0.16 280 / 0.2)",
        iconBorder: "oklch(0.5 0.16 280 / 0.35)",
        iconColor: "oklch(0.78 0.14 280)",
        ocid: "settings.general.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "platformName", className: "text-sm font-medium", children: "Platform Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "platformName",
                value: settings.platformName,
                onChange: (e) => updateField("platformName", e.target.value),
                placeholder: "ProHire 365",
                className: "bg-transparent border-border/50 focus:border-primary/50 rounded-xl",
                "data-ocid": "settings.platform_name.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "tagline", className: "text-sm font-medium", children: "Tagline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "tagline",
                value: settings.tagline,
                onChange: (e) => updateField("tagline", e.target.value),
                placeholder: "Platform tagline",
                className: "bg-transparent border-border/50 focus:border-primary/50 rounded-xl",
                "data-ocid": "settings.tagline.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "supportEmail", className: "text-sm font-medium", children: "Support Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "supportEmail",
                type: "email",
                value: settings.supportEmail,
                onChange: (e) => updateField("supportEmail", e.target.value),
                placeholder: "support@yourplatform.com",
                className: "bg-transparent border-border/50 focus:border-primary/50 rounded-xl",
                "data-ocid": "settings.support_email.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "platformDescription",
                className: "text-sm font-medium",
                children: "Platform Description"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "platformDescription",
                value: settings.platformDescription,
                onChange: (e) => updateField("platformDescription", e.target.value),
                rows: 3,
                className: "resize-none bg-transparent border-border/50 focus:border-primary/50 rounded-xl",
                "data-ocid": "settings.description.textarea"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SettingsSection,
      {
        icon: Bell,
        title: "Email Notifications",
        description: "Control which events trigger admin email alerts",
        iconGradient: "oklch(0.48 0.15 310 / 0.2)",
        iconBorder: "oklch(0.48 0.15 310 / 0.35)",
        iconColor: "oklch(0.76 0.12 310)",
        ocid: "settings.notifications.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
          {
            key: "emailNewSignup",
            label: "New User Signup",
            description: "Notify when a new user registers"
          },
          {
            key: "emailNewJob",
            label: "New Job Posted",
            description: "Notify when a new job listing is created"
          },
          {
            key: "emailJobApproval",
            label: "Job Approval Requests",
            description: "Notify when a job requires approval"
          },
          {
            key: "emailWeeklyReport",
            label: "Weekly Summary Report",
            description: "Receive weekly platform activity digest"
          }
        ].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: item.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: settings[item.key],
                onCheckedChange: (v) => updateField(item.key, v),
                "data-ocid": `settings.${item.key}.switch`
              }
            )
          ] }),
          idx < 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Separator,
            {
              className: "mt-4",
              style: { background: "oklch(0.28 0.015 260 / 0.2)" }
            }
          )
        ] }, item.key)) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SettingsSection,
      {
        icon: Shield,
        title: "Platform Policies",
        description: "Control moderation and approval workflows",
        iconGradient: "oklch(0.65 0.22 190 / 0.2)",
        iconBorder: "oklch(0.65 0.22 190 / 0.35)",
        iconColor: "oklch(0.72 0.22 190)",
        ocid: "settings.policies.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          [
            {
              key: "requireEmployerApproval",
              label: "Require Employer Approval",
              description: "New employers must be manually approved before posting jobs"
            },
            {
              key: "requireJobApproval",
              label: "Require Job Approval",
              description: "All new job postings must be approved before going live"
            },
            {
              key: "maintenanceMode",
              label: "Maintenance Mode",
              description: "Temporarily disable public access to the platform",
              danger: true
            }
          ].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `flex items-center justify-between gap-4 ${item.danger && settings[item.key] ? "p-3 rounded-xl" : ""}`,
                style: item.danger && settings[item.key] ? {
                  background: "oklch(0.55 0.2 28 / 0.08)",
                  border: "1px solid oklch(0.55 0.2 28 / 0.25)"
                } : {},
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: `text-sm font-medium ${item.danger && settings[item.key] ? "" : "text-foreground"}`,
                        style: item.danger && settings[item.key] ? { color: "oklch(0.72 0.18 28)" } : {},
                        children: item.label
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: item.description })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: settings[item.key],
                      onCheckedChange: (v) => updateField(item.key, v),
                      "data-ocid": `settings.${item.key}.switch`
                    }
                  )
                ]
              }
            ),
            idx < 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Separator,
              {
                className: "mt-4",
                style: { background: "oklch(0.28 0.015 260 / 0.2)" }
              }
            )
          ] }, item.key)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Separator,
            {
              className: "my-2",
              style: { background: "oklch(0.28 0.015 260 / 0.2)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "maxJobs", className: "text-sm font-medium", children: "Max Jobs per Employer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "maxJobs",
                type: "number",
                value: settings.maxJobsPerEmployer,
                onChange: (e) => updateField("maxJobsPerEmployer", e.target.value),
                className: "w-32 bg-transparent border-border/50 focus:border-primary/50 rounded-xl",
                min: "1",
                max: "999",
                "data-ocid": "settings.max_jobs.input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Maximum active job postings an employer can maintain at one time." })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SettingsSection,
      {
        icon: Palette,
        title: "Appearance",
        description: "Theme and display preferences",
        iconGradient: "oklch(0.42 0.16 220 / 0.2)",
        iconBorder: "oklch(0.42 0.16 220 / 0.35)",
        iconColor: "oklch(0.72 0.14 220)",
        ocid: "settings.appearance.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Theme is controlled per-user via the toggle in the top navigation bar. Light and dark mode are both supported." })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-2 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        type: "button",
        onClick: handleSave,
        disabled: saving,
        size: "lg",
        className: "gap-2 rounded-xl font-semibold",
        style: {
          background: "linear-gradient(135deg, oklch(0.65 0.22 190) 0%, oklch(0.55 0.2 200) 100%)",
          color: "oklch(0.08 0.01 250)",
          border: "none",
          boxShadow: "0 4px 16px oklch(0.65 0.22 190 / 0.3)"
        },
        "data-ocid": "settings.save_bottom_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
          saving ? "Saving…" : "Save All Settings"
        ]
      }
    ) })
  ] }) }) });
}
export {
  AdminSettingsPage as default
};
