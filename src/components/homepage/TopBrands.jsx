import { Card } from "@heroui/react";
import React from "react";
import {
    FcCloseUpMode,
    FcDebian,
    FcGallery,
    FcLandscape,
    FcPaid,
    FcTreeStructure,
} from "react-icons/fc";

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
                    <Card className="shadow-none p-0">
                        <Card.Header className="items-center text-center space-y-3">
                            <FcPaid size={100} />
                            <Card.Title className="font-bold text-xl">
                                SunShield
                            </Card.Title>
                        </Card.Header>
                    </Card>

                    <Card className="shadow-none p-0">
                        <Card.Header className="items-center text-center space-y-3">
                            <FcLandscape size={100} />
                            <Card.Title className="font-bold text-xl">
                                BeachWave
                            </Card.Title>
                        </Card.Header>
                    </Card>

                    <Card className="shadow-none p-0">
                        <Card.Header className="items-center text-center space-y-3">
                            <FcDebian size={100} />
                            <Card.Title className="font-bold text-xl">
                                SummerStyle
                            </Card.Title>
                        </Card.Header>
                    </Card>

                    <Card className="shadow-none p-0">
                        <Card.Header className="items-center text-center space-y-3">
                            <FcCloseUpMode size={100} />
                            <Card.Title className="font-bold text-xl">
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
