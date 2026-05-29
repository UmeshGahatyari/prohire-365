import { useInternetIdentity } from "@caffeineai/core-infrastructure";

export interface AuthInfo {
  isAuthenticated: boolean;
  isLoading: boolean;
  identity: ReturnType<typeof useInternetIdentity>["identity"];
  login: () => void;
  logout: () => void;
}

export function useAuth(): AuthInfo {
  const { identity, login, clear, loginStatus } = useInternetIdentity();

  const isLoading = loginStatus === "logging-in";
  const isAuthenticated = loginStatus === "success" && !!identity;

  return {
    isAuthenticated,
    isLoading,
    identity,
    login,
    logout: clear,
  };
}
