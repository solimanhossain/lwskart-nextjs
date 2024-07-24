import { findSortedProducts } from "@/actions/product-action";
import ProductCard from "../ProductCard";

export default async function Trending({ locale }) {
    const sortByReviewProducts = await findSortedProducts({
        reviewsNumber: -1,
    });
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sortByReviewProducts?.slice(0, 20)?.map((product, index) => (
                <ProductCard key={index} product={product} locale={locale} />
            ))}
        </div>
    );
}
