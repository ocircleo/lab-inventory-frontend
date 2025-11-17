"use client";
import API from '@/app/components/API';
import React from 'react';

const CourseForm = ({ preData }) => {
    let data = preData?.data || {};
    const submitHandler = async (e) => {
        e.preventDefault()
        const form = e.target;
        let title, description, what_you_will_learn, course_includes, requirements, price, published, language, instructors;
        title = form.title.value;
        description = form.description.value;
        what_you_will_learn = form.what_you_will_learn.value;
        course_includes = form.course_includes.value;
        requirements = form.requirements.value;
        price = form.price.value;
        published = form.published.value;
        language = (form.language.value).split(",").map((lang) => lang.trim());
        instructors = (form.instructors.value).split(",").map((lang) => lang.trim());
        const formData = { title, description, what_you_will_learn, course_includes, requirements, price, published, language, instructors }
        if (preData?.type === "add") {
            const result = await addCourse(formData)
            console.log("Adding Course: ", result);
        } else {
            const result = await updateCourse(formData, id = data._id);
            console.log("Updating Course: ", result);
        }
    }
    return (<form onSubmit={submitHandler}
        className="grid grid-cols-2 gap-4 w-full   mt-8"
    >
        <fieldset className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <label htmlFor="title" className='p-1'>Course Title</label>
            <input
                name="title"
                type="text"
                id='title'
                required
                defaultValue={data?.title}
                className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                placeholder="Course Title"
            />
        </fieldset>
        <fieldset className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <label htmlFor="price" className='p-1'>Course Price</label>
            <input

                name="price"
                type="text"
                id='price'
                required
                defaultValue={data?.price}
                className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                placeholder="Price"
            />
        </fieldset>
        <fieldset className="col-span-2  flex flex-col gap-2">
            <label htmlFor="description" className='p-1'>Description</label>
            <textarea

                name="description"
                id='description'
                required
                defaultValue={data?.description}
                rows={4}
                className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                placeholder="Describe the course..."
            />
        </fieldset>
        <fieldset className="col-span-2 md:col-span-1  flex flex-col gap-2">
            <label htmlFor="what_you_will_learn" className='p-1'>what you will learn</label>
            <textarea
                // let title, description, what_you_will_learn, course_includes, requirements, price, published, language;
                name="what_you_will_learn"
                id='what_you_will_learn'
                required
                defaultValue={data?.what_you_will_learn}
                rows={4}
                className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                placeholder="Describe the course..."
            />
        </fieldset>
        <fieldset className="col-span-2 md:col-span-1  flex flex-col gap-2">
            <label htmlFor="course_includes" className='p-1'>course includes</label>
            <textarea
                // let title, description, what_you_will_learn, course_includes, requirements, price, published, language;
                name="course_includes"
                id='course_includes'
                required
                defaultValue={data?.course_includes}
                rows={4}
                className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                placeholder="Describe the course..."
            />
        </fieldset>
        <fieldset className="col-span-2 md:col-span-1  flex flex-col gap-2">
            <label htmlFor="requirements" className='p-1'>Requirements</label>
            <textarea
                // let title, description, what_you_will_learn, course_includes, requirements, price, published, language;
                name="requirements"
                id='requirements'
                required
                defaultValue={data?.requirements}
                rows={4}
                className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                placeholder="..Required pre skill."
            />
        </fieldset>

        <fieldset className="col-span-2 md:col-span-1  flex flex-col gap-2">
            <label htmlFor="language" className='p-1'>Languages</label>
            <textarea
                name="language"
                id='language'
                required
                defaultValue={data?.language ? data.language.join(",") : ""}
                rows={4}
                className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                placeholder="Enter languages separated by , e.g. English,Spanish"
            />
        </fieldset>
        <fieldset className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <label htmlFor="instructors" className='p-1'>Instructors ID</label>
            <input
                name="instructors"
                type="text"
                id='instructors'
                defaultValue={data?.instructors}
                required
                className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                placeholder="instructors IDs separated by ,"
            />
        </fieldset>
        <fieldset className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <label htmlFor="published" className='p-1'>Published ?</label>
            <select
                name="published"
                id='published'
                className="px-4 py-2 border rounded bg-base-200"
                defaultValue={data?.published ? "true" : "false"}
            >
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select>
        </fieldset>
        <div className='col-span-2 flex items-center justify-center my-6 '>

            <button
                id="submitButton"
                className="btn btn-block  bg-custom-blue hover:bg-green-500 font-semibold text-white rounded-lg"
            >
                {preData?.type === "add" ? "Add Course" : "Update Course"}
            </button>
        </div>
    </form>

    );
}

export default CourseForm;

async function addCourse(data) {
    const req = await fetch(API + "/apiUrl", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
        credentials: "include",
    })
    const res = await req.json();
    return res;
}
async function updateCourse(data, id) {
    const req = await fetch(API + "/apiUrl/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
        credentials: "include",
    })
    const res = await req.json();
    return res;
}