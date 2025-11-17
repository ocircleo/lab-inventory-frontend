import Link from 'next/link';
import React from 'react';

const CoursesListView = ({ courses }) => {
    console.log(courses);
    return (
        <div className='flex gap-2 flex-col rounded'>
            {
                courses.map((ele, index) => <div key={"course-list" + index} className='bg-base-200 px-3 py-2 flex items-center justify-around'>
                    <h2 className='text-lg font-semibold'>{ele.title || `Course Title ${index + 1}`}</h2>
                    <Link href={"/admin/courses/" + index} className='underline underline-offset-4 text-sm font-semibold text-custom-blue'>Edit Course</Link>
                    <Link href={"/admin/courses/" + index + "/modules"} className='underline underline-offset-4 text-sm font-semibold text-custom-blue'>Modules</Link>
                </div>
                )

            }
        </div>
    );
}

export default CoursesListView;
