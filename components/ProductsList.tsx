import React from "react";

interface Product {
    id: number;
    title: string;
    brand: string;
    price: number;
    stock: number;
    category: string;
}

interface TableProps {
    products: Product[];
}

const ProductsList = ({ products }: TableProps) => {
    return (
        <div className="py-8 w-full overflow-x-auto overflow-hidden">
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
                            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm text-left">
                                Category
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {products.map((item: Product) => (
                            <tr key={item.id}>
                                <td className="py-2 px-4 lg:py-3 lg:px-6">
                                    {item.title}
                                </td>
                                <td className="py-2 px-4 lg:py-3 lg:px-6">
                                    {item.brand}
                                </td>
                                <td className="py-2 px-4 lg:py-3 lg:px-6">
                                    {item.price}
                                </td>
                                <td className="py-2 px-4 lg:py-3 lg:px-6">
                                    {item.stock}
                                </td>
                                <td className="py-2 px-4 lg:py-3 lg:px-6">
                                    {item.category}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductsList;
