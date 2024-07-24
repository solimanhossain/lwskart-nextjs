"use client";

import Image from "next/image";
import { editbtn } from "../SvgIcon";
import { useCallback, useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import { updateUserImage } from "@/actions/user-action";

export default function AccountInfo({ user }) {
    const handleUpload = useCallback(async (result) => {
        await updateUserImage(result?.info?.url, user?.email);
    }, []);

    return (
        <div className="flex flex-col items-center py-4 text-center">
            <div className="relative max-h-[180px] max-w-[180px] rounded-full lg:mb-8 h-[100px] w-[100px] bg-primary grid place-items-center text-4xl text-white">
                {user?.image ? (
                    <Image
                        className="rounded-full w-full h-full object-cover skeleton"
                        src={user?.image}
                        alt={user?.name}
                        height={90}
                        width={90}
                    />
                ) : (
                    user?.name.charAt(0)?.toUpperCase()
                )}

                <label className="cursor-pointer absolute bottom-0 right-0 bg-blue-500 border border-white rounded-full p-1">
                    <span>{editbtn}</span>
                    <CldUploadButton
                        className="hidden"
                        options={{ sources: ["local"], maxFiles: 1 }}
                        onSuccess={handleUpload}
                        uploadPreset="lwskart_user"
                    />
                </label>
            </div>

            <div>
                <h3 className="text-2xl font-semibold lg:text-[28px]">
                    {user?.name}
                </h3>
                <p className="leading-[231%] lg:text-lg">{user?.email}</p>
            </div>

            <div className="w-1/2 border-b border-[#a4a4a4] py-6 lg:py-4"></div>
        </div>
    );
}
