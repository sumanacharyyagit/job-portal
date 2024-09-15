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
                element: <Onboarding />,
            },
            {
                path: "/joblisting",
                element: <JobListing />,
            },
            {
                path: "/job/:id",
                element: <JobPage />,
            },
            {
                path: "/post-job",
                element: <PostJob />,
            },
            {
                path: "/saved-job",
                element: <SavedJob />,
            },
            {
                path: "/my-jobs",
                element: <MyJobs />,
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
