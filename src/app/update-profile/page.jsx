"use client";
import { authClient } from "@/lib/auth-client";
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdSunny } from "react-icons/md";
import { toast } from "react-toastify";

const UpdateProfilePage = () => {
    const router = useRouter();

    const { data: session } = authClient.useSession();

    const onSubmit = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        let image = event.target.image.value;

        if (image.length === 0) {
            image = session?.user?.image;
        }

        const { data, error } = await authClient.updateUser({
            name,
            image,
        });
        if (!error) {
            toast.success("Profile Information Updated Successfully!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
            setTimeout(() => {
                router.replace("/profile");
            }, 500);
        }
    };
    return (
        <div>
            <div className="mx-auto max-w-sm">
                <div className="flex flex-col items-center gap-2 mb-8">
                    <MdSunny size={32} />
                    <h2 className="font-bold text-xl">Personal Information</h2>
                    <p>Update your personal details</p>
                </div>

                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        name="name"
                        isRequired
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input
                            placeholder="Enter your full name"
                            className="bg-gray-200 rounded-lg text-base shadow-none"
                        />
                        <FieldError />
                    </TextField>
                    <TextField
                        name="image"
                        isRequired
                        validate={(value) => {
                            const urlPattern =
                                /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;

                            if (value && !urlPattern.test(value)) {
                                return "Please enter a valid URL (e.g., https://example.com/image.jpg)";
                            }

                            return null;
                        }}
                    >
                        <Label>Your Photo URL</Label>
                        <Input
                            placeholder="https://example.com/your-photo.jpg"
                            className="bg-gray-200 rounded-lg text-base shadow-none"
                        />
                        <FieldError />
                    </TextField>

                    <div>
                        <Button
                            type="submit"
                            className="w-full h-10 bg-orange-400 rounded-lg font-semibold"
                        >
                            Update
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default UpdateProfilePage;
