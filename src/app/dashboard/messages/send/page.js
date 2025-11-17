export const metadata = {
  title: "Send Message",
  description: "Send a new message.",
};
import SendMessageForm from "./SendMessageForm";
const SendMessagePage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-base-100 px-4 sm:px-0 min-h-screen">
      <div className="w-full sm:w-96">
        <h1 className="text-3xl font-bold pt-8">Send Message</h1>
        <p className="text-sm pt-2">Compose and send a new message.</p>
        <SendMessageForm />
      </div>
    </div>
  );
};
export default SendMessagePage;
