import Image from "next/image";

const returnImageIndex = (index, type = "num") => {
    index++;

    if (index > 3) index = index % 3 == 0 ? 3 : index % 3;
    let alphabet = ["x", "y", "z"];
    if (type == "num") return index;
    return alphabet[index - 1];
};

const SignatureCourse = () => {
    let arr = [...new Array(12).keys()]
    return (
        <div className=' flex gap-4 shrink-0 flex-nowrap overflow-x-scroll md:overflow-x-hidden py-2 w-full'>
            {
                arr.map(ele => <Card key={ele} data={ele}></Card>)
            }
        </div>
    );
}

export default SignatureCourse;

function Card({data}) {
    return (<>
        <div className='shadow-sm rounded p-1  shrink-0 w-full xxs:w-64 cursor-pointer  bg-base-100 hover:bg-base-200 text-base-100'>
            <div className='relative'>
                <div className="absolute top-0 left-0 w-full h-full z-20">
                    <div className='absolute top-3 left-2 bg-gray-100/30 font-bold backdrop-blur-2xl px-3 rounded-full py-1 text-sm shadow'>⭐ 4.7 (112)</div>
                    <p className="absolute bottom-3 left-3 text-sm font-bold">Language and Communication</p>

                </div>
                <div style={{ boxShadow: "0 0 25px rgba(0,0,0,.25) inset", }} className="z-10 h-full w-full bg-transparent rounded-lg absolute top-0 left-0  "></div>
                <Image height={320} width={256} src={`/images/courses/${returnImageIndex(data)}.png`} alt="" className='w-full xxs:w-64 h-auto aspect-[4/5] rounded-lg bg-base-100 object-cover  ' />
            </div>
        </div>
    </>)
}
