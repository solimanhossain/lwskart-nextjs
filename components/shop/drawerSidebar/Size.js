"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function Size({ size }) {
    const route = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // const totalSize = ["S", "M", "L", "XL", "XXL"];
    const createQueryString = useCallback(
        (name, value, remove = false) => {
            const params = new URLSearchParams(searchParams.toString());
            if (remove) {
                params.delete(name);
            } else {
                params.set(name, value);
            }
            return params.toString();
        },
        [searchParams]
    );

    const handleClick = () => {
        const currentSize = searchParams.get("sizes");
        const newQueryString = createQueryString(
            "sizes",
            size,
            currentSize === size
        );
        route.push(`${pathname}?${newQueryString}`);
    };

    return (
        <div key={size} className="size-selector  p-1">
            <input type="radio" name={size} id={size} className="hidden" />
            <label
                onClick={handleClick}
                htmlFor={size}
                className={`text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm ${
                    size === searchParams.get("sizes")?.toLocaleUpperCase()
                        ? "bg-primary text-white"
                        : "text-gray-600"
                }`}
            >
                {size}
            </label>
        </div>
    );
}
