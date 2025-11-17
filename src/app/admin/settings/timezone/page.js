export const metadata = {
  title: "Time Zone Settings",
  description: "Set your time zone.",
};
import TimeZoneForm from "./TimeZoneForm";
const TimeZonePage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-base-100 px-4 sm:px-0 min-h-screen">
      <div className="w-full sm:w-96">
        <h1 className="text-3xl font-bold pt-8">Time Zone Settings</h1>
        <p className="text-sm pt-2">Select your time zone.</p>
        <TimeZoneForm />
      </div>
    </div>
  );
};
export default TimeZonePage;
