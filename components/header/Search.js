"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { magnifyingGlass } from "../SvgIcon";
import { useState } from "react";

export default function Search({ locale, language }) {
    const route = useRouter();
    const searchParams = useSearchParams();
    const [search, setSearch] = useState("");

    function handleSearch(e) {
        e.preventDefault();
        if (search) {
            const params = new URLSearchParams(searchParams.toString());
            params.set("search", search);
            route.push(`/${locale}/shop?${params.toString()}`);
        }
    }

    return (
        <form className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-4 text-lg text-gray-400 max-md:hidden">
                <i>{magnifyingGlass}</i>
            </span>
            <input
                type="text"
                id="search"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
                placeholder={language?.header?.searchholder}
            />
            <button
                type="submit"
                onClick={handleSearch}
                className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex items-center "
            >
                {language?.header?.search}
            </button>
        </form>
    );
}
