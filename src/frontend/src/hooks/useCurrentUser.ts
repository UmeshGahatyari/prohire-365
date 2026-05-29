import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import type { UserRole } from "../types";

export interface CurrentUser {
  isAuthenticated: boolean;
  isLoading: boolean;
  principalId: string | null;
  role: UserRole | null;
  name: string | null;
  setRole: (role: UserRole) => void;
}

const ROLE_STORAGE_KEY = "prohire365_role";
const NAME_STORAGE_KEY = "prohire365_name";

export function useCurrentUser(): CurrentUser {
  const { identity, loginStatus } = useInternetIdentity();

  const isLoading = loginStatus === "logging-in";
  const isAuthenticated = loginStatus === "success" && !!identity;

  const principalId = identity ? identity.getPrincipal().toString() : null;

  const role = isAuthenticated
    ? (localStorage.getItem(ROLE_STORAGE_KEY) as UserRole | null)
    : null;

  const name = isAuthenticated ? localStorage.getItem(NAME_STORAGE_KEY) : null;

  const setRole = (newRole: UserRole) => {
    localStorage.setItem(ROLE_STORAGE_KEY, newRole);
  };

  return {
    isAuthenticated,
    isLoading,
    principalId,
    role,
    name,
    setRole,
  };
}
