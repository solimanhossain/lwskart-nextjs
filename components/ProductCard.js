import Image from "next/image";
import Link from "next/link";
import { magnifyingGlass, wishList } from "@/components/SvgIcon";
import AddToCart from "@/components/cart/AddToCart";
import { auth } from "@/auth";
import ProductCartWishlist from "./cart/ProductCartWishlist";

export default async function ProductCard({ product = {}, locale = "en" }) {
    const session = await auth();

    const {
        _id,
        name,
        price,
        discount_price,
        ratings,
        reviewsNumber,
        thumbnail,
    } = product;

    return (
        <div className="flex flex-col justify-between bg-white shadow rounded overflow-hidden group">
            <div className="relative w-[360px] h-[300px]">
                <Image
                    src={thumbnail}
                    alt="product"
                    className="object-cover w-full h-full skeleton"
                    width={360}
                    height={300}
                />

                <div
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                >
                    <Link
                        href={`/product/${_id}`}
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="view product"
                    >
                        {magnifyingGlass}
                    </Link>
                    <ProductCartWishlist
                        userId={session?.user?.id}
                        productId={_id.toString()}
                    />
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <Link href={`/product/${_id}`}>
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                        {name}
                    </h4>
                </Link>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">
                        ${price}
                    </p>
                    <p className="text-sm text-gray-400 line-through">
                        ${discount_price}
                    </p>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-1 text-sm text-yellow-400">
                        {Array(Math.floor(ratings)).fill("⭐️")}
                    </div>
                    <div className="text-xs text-gray-500 ml-3">
                        ({reviewsNumber})
                    </div>
                </div>
            </div>
            <AddToCart
                userId={session?.user?.id}
                productId={_id.toString()}
                lang={locale}
            />
        </div>
    );
}
