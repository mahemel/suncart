import { Card } from "@heroui/react";
import React from "react";
import { FcCloseUpMode, FcDebian, FcLandscape, FcPaid } from "react-icons/fc";

const TopBrands = () => {
    return (
        <div className="relative pt-15">
            <div className="relative">
                <div className="flex justify-center mb-2 ">
                    <h2 className="text-center text-3xl font-black bg-linear-to-r from-yellow-700 via-orange-500 to-purple-700 text-transparent bg-clip-text">
                        Top Brands
                    </h2>
                </div>
                <p className="text-center mb-7">
                    Trusted brands for quality summer products
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    <Card>
                        <Card.Header className="items-center text-center space-y-3">
                            <FcPaid className="text-[60px] lg:text-[80px] xl:text-[100px]" />
                            <Card.Title className="font-bold text-base xl:text-xl">
                                SunShield
                            </Card.Title>
                        </Card.Header>
                    </Card>

                    <Card>
                        <Card.Header className="items-center text-center space-y-3">
                            <FcLandscape className="text-[60px] lg:text-[80px] xl:text-[100px]" />
                            <Card.Title className="font-bold text-base xl:text-xl">
                                BeachWave
                            </Card.Title>
                        </Card.Header>
                    </Card>

                    <Card>
                        <Card.Header className="items-center text-center space-y-3">
                            <FcDebian className="text-[60px] lg:text-[80px] xl:text-[100px]" />
                            <Card.Title className="font-bold text-base xl:text-xl">
                                SummerStyle
                            </Card.Title>
                        </Card.Header>
                    </Card>

                    <Card>
                        <Card.Header className="items-center text-center space-y-3">
                            <FcCloseUpMode className="text-[60px] lg:text-[80px] xl:text-[100px]" />
                            <Card.Title className="font-bold text-base xl:text-xl">
                                TropicGear
                            </Card.Title>
                        </Card.Header>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default TopBrands;
