import Link from 'next/link';
import React from 'react';
import CourseDelete from './CourseDelete';

const CoursesListView = ({ courses }) => {

    return (
        <div className='flex gap-2 flex-col rounded'>
            {
                courses.map((ele, index) => <div key={"course-list" + index} className='bg-base-200 px-3 py-2 grid grid-cols-6'>
                    <h2 className='text-lg col-span-4 font-semibold'>{ele.title || `Course Title ${index + 1}`}</h2>
                    <Link href={"/admin/courses/" + ele._id} className='underline underline-offset-4 text-sm font-semibold col-span-1 text-custom-blue'>Edit Course</Link>
                    <CourseDelete id={ele._id} >Delete Course</CourseDelete>
                </div>
                )

            }
        </div>
    );
}

export default CoursesListView;
