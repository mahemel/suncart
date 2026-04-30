import Link from "next/link";
import React from "react";

const NavRight = () => {
    return (
        <div className="items-center gap-2 flex">
            <Link
                className="bg-black hover:bg-black/90 text-white font-semibold text-sm leading-9 px-3 rounded-md"
                href={"/login"}
            >
                Login
            </Link>

            <Link
                className="bg-[#FF6900] hover:bg-[#FF6900]/90 text-white font-semibold text-sm leading-9 px-3 rounded-md"
                href={"/register"}
            >
                Register
            </Link>
        </div>
    );
};

export default NavRight;
