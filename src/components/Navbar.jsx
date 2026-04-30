"use client";
import { useState } from "react";

import Image from "next/image";
import NavLinks from "./NavLinks";
import NavRight from "./NavRight";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-black/10">
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
                    <NavLinks></NavLinks>
                </ul>

                <NavRight></NavRight>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4 text-lg font-medium">
                        <NavLinks></NavLinks>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
