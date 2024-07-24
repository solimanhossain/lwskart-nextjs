import { auth } from "@/auth";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import BreadCrumb from "@/components/BreadCrumb";
import AdressInfo from "@/components/account/AddressInfo";
import AccountInfo from "@/components/account/AccountInfo";
import PersonalProfile from "@/components/account/PersonalProfile";
import { getAddress, getUserData } from "@/actions/user-action";
import { changeObjIdtoString } from "@/utils/objIdToString";
import LoadingBar from "@/components/LoadingBar";
import { getLang } from "@/app/lang/lang";

export async function generateMetadata() {
    const session = await auth();

    return {
        title: `${session?.user?.name} | LWSKart`,
    };
}

export default async function AccountPage({ params: { locale } }) {
    const session = await auth();

    if (!session?.user) {
        return redirect("/login");
    }

    const languages = await getLang(locale);

    const address = await getAddress(session?.user?.email);
    const user = await getUserData(session?.user?.email);

    // console.log(languages?.account);

    return (
        <main>
            <BreadCrumb name={languages?.account?.title} />
            <div className="container  items-start gap-6 pt-2 pb-6">
                <Suspense fallback={<LoadingBar />}>
                    <AccountInfo user={changeObjIdtoString(user)} />
                </Suspense>
                <div className="my-6 grid grid-cols-3 gap-4 mx-auto max-w-5xl">
                    <Suspense fallback={<LoadingBar />}>
                        <PersonalProfile
                            user={changeObjIdtoString(user)}
                            name={languages?.account?.personalDetails}
                        />

                        <AdressInfo
                            address={address?.shippingAdress}
                            mail={user?.email}
                            typeAddr="shippingAdress"
                            name={languages?.account?.shippingAdress}
                        />
                        <AdressInfo
                            address={address?.billingAdress}
                            mail={user?.email}
                            typeAddr="billingAdress"
                            name={languages?.account?.billingAdress}
                        />
                    </Suspense>
                </div>
            </div>
        </main>
    );
}
