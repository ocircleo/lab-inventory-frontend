import Link from "next/link";
import LoginForm from "./LoginForm";
export const metadata = {
  title: "Login",
  description:
    "Login in Inventory Manager with your Email to unlock all the features",
};
const Login = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-base-100  px-4 sm:px-0 ">
      <div>
        <Link href={"/"} className="font-semibold italic underline underline-offset-2 text-custom-blue">Go Back to Home</Link>
        <h1 className="text-4xl font-bold pt-8">Log in to your Account</h1>
        <p className="text-sm pt-2">Welcome back! Select method to login</p>
        <LoginForm />
        <div className="text-center py-8">
          <Link href="/register">
            <span className="text-primary">Don&apos;t have an account?</span>{" "}
            <span className="text-info">Create an account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
