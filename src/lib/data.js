export const getProductsData = async () => {
    const response = await fetch('https://suncart-g6ok.vercel.app/products.json');
    const data = await response.json();

    return data;
}

export const getInitials = (name) => {
    if (!name) return "";

    const parts = name.trim().split(' ');

    if (parts.length === 1) {
        return parts[0].slice(0, 2).toUpperCase();
    }

    const first = parts[0][0];
    const last = parts[parts.length - 1][0];

    return (first + last).toUpperCase();
}