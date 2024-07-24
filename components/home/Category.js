import { distinctUniqueCategory } from "@/actions/product-action";
import Image from "next/image";
import Link from "next/link";

export default async function Category({ locale }) {
    const totalCategories = await distinctUniqueCategory("category");

    if (!totalCategories) return null;

    return (
        <div className="grid grid-cols-3 gap-3">
            {totalCategories?.map((category) => (
                <div
                    key={category}
                    className="relative rounded-sm overflow-hidden group "
                >
                    <Image
                        src={`/assets/images/category/${category
                            .split(" ")
                            .join("-")}.jpg`}
                        alt={category}
                        className="w-full object-cover skeleton"
                        width={300}
                        height={300}
                    />
                    <Link
                        href={`/${locale}/shop?category=${category
                            .split(" ")
                            .join("+")}`}
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition uppercase"
                    >
                        {category}
                    </Link>
                </div>
            ))}
        </div>
    );
}
