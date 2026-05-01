import { getProductsData } from "@/lib/data";
import ProductCard from "./ProductCard";
import Link from "next/link";
const Products = async () => {
    const allProducts = await getProductsData();

    const popularProducts = allProducts.slice(0, 3);
    return (
        <div className="py-15">
            <div className="flex justify-center mb-7">
                <h2 className="text-center text-3xl font-black bg-linear-to-r from-yellow-700 via-orange-500 to-purple-700 text-transparent bg-clip-text">
                    Popular Products
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {popularProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>
                ))}
            </div>

            <div className="flex justify-center">
                <Link
                    href={"/products"}
                    className="btn  bg-linear-to-r from-[#c21500] via-[#ffc500] to-[#c21500] font-semibold text-sm leading-12 px-7 rounded-full mt-8"
                >
                    View All Products
                </Link>
            </div>
        </div>
    );
};

export default Products;
