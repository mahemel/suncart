import Link from "next/link";
import React from "react";

const NavRight = () => {
    return (
        <div className="items-center gap-2 flex">
            <Link
                className="btn  bg-linear-to-r from-[#134E5E] via-[#71B280] to-[#134E5E] font-semibold text-sm leading-8 sm:leading-9 px-3 rounded-full"
                href={"/login"}
            >
                Login
            </Link>

            <Link
                className="btn  bg-linear-to-r from-[#c21500] via-[#ffc500] to-[#c21500] font-semibold text-sm leading-8 sm:leading-9 px-3 rounded-full"
                href={"/register"}
            >
                Register
            </Link>
        </div>
    );
};

export default NavRight;
