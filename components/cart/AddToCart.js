"use client";
import { addToCart } from "@/actions/connected-action";
import { cart } from "@/components/SvgIcon";
import { useRouter } from "next/navigation";

export default function AddToCart({ userId, productId, lang }) {
    const router = useRouter();

    async function handleAddToCart() {
        if (!userId) {
            window.localStorage.setItem("lwsKart-cart", productId);
            router.push("/login");
        } else {
            const cart = await addToCart(userId, productId);

            if (cart.status === "added") {
                router.refresh();
            }
        }
    }

    return (
        <button
            onClick={handleAddToCart}
            className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
        >
            <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">{cart}</span>{" "}
                {lang === "en" ? "Add to cart" : "কার্টে যোগ করুন"}
            </div>
        </button>
    );
}
