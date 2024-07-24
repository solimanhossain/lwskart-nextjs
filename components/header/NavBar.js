import Link from "next/link";
import { auth } from "@/auth";
import LogOut from "./LogOut";
import DropDown from "./DropDown";
import LangSwitch from "./LangSwitch";
import { Suspense } from "react";
import { getLang } from "@/app/lang/lang";

export default async function NavBar({ locale }) {
    const session = await auth();
    const lanuages = await getLang(locale);

    return (
        <nav className="bg-gray-800">
            <div className="container flex">
                <Suspense fallback={<div>...</div>}>
                    <DropDown locale={locale} />
                </Suspense>

                <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
                    <div className="flex items-center space-x-6 capitalize">
                        <Link
                            href="/"
                            className="text-gray-200
                            hover:text-white transition"
                        >
                            {lanuages?.navbar?.home}
                        </Link>
                        <Link
                            href="/shop"
                            className="text-gray-200
                            hover:text-white transition"
                        >
                            {lanuages?.navbar?.shop}
                        </Link>
                        <Link
                            href="/about-us"
                            className="text-gray-200
                            hover:text-white transition"
                        >
                            {lanuages?.navbar?.aboutUs}
                        </Link>
                    </div>
                    <div className="flex items-center space-x-6">
                        {session?.user ? (
                            <LogOut logout={lanuages?.navbar?.logout} />
                        ) : (
                            <Link
                                href="/login"
                                className="text-gray-200
                            hover:text-white transition"
                            >
                                {lanuages?.navbar?.login}
                            </Link>
                        )}
                        <LangSwitch />
                    </div>
                </div>
            </div>
        </nav>
    );
}
