import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Spinner } from "@heroui/react";
import Link from "next/link";

const NavRight = ({ userSignedIn, isPending }) => {
    const handleUserSignOut = async () => {
        await authClient.signOut();
    };

    return (
        <div className="flex">
            {isPending ? (
                <div className="flex relative">
                    <Spinner />
                </div>
            ) : !userSignedIn ? (
                <div className="items-center gap-2 flex">
                    <Link
                        className="btn  bg-linear-to-r from-[#134E5E] via-[#71B280] to-[#134E5E] font-semibold text-sm leading-8 sm:leading-9 px-3 rounded-full"
                        href={"/login"}
                    >
                        Login
                    </Link>

                    <Link
                        className="btn  bg-linear-to-r from-[#c21500] via-[#ffc500] to-[#c21500] font-semibold text-sm leading-8 sm:leading-9 px-3 rounded-full"
                        href={"/register"}
                    >
                        Register
                    </Link>
                </div>
            ) : (
                <div className="flex gap-4 items-center">
                    <Avatar>
                        <Avatar.Image
                            alt={userSignedIn?.name}
                            src={userSignedIn?.image}
                            referrerPolicy="no-referrer"
                        />
                        <Avatar.Fallback>{userSignedIn?.name}</Avatar.Fallback>
                    </Avatar>

                    <Button onClick={handleUserSignOut}>Sign Out</Button>
                </div>
            )}
        </div>
    );
};

export default NavRight;
