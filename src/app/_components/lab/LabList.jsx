import Link from "next/link";


const LabList = ({ data, type }) => {

    return (
        <div className="flex flex-col gap-2">
            {data?.length == 0 ? (
                <p>No data found, try again please</p>
            ) : (
                ""
            )}
            {data.map((ele, index) => (
                <div key={"templateList-" + index} className="bg-base-200 rounded grid py-3 md:py-1 px-6 grid-cols-12">

                    <div className="font-semibold text-custom-blue col-span-6 md:col-span-3 py-2" >{ele.name}</div>
                    <div className="bg-base-300 py-2 px-2 col-span-6 md:col-span-3">Dept. {ele.dept}</div>
                    <div className=" py-2 px-2 col-span-6 md:col-span-3">{ele.type}</div>

                    <Link href={`/${type}/labs/${ele._id}`} className="text-custom-blue underline underline-offset-4 font-semibold italic py-2 px-2 col-span-6 md:col-span-3">
                        Edit Lab
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default LabList;

