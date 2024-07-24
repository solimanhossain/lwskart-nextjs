import { addToCart, addToWishlist } from "@/actions/connected-action";
import { auth } from "@/auth";
import Link from "next/link";

export default async function CartWishlist({ btn, total, btnName, children }) {
    return (
        <Link
            href={btn === "Cartlist" ? "/checkout" : "/wishlist"}
            className="flex flex-col text-center text-gray-700 hover:text-primary transition relative"
        >
            {children}
            <div className="text-xs leading-3">{btnName}</div>
            {total && (
                <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary/75 text-white text-xs">
                    {total}
                </div>
            )}
        </Link>
    );
}
