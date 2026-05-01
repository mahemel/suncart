import { Button, Card } from "@heroui/react";
import Image from "next/image";

const ProfilePage = () => {
    return (
        <div>
            <div className="flex justify-center mb-2">
                <h2 className="text-center text-3xl font-black bg-linear-to-r from-yellow-700 via-orange-500 to-purple-700 text-transparent bg-clip-text">
                    Your Profile
                </h2>
            </div>
            <p className="text-center mb-7">
                Manage your account and view your orders
            </p>

            <Card className="w-full max-w-120 mx-auto p-0 rounded-none shadow-none">
                <div className="relative w-50 h-50 mx-auto">
                    <Image
                        src={"/coconut-tree.jpg"}
                        className="object-cover rounded-full w-50 h-50"
                        width={200}
                        height={200}
                        alt="Mahbub Hasan"
                    />
                </div>

                <div className="gap-3 text-center">
                    <Card.Header className="gap-1">
                        <Card.Title>Mahbub Hasan</Card.Title>
                        <Card.Description>
                            john.doe@example.com
                        </Card.Description>
                    </Card.Header>
                    <p>Member Since: 2026/04/30</p>
                </div>
            </Card>
        </div>
    );
};

export default ProfilePage;
