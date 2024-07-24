import { editUserData } from "@/actions/user-action";
import { useState } from "react";

export default function AccountProfileEdit({ user, isEdit }) {
    const [userData, setUserData] = useState({
        name: user?.name,
        email: user?.email,
        phone: user?.phone ?? "",
    });

    function updateUser(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    function submitEditedUser(e) {
        e.preventDefault();
        editUserData(user?.email, userData);
        isEdit(false);
    }

    return (
        <form className="space-y-1" onSubmit={submitEditedUser}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={updateUser}
                value={userData.name}
                className="focus:outline-none border border-gray-200 rounded-md w-full"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={updateUser}
                value={userData.email}
                className="focus:outline-none border border-gray-200 rounded-md w-full"
            />
            <input
                type="number"
                name="phone"
                placeholder="Phone"
                onChange={updateUser}
                value={userData.phone}
                className="focus:outline-none border border-gray-200  rounded-md w-full"
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
