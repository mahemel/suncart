"use client";
import { useState } from "react";

import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Spinner } from "@heroui/react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session, isPending } = authClient.useSession();

    const userSignedIn = session?.user;

    console.log(session?.user);

    const handleUserSignOut = async () => {
        await authClient.signOut();
    };

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-black/10 bg-white">
            <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
                <div className="flex items-center gap-2">
                    <button
                        className="md:hidden px-0"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    <div className="flex items-center gap-3">
                        <Link href={"/"}>
                            <Image
                                src={"/sunCart-logo.svg"}
                                width={130}
                                height={32}
                                alt="Site Logo"
                                className="w-25 sm:w-32.5 h-auto"
                            />
                        </Link>
                    </div>
                </div>

                <ul className="hidden items-center gap-4 md:flex text-sm lg:text-base font-medium">
                    <NavLinks userSignedIn={userSignedIn}></NavLinks>
                </ul>

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
                                className="btn bg-linear-to-r from-[#c21500] via-[#ffc500] to-[#c21500] font-semibold text-sm leading-8 sm:leading-9 px-3 rounded-full"
                                href={"/register"}
                            >
                                Register
                            </Link>
                        </div>
                    ) : (
                        <div className="flex gap-2 items-center">
                            <Avatar>
                                <Avatar.Image
                                    alt={userSignedIn?.name}
                                    src={userSignedIn?.image}
                                    referrerPolicy="no-referrer"
                                />
                                <Avatar.Fallback>
                                    {userSignedIn?.name}
                                </Avatar.Fallback>
                            </Avatar>

                            <Button
                                onClick={handleUserSignOut}
                                variant="danger"
                            >
                                Sign Out
                            </Button>
                        </div>
                    )}
                </div>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4 text-lg font-medium">
                        <NavLinks userSignedIn={userSignedIn}></NavLinks>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
