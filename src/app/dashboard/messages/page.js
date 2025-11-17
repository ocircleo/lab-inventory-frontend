export const metadata = {
  title: "Messages",
  description: "View and send messages.",
};
import MessagesForm from "./MessagesForm";
const MessagesPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-base-100 px-4 sm:px-0 min-h-screen">
      <div className="w-full sm:w-96">
        <h1 className="text-3xl font-bold pt-8">Messages</h1>
        <p className="text-sm pt-2">Send and reply to messages.</p>
        <MessagesForm />
      </div>
    </div>
  );
};
export default MessagesPage;
