"use client";
import LoginWithGoogle from "@/components/LoginWithGoogle";
import { authClient } from "@/lib/auth-client";
import {
    Button,
    FieldError,
    Form,
    Input,
    InputGroup,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { toast } from "react-toastify";

const RegisterPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const image = event.target.image.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name,
            image,
            email,
            password,
            callbackURL: "/login",
            createSession: false,
        });

        if (!error) {
            redirect("/login");
        }
        if (error?.message) {
            toast.error(error?.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    };

    return (
        <div className="mx-auto max-w-sm border rounded-xl p-6">
            <div className="flex flex-col items-center gap-2 mb-8">
                <MdSunny size={32} />
                <h2 className="font-bold text-xl">Register Account</h2>
                <p>Join SunCart for exclusive summer deals</p>
            </div>
            <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="name"
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
                        if (!value) return "Photo URL is required";
                        const urlPattern =
                            /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;
                        if (!urlPattern.test(value)) {
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

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                value,
                            )
                        ) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input
                        placeholder="you@example.com"
                        className="bg-gray-200 rounded-lg text-base shadow-none"
                    />
                    <FieldError />
                </TextField>

                <TextField
                    className="w-full"
                    name="password"
                    isRequired
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <InputGroup className="bg-gray-200 rounded-lg text-base w-full shadow-none">
                        <InputGroup.Input
                            className="text-base"
                            type={isVisible ? "text" : "password"}
                            placeholder="Enter your password"
                        />
                        <InputGroup.Suffix className="pr-0">
                            <Button
                                isIconOnly
                                aria-label={
                                    isVisible
                                        ? "Hide password"
                                        : "Show password"
                                }
                                size="sm"
                                variant="ghost"
                                onPress={() => setIsVisible(!isVisible)}
                            >
                                {isVisible ? (
                                    <IoEyeOutline className="size-4" />
                                ) : (
                                    <IoIosEyeOff className="size-4" />
                                )}
                            </Button>
                        </InputGroup.Suffix>
                    </InputGroup>
                    <FieldError />
                </TextField>

                <div>
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-10 bg-orange-400 rounded-lg font-semibold"
                    >
                        {isLoading ? "Registering..." : "Register Account"}
                    </Button>
                </div>
            </Form>

            <div className="flex items-center gap-4 my-5">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-sm text-gray-500 font-medium uppercase">
                    Or continue with
                </span>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <LoginWithGoogle></LoginWithGoogle>

            <p className="text-center mt-4 flex gap-1 justify-center">
                Already have an account?
                <Link href={"/login"} className="text-orange-500">
                    Sign in
                </Link>
            </p>
        </div>
    );
};

export default RegisterPage;
