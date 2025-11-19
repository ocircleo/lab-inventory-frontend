import { GrLanguage, GrDocumentText } from "react-icons/gr";
import { FaCheck, FaCode } from "react-icons/fa6";
import { MdUpdate, MdOndemandVideo, MdOutlineAssignment } from "react-icons/md";
import { TbBookDownload } from "react-icons/tb";
import { SlTrophy } from "react-icons/sl";
import { TfiMobile } from "react-icons/tfi";
import Link from 'next/link';
import Instructor from '@/app/components/Instructor/Instructor';
import CoursePrice from './CoursePrice';



const Course = ({ data }) => {
    return (
        <div className="px-4 md:px-0">
            {<CourseWelcome data={data} />}
            {<RestOfCourseDetailSection data={data} />}
        </div>
    );
}

export default Course;

const CourseWelcome = ({ data }) => {
    return (<>
        <div className='w-full bg-black/90 text-white '>
            <div className="w-full md:w-[90%] lg:w-[70%] mx-auto grid grid-cols-3 h-full md:gap-4 lg:gap-8">
                <div className='w-full col-span-3 md:col-span-2 px-4 pt-2 pb-8 '>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li><a>{data?.type}</a></li>
                            <li><a>{data?.category}</a></li>
                        </ul>
                    </div>
                    <h1 className='text-3xl font-bold py-6'>{data?.title}</h1>
                    <p>{data?.description}</p>
                    <div className='flex gap-2 items-center my-2'>

                        <span className='text-yellow-500 text-sm font-semibold'>4.7</span>
                        <div className="rating rating-xs rating-half pointer-events-none  items-center">
                            <input type="radio" name="rating-11" className="rating-hidden" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="0.5 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="1 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="1.5 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="2 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="2.5 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="3 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="3.5 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="4 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="4.5 star" defaultChecked />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="5 star" />
                        </div>

                        <span className='text-sm text-blue-400'>(302 Ratings)</span>
                        <span className='text-sm '> 22003 Enrolled</span>

                    </div>
                    <div className='flex items-center gap-1'>
                        <p>Created by - </p>
                        {/* //Links of creators */}
                        <Link href={"?"} className='text-blue-400 underline underline-offset-4'>{data?.instructors[0]} </Link>

                    </div>
                    <div className='flex gap-4 items-center my-2'>
                        <div className='flex gap-1 items-center'><MdUpdate className='text-xl pt-1' /> <p>Last Updated: 04/25</p></div>
                        <div className='flex items-center gap-1'><GrLanguage className='text-lg pt-1' /> <p>Language {data?.language?.join(",") || "English"}</p></div>
                    </div>
                </div>
                <div className='col-span-3 md:col-span-1 relative'>
                    {<CoursePrice data={data}></CoursePrice>}
                </div>
            </div>
        </div>
    </>)
}
const RestOfCourseDetailSection = () => {
    return (
        <div className="w-full md:w-[90%] lg:w-[70%] mx-auto grid grid-cols-3 h-full ">
            <div className='col-span-3 md:col-span-2 bg-base-200 '>
                {<WhatYouWillLearn />}
                {<ThisCourseIncludes />}
                {<CourseContent />}
                {<Requirement />}
                {<Description />}
                {<Instructor />}


            </div>

        </div>
    )
}

function WhatYouWillLearn() {

    return (
        <div className='border border-gray-300 my-10 p-4 rounded'>
            <p className='text-xl font-bold py-4 '>What You'll Learn</p>

            <div className='grid grid-cols-1 lg:grid-cols-2 '>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <FaCheck className='text-gray-700 shrink-0 mt-2 text-sm' />
                        <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae autem, officia obcaecati, molestiae corporis magnam ullam pernatur libero laborum. Eaque expedita quaerat natus.</p>
                    </div>
                    <div className='flex gap-4'>
                        <FaCheck className='text-gray-700 shrink-0 mt-2 text-sm' />
                        <p className=' text-sm'>Lorem ipsum dolor sit auisquam aspernatur libero laborum. Eaque expedita quaerat natus.</p>
                    </div>
                    <div className='flex gap-4'>
                        <FaCheck className='text-gray-700 shrink-0 mt-2 text-sm' />
                        <p className=' text-sm'>Lorem ipsum dautem, officia obcaecminus in ratione quisquam aspernatur libero laborum. Eaque expedita quaerat natus.</p>
                    </div>
                    <div className='flex gap-4'>
                        <FaCheck className='text-gray-700 shrink-0 mt-2 text-sm' />
                        <p className=' text-sm'>Lorem ipsum dautem, officia obcaecminus in r laborum. Eaque expedita quaerat natus.</p>
                    </div>


                </div>
                <div className='flex flex-col gap-4'>

                    <div className='flex gap-4'>
                        <FaCheck className='text-gray-700 shrink-0 mt-2 text-sm' />
                        <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae autem, officia obcaecati, molestiae corporis magnam ullam pernatur libero laborum. Eaque expedita quaerat natus.</p>
                    </div>
                    <div className='flex gap-4'>
                        <FaCheck className='text-gray-700 shrink-0 mt-2 text-sm' />
                        <p className=' text-sm'>Lorem ipsum dolor sit auisquam aspernatur libero laborum. Eaque expedita quaerat natus.</p>
                    </div>
                    <div className='flex gap-4'>
                        <FaCheck className='text-gray-700 shrink-0 mt-2 text-sm' />
                        <p className=' text-sm'>Lorem ipsum dautem, officia obcaecminus in ratione quisquam aspernatur libero laborum. Eaque expedita quaerat natus.</p>
                    </div>
                    <div className='flex gap-4'>
                        <FaCheck className='text-gray-700 shrink-0 mt-2 text-sm' />
                        <p className=' text-sm'>Lorem ipsum dautem, officia obcaecminus in r laborum. Eaque expedita quaerat natus.</p>
                    </div>


                </div>
            </div>

        </div>
    )
}
function ThisCourseIncludes() {

    return (
        <div className=''>
            <p className='text-xl font-bold py-2 '>This Course Inlcudes:</p>

            <div className='grid grid-cols-1 lg:grid-cols-2 '>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-4 items-center'>
                        <MdOndemandVideo className='text-gray-700 shrink-0 mt-1 text-sm' />
                        <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur .</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <FaCode className='text-gray-700 shrink-0 mt-1 text-sm' />
                        <p className=' text-sm'>Lorem ipsum dolor sit aunatus.</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <MdOutlineAssignment className='text-gray-700 shrink-0 mt-1 text-sm' />
                        <p className=' text-sm'>Lorem ipsuro laxpedita quaerat natus.</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <GrDocumentText className='text-gray-700 shrink-0  mt-1 text-sm' />
                        <p className=' text-sm'>Lorem rat natus.</p>
                    </div>


                </div>
                <div className='flex flex-col gap-2'>

                    <div className='flex gap-4 items-center'>
                        <TbBookDownload className='text-gray-700 shrink-0 mt-1 text-sm' />
                        <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur .</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <TfiMobile className='text-gray-700 shrink-0 mt-1 text-sm' />
                        <p className=' text-sm'>Lorem ipsum dolor sit aunatus.</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <SlTrophy className='text-gray-700 shrink-0 mt-1 text-sm' />
                        <p className=' text-sm'>Lorem ipsuro laxpedita quaerat natus.</p>
                    </div>



                </div>
            </div>

        </div>
    )
}
function Requirement() {
    return (
        <div className='my-10'>
            <p className='text-xl font-bold py-2 '>Requirements</p>
            <ul className='list-disc ps-5'>
                <li>This is a Requirement</li>
                <li>Random Text to fill</li>
                <li>No Requirement needed</li>
                <li>Accept only a PC</li>
            </ul>
        </div>
    )
}
function Description() {
    return (<div>
        <p className='text-xl font-bold pt-2 pb-4 '>Description</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam eaque iusto dolor autem praesentium veniam cum, quae, quaerat asperiores molestiae sunt ut sequi non eos aperiam dolorum facere voluptates.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam eaque iusto dolor autem praesentium veniam cum, quae, quaerat asperiores molestiae sunt ut sequi non eos aperiam dolorum facere voluptates.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam eaque iusto dolor autem praesentium veniam cum, quae, quaerat asperiores molestiae sunt ut sequi non eos aperiam dolorum facere voluptates.
    </div>)
}
function CourseContent() {
    return (
        <div className='my-10'>
            <p className='text-xl font-bold pt-2 pb-3 '>Course Content</p>
            <p className='py-2 text-sm font-semibold pb-8'>57 Sections <span className='text-indigo-500'>|</span> 127 Lectures <span className='text-indigo-500'>|</span>  6 Hour Length</p>

            <div className='flex flex-col gap-4'>
                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold flex justify-between bg-base-300" >
                        <p>
                            Introduction To python
                        </p>
                        <p className='text-xs'>
                            12 lecture - 1hr 22min
                        </p>
                    </div>
                    <div className="collapse-content text-sm pt-5 flex flex-col gap-4">
                        <Link className='flex items-center gap-2 bg-base-200 p-2' href={"?"}>
                            <MdOndemandVideo className='text-indigo-500' /> <p>A brief overviwe of the course</p>
                        </Link>
                        <Link className='flex items-center gap-2 bg-base-200 p-2 text-indigo-500 underline underline-offset-2 font-semibold' href={"?"}>
                            <MdOndemandVideo className='text-indigo-500' /> <p>A brief overviwe of the course 2</p>
                        </Link>
                        <Link className='flex items-center gap-2 bg-base-200 p-2' href={"?"}>
                            <MdOndemandVideo className='text-indigo-500' /> <p>A brief overviwe of the course 3</p>
                        </Link>


                    </div>
                </div>
                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold flex justify-between bg-base-300" >
                        <p>
                            Python Env Setup
                        </p>
                        <p className='text-xs'>
                            12 lecture - 1hr 22min
                        </p>
                    </div>
                    <div className="collapse-content text-sm pt-5 flex flex-col gap-4">
                        <Link className='flex items-center gap-2 bg-base-200 p-2' href={"?"}>
                            <MdOndemandVideo className='text-indigo-500' /> <p>A brief overviwe of the course</p>
                        </Link>
                        <Link className='flex items-center gap-2 bg-base-200 p-2 text-indigo-500 underline underline-offset-2 font-semibold' href={"?"}>
                            <MdOndemandVideo className='text-indigo-500' /> <p>A brief overviwe of the course 2</p>
                        </Link>
                        <Link className='flex items-center gap-2 bg-base-200 p-2' href={"?"}>
                            <MdOndemandVideo className='text-indigo-500' /> <p>A brief overviwe of the course 3</p>
                        </Link>


                    </div>
                </div>
                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold flex justify-between bg-base-300" >
                        <p>
                            Hello server in python
                        </p>
                        <p className='text-xs'>
                            12 lecture - 1hr 22min
                        </p>
                    </div>
                    <div className="collapse-content text-sm pt-5 flex flex-col gap-4">
                        <Link className='flex items-center gap-2 bg-base-200 p-2' href={"?"}>
                            <MdOndemandVideo className='text-indigo-500' /> <p>A brief overviwe of the course</p>
                        </Link>
                        <Link className='flex items-center gap-2 bg-base-200 p-2 text-indigo-500 underline underline-offset-2 font-semibold' href={"?"}>
                            <MdOndemandVideo className='text-indigo-500' /> <p>A brief overviwe of the course 2</p>
                        </Link>
                        <Link className='flex items-center gap-2 bg-base-200 p-2' href={"?"}>
                            <MdOndemandVideo className='text-indigo-500' /> <p>A brief overviwe of the course 3</p>
                        </Link>


                    </div>
                </div>
                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold flex justify-between bg-base-300" >
                        <p>
                            Common Structures while writing a python code
                        </p>
                        <p className='text-xs'>
                            12 lecture - 1hr 22min
                        </p>
                    </div>
                    <div className="collapse-content text-sm pt-5 flex flex-col gap-4">
                        <Link className='flex items-center gap-2 bg-base-200 p-2' href={"?"}>
                            <MdOndemandVideo className='text-indigo-500' /> <p>A brief overviwe of the course</p>
                        </Link>
                        <Link className='flex items-center gap-2 bg-base-200 p-2 text-indigo-500 underline underline-offset-2 font-semibold' href={"?"}>
                            <MdOndemandVideo className='text-indigo-500' /> <p>A brief overviwe of the course 2</p>
                        </Link>
                        <Link className='flex items-center gap-2 bg-base-200 p-2' href={"?"}>
                            <MdOndemandVideo className='text-indigo-500' /> <p>A brief overviwe of the course 3</p>
                        </Link>


                    </div>
                </div>
            </div>


        </div>
    )
}