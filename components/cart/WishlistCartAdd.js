"use client";

import { addToWishlist, isWishlisted } from "@/actions/connected-action";
import { wishList } from "@/components/SvgIcon";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WishlistCartAdd({ userId, productId, lang }) {
    const [isWishlist, setIsWishlist] = useState(false);
    const router = useRouter();

    useEffect(() => {
        isWishlisted(userId, productId).then((res) => {
            setIsWishlist(res);
        });
    }, []);

    async function handleAddToWishlist(userId, productId) {
        if (!userId) {
            window.localStorage.setItem("lwsKart-wishlist", productId);
            return router.push("/login");
        }
        const isAdded = await isWishlisted(userId, productId);
        if (isAdded) return;

        const res = await addToWishlist(userId, productId);

        if (res.status === "added") {
            setIsWishlist(true);
            router.refresh();
        }
    }
    // console.log(lang);

    return (
        <button
            disabled={isWishlist}
            onClick={() => handleAddToWishlist(userId, productId)}
            className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
        >
            {wishList}{" "}
            {isWishlist ? lang?.addedtowishlist : lang?.addToWishlist}
        </button>
    );
}
