import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const EmployeeDashboard = lazy(
  () => import("./pages/employee/EmployeeDashboard"),
);
const JobSearchPage = lazy(() => import("./pages/employee/JobSearchPage"));
const JobDetailPage = lazy(() => import("./pages/employee/JobDetailPage"));
const MyApplicationsPage = lazy(
  () => import("./pages/employee/MyApplicationsPage"),
);
const SavedJobsPage = lazy(() => import("./pages/employee/SavedJobsPage"));
const EmployeeProfilePage = lazy(
  () => import("./pages/employee/EmployeeProfilePage"),
);
const EmployerDashboard = lazy(
  () => import("./pages/employer/EmployerDashboard"),
);
const PostJobPage = lazy(() => import("./pages/employer/PostJobPage"));
const MyJobsPage = lazy(() => import("./pages/employer/MyJobsPage"));
const EditJobPage = lazy(() => import("./pages/employer/EditJobPage"));
const JobApplicantsPage = lazy(
  () => import("./pages/employer/JobApplicantsPage"),
);
const CandidateSearchPage = lazy(
  () => import("./pages/employer/CandidateSearchPage"),
);
const EmployerAnalyticsPage = lazy(
  () => import("./pages/employer/EmployerAnalyticsPage"),
);
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const UserManagementPage = lazy(
  () => import("./pages/admin/UserManagementPage"),
);
const JobModerationPage = lazy(() => import("./pages/admin/JobModerationPage"));
const AdminAnalyticsPage = lazy(
  () => import("./pages/admin/AdminAnalyticsPage"),
);
const AdminSettingsPage = lazy(() => import("./pages/admin/AdminSettingsPage"));

const rootRoute = createRootRoute({
  component: () => (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-background">
          <LoadingSpinner size="lg" label="Loading ProHire 365..." />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup",
  component: SignupPage,
});

const employeeDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employee",
  component: EmployeeDashboard,
});

const employeeJobsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employee/jobs",
  component: JobSearchPage,
});

const employeeJobDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employee/jobs/$jobId",
  component: JobDetailPage,
});

const employeeApplicationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employee/applications",
  component: MyApplicationsPage,
});

const employeeSavedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employee/saved",
  component: SavedJobsPage,
});

const employeeProfileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employee/profile",
  component: EmployeeProfilePage,
});

const employerDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employer",
  component: EmployerDashboard,
});

const employerPostJobRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employer/post-job",
  component: PostJobPage,
});

const employerJobsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employer/jobs",
  component: MyJobsPage,
});

const employerEditJobRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employer/jobs/$jobId/edit",
  component: EditJobPage,
});

const employerJobApplicantsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employer/jobs/$jobId/applicants",
  component: JobApplicantsPage,
});

const employerCandidatesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employer/candidates",
  component: CandidateSearchPage,
});

const employerAnalyticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employer/analytics",
  component: EmployerAnalyticsPage,
});

const adminDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminDashboard,
});

const adminUsersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/users",
  component: UserManagementPage,
});

const adminJobsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/jobs",
  component: JobModerationPage,
});

const adminAnalyticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/analytics",
  component: AdminAnalyticsPage,
});

const adminSettingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/settings",
  component: AdminSettingsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  signupRoute,
  employeeDashboardRoute,
  employeeJobsRoute,
  employeeJobDetailRoute,
  employeeApplicationsRoute,
  employeeSavedRoute,
  employeeProfileRoute,
  employerDashboardRoute,
  employerPostJobRoute,
  employerJobsRoute,
  employerEditJobRoute,
  employerJobApplicantsRoute,
  employerCandidatesRoute,
  employerAnalyticsRoute,
  adminDashboardRoute,
  adminUsersRoute,
  adminJobsRoute,
  adminAnalyticsRoute,
  adminSettingsRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
