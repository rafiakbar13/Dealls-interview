import React, { useState, useEffect } from 'react';

interface FiltersProps {
    products: {
        id: number;
        title: string;
        brand: string;
        price: number;
        stock: number;
        category: string;
    }[];
    onFilterChange: (filters: any) => void;
}

const Filters: React.FC<FiltersProps> = ({ products, onFilterChange }) => {
    const [brandFilters, setBrandFilters] = useState<string[]>([]);
    const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
    const [priceRangeFilters, setPriceRangeFilters] = useState<{
        min: number | string;
        max: number | string;
    }>({ min: '', max: '' });
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const uniqueBrands = Array.from(new Set(products.map((product) => product.brand)));
        const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));

        setBrandFilters(uniqueBrands);
        setCategoryFilters(uniqueCategories);
    }, [products]);



    const handleBrandFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedBrand = e.target.value;
        const newFilters = { ...priceRangeFilters, brand: selectedBrand };
        onFilterChange(newFilters);
    };

    const handleCategoryFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = e.target.value;
        const newFilters = { ...priceRangeFilters, category: selectedCategory };
        onFilterChange(newFilters);
    };

    const handlePriceRangeFilterChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
        const value = e.target.value;

        if (!isNaN(Number(value)) || value === '') {
            setPriceRangeFilters((prevFilters) => ({
                ...prevFilters,
                [type]: value,
            }));
            const newFilters = { ...priceRangeFilters, [type]: value };
            onFilterChange(newFilters);
        }
    };


    const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setSearchText(text);
        const newFilters = { ...priceRangeFilters, searchText: text };
        onFilterChange(newFilters);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col">
                <label className="text-lg font-bold">Brand:</label>
                <select
                    onChange={handleBrandFilterChange}
                    className="w-full border p-2 rounded-md"
                >
                    <option value="">All Brands</option>
                    {brandFilters.map((brand) => (
                        <option key={brand} value={brand}>
                            {brand}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-lg font-bold">Category:</label>
                <select
                    onChange={handleCategoryFilterChange}
                    className="w-full border p-2 rounded-md"
                >
                    <option value="">All Categories</option>
                    {categoryFilters.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col gap-y-3">
                <label className="text-lg font-bold">Price Range:</label>
                <input
                    type="text"
                    placeholder="Min"
                    className="w-full border p-2 rounded-md"
                    onChange={(e) => handlePriceRangeFilterChange(e, 'min')}
                    value={priceRangeFilters.min}
                />
                <input
                    type="text"
                    placeholder="Max"
                    className="w-full border p-2 rounded-md"
                    onChange={(e) => handlePriceRangeFilterChange(e, 'max')}
                    value={priceRangeFilters.max}
                />
            </div>
            <div className="flex flex-col">
                <label className="text-lg font-bold">Search:</label>
                <input
                    type="text"
                    placeholder="Search Product"
                    className="w-full border p-2 rounded-md"
                    onChange={handleSearchTextChange}
                    value={searchText}
                />
            </div>
        </div>
    );
};

export default Filters;
