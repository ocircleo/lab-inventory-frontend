"use client";
import Alert from '@/app/components/alert/Alert';
import API from '@/app/components/API';
import React from 'react';

const CourseDelete = ({ id, children }) => {
    const deleteCourse = async () => {
        try {
            const req = await fetch(API + "/courses/delete-course/" + id, {
                method: "DELETE",
                credentials: "include",
            })
            const res = await req.json();
            if (res.success) {
                Alert("success", "Course deleted successfully");
                window.location.reload();
            }
            else {
                Alert("error", res.message);
            }
        } catch (error) {
            console.log("Error deleting course: ", error);
            Alert("error", "Error deleting course: " + error.message)
        }
    }
    return (
        <button onClick={deleteCourse} className='rounded cursor-pointer active:scale-90 duration-100 col-span-1 text-sm font-semibold bg-custom-blue'>
            {children}
        </button>
    );
}

export default CourseDelete;
