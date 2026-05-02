import LoginWithGoogle from "@/components/LoginWithGoogle";
import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";
import { MdSunny } from "react-icons/md";

export const metadata = {
    title: "SunCart | Register",
};
const RegisterPage = async () => {
    return (
        <div className="mx-auto max-w-sm border rounded-xl p-6  animate__animated animate__fadeIn">
            <div className="flex flex-col items-center gap-2 mb-8">
                <MdSunny size={32} />
                <h2 className="font-bold text-xl">Register Account</h2>
                <p>Join SunCart for exclusive summer deals</p>
            </div>

            <RegisterForm></RegisterForm>

            <div className="flex items-center gap-4 my-5">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-sm text-gray-500 font-medium uppercase">
                    Or continue with
                </span>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <LoginWithGoogle></LoginWithGoogle>

            <p className="text-center mt-4 flex gap-1 justify-center">
                Already have an account?
                <Link href={"/login"} className="text-orange-500">
                    Sign in
                </Link>
            </p>
        </div>
    );
};

export default RegisterPage;
