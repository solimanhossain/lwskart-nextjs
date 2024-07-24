import Image from "next/image";
import WishlistAction from "./WishlistAction";
import { getSingleProduct } from "@/actions/product-action";
import Link from "next/link";

export default async function WishlistProducts({
    item: { _id, name, thumbnail, quantity, discount_price },
    userId,
}) {
    return (
        <div className="flex items-center justify-around border gap-2 px-2 py-6 border-gray-200 rounded-xl bg-black/5">
            <Link
                className="w-1/2 flex items-center gap-x-16"
                href={`/product/${_id}`}
            >
                <div className="w-28 h-28 border border-primary rounded-full">
                    <Image
                        src={thumbnail}
                        alt="product"
                        className="w-full h-full rounded-full object-cover skeleton"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="w-2/3">
                    <h2 className="text-gray-800 text-xl font-medium uppercase">
                        {name}
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Availability:{" "}
                        {quantity > 0 ? (
                            <span className="text-green-600">In Stock</span>
                        ) : (
                            <span className="text-red-600">Out of Stock</span>
                        )}
                    </p>
                </div>
            </Link>
            <div className="text-green-600 text-lg font-semibold">
                ${discount_price}
            </div>
            <WishlistAction
                userId={userId.toString()}
                productId={_id.toString()}
            />
        </div>
    );
}
