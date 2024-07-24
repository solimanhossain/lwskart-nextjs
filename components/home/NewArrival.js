import { findSortedProducts } from "@/actions/product-action";
import ProductCard from "../ProductCard";

export default async function NewArrival({ locale }) {
    const sortByDateProducts = await findSortedProducts({ date: -1 });

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {sortByDateProducts?.slice(0, 20)?.map((product, index) => (
                <ProductCard key={index} product={product} locale={locale} />
            ))}
        </div>
    );
}
