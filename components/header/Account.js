"use client";

import { setCartWishlist } from "@/database/queries";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Account({ name, img, id }) {
    useEffect(() => {
        async function addCartWishlist(id) {
            await setCartWishlist(id);
        }
        if (id) {
            addCartWishlist(id);
        }
    }, []);

    return (
        <Link
            href="/account"
            className="flex flex-col justify-center items-center text-center text-gray-700 hover:text-primary transition relative"
        >
            {img ? (
                <Image
                    src={img}
                    alt="logo"
                    className="border rounded-full"
                    width={24}
                    height={24}
                />
            ) : (
                <div className="bg-primary text-white border w-[24px] h-[24px] rounded-full text-base">
                    {name?.charAt(0)?.toUpperCase()}
                </div>
            )}

            <div className="text-xs leading-3 mt-1">{name?.split(" ")[0]}</div>
        </Link>
    );
}
