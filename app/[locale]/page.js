import { Suspense } from "react";
import { getLang } from "../lang/lang";
import Ads from "@/components/home/Ads";
import Banner from "@/components/home/Banner";
import Feature from "@/components/home/Feature";
import Category from "@/components/home/Category";
import Trending from "@/components/home/Trending";
import NewArrival from "@/components/home/NewArrival";
import LoadingBar from "@/components/LoadingBar";

export async function generateMetadata() {
    return {
        title: `Home | LWSKart`,
    };
}

export default async function HomePage({ params: { locale } }) {
    const languages = await getLang(locale);

    return (
        <main>
            <Banner languages={languages} />
            <Feature languages={languages} />
            <>
                <div className="container py-16">
                    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
                        {languages?.home?.category}
                    </h2>
                    <Suspense fallback={<LoadingBar />}>
                        <Category locale={locale} />
                    </Suspense>
                </div>
                <div className="container pb-16">
                    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
                        {languages?.others?.newArrivals}
                    </h2>
                    <Suspense fallback={<LoadingBar />}>
                        <NewArrival locale={locale} />
                    </Suspense>
                </div>

                <Ads />

                <div className="container pb-16">
                    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
                        {languages?.others?.trending}
                    </h2>
                    <Suspense fallback={<LoadingBar />}>
                        <Trending locale={locale} />
                    </Suspense>
                </div>
            </>
        </main>
    );
}
