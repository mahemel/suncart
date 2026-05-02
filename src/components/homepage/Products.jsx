import { getProductsData } from "@/lib/data";
import ProductCard from "./ProductCard";
import Link from "next/link";
const Products = async () => {
    const allProducts = await getProductsData();

    const popularProducts = allProducts.slice(0, 3);
    return (
        <div className="py-15">
            <div className="flex justify-center mb-7">
                <h2 className="text-center text-3xl font-black bg-linear-to-r from-yellow-700 via-orange-500 to-purple-700 text-transparent bg-clip-text animate__animated animate__fadeInUp">
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
        </div>
    );
};

export default Products;
