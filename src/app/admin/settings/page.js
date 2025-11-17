export const metadata = {
  title: "Settings",
  description: "Manage your account settings.",
};
import SettingsForm from "./SettingsForm";
const SettingsPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-base-100 px-4 sm:px-0 min-h-screen">
      <div className="w-full sm:w-96">
        <h1 className="text-3xl font-bold pt-8">Settings</h1>
        <p className="text-sm pt-2">Manage your account settings below.</p>
        <SettingsForm />
      </div>
    </div>
  );
};
export default SettingsPage;
