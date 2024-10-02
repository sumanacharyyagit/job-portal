import CustomBarLoader from "@/components/CustomBarLoader";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
    const { user, isLoaded } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.unsafeMetadata.role) {
            navigate(
                user?.unsafeMetadata.role === "recruiter"
                    ? "/post-job"
                    : "/jobs"
            );
        }
    }, [user, navigate]);

    if (!isLoaded) {
        return <CustomBarLoader />;
    }

    const handleRoleSelection = async (role: "candidate" | "recruiter") => {
        await user
            ?.update({
                unsafeMetadata: { role },
            })
            .then(() => {
                navigate(role === "recruiter" ? "/post-job" : "/jobs");
            })
            .catch((error) => console.log("Error: ", error));
    };

    return (
        <div className="flex flex-col items-center justify-center mt-40">
            <h2 className="gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter">
                I am a...
            </h2>
            <div className="mt-16 grid grid-cols-2 gap-4 w-full md:px-40">
                <Button
                    variant="blue"
                    className="h-36 text-2xl"
                    onClick={() => handleRoleSelection("candidate")}
                >
                    Candidate
                </Button>
                <Button
                    variant="destructive"
                    className="h-36 text-2xl"
                    onClick={() => handleRoleSelection("recruiter")}
                >
                    Recruiter
                </Button>
            </div>
        </div>
    );
};

export default Onboarding;
