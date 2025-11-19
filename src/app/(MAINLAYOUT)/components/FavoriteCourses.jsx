import Image from "next/image";

const returnImageIndex = (index, type = "num") => {
    index++;
    
    if (index > 3) index = index % 3 == 0 ? 3 : index % 3;
    let alphabet = ["x", "y", "z"];
    if (type == "num") return index;
    return alphabet[index - 1];
};

const FavoriteCourses = () => {
    let arr = [...new Array(12).keys()]
    return (
        <div className=' flex gap-4 shrink-0 flex-nowrap overflow-x-scroll md:overflow-x-hidden py-2 w-full'>
            {
                arr.map((ele, index) => <Card key={ele} data={index}></Card>)
            }
        </div>
    );
}

export default FavoriteCourses;

function Card({ data }) {
    return (<>
        <div className='shadow-sm rounded-2xl p-4  shrink-0 w-full xxs:w-96 cursor-pointer  bg-base-100 hover:bg-base-300'>
            <div className='relative'>
                <div className='absolute top-3 left-2 bg-gray-300/25 backdrop-blur-2xl px-3 rounded-full py-1 text-sm shadow'>⭐ 4.7 (112)</div>
                <Image height={192} width={384} src={`/images/courses/${returnImageIndex(data, "char")}.png`} alt="" className='w-full xxs:w-96 aspect-[4/2] rounded-3xl bg-base-100 object-cover' />
            </div>
            <div className='flex justify-between pt-2 pb-1 text-sm font-semibold'>
                <p>Beyond Pixels: Mastering Advanced Photoshop Techniques</p>
                <div>
                    <p className='text-info'>$10.44</p>
                    <p className='text-gray-400 text-xs'>$12.44</p>
                </div>
            </div>
            <p className='text-xs text-gray-400 font-semibold'>salmans academy</p>
        </div>
    </>)
}