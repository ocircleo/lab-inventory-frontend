'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
const ActiveLink = ({ to, click, children }) => {
    const pathname = usePathname()
    return (
        <Link  onClick={click} href={to} className={`${pathname == to ? "bg-[#134686] border-s-2" : ""}  py-2 ps-2 hover:bg-[#204794] w-full inline-block font-semibold`}>
            <span>{children}</span>
        </Link>
    );
};

export default ActiveLink;