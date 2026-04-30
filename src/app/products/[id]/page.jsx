import React from "react";

const ProductsDetailPage = async ({ params }) => {
    const { id } = await params;
    return (
        <div>
            <h2>Product Id: {id}</h2>
        </div>
    );
};

export default ProductsDetailPage;
<h2>Product Id: </h2>;
