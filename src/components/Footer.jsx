import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-auto bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-5 w-full py-12">
                <div className="grid md:flex justify-between gap-8">
                    <div>
                        <Link href={"/"} className="mb-4 block w-fit">
                            <Image
                                src={"/sunCart-logo.svg"}
                                width={130}
                                height={32}
                                alt="Footer Logo"
                            />
                        </Link>

                        <p className="text-gray-400 mb-4 text-sm md:text-base">
                            Your one-stop shop for all
                            <br /> summer essentials. Quality products
                            <br /> for the perfect summer experience.
                        </p>

                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="hover:text-orange-400 transition-colors"
                            >
                                <FaFacebook className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-orange-400 transition-colors"
                            >
                                <FaInstagram className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-orange-400 transition-colors"
                            >
                                <BsTwitterX className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-orange-400">
                            Contact Us
                        </h3>

                        <div className="space-y-3 text-gray-400">
                            <div className="flex items-center gap-2">
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>support@suncart.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>123 Summer Street, CA 90210</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-orange-400">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-orange-400 transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-orange-400 transition-colors"
                                >
                                    Shipping Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-orange-400 transition-colors"
                                >
                                    Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-orange-400 transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-orange-400 transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; 2026 SunCart. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
