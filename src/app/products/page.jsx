import ProductCard from "@/components/homepage/ProductCard";
import { getProductsData } from "@/lib/data";

export const metadata = {
    title: "SunCart | Products",
};

const ProductsPage = async () => {
    const allProducts = await getProductsData();

    return (
        <div>
            <div className="flex justify-center mb-2">
                <h2 className="text-center text-3xl font-black bg-linear-to-r from-yellow-700 via-orange-500 to-purple-700 text-transparent bg-clip-text">
                    Our Products
                </h2>
            </div>
            <p className="text-center mb-7">
                Everything you need to enjoy summer to the fullest—lightweight,
                stylish, and made for the sun.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {allProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
