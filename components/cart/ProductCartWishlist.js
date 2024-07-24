"use client";

import { useRouter } from "next/navigation";
import { addToWishlist, isWishlisted } from "@/actions/connected-action";
import { wishList } from "../SvgIcon";

export default function ProductCartWishlist({ userId, productId }) {
    const router = useRouter();
    async function handleAddToWishlist(userId, productId) {
        if (!userId || !productId) {
            return router.push("/login");
        }
        const isAdded = await isWishlisted(userId, productId);
        if (isAdded) return;

        const res = await addToWishlist(userId, productId);

        if (res.status === "added") {
            router.refresh();
        }
    }

    return (
        <button
            onClick={() => handleAddToWishlist(userId, productId)}
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
        >
            {wishList}
        </button>
    );
}
