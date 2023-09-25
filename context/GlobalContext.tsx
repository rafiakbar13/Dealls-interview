'use client'
import React from "react";
import { createContext, useContext, useState } from "react";
import { fetcher } from "@/service/fetcher";
import useSWR from "swr";
import { PRODUCTS, CART, USERS } from "../app/api";


const GlobalContext = createContext({
    products: {
        limit: 0,
        total: 0,
        products: [],
    },
    skip: 0,
    updateSkip: (skip: number) => { },
    limit: 0,
    setSkip: (skip: number) => { },
    carts: {
        carts: [{
            products: []
        }],
        total: 0,
    },
    users: { users: [] }
});

interface GlobalProviderProps {
    children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const limit = 5;
    const [skip, setSkip] = useState(0);
    const { data: products } = useSWR(`${PRODUCTS}?limit=${limit}&skip=${skip}`, fetcher);
    const { data: carts } = useSWR(CART, fetcher);
    const { data: users } = useSWR(USERS, fetcher);
    const updateSkip = (skip: number) => {
        setSkip(skip);
    }


    return (
        <GlobalContext.Provider value={{ products, skip, updateSkip, limit, setSkip, carts, users }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);