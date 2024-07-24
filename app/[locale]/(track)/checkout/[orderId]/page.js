import { getOrder } from "@/actions/order-action";
import { getAddress } from "@/actions/user-action";
import { auth } from "@/auth";
import DownloadBtn from "@/components/pdfgenerate/DownloadBtn";
import PdfPage from "@/components/pdfgenerate/PdfPage";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function generateMetadata() {
    return {
        title: `Order Success | LWSKart`,
    };
}

export default async function CompletedPage({ params: { orderId } }) {
    const session = await auth();
    if (!session?.user) {
        return redirect("/login");
    }

    const ordered = await getOrder(orderId);

    if (!ordered) {
        return redirect("/checkout");
    }

    const userAddress = await getAddress(session?.user?.email);
    const shippingAdress = userAddress?.shippingAdress;

    const products = ordered[0]?.products?.map((product) => {
        return {
            name: product?.productId?.name,
            price: product?.productId?.discount_price,
            quantity: product?.quantity,
        };
    });

    const invoice = {
        user: {
            name: session?.user?.name,
            email: session?.user?.email,
            phone: shippingAdress?.phone,
            address: shippingAdress?.address,
        },
        products,
        totalCost: ordered[0]?.totalCost,
    };

    // console.log(invoice);

    return (
        <main className="container flex flex-col justify-center text-center mt-16">
            <h1 className="text-5xl text-green-600 font-bold font-serif uppercase">
                Your order placed
                <br />
                successfully!
            </h1>

            <p className="text-2xl uppercase text-black font-bold mt-6">
                Thank you for your order
            </p>
            <p>Product will be delivered soon</p>
            <div className="border-b border-primary w-1/12 mx-auto m-1"></div>
            <p className="text-gray-500 m-6">
                We have mailed you an order confirmation <br /> and we will
                notify you when it has been delivered.
            </p>
            <div className="flex gap-4 justify-center mb-4">
                <Link
                    href="/shop"
                    className="py-2 px-4 border bg-primary text-white rounded-sm hover:shadow-lg"
                >
                    Continue Shopping
                </Link>

                <DownloadBtn invoice={invoice} />
            </div>

            {/* <PdfPage /> */}
        </main>
    );
}
