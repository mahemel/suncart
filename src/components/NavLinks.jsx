import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ userSignedIn }) => {
    const pathname = usePathname();

    return (
        <>
            <li>
                <Link
                    className={`${pathname === "/" ? "text-[#FF6900]" : ""} hover:text-[#FF6900] duration-300`}
                    href={"/"}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    className={`${pathname === "/products" ? "text-[#FF6900]" : ""} hover:text-[#FF6900] duration-300`}
                    href={"/products"}
                >
                    Products
                </Link>
            </li>

            {userSignedIn && (
                <li>
                    <Link
                        className={`${pathname === "/profile" ? "text-[#FF6900]" : ""} hover:text-[#FF6900] duration-300`}
                        href={"/profile"}
                    >
                        My Profile
                    </Link>
                </li>
            )}
        </>
    );
};

export default NavLinks;
