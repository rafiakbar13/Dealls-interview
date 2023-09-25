'use client'
import React from "react";
import Sidebar from "./sidebar";
import useIsMobile from "@/hooks/useIsMobile";
import NavbarMobile from "./NavbarMobile";
const Layout = ({ children }: { children: React.ReactNode }) => {
    const isMobile = useIsMobile();
    return (
        <div className="relative max-w-7xl">
            {/* Mobile menu */}
            {isMobile && <NavbarMobile />}

            {/* Desktop sidebar */}
            <div className="hidden h-full bg-slate-300 md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
                <div>
                    <Sidebar />
                </div>
            </div>
            {/* Main content */}

            <main className="md:pl-72">{children}</main>
        </div>
    );
};

export default Layout;
