export default function ProductInfo({
    product: { quantity, brand, category, sku },
}) {
    return (
        <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
                <span>Availability: </span>
                <span
                    className={quantity > 0 ? "text-green-500" : "text-red-500"}
                >
                    {quantity > 0 ? "In Stock" : "Out of Stock"}
                </span>
            </p>
            <p className="space-x-2">
                <span className="text-gray-800 font-semibold">Brand: </span>
                <span className="text-gray-600 capitalize">{brand}</span>
            </p>
            <p className="space-x-2">
                <span className="text-gray-800 font-semibold">
                    {"Category: "}
                </span>
                <span className="text-gray-600 capitalize">{category}</span>
            </p>
            <p className="space-x-2">
                <span className="text-gray-800 font-semibold">SKU: </span>
                <span className="text-gray-600 uppercase">{sku}</span>
            </p>
        </div>
    );
}
