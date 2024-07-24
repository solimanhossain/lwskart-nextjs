import { getLang } from "@/app/lang/lang";
import Image from "next/image";

export default async function CopyRight({ locale }) {
    const language = await getLang(locale);

    return (
        <div className="bg-gray-800 py-4">
            <div className="container flex items-center justify-between">
                <p className="text-white">{language?.copyright}</p>
                <div>
                    <Image
                        src="/assets/images/methods.png"
                        alt="methods"
                        className="h-5"
                        width={200}
                        height={20}
                    />
                </div>
            </div>
        </div>
    );
}
