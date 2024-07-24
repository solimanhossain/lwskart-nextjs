import { auth } from "@/auth";
import BreadCrumb from "@/components/BreadCrumb";
import { placeOrder } from "@/actions/order-action";
import CartItem from "@/components/checkout/CartItem";
import { getCartProducts } from "@/actions/connected-action";
import OerderDetails from "@/components/checkout/OerderDetails";
import UserForm from "@/components/checkout/UserForm";
import { redirect } from "next/navigation";

export async function generateMetadata() {
    return {
        title: `Checkout | LWSKart`,
    };
}

export default async function CheckoutPage() {
    const session = await auth();

    let totalCost = 0;

    if (!session?.user) {
        redirect("/login");
    }

    const cartProducts = await getCartProducts(session?.user?.id);
    // console.log(cartProducts);

    totalCost = cartProducts
        .map(
            (product) => product?.productId?.discount_price * product?.quantity
        )
        .reduce((a, b) => a + b, 0);

    return (
        <main>
            <BreadCrumb name="Cart" />

            <form
                action={placeOrder}
                className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6"
            >
                <div className="col-span-8 border border-gray-200 p-4 rounded">
                    <h3 className="text-lg font-medium capitalize mb-4">
                        Checkout
                    </h3>
                    <UserForm userMail={session?.user?.email} />
                </div>

                <div className="col-span-4 border border-gray-200 p-4 rounded">
                    <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
                        order summary
                    </h4>
                    {cartProducts?.map((product) => (
                        <CartItem
                            key={product?._id}
                            product={product.productId}
                            quantity={product?.quantity}
                        />
                    ))}
                    <OerderDetails totalCost={totalCost} />
                </div>
            </form>
        </main>
    );
}
