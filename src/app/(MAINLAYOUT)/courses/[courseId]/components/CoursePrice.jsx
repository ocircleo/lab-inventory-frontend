import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CoursePrice = ({data}) => {
    return (
        <div className='w-full md:absolute  p-1 top-12  z-10 bg-base-100'>
            <div className='w-full bg-base-300 grid place-content-center text-neutral'>
                <Image height={320} width={256} src={data?.course_image} className='w-full h-auto aspect-[4/5]' alt="course title image" />
            </div>
            <div role="tablist" className="tabs tabs-border">
                <a role="tab" className="tab tab-active shrink-0 grow  text-indigo-500 font-semibold">Personal</a>
                <a role="tab" className="tab shrink-0 grow">Teams</a>

            </div>
            <div className='p-4'>
                <div className='flex gap-2 items-center'>
                    <p className='font-bold text-xl'>{data?.price}</p>
                    {/* <span className='text-sm text-gray-500 flex gap-2'> */}
                        {/* <del>70.99</del> */}
                        {/* <p>85% off</p> */}
                    {/* </span> */}

                </div>
                {/* <p className='text-sm text-red-500 py-2 '>Only 1 Day left at this price</p> */}
                <div className='flex gap-2 flex-col my-3'>
                    {/* <Link href="?" className='btn btn-primary'>Add To Cart</Link> */}
                    <Link href="?" className='btn btn-outline btn-primary'>Buy Now</Link>
                </div>
                <div className='text-center text text-sm text-gray-500'>
                    <p>7 Days Money Back Grantee</p>
                    <p>Full Lifetime access</p>

                </div>
                <div className='text-indigo-500 gap-4 my-3 flex'>
                    {/* <p className='border-b-2 border-indigo-500 border-dashed'>Share</p> */}
                    {/* <p className='border-b-2 border-indigo-500 border-dashed'>Gift This Course</p> */}
                </div>

            </div>

        </div>
    );
}

export default CoursePrice;
