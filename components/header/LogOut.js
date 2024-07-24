"use client";

import { signOut } from "next-auth/react";

export default function LogOut({ logout }) {
    function handleLogout() {
        signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/login` });
    }

    return (
        <button
            className="text-gray-200 hover:text-white transition"
            onClick={handleLogout}
        >
            {logout}
        </button>
    );
}
