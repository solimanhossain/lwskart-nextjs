import ProductCard from "../ProductCard";

export default async function ShowProducts({ productsPromise, locale }) {
    const products = await productsPromise;
    return (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
            {products?.map((product) => (
                <ProductCard
                    key={product?._id}
                    product={product}
                    locale={locale}
                />
            ))}
        </div>
    );
}
