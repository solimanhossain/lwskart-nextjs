import Image from "next/image";

import MenuList from "./MenuList";
import ShareSocialMedia from "../ShareSocialMedia";
import darkLogo from "@/public/assets/icons/logo/dark.svg";
import { getLang } from "@/app/lang/lang";

export default async function FooterBar({ locale }) {
    const language = await getLang(locale);

    return (
        <footer className="bg-white py-10 border-t border-gray-100">
            <div className="container grid grid-cols-1 ">
                <div className="col-span-1 mb-8 space-y-4 flex justify-between">
                    <Image src={darkLogo} alt="logo" className=" w-40" />
                    <div className="mr-2 text-center">
                        <p className="text-gray-500">
                            {language?.footer?.description1}
                            <br />
                            {language?.footer?.description2}
                        </p>
                    </div>
                    <div className="flex space-x-5">
                        <ShareSocialMedia />
                    </div>
                </div>

                <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                {language?.footer?.solutions}
                            </h3>
                            <MenuList wow lang={language?.footer} />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                {language?.footer?.support}
                            </h3>
                            <MenuList lang={language?.footer} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                {language?.footer?.marketing}
                            </h3>
                            <MenuList wow lang={language?.footer} />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                {language?.footer?.analytics}
                            </h3>
                            <MenuList lang={language?.footer} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
