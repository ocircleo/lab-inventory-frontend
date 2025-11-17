export const metadata = {
  title: "Profile",
  description: "View your profile information.",
};
import ProfileForm from "./ProfileForm";
const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-base-100 px-4 sm:px-0">
      <div className="w-full sm:w-96">
        <h1 className="text-3xl font-bold pt-8">Your Profile</h1>
        <p className="text-sm pt-2">View and manage your profile information.</p>
        <ProfileForm />
      </div>
      <div className="bg-accent h-screen">ss</div>
      <div className="bg-amber-900 h-screen">dd</div>
    </div>
  );
};
export default ProfilePage;
