import React from 'react';
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineRateReview } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { MdOndemandVideo } from "react-icons/md";
import Reviews from '../reviews/Reviews';
const Instructor = () => {
    return (
        <div className='my-10'>
            <p className='text-xl font-bold pt-2 pb-3 '>Course Content</p>
            <p className='text-xl font-semibold text-indigo-500'>DR. Sishir Das</p>
            <p className='text-sm'>Developer and Lead Instructor </p>
            {<InstructorProfile />}
            <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni neque harum cum provident culpa consequatur vitae saepe laboriosam pariatur! Ab quaerat maxime non deleniti corrupti tenetur nostrum ullam beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic aliquid repellendus id? Sint quod dolor quis at tenetur aliquid delectus nemo? Error porro ex, maxime aliquid mollitia saepe veniam debitis.</p>

            <p className='text-xl font-bold  pt-7 border-b border-dashed pb-3 '>4.6 Course Ratings</p>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-6'>
                {[...new Array(4).keys()].map((ele, index) => <Reviews key={ele} index={index}></Reviews>)}
            </div>
        </div>
    );
}

export default Instructor;

function InstructorProfile() {
    return (
        <div className='flex gap-4 mt-5'>
            <img src="?" alt="" className='w-28 h-28 rounded-full bg-gray-200' />
            <div className='flex flex-col gap-2'>
                <div className='flex gap-4 items-center'>
                    <FaStar className='text-gray-700 shrink-0 mt-1 text-sm' />
                    <p className=' text-sm'>Lorem ipsum dolor sit aunatus.</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <MdOutlineRateReview className='text-gray-700 shrink-0 mt-1 text-sm' />
                    <p className=' text-sm'>Lorem ipsuro laxpedita quaerat natus.</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <PiStudentBold className='text-gray-700 shrink-0  mt-1 text-sm' />
                    <p className=' text-sm'>Lorem rat natus.</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <MdOndemandVideo className='text-gray-700 shrink-0 mt-1 text-sm' />
                    <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur .</p>
                </div>


            </div>

        </div>
    )
}