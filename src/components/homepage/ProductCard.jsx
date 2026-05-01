import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
    return (
        <Card
            style={{ backgroundImage: `url(${product.image})` }}
            className="p-0 rounded-lg md:rounded-2xl relative flex flex-col justify-end bg-cover bg-center gap-0 border"
        >
            <div className="aspect-4/3 w-full relative">
                <Image
                    alt="NEO Home Robot"
                    aria-hidden="true"
                    className="absolute h-full w-full object-cover object-top"
                    src={product.image}
                    width={200}
                    height={200}
                />
            </div>

            <div className="flex items-center gap-1 text-lg glass-bg z-10 absolute top-2 right-2 px-2 py-1 text-orange-500 rounded-full">
                <FaStar></FaStar>
                <span className="text-sm">{product.rating}</span>
            </div>

            <div className="glass-bg relative p-4">
                <h2 className="text-2xl font-bold mb-5">{product.name}</h2>

                <Card.Footer className="z-10 block">
                    <div className="grid grid-cols-6 items-center">
                        <div className="space-y-1 col-span-2">
                            <p className="text-sm font-bold leading-none">
                                PRICE
                            </p>
                            <p className="text-xl font-bold leading-none">
                                ${product.price}
                            </p>
                        </div>

                        <Link
                            href={`/products/${product.id}`}
                            className="btn col-span-4  bg-linear-to-r from-[#c21500] via-[#ffc500] to-[#c21500] font-semibold text-sm leading-8 sm:leading-12 px-3 rounded-full"
                        >
                            View Details
                        </Link>
                    </div>
                </Card.Footer>
            </div>
        </Card>
    );
};

export default ProductCard;
