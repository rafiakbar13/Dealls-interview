import React from 'react'
import Link from 'next/link'
import { MenuProps } from '@/app/constant/type';

const MobileMenu = ({ label, href, isActive }: MenuProps) => {

    return (
        <Link href={href} className={`block py-2 px-4 text-sm  hover:text-purple-600 ${isActive ? "text-purple-600 border-l-4 border-purple-600" : "text-black"
            }`}>
            {label}
        </Link>
    )
}

export default MobileMenu
