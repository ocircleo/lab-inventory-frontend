export const metadata = {
  title: "Two-Factor Authentication",
  description: "Manage your 2FA settings.",
};
import TwoFAForm from "./TwoFAForm";
const TwoFAPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-base-100 px-4 sm:px-0 min-h-screen">
      <div className="w-full sm:w-96">
        <h1 className="text-3xl font-bold pt-8">Two-Factor Authentication</h1>
        <p className="text-sm pt-2">Enable or disable 2FA below.</p>
        <TwoFAForm />
      </div>
    </div>
  );
};
export default TwoFAPage;
