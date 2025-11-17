export const metadata = {
  title: "Edit Profile",
  description: "Edit your profile information.",
};
import EditProfileForm from "./EditProfileForm";
const EditProfilePage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-base-100 px-4 sm:px-0 min-h-screen">
      <div className="w-full sm:w-96">
        <h1 className="text-3xl font-bold pt-8">Edit Profile</h1>
        <p className="text-sm pt-2">Update your profile details below.</p>
        <EditProfileForm />
      </div>
    </div>
  );
};
export default EditProfilePage;
