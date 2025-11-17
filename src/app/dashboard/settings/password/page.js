export const metadata = {
  title: "Change Password",
  description: "Change your account password.",
};
import PasswordForm from "./PasswordForm";
const PasswordPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-base-100 px-4 sm:px-0 min-h-screen">
      <div className="w-full sm:w-96">
        <h1 className="text-3xl font-bold pt-8">Change Password</h1>
        <p className="text-sm pt-2">Update your password below.</p>
        <PasswordForm />
      </div>
    </div>
  );
};
export default PasswordPage;
