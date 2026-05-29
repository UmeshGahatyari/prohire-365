import { j as jsxRuntimeExports, ah as LoadingSpinner, ai as Navigate } from "./index-ByYMEgVg.js";
import { u as useAuth } from "./useAuth-OLjIzFBE.js";
import { u as useCurrentUser } from "./useCurrentUser-BEN-7rG2.js";
const roleDashboard = {
  employee: "/employee",
  employer: "/employer",
  admin: "/admin"
};
function ProtectedRoute({
  children,
  requiredRole
}) {
  const { isAuthenticated, isLoading } = useAuth();
  const { role } = useCurrentUser();
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { size: "lg", label: "Verifying access..." }) });
  }
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/login" });
  }
  if (role && role !== requiredRole) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: roleDashboard[role] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
export {
  ProtectedRoute as P
};
