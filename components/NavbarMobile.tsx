import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { useMenu } from '@/context/menu';
import MobileMenu from './MobileMenu';
import { routes } from '@/app/constant/route';
import { usePathname } from 'next/navigation';

const NavbarMobile = () => {
    const { isOpen, toggleMenu } = useMenu();
    const pathname = usePathname();
    return (
        <nav className="md:hidden p-4 flex-col justify-between items-center fixed top-0 left-0 w-full h-30 bg-slate-400">
            <button
                className="text-white"
                onClick={toggleMenu}
            >
                {isOpen ? <AiOutlineClose /> : <FaBars />}
            </button>
            {isOpen &&
                routes.map((route, index) => (
                    <MobileMenu key={index}
                        label={route.label}
                        href={route.href}
                        isActive={route.href === pathname}
                    />
                ))
            }
        </nav>
    );
};

export default NavbarMobile;
