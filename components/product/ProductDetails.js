import { auth } from "@/auth";
import ShareSocialMedia from "../ShareSocialMedia";
import WishlistCartAdd from "@/components/cart/WishlistCartAdd";
import ProductInfo from "@/components/product/ProductInfo";
import ProductQuantity from "@/components/product/ProductQuantity";
import AddTo from "./AddTo";

export default async function ProductDetails({ product, lang }) {
    const {
        _id,
        name,
        reviewsNumber,
        quantity,
        description,
        price,
        discount_price,
    } = product;
    const session = await auth();

    return (
        <div>
            <h2 className="text-3xl font-medium uppercase mb-2">{name}</h2>
            <div className="flex items-center mb-4">
                <div className="flex text-sm bg-yellow-400 text-white px-1">
                    <span>{"Star"}</span>
                </div>
                <div className="text-sm text-gray-500 px-2 bg-slate-50 ">
                    {reviewsNumber} Reviews
                </div>
            </div>

            <ProductInfo product={product} />

            <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                <p className="text-xl text-primary font-semibold">
                    ${discount_price}
                </p>
                <p className="text-base text-gray-400 line-through">${price}</p>
            </div>

            <AddTo
                userId={session?.user?.id}
                productId={_id.toString()}
                quantity={quantity}
                lang={lang}
            />

            <p className="my-6 text-gray-600">{description}</p>

            <div className="flex gap-3 border-t mt-2 pt-2">
                <ShareSocialMedia />
            </div>
        </div>
    );
}
