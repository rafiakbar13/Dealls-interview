import React from 'react'
interface Product {
    id: number;
    title: string;
    brand: string;
    price: number;
    stock: number;
    category: string;
}

interface Cart {
    id: number;
    products: Product[];
    total: number;
    userId: number;
}

interface CartProps {
    carts: Cart[];
    products: Product[];
}

const CartsList = ({ carts, products }: CartProps) => {

    if (!products || products.length === 0) {
        return <div>No products available.</div>;
    }

    const cartProducts = carts.map((cart) => {
        const matchingProduct = products.find((product: Product) => product.id === cart.id);
        return matchingProduct;
    });

    return (
        <div className="py-8 w-full overflow-x-auto overflow-hidden ">
            <div className="shadow rounded border-b border-gray-200">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm text-left">
                                Product Name
                            </th>
                            <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm text-left">
                                Brand
                            </th>
                            <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm text-left">
                                Price
                            </th>
                            <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm text-left">
                                Stock
                            </th>
                            <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm text-left">
                                Category
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {cartProducts.map((product: any) => (
                            <tr key={product.id}>
                                <td className="py-2 px-4">{product.title}</td>
                                <td className="py-2 px-4">{product.brand}</td>
                                <td className="py-2 px-4">{product.price}</td>
                                <td className="py-2 px-4">{product.stock}</td>
                                <td className="py-2 px-4">{product.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CartsList