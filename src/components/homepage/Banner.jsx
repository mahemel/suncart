import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <div>
            <div className="relative w-full h-75 sm:h-100 md:h-125 rounded-lg md:rounded-2xl overflow-hidden shadow-lg">
                <Image
                    src={"/coconut-tree.jpg"}
                    width={1280}
                    height={500}
                    alt="Summer beach background"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-r from-orange-500/80 via-red-500/80 to-green-500/70"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-8 md:px-12">
                    <div className="bg-yellow-300 text-orange-900 px-3 py-1 sm:px-6 sm:py-2 rounded-full mb-3 sm:mb-6 shadow-lg">
                        <span className="font-bold tracking-wide text-xs sm:text-base uppercase">
                            Hot Deals 🔥 LIMITED TIME OFFER
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-2 sm:mb-4 drop-shadow-2xl">
                        SUMMER SALE
                    </h1>
                    <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8">
                        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-yellow-300 drop-shadow-2xl">
                            UP TO 50% OFF
                        </div>
                    </div>
                    <p className="text-sm sm:text-xl md:text-lg lg:text-2xl mb-4 sm:mb-8 max-w-2xl drop-shadow-lg px-4">
                        Beat the heat with our hottest deals of the season!
                    </p>
                    <Link
                        href={"/products"}
                        className="bg-white text-orange-600 px-6 py-3 sm:px-12 sm:py-5 rounded-full text-sm sm:text-xl font-bold hover:bg-yellow-300 hover:text-orange-900 transition-all duration-300 shadow-2xl hover:scale-105"
                    >
                        SHOP NOW
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
