import { c as createLucideIcon } from "./useAuth-OLjIzFBE.js";
import { Z as useInternetIdentity } from "./index-ByYMEgVg.js";
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
const ROLE_STORAGE_KEY = "prohire365_role";
const NAME_STORAGE_KEY = "prohire365_name";
function useCurrentUser() {
  const { identity, loginStatus } = useInternetIdentity();
  const isLoading = loginStatus === "logging-in";
  const isAuthenticated = loginStatus === "success" && !!identity;
  const principalId = identity ? identity.getPrincipal().toString() : null;
  const role = isAuthenticated ? localStorage.getItem(ROLE_STORAGE_KEY) : null;
  const name = isAuthenticated ? localStorage.getItem(NAME_STORAGE_KEY) : null;
  const setRole = (newRole) => {
    localStorage.setItem(ROLE_STORAGE_KEY, newRole);
  };
  return {
    isAuthenticated,
    isLoading,
    principalId,
    role,
    name,
    setRole
  };
}
export {
  Shield as S,
  useCurrentUser as u
};
