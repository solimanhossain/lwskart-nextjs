import Link from "next/link";
import Image from "next/image";
import { distinctUniqueCategory } from "@/actions/product-action";
import { getLang } from "@/app/lang/lang";

export default async function DropCategoryDown({ locale }) {
    const totalCategories = await distinctUniqueCategory("category");
    if (!totalCategories) return null;
    const languages = await getLang(locale);

    return (
        <div className="px-4 py-4 w-48 bg-primary md:flex items-center cursor-pointer relative group hidden z-40">
            <span className="text-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="-5 -7 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"
                    ></path>
                </svg>
            </span>
            <span className="capitalize ml-2 text-white">
                {languages?.navbar?.AllCategories}
            </span>
            <div className="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-48">
                {totalCategories.map((category) => (
                    <Link
                        key={category}
                        href={`/${locale}/shop?category=${category}`}
                        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                    >
                        <Image
                            src={`/assets/icons/category/${category
                                .split(" ")
                                .join("-")}.svg`}
                            className="w-5 h-5 object-contain"
                            alt={category}
                            height="20"
                            width="20"
                        />
                        <span className="ml-6 text-black text-sm">
                            {category.toUpperCase()}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
