import { getProductsData } from "@/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaCheck, FaStar } from "react-icons/fa";
import { TbRotateClockwise, TbShield, TbTruck } from "react-icons/tb";

const ProductsDetailPage = async ({ params }) => {
    const { id } = await params;
    const getAllProducts = await getProductsData();
    console.log(getAllProducts);

    const product = getAllProducts.find(
        (productItem) => productItem.id === parseInt(id),
    );

    if (!product) {
        return notFound();
    }
    return (
        <div>
            <Link
                href="/products"
                className="flex items-center gap-2 hover:text-orange-500"
            >
                <BiArrowBack />
                Back to all Products
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-8 mt-5 gap-15 justify-center">
                <div className="col-span-1"></div>
                <div className="rounded-xl overflow-hidden aspect-4/3 col-span-3">
                    <Image
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-top"
                        width={200}
                        height={200}
                    />
                </div>

                <div className="col-span-4 space-y-4">
                    <div className="flex">
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium capitalize">
                            {product.category}
                        </span>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold">
                        {product.name}
                    </h1>

                    <p className="text-gray-700">{product.description}</p>

                    <p className="text-gray-600 font-semibold">
                        Brand: {product.brand}
                    </p>

                    <p className="flex items-center font-semibold gap-1">
                        <FaStar className="text-orange-600" />
                        {product.rating}
                    </p>

                    <p className="text-4xl font-bold text-orange-600">
                        ${product.price}
                    </p>

                    <p>
                        {product.stock > 15 ? (
                            <span className="text-green-600 font-semibold flex items-center gap-2">
                                <FaCheck />
                                In Stock {product.stock} available
                            </span>
                        ) : (
                            <span className="text-purple-600 font-semibold flex items-center gap-2">
                                Only {product.stock} left. Grab soon.
                            </span>
                        )}
                    </p>

                    <Link
                        href={"#"}
                        className={
                            "btn  bg-linear-to-r from-[#c21500] via-[#ffc500] to-[#c21500] font-semibold text-sm leading-12 px-5 rounded-full w-6/12"
                        }
                    >
                        {" "}
                        Buy Now
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b mt-10">
                <div className="flex flex-col items-center gap-3 py-5 px-1">
                    <TbTruck className="text-3xl text-orange-500" />
                    <div className="text-center">
                        <h4 className="font-semibold">Free Shipping</h4>
                        <p className="text-sm text-gray-600">
                            On orders over $50
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-3 px-1 md:border-l md:border-r py-5 ">
                    <TbShield className="text-3xl text-orange-500" />
                    <div className="text-center">
                        <h4 className="font-semibold">Secure Payment</h4>
                        <p className="text-sm text-gray-600">
                            100% secure transactions
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center px-1 gap-3 py-5 ">
                    <TbRotateClockwise className="text-3xl text-orange-500" />
                    <div className="text-center">
                        <h4 className="font-semibold">Easy Returns</h4>
                        <p className="text-sm text-gray-600">
                            30-day return policy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetailPage;
<h2>Product Id: </h2>;
