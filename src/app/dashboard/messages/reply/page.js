export const metadata = {
  title: "Reply Message",
  description: "Reply to a message.",
};
import ReplyMessageForm from "./ReplyMessageForm";
const ReplyMessagePage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-base-100 px-4 sm:px-0 min-h-screen">
      <div className="w-full sm:w-96">
        <h1 className="text-3xl font-bold pt-8">Reply Message</h1>
        <p className="text-sm pt-2">Reply to a received message.</p>
        <ReplyMessageForm />
      </div>
    </div>
  );
};
export default ReplyMessagePage;
