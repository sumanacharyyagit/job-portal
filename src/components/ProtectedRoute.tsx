import { useUser } from "@clerk/clerk-react";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

type ProtectedRouteProps = {
    children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isSignedIn, isLoaded, user } = useUser();
    const { pathname } = useLocation();

    if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
        return <Navigate to={"/?sign-in=true"} />;
    }

    if (
        user !== undefined &&
        !user.unsafeMetadata.role &&
        pathname !== "/onboarding"
    )
        return <Navigate to={"/onboarding"} />;

    return <>{children}</>;
};

export default ProtectedRoute;
