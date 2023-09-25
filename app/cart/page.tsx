"use client";
import React, { useState } from "react";
import { fetcher } from "@/service/fetcher";
import useSWR from "swr";
import { PRODUCTS } from "../api";
import CartsInfo from "@/components/CartsInfo";
import CartsList from "@/components/CartsList";
import Pagination from "@/components/Pagination";
import { useGlobalContext } from "@/context/GlobalContext";
const Cart = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { carts, users } = useGlobalContext();
    const { data: products } = useSWR(`${PRODUCTS}?limit=0`, fetcher);

    if (!carts) return <div>loading...</div>;

    const itemsPerPage = 1;

    const indexOfFirstCart = (currentPage - 1) * itemsPerPage;
    const indexOfLastCart = indexOfFirstCart + itemsPerPage;

    const currentCart = carts.carts.slice(indexOfFirstCart, indexOfLastCart)[0];

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const totalPages = carts.total;

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (!currentCart) {
        return <div>No carts available.</div>;
    }

    return (
        <section className="mx-20 my-20 md:w-4/5">
            <CartsInfo cart={currentCart} users={users?.users} />
            <CartsList carts={currentCart?.products} products={products?.products} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onNextClick={handleNextClick}
                onPrevClick={handlePrevClick}
                onPageChange={handlePageChange}
            />
        </section>
    );
};

export default Cart;
