export default async function OerderDetails({ totalCost }) {
    const shipping = 0;
    const grandTotal = totalCost + shipping;

    return (
        <>
            <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                <p>subtotal</p>
                <p>${totalCost}</p>
            </div>

            <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                <p>shipping</p>
                <p>{shipping === 0 ? "Free" : `$${shipping}`}</p>
            </div>

            <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
                <p className="font-semibold">Total</p>
                <p>${grandTotal}</p>
            </div>

            <div className="flex items-center mb-4 mt-2">
                <input
                    required
                    // checked
                    type="checkbox"
                    name="aggrement"
                    id="aggrement"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
                />
                <label
                    htmlFor="aggrement"
                    className="text-gray-600 ml-3 cursor-pointer text-sm"
                >
                    I agree to the{" "}
                    <a href="#" className="text-primary">
                        terms & conditions
                    </a>
                </label>
            </div>

            <button
                type="submit"
                disabled={!grandTotal}
                className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
            >
                Place order
            </button>
        </>
    );
}
