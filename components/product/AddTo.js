"use client";
import { addToCart } from "@/actions/connected-action";
import WishlistCartAdd from "../cart/WishlistCartAdd";
import ProductQuantity from "./ProductQuantity";
import { useRouter } from "next/navigation";
import { cart } from "@/components/SvgIcon";
import { useState } from "react";

export default function AddTo({ userId, productId, lang, quantity }) {
    const [quantityCount, setQuantityCount] = useState(1);
    const router = useRouter();

    async function handleaddToCart(userId, productId, quanityCount) {
        if (!userId) {
            window.localStorage.setItem("lwsKart-cart", productId);
            router.push("/login");
        }
        const carted = await addToCart(userId, productId, quanityCount);

        if (carted.status === "added") {
            router.refresh();
        }
    }

    return (
        <>
            <ProductQuantity
                quantity={quantity}
                setQuantityCount={setQuantityCount}
                quantityCount={quantityCount}
            />
            <div className="mt-4 flex gap-3  border-gray-200 py-1">
                <button
                    onClick={() =>
                        handleaddToCart(userId, productId, quantityCount)
                    }
                    className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
                >
                    <span className="text-2xl">{cart}</span>
                    {lang?.addtocart}
                </button>

                <WishlistCartAdd
                    userId={userId}
                    productId={productId}
                    lang={lang}
                />
            </div>
        </>
    );
}
