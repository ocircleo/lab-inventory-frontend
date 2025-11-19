"use client";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
// import { useEffect, useRef } from "react";
const returnImageIndex = (index, type = "num") => {
    index++;

    if (index > 3) index = index % 3 == 0 ? 3 : index % 3;
    let alphabet = ["x", "y", "z"];
    if (type == "num") return index;
    return alphabet[index - 1];
};
const Mentors = () => {
    let arr = [...new Array(12).keys()]
    return (
        <div className=' flex gap-4 shrink-0 flex-nowrap overflow-x-scroll md:overflow-x-hidden py-2 w-full' >
            {
                arr.map((ele, index) => <Card key={ele} data={index}></Card>)
            }
        </div>
    );
}

export default Mentors;

function Card({ data }) {
    // const click_target_parent_ref = useRef(null)
    // const click_target_ref = useRef(null);
    // const click = (e) => {
    //     e.stopPropagation()
    //     let target = click_target_ref.current
    //     if (target.classList.contains("left-0")) target.classList.replace("left-0", "left-full")
    //     else target.classList.replace("left-full", "left-0")
    // }
    // useEffect(() => {
    //     window.addEventListener("click", (e) => {
    //         e.stopPropagation();

    //         if (click_target_ref.current.classList.contains("left-0")) click_target_ref.current.classList.replace("left-0", "left-full")
    //     })
    // }, [])
    return (<>
        <div /*ref={click_target_parent_ref} onClick={click}*/ className=" shrink-0">
            <div className='group shadow-sm rounded w-64 hover:w-[32rem] duration-150 overflow-hidden   bg-base-300 hover:bg-base-200 text-base-100  relative   hidden lg:flex  '>
                <div className='relative w-64 shrink-0' >
                    <div className="absolute top-0 left-0 w-64 h-full z-20 ">
                        <div className='absolute top-3 left-2 bg-gray-100/30 font-bold backdrop-blur-2xl px-3 rounded-full py-1 text-sm shadow'>⭐ 4.7 (112)</div>
                        <div className="absolute bottom-3 left-3 text-sm font-bold">
                            <p>Language and Communication</p>
                            <p>UI/UX Designer</p>
                        </div>

                    </div>
                    <div style={{ boxShadow: "0 0 25px rgba(0,0,0,.45) inset", }} className="z-10 h-full w-64 bg-transparent rounded-lg absolute top-0 left-0  "></div>
                    <Image height={320} width={256} src={`/images/mentors/${returnImageIndex(data)}.png`} alt="" className='w-full xxs:w-64 aspect-[4/5] rounded-lg bg-base-100 object-cover  ' />
                </div>

                <div className="w-64 h-72  p-2 flex justify-end flex-col gap-4 rounded-lg  duration-150 shrink-0"><HiddenCardData></HiddenCardData></div>
            </div>

            {/* ---- Small screen card ------ */}
            <div className='w-screen xxs:w-64 rounded p-2  bg-subtle-blue text-base-100 overflow-hidden  flex flex-col items-center lg:hidden  '>
                <div className='relative xxs:w-5/6'>
                    <div className="absolute top-0 left-0 w-full h-full z-20">

                        <div className="absolute bottom-3 left-3 text-xs font-bold">
                            <p>Salman Hossain</p>
                            <p>UI/UX Designer</p>
                        </div>

                    </div>
                    <div style={{ boxShadow: "0 0 25px rgba(0,0,0,.45) inset", }} className="z-10 h-full w-full bg-transparent rounded-lg absolute top-0 left-0  "></div>
                    <img src={`/images/mentors/${returnImageIndex(data)}.png`} alt="" className='w-full  h-60 rounded-lg bg-base-100 object-cover  ' />
                </div>

                <div /*ref={click_target_ref}*/ className=" z-30 rounded-lg duration-150 p-3 text-sm"><div className="flex flex-col gap-1 ">
                    <p className="text-neutral" >With a decade of experience in the ever-evolving landscape of digital marketing, James brings practical insights and hands-on strategies to her courses.</p>
                    <p className="text-custom-blue flex gap-2 items-center  "><FaCirclePlay className="text-lg" /> 20 Courses</p>
                </div></div>
            </div>


        </div>
    </>)
}

function HiddenCardData() {

    return (<div className="flex flex-col h-full w-full gap-4 justify-end">
        <p className="text-neutral" >With a decade of experience in the ever-evolving landscape of digital marketing, James brings practical insights and hands-on strategies to her courses.</p>
        <p className="text-custom-blue flex gap-2 items-center  "><FaCirclePlay className="text-lg" /> 20 Courses</p>
    </div>)
}