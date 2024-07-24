"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LangSwitch() {
    const router = useRouter();
    const path = usePathname();

    const locale = path.split("/")[1];

    function handleOnChange(e) {
        // set cookie
        document.cookie = `LWS_LOCALE=${e.target.value}; path=/;`;
        // new path
        router.push(`/${e.target.value}/${path?.substring(3)}`);
    }

    return (
        <select
            className="bg-primary text-white rounded-md py-1 text-sm"
            name="language"
            onChange={handleOnChange}
            defaultValue={locale}
        >
            <option value="bn">বাং</option>
            <option value="en">EN</option>
        </select>
    );
}
