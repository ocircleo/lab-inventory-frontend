"use client";
import React, { useState } from 'react';
import ImageFrom from '../../courses/[courseId]/ImageFrom';

const CourseImage = ({ data }) => {
    const [uploading, setUploading] = useState(false);
    const toggleUploading = () => setUploading(!uploading);
    return (

        <div>
            <p className='px-2'>Edit The images </p>
            <div className='grid grid-cols-2'>
                <div className='col-span-2 md:col-span-1 p-2'>
                    <div className='bg-base-300 rounded w-64 aspect-[4/5]'>
                        <ImageFrom data={data} uploading={uploading} toggleUploading={toggleUploading}
                         imgUrl={data?.course_image} targetIndex={0} type={"image"}></ImageFrom>
                    </div>
                    <p>Upload image aspect 4/5 (width/height)</p>
                </div>
                <div className='col-span-2 md:col-span-1 p-2'>
                    <div className='bg-base-300 rounded w-96 aspect-[4/2]'>
                        <ImageFrom data={data} imgUrl={data?.course_image2} uploading={uploading} toggleUploading={toggleUploading} targetIndex={1} type={"image"}></ImageFrom>

                    </div>
                    <p>Upload image aspect 4/2 (width/height)</p>
                </div>


            </div>
        </div>
    );
}

export default CourseImage;
