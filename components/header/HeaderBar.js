import Link from "next/link";
import Image from "next/image";

import Search from "./Search";
import CartWishlist from "./CartWishlist";
import { getWishlist, getCartProducts } from "@/actions/connected-action";
import darkLogo from "@/public/assets/icons/logo/dark.svg";
import { wishList, cart } from "@/components/SvgIcon";
import { auth } from "@/auth";
import Account from "./Account";
import { getLang } from "@/app/lang/lang";
import { getUserData } from "@/actions/user-action";

export default async function HeaderBar({ locale }) {
    const language = await getLang(locale);
    const session = await auth();
    const wishlistCount = await getWishlist(session?.user?.id);
    const cartlistCount = await getCartProducts(session?.user?.id);
    const user = await getUserData(session?.user?.email);

    return (
        <header className="py-4 shadow-sm bg-white">
            <div className="container flex items-center justify-between gap-2">
                <Link href="/">
                    <Image src={darkLogo} alt="logo" className="w-32" />
                </Link>

                <Search locale={locale} language={language} />

                <div className="flex items-center space-x-4">
                    <CartWishlist
                        btn="Wishlist"
                        btnName={language?.header?.wishlist}
                        total={wishlistCount?.length || null}
                    >
                        <div className="text-2xl">{wishList}</div>
                    </CartWishlist>
                    <CartWishlist
                        btn="Cartlist"
                        btnName={language?.header?.cart}
                        total={cartlistCount?.length || null}
                    >
                        <div className="text-2xl">{cart}</div>
                    </CartWishlist>

                    {session?.user && (
                        <Account
                            name={user?.name}
                            img={user?.image}
                            id={session?.user?.id}
                        />
                    )}
                </div>
            </div>
        </header>
    );
}
