'use client';
import { useRef, useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link'

const MultiItemSliderNoCount = ({ children }) => {
    const [btnSelected, setBtnSelected] = useState(false)
    let container = useRef(null);

    const scrollLeft = (e) => {
        setBtnSelected(true)
        let card_width = 320;
        let ScrollElement, windowWidth;

        windowWidth = window.innerWidth;
        ScrollElement = container.current.children[0];

        if (windowWidth < 768) card_width = ((windowWidth / 100) * 80) + 20
        else {
            let tem_width = Number(ScrollElement.children[0].offsetWidth)
            card_width = (tem_width ?? 320) * 2;
        }

        let to = ScrollElement.scrollLeft - card_width;

        ScrollElement.scrollTo({
            top: 0,
            left: to,
            behavior: 'smooth',
        })
    }
    const scrollRight = (e) => {
        setBtnSelected(false)
        let card_width = 320;
        let ScrollElement, windowWidth;

        windowWidth = window.innerWidth;
        ScrollElement = container.current.children[0];

        if (windowWidth < 768) card_width = ((windowWidth / 100) * 80) + 20;
        else {
            let tem_width = Number(ScrollElement.children[0].offsetWidth)
            card_width = (tem_width ?? 320) * 2;
        }

        let to = ScrollElement.scrollLeft + card_width;

        ScrollElement.scrollTo({
            top: 0,
            left: to,
            behavior: 'smooth',
        })
    }
    return (
        <div>
            <div ref={container} className='relative w-full h-full flex flex-row flex-1 gap-2 md:overflow-x-hidden  '>
                {children}
            </div>
            <div className='flex items-center justify-between gap-4 py-4'>
                <div className='flex-nowrap shrink-0 font-bold flex gap-1 text-gray-400'><Link href={"/"} className='text-sm font-semibold px-2 py-1 text-custom-blue border-2 border-custom-blue rounded-full'>View More</Link></div>
                <hr className='text-gray-300 w-full'></hr>
                <div className='flex-nowrap shrink-0 flex gap-2'>

                    <button className={`active:scale-95  rounded-full p-2 cursor-pointer duration-100 border-0 hover:text-white hover:bg-warning ${btnSelected ? "bg-custom-blue text-white" : "bg-[#E7E7E7] text-[#B9B9B9]"}`} onClick={scrollLeft}><FaArrowLeft /></button>

                    <button onClick={scrollRight} className={`active:scale-95  rounded-full p-2 cursor-pointer duration-100 border-0 hover:text-white hover:bg-warning ${btnSelected ? "bg-[#E7E7E7] text-[#B9B9B9]" : "bg-custom-blue text-white"}`} ><FaArrowRight /></button>
                </div>
            </div>

        </div >
    );
}

export default MultiItemSliderNoCount;
