import React from 'react';
import ImageFrom from '../../courses/[courseId]/ImageFrom';

const CourseImage = ({ data }) => {
    return (

        <div>
            <p className='px-2'>Edit The images </p>
            <div className='grid grid-cols-2'>
                <div className='col-span-2 md:col-span-1 p-2'>
                    <div className='bg-base-300 rounded h-64 w-full'>
                        <ImageFrom data={{}} imgUrl={null} targetIndex={0} type={"image"}></ImageFrom>
                    </div>
                    <button>Upload image</button>
                </div>
                <div className='col-span-2 md:col-span-1 p-2'>
                    <div className='bg-base-300 rounded h-64 w-full'>
                        <ImageFrom data={{}} imgUrl={""} targetIndex={1} type={"image"}></ImageFrom>

                    </div>
                    <button>Upload image</button>
                </div>


            </div>
        </div>
    );
}

export default CourseImage;
