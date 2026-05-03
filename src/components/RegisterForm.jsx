"use client";
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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const RegisterForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

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

        if (error?.message) {
            toast.error(error?.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
        if (!error) {
            router.push("/login");
        }
    };
    return (
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
            <TextField name="image" isRequired type="url">
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
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
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
                                isVisible ? "Hide password" : "Show password"
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
                    className="w-full h-10 bg-orange-400 rounded-lg font-semibold"
                >
                    Register Account
                </Button>
            </div>
        </Form>
    );
};

export default RegisterForm;
