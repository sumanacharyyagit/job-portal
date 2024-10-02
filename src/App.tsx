import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import AppLayout from "./layouts/app-layout";
import JobPage from "./pages/Job";
import JobListing from "./pages/JobListing";
import LandingPage from "./pages/LandingPage";
import MyJobs from "./pages/MyJobs";
import Onboarding from "./pages/Onboarding";
import PostJob from "./pages/PostJob";
import SavedJob from "./pages/SavedJob";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/onboarding",
                element: (
                    <ProtectedRoute>
                        <Onboarding />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/jobs",
                element: (
                    <ProtectedRoute>
                        <JobListing />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/job/:id",
                element: (
                    <ProtectedRoute>
                        <JobPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/post-job",
                element: (
                    <ProtectedRoute>
                        <PostJob />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/saved-jobs",
                element: (
                    <ProtectedRoute>
                        <SavedJob />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/my-jobs",
                element: (
                    <ProtectedRoute>
                        <MyJobs />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
