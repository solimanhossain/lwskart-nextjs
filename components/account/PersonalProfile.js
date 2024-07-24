"use client";

import { useState } from "react";
import AccountProfileEdit from "../form/AccountProfileEdit";

export default function PersonalProfile({ user, name }) {
    const [edit, setEdit] = useState(false);

    function handleEditBtn() {
        setEdit(!edit);
    }

    return (
        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800 text-lg">{name}</h3>
                <button onClick={handleEditBtn} className="text-primary">
                    {edit ? "Cancel" : "Edit"}
                </button>
            </div>

            {edit ? (
                <AccountProfileEdit isEdit={handleEditBtn} user={user} />
            ) : (
                <div className="space-y-1">
                    <h4 className="text-gray-700 font-medium">{user?.name}</h4>
                    <p className="text-gray-800">{user?.email}</p>
                    <p className="text-gray-800">{user?.phone}</p>
                </div>
            )}
        </div>
    );
}
