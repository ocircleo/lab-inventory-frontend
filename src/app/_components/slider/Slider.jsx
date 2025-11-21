
import { useEffect, useRef } from 'react';
let activeIndex = 0;
let maxIndex = 0;
const Slider = ({ children }) => {
    let container = useRef(null);
    const scrollLeft = (e) => {
        maxIndex = images.length - 1;
        if (activeIndex == 0) return;
        activeIndex--
        let width, parent;
        parent = container.current;
        width = container.current.offsetWidth;
        let to = Number(width) * activeIndex;
        parent.scrollTo({
            top: 0,
            left: to,
            behavior: 'smooth',
        });
    }
    const scrollRight = (e) => {
        maxIndex = images.length - 1;
        if (activeIndex == maxIndex) return;
        activeIndex++
        let width, parent;
        parent = container.current;
        width = container.current.offsetWidth;
        let to = Number(width) * activeIndex;
        parent.scrollTo({
            top: 0,
            left: to,
            behavior: 'smooth',
        });
    }
    useEffect(() => {
        return () => {
            activeIndex = 0;
            maxIndex = 0;
        }
    }, [])
    return (
        <div ref={container} style={{ scrollSnapType: "x mandatory" }} className='relative  w-full h-full flex flex-row flex-1 gap-2 overflow-x-scroll md:overflow-hidden border-2  select-none '>
            {children}
        </div>
    );
}

export default Slider;
