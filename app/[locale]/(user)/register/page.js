import { auth } from "@/auth";
import { redirect } from "next/navigation";
import UserSocialMedia from "@/components/UserSocialMedia";
import RegisterForm from "@/components/form/RegisterForm";
import Link from "next/link";
import { getLang } from "@/app/lang/lang";

export async function generateMetadata() {
    return {
        title: `Register | LWSKart`,
    };
}

export default async function RegisterPage({ params: { locale } }) {
    const session = await auth();

    if (session?.user) {
        return redirect("/account");
    }

    const languages = await getLang(locale);

    return (
        <div className="contain py-16">
            <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                <h2 className="text-2xl uppercase font-medium mb-1">
                    {languages?.register?.title}
                </h2>
                <p className="text-gray-600 mb-6 text-sm">
                    {languages?.register?.welcomeMessage}
                </p>

                <RegisterForm />
                <div className="mt-6 flex justify-center relative">
                    <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
                        {languages?.login?.loginWith}
                    </div>
                    <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
                </div>
                <UserSocialMedia />

                <p className="mt-4 text-center text-gray-600">
                    {languages?.register?.registerMessage}
                    <Link href="/login" className="text-primary">
                        {languages?.register?.registerLink}
                    </Link>
                </p>
            </div>
        </div>
    );
}
