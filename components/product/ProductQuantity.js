"use client";

export default function ProductQuantity({
    quantity,
    quantityCount,
    setQuantityCount,
}) {
    function handleNegativeQuantity() {
        if (quantityCount > 1) {
            setQuantityCount(quantityCount - 1);
        }
    }

    function handlePositiveQuantity() {
        if (quantityCount < quantity) {
            setQuantityCount(quantityCount + 1);
        }
    }

    return (
        <div className="mt-4 flex gap-3 items-center">
            <h3 className="text-sm text-gray-800 uppercase">Quantity</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                <button
                    onClick={handleNegativeQuantity}
                    className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                >
                    -
                </button>
                <div className="h-8 w-8 text-base flex items-center justify-center">
                    {quantityCount}
                </div>
                <button
                    onClick={handlePositiveQuantity}
                    className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                >
                    +
                </button>
            </div>
        </div>
    );
}
