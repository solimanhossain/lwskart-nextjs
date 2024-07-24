"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function Categories({ category, count }) {
    const route = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString());
            const currentCategories = params.getAll(name);

            if (currentCategories.includes(value)) {
                const newCategories = currentCategories.filter(
                    (category) => category !== value
                );
                params.delete(name);
                newCategories.forEach((category) =>
                    params.append(name, category)
                );
            } else {
                params.append(name, value);
            }

            return params.toString();
        },
        [searchParams]
    );

    function handleChange() {
        const newQueryString = createQueryString("category", category);
        route.push(`${pathname}?${newQueryString}`);
    }

    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                name={category}
                id={category}
                checked={searchParams.getAll("category").includes(category)}
                onChange={handleChange}
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
                htmlFor={category}
                className="text-gray-600 ml-3 cusror-pointer capitalize"
            >
                {category}
            </label>
            <div className="ml-auto text-gray-600 text-sm ">({count})</div>
        </div>
    );
}
