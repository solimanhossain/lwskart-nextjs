"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Price() {
    const route = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    function handleChange(event) {
        const newQueryString = createQueryString(
            event.target.name,
            event.target.value
        );
        route.push(pathname + "?" + newQueryString);
    }

    return (
        <div className="mt-4 flex items-center">
            <input
                type="text"
                name="priceMin"
                id="priceMin"
                onChange={handleChange}
                value={searchParams.get("priceMin") || ""}
                className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                placeholder="min"
            />
            <span className="mx-3 text-gray-500">-</span>
            <input
                type="text"
                name="priceMax"
                id="priceMax"
                onChange={handleChange}
                value={searchParams.get("priceMax") || ""}
                className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                placeholder="max"
            />
        </div>
    );
}
