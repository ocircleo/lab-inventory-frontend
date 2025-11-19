import MultiItemSlider from "@/app/components/slider/MultiItemSlider";
import MultiItemSliderNoCount from "@/app/components/slider/MultiItemSliderNoCount";
import SignatureCourses from "@/app/(MAINLAYOUT)/components/SignatureCourse";
import GetStarted from "@/app/(MAINLAYOUT)/components/GetStarted";
import Discover from "@/app/(MAINLAYOUT)/components/Discover";
import PopularCourses from "@/app/(MAINLAYOUT)/components/PopularCourses";
import Mentors from "@/app/(MAINLAYOUT)/components/Mentors";
import StartTeaching from "@/app/(MAINLAYOUT)/components/StartTeaching";
import Stories from "@/app/(MAINLAYOUT)/components/Stories";

const Home = () => {
  return (
    <div className="w-full lg:w-[90%] mx-auto">
      <GetStarted></GetStarted>
      <Discover />
      <div className="bg-base-100 p-4 mt-12">
        <div className="flex flex-col px-10 lg:px-0  items-center justify-center gap-6 my-8">
          <p className="text-xs font-bold px-2 py-1 justify-self-center self-center bg-info/10 rounded-full text-custom-blue ">
            COURSE CATEGORY
          </p>
          <p className="text-2xl lg:text-4xl font-bold text-center lg:text-start">
            Explore Our Signature Courses
          </p>
        </div>
        <MultiItemSlider>
          <SignatureCourses></SignatureCourses>
        </MultiItemSlider>
      </div>
      <PopularCourses></PopularCourses>
      <div className="bg-base-100 p-4 mt-12">
        <Stories></Stories>
      </div>
      <div className="bg-base-100 p-4 mt-12">
        <div className="flex flex-col px-10 lg:px-0  items-center justify-center gap-6 my-8">
          <p className="text-xs font-bold px-2 py-1 justify-self-center self-center bg-info/10 rounded-full text-custom-blue ">
            OUR EXPERT MENTOR
          </p>
          <p className="text-2xl lg:text-4xl font-bold text-center lg:text-start">
            Learn from the Best to Become the Best
          </p>
        </div>
        <MultiItemSliderNoCount>
          <Mentors></Mentors>
        </MultiItemSliderNoCount>
      </div>

      <StartTeaching></StartTeaching>
    </div>
  );
};

export default Home;
