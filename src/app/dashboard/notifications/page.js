export const metadata = {
  title: "Notifications Center",
  description: "View your notifications.",
};
import NotificationsForm from "./NotificationsForm";
const NotificationsPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-base-100 px-4 sm:px-0 min-h-screen">
      <div className="w-full sm:w-96">
        <h1 className="text-3xl font-bold pt-8">Notifications Center</h1>
        <p className="text-sm pt-2">Check your latest notifications.</p>
        <NotificationsForm />
      </div>
    </div>
  );
};
export default NotificationsPage;
