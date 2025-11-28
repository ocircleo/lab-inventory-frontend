"use client"
import { TbArrowBackUp } from "react-icons/tb";
import { useRouter } from "next/navigation";

const BackButton = ({ children }) => {
    const router = useRouter()
    const goBack = () => router.back()
    return (
        <button onClick={goBack} className=" text-sm italic cursor-pointer px-2 py-1 bg-gray-700/50 font-semibold rounded my-2 text-custom-blue hover:text-orange-500 flex gap-1 items-center">
            {children} <TbArrowBackUp className="text-xl"/>
        </button>
    );
}

export default BackButton;
