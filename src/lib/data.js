export const getProductsData = async () => {
    const response = await fetch('https://suncart-eight.vercel.app/products.json');
    const data = await response.json();

    return data;
}