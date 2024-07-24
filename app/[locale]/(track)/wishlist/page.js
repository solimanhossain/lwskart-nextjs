import { getWishlist } from "@/actions/connected-action";
import { auth } from "@/auth";
import BreadCrumb from "@/components/BreadCrumb";
import WishlistProducts from "@/components/cart/WishlistProducts";
import { redirect } from "next/navigation";

export async function generateMetadata() {
    return {
        title: `Wishlist | LWSKart`,
    };
}

export default async function WishlistPage() {
    const session = await auth();

    if (!session?.user) {
        redirect("/login");
    }

    const wishlist = await getWishlist(session?.user?.id);

    return (
        <main>
            <BreadCrumb name="Wishlist" />

            <div className="container gap-6 pt-4 pb-16">
                <div className="mx-auto space-y-4 max-w-6xl">
                    {wishlist.length === 0 && (
                        <div className="text-center m-8 border p-8">
                            <p className="text-2xl">No products in wishlist.</p>
                        </div>
                    )}
                    {wishlist?.map((item) => (
                        <WishlistProducts
                            key={item?._id}
                            item={item.productId}
                            userId={session?.user?.id}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
