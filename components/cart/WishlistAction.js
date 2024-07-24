"use client";

import { addToCart, removeFromWishlist } from "@/actions/connected-action";
import { thrash } from "../SvgIcon";
import { useRouter } from "next/navigation";

export default function WishlistAction({ userId, productId }) {
    const router = useRouter();

    async function handleaddToCart(userId, productId, count = 1) {
        if (!userId) {
            window.localStorage.setItem("lwsKart-wishlist", productId);
            router.push("/login");
        }
        const cart = await addToCart(userId, productId, count);
        if (cart.status === "added" || cart.status === "updated") {
            await removeFromWishlist(userId, productId);
            router.refresh();
        }
    }

    async function handleremoveFromWishlist(userId, productId) {
        await removeFromWishlist(userId, productId);
        router.refresh();
    }

    return (
        <>
            <button
                onClick={() => handleaddToCart(userId, productId)}
                className="px-6 py-2 text-center text-sm text-white bg-green-600 border hover:bg-transparent hover:border-green-600 rounded hover:text-green-600 transition uppercase font-roboto font-medium"
            >
                add to cart
            </button>

            <button
                onClick={() => handleremoveFromWishlist(userId, productId)}
                className="text-white bg-primary rounded-full p-2 cursor-pointer hover:bg-transparent hover:text-primary border border-primary"
            >
                <i className="text-3xl">{thrash}</i>
            </button>
        </>
    );
}
