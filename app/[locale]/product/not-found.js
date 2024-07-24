import notFound from "@/public/assets/icons/item-not-found.svg";
import Image from "next/image";
import Link from "next/link";

export function generateMetadata() {
    return {
        title: "Product Not found | LWSKart",
    };
}
export default function NotFoundPage() {
    return (
        <div className="w-full h-[60vh] flex flex-col justify-center items-center gap-4">
            <Image
                src={notFound}
                alt="not found"
                className="w-[300px] h-[250px] object-cover"
            />
            <h1 className="text-primary text-3xl font-bold ">
                Product Not Found!
            </h1>

            <Link
                href="/"
                className="py-2 px-4 border border-primary text-primary rounded-sm"
            >
                ↩ Go Home
            </Link>
        </div>
    );
}
