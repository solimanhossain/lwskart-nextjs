import { searchQuaryFinder } from "@/actions/product-action";
import ProductCard from "../ProductCard";

export default async function RelatedProduct({ category, locale }) {
    const relatedProducts = await searchQuaryFinder({ category });

    return (
        <div className="grid grid-cols-4 gap-6">
            {relatedProducts?.slice(0, 4)?.map((product, index) => (
                <ProductCard key={index} product={product} locale={locale} />
            ))}
        </div>
    );
}
