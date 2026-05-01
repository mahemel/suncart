"use client";
import {
    Button,
    FieldError,
    Form,
    Input,
    InputGroup,
    Label,
    TextField,
} from "@heroui/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosEyeOff } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { MdSunny } from "react-icons/md";

const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div className="mx-auto max-w-sm border rounded-xl p-6">
            <div className="flex flex-col items-center gap-2 mb-8">
                <MdSunny size={32} />
                <h2 className="font-bold text-xl">Welcome Back</h2>
                <p>Sign in to your SunCart account</p>
            </div>
            <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
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
                        if (!value || value.length === 0) {
                            return "Please enter your password";
                        }
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
                        className="w-full h-10 bg-orange-400 rounded-lg font-semibold"
                    >
                        Sign In
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
            <Button className="w-full h-10 rounded-lg" variant="tertiary">
                <FcGoogle icon="devicon:google" />
                Sign in with Google
            </Button>
        </div>
    );
};

export default LoginPage;
