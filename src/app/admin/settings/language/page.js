export const metadata = {
  title: "Language Settings",
  description: "Change your language preference.",
};
import LanguageForm from "./LanguageForm";
const LanguagePage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-base-100 px-4 sm:px-0 min-h-screen">
      <div className="w-full sm:w-96">
        <h1 className="text-3xl font-bold pt-8">Language Settings</h1>
        <p className="text-sm pt-2">Select your preferred language.</p>
        <LanguageForm />
      </div>
    </div>
  );
};
export default LanguagePage;
