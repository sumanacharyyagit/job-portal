import { Link, useSearchParams } from "react-router-dom";
import {
    SignedIn,
    SignedOut,
    SignIn,
    UserButton,
    useUser,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";
import { MouseEvent, useEffect, useState } from "react";

const Header = () => {
    const { user } = useUser();
    const [isShowSigninModal, setIsShowSigninModal] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useSearchParams();

    useEffect(() => {
        if (searchQuery.get("sign-in") === "true") {
            setIsShowSigninModal(true);
        }
    }, [searchQuery]);

    const onOverlayClick = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) => {
        if (e.target === e.currentTarget) {
            setIsShowSigninModal(false);
            setSearchQuery({});
        }
    };

    return (
        <>
            <nav className="py-4 flex justify-between items-center">
                <Link to="/">
                    <img className="h-20" src={"./logo.png"} />
                </Link>
                <SignedOut>
                    {/* <SignInButton /> */}
                    <Button
                        variant={"outline"}
                        onClick={() => setIsShowSigninModal(true)}
                    >
                        Login
                    </Button>
                </SignedOut>
                <SignedIn>
                    <div className="flex flex-row justify-center items-center gap-8">
                        {user?.unsafeMetadata?.role === "recruiter" && (
                            <Link to={"/post-job"}>
                                <Button
                                    variant={"destructive"}
                                    className="rounded-full"
                                >
                                    <PenBox size={20} className="mr-2" />
                                    Post a Job
                                </Button>
                            </Link>
                        )}
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-11 h-11",
                                },
                            }}
                        >
                            <UserButton.MenuItems>
                                <UserButton.Link
                                    label="My Jobs"
                                    labelIcon={<BriefcaseBusiness size={16} />}
                                    href="/my-jobs"
                                />
                            </UserButton.MenuItems>
                            <UserButton.MenuItems>
                                <UserButton.Link
                                    label="Saved Jobs"
                                    labelIcon={<Heart size={16} />}
                                    href="/saved-jobs"
                                />
                            </UserButton.MenuItems>
                        </UserButton>
                    </div>
                </SignedIn>
            </nav>
            {isShowSigninModal && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
                    onClick={onOverlayClick}
                >
                    <SignIn
                        signUpForceRedirectUrl={"/onboarding"}
                        fallbackRedirectUrl={"/onboarding"}
                    />
                </div>
            )}
        </>
    );
};

export default Header;
