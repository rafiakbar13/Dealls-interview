"use client";
import React, { useEffect, useState } from "react";
import Filters from "@/components/Filters";
import ProductsList from "@/components/ProductsList";
import Pagination from "@/components/Pagination";
import { useGlobalContext } from "@/context/GlobalContext";

const Product = () => {
    const { products, limit, skip, updateSkip, setSkip } = useGlobalContext();


    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (products) {
            setFilteredProducts(products?.products);
        }
    }, [products]);

    const totalPages = Math.ceil(products?.total / products?.limit);


    const handleFilterChange = (newFilters: any) => {
        const { brand, category, min, max, searchText } = newFilters;

        let filtered = products?.products || [];

        if (brand) {
            filtered = filtered.filter((product: any) => product.brand === brand);
        }

        if (category) {
            filtered = filtered.filter(
                (product: any) => product.category === category
            );
        }

        if (min && max) {
            filtered = filtered.filter(
                (product: any) =>
                    product.price >= parseFloat(min) && product.price <= parseFloat(max)
            );
        }

        if (searchText) {
            filtered = filtered.filter((product: any) =>
                product.title.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
        setCurrentPage(1);
        updateSkip(0);
    };

    if (!products) return <div>Loading...</div>;

    return (
        <section className="mx-20 my-20 md:w-4/5">
            <Filters
                products={filteredProducts}
                onFilterChange={handleFilterChange}
            />
            <ProductsList products={filteredProducts} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPrevClick={() => {
                    setCurrentPage(currentPage - 1)
                    setSkip(skip - limit)
                }}
                onNextClick={() => {
                    setCurrentPage(currentPage + 1)
                    setSkip(skip + limit)
                }}
            />
        </section>
    );
};

export default Product;
