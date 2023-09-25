"use client";
import { usePathname } from "next/navigation";
import SidebarItem from "./SidebarItem";
import { routes } from '@/constant/route'

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="space-y-4 py-4 flex flex-col h-full bg-slate-300 text-white">
            <div className="space-y-1 pl-4 pt-4">
                {routes.map((route, index) => (
                    <SidebarItem
                        key={index}
                        label={route.label}
                        href={route.href}
                        isActive={route.href === pathname}
                    />
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
