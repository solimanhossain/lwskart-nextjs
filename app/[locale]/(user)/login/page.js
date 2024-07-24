import { getLang } from "@/app/lang/lang";
import { auth } from "@/auth";
import UserSocialMedia from "@/components/UserSocialMedia";
import LoginForm from "@/components/form/LoginForm";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function generateMetadata() {
    return {
        title: `Login | LWSKart`,
    };
}

export default async function page({ params: { locale } }) {
    const session = await auth();

    if (session?.user) {
        return redirect("/account");
    }

    const languages = await getLang(locale);
    // console.log(languages?.login);

    return (
        <div className="contain py-16">
            <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                <h2 className="text-2xl uppercase font-medium mb-1">
                    {languages?.login?.title}
                </h2>
                <p className="text-gray-600 mb-6 text-sm">
                    {languages?.login?.welcomeMessage}
                </p>

                <LoginForm />
                <div className="mt-6 flex justify-center relative">
                    <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
                        {languages?.login?.loginWith}
                    </div>
                    <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
                </div>
                <UserSocialMedia />

                <p className="mt-4 text-center text-gray-600">
                    {languages?.login?.registerMessage}
                    <Link href="/register" className="text-primary">
                        {languages?.login?.registerLink}
                    </Link>
                </p>
            </div>
        </div>
    );
}
