import { Button, Card } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { MdWaterDrop } from "react-icons/md";
import { RiGeminiFill } from "react-icons/ri";

const SummerCare = () => {
    return (
        <div className="relative pt-15 pb-17">
            <div className="absolute inset-0 w-screen bg-amber-100 left-1/2 -translate-x-1/2"></div>
            <div className="relative">
                <div className="flex justify-center mb-2 ">
                    <h2 className="text-center text-3xl font-black bg-linear-to-r from-yellow-700 via-orange-500 to-purple-700 text-transparent bg-clip-text animate__animated animate__fadeInUp">
                        ☀️ Summer Care Tips
                    </h2>
                </div>
                <p className="text-center mb-7 animate__animated animate__fadeInUp">
                    Essential tips for a safe and enjoyable summer.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 animate__animated animate__fadeInUp">
                    <Card>
                        <Card.Header className="items-center text-center space-y-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-200">
                                <IoIosSunny
                                    size={24}
                                    className="text-amber-600"
                                />
                            </div>
                            <Card.Title className="font-bold text-xl">
                                Sun Protection
                            </Card.Title>
                            <Card.Description>
                                Apply SPF 50+ sunscreen every 2 hours for
                                optimal protection
                            </Card.Description>
                        </Card.Header>
                    </Card>

                    <Card>
                        <Card.Header className="items-center text-center space-y-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-200">
                                <MdWaterDrop
                                    size={24}
                                    className="text-blue-600"
                                />
                            </div>
                            <Card.Title className="font-bold text-xl">
                                Stay Hydrated
                            </Card.Title>
                            <Card.Description>
                                Drink at least 8 glasses of water daily during
                                hot weather
                            </Card.Description>
                        </Card.Header>
                    </Card>

                    <Card>
                        <Card.Header className="items-center text-center space-y-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-200">
                                <FaRegHeart
                                    size={24}
                                    className="text-pink-600"
                                />
                            </div>
                            <Card.Title className="font-bold text-xl">
                                Skin Care
                            </Card.Title>
                            <Card.Description>
                                Moisturize after sun exposure to keep skin
                                healthy
                            </Card.Description>
                        </Card.Header>
                    </Card>

                    <Card>
                        <Card.Header className="items-center text-center space-y-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-300">
                                <RiGeminiFill
                                    size={24}
                                    className="text-purple-700"
                                />
                            </div>
                            <Card.Title className="font-bold text-xl">
                                Light Clothing
                            </Card.Title>
                            <Card.Description>
                                Wear breathable, light-colored fabrics to stay
                                cool
                            </Card.Description>
                        </Card.Header>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SummerCare;
