import { auth } from "@/lib/auth";
import { getInitials } from "@/lib/data";
import { Avatar, Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaPen } from "react-icons/fa";

export const metadata = {
    title: "SunCart | My Profile",
};

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    let altName = "";
    if (session?.user) {
        altName = getInitials(session?.user?.name);
    }

    if (!session) {
        redirect("/login?callbackUrl=/profile");
    }

    return (
        <div>
            <div className="flex justify-center mb-2 animate__animated animate__fadeIn">
                <h2 className="text-center text-3xl font-black bg-linear-to-r from-yellow-700 via-orange-500 to-purple-700 text-transparent bg-clip-text">
                    Your Profile
                </h2>
            </div>
            <p className="text-center mb-7">
                Manage your account and view your orders
            </p>

            <Card className="w-full max-w-120 mx-auto p-0 rounded-none shadow-none space-y-5">
                <div className="relative w-50 h-50 mx-auto">
                    <Avatar className="w-50 h-50 block">
                        <Avatar.Image
                            alt={altName}
                            src={session?.user?.image}
                            referrerPolicy="no-referrer"
                        />
                        <Avatar.Fallback className="text-4xl">
                            {altName}
                        </Avatar.Fallback>
                    </Avatar>
                </div>

                <div className="text-center space-y-5">
                    <Card.Header className="text-center space-y-5">
                        <Card.Title className="text-2xl">
                            {session.user.name}
                        </Card.Title>
                        <Card.Description className="text-xl">
                            {session.user.email}
                        </Card.Description>
                    </Card.Header>
                    <p>
                        Member Since:
                        {new Date(session.user.createdAt).toLocaleDateString(
                            "en-US",
                            {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                            },
                        )}
                    </p>
                </div>
            </Card>

            <div className="flex justify-center mt-8">
                <Link href={"/update-profile"}>
                    <Button variant="secondary">
                        <FaPen />
                        <span className="text-base">
                            Update Profile Information
                        </span>
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProfilePage;
