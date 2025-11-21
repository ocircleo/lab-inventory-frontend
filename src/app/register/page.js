import Link from "next/link";
import { RegisterForm } from "./RegisterForm";
export const metadata = {
  title: "Register",
  description:
    "Register in Inventory Manager  with your Email to unlock all the features",
};
const Register = () => {
  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center bg-base-100 col-span-2 lg:col-span-1 px-4 sm:px-0">
        <div>
          <Link
            href={"/"}
            className="font-semibold italic underline underline-offset-2 text-custom-blue"
          >
            Go Back to Home
          </Link>

          <h1 className="text-4xl font-bold pt-8">Register</h1>
          <div className="w-full lg:w-96">
            <p className="text-sm pt-2">
              Welcome! To get started, simply fill out the information below to
              create your account.
            </p>
          </div>
          <RegisterForm />
          <div className="pt-4">
            <Link href="/login">
              <span className=" text-sm">Already have an account?</span>{" "}
              <span className="text-info font-semibold">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
