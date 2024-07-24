import { getLang } from "@/app/lang/lang";
import BreadCrumb from "@/components/BreadCrumb";

export default async function AboutUsPage({ params: { locale } }) {
    const languages = await getLang(locale);
    // console.log(languages?.about);

    return (
        <main className="container flex flex-col justify-center text-center">
            <BreadCrumb name={languages?.about?.title} />

            <h1 className="w-1/3 m-auto mt-4 text-3xl border-b-2 border-black p-6 uppercase">
                {languages?.about?.title}
            </h1>
            <p className="m-8 text-xl">{languages?.about?.description}</p>
        </main>
    );
}
