import { editBillingAddress, editShippingAddress } from "@/actions/user-action";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function AdressEdit({ mail, oldData, isEdit, typeAddr }) {
    const [editAdr, setEditAdr] = useState({
        name: oldData?.name ?? "",
        address: oldData?.address ?? "",
        pincode: oldData?.pincode ?? "",
        phone: oldData?.phone ?? "",
    });

    function handleChange(e) {
        setEditAdr({ ...editAdr, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const res = {};
        if (typeAddr === "shippingAdress") {
            const res = editShippingAddress(mail, editAdr);
        } else if (typeAddr === "billingAdress") {
            const res = editBillingAddress(mail, editAdr);
        }
        isEdit(false);
        if (res?.error) return toast.error(res.error);
        toast.success("Details Updated successfully!");
        redirect("/account");
    }

    return (
        <form className="space-y-1" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={editAdr?.name}
                onChange={handleChange}
                className="focus:outline-none border border-gray-200 rounded-md w-full"
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={editAdr?.address}
                onChange={handleChange}
                className="focus:outline-none border border-gray-200 rounded-md w-full"
            />
            <input
                type="number"
                name="pincode"
                placeholder="Pincode"
                value={editAdr?.pincode}
                onChange={handleChange}
                className="focus:outline-none border border-gray-200 rounded-md w-full"
            />
            <input
                type="number"
                name="phone"
                placeholder="Phone"
                value={editAdr?.phone}
                onChange={handleChange}
                className="focus:outline-none border border-gray-200 rounded-md w-full"
            />

            <button
                type="submit"
                className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
                Save
            </button>
        </form>
    );
}
