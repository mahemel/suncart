import LoginForm from "@/components/LoginForm";
import LoginWithGoogle from "@/components/LoginWithGoogle";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { MdSunny } from "react-icons/md";

const LoginPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (session) {
        redirect("/");
    }

    return (
        <div className="mx-auto max-w-sm border rounded-xl p-6 animate__animated animate__fadeIn">
            <div className="flex flex-col items-center gap-2 mb-8">
                <MdSunny size={32} />
                <h2 className="font-bold text-xl">Welcome Back</h2>
                <p>Sign in to your SunCart account</p>
            </div>
            <LoginForm></LoginForm>

            <div className="flex items-center gap-4 my-5">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-sm text-gray-500 font-medium uppercase">
                    Or continue with
                </span>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <LoginWithGoogle></LoginWithGoogle>

            <p className="text-center mt-4 flex gap-1 justify-center">
                Don&apos;t have an account?
                <Link href={"/register"} className="text-orange-500">
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default LoginPage;
