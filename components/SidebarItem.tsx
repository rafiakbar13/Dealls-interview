import React from "react";
import Link from "next/link";
import { MenuProps } from "@/app/constant/type";
const SidebarItem = ({ label, href, isActive }: MenuProps) => {
    return (
        <Link
            href={href}
            className={`flex justify-start w-full p-3 text-sm font-medium transition ${isActive ? "text-purple-600 border-l-4 border-purple-600" : "text-black"
                } hover:text-purple-600`}
        >
            {label}
        </Link>
    );
};

export default SidebarItem;
