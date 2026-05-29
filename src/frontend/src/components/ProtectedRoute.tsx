import { Navigate } from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";
import { useCurrentUser } from "../hooks/useCurrentUser";
import type { UserRole } from "../types";
import { LoadingSpinner } from "./LoadingSpinner";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole: UserRole;
}

const roleDashboard: Record<UserRole, string> = {
  employee: "/employee",
  employer: "/employer",
  admin: "/admin",
};

export function ProtectedRoute({
  children,
  requiredRole,
}: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const { role } = useCurrentUser();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <LoadingSpinner size="lg" label="Verifying access..." />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (role && role !== requiredRole) {
    return <Navigate to={roleDashboard[role] as never} />;
  }

  return <>{children}</>;
}
