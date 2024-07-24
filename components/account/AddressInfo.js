"use client";

import { useState } from "react";
import AdressEdit from "../form/AdressEdit";

export default function AdressInfo({ address, mail, typeAddr, name }) {
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
                <AdressEdit
                    isEdit={handleEditBtn}
                    oldData={address}
                    mail={mail}
                    typeAddr={typeAddr}
                />
            ) : (
                <div className="space-y-1">
                    <h4 className="text-gray-700 font-medium">
                        {address?.name}
                    </h4>
                    <p className="text-gray-800">{address?.address}</p>
                    <p className="text-gray-800">{address?.pincode}</p>
                    <p className="text-gray-800">{address?.phone}</p>
                </div>
            )}
        </div>
    );
}
