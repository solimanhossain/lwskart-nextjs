export default async function CartItem({ product, quantity }) {
    if (!product) {
        return null;
    }

    return (
        <div className="space-y-2">
            <div className="flex justify-between">
                <div>
                    <h5 className="text-gray-800 font-medium">
                        {product?.name}
                    </h5>
                    <p className="text-sm text-gray-600">
                        Size: {product?.sizes[0]}
                    </p>
                </div>
                <p className="text-gray-600">x{quantity}</p>
                <p className="text-gray-800 font-medium">
                    ${product?.price * quantity}
                </p>
            </div>
        </div>
    );
}
