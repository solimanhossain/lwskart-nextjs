"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import connectMongo from "@/dbConnect/connectMongo";
import { UserAddressModel, UserModel } from "@/models/user-model";
import { revalidatePath } from "next/cache";

async function loginUser(formData) {
    await connectMongo();
    const user = Object.fromEntries(formData);
    await signIn("credentials", user);
    redirect("/account");
}

async function loginSocial(formData) {
    const social = formData.get("socialLogIn");
    await signIn(social, { redirectTo: "/account" });
}

async function getUserData(email) {
    await connectMongo();
    return await UserModel.findOne({ email });
}

async function registerUser(formData) {
    await connectMongo();
    let email = formData.get("email");
    const isExist = await UserModel.findOne({ email });
    if (isExist) return { message: "Your email is already registered!" };
    const user = Object.fromEntries(formData);
    const created = await UserModel.create(user);
    redirect("/login");
}

async function updateUserImage(imgUrl, email) {
    await connectMongo();
    const user = await UserModel.findOne({ email });
    user.image = imgUrl;
    await user.save();
    redirect("/account");
}

async function editUserData(email, formData) {
    await connectMongo();
    await UserModel.findOneAndUpdate({ email }, formData);
    redirect("/account");
}

async function getAddress(email) {
    await connectMongo();
    return await UserAddressModel.findOne({ email });
}

async function editShippingAddress(email, userData) {
    await connectMongo();
    const shipAdress = await UserAddressModel.findOne({ email });

    if (!shipAdress) {
        const created = await UserAddressModel.create({
            email: email,
            shippingAdress: userData,
        });
    }

    await UserAddressModel.findOneAndUpdate(
        { email },
        {
            email: email,
            shippingAdress: userData,
        }
    );
    // revalidatePath("/account");
    // redirect("/account");
}

async function editBillingAddress(email, userData) {
    await connectMongo();
    const shipAdress = await UserAddressModel.findOne({ email });

    if (!shipAdress) {
        const created = await UserAddressModel.create({
            email: email,
            billingAdress: userData,
        });
    }

    await UserAddressModel.findOneAndUpdate(
        { email },
        {
            email: email,
            billingAdress: userData,
        }
    );
    revalidatePath("/account");
    redirect("/account");
}

export {
    loginUser,
    loginSocial,
    getAddress,
    registerUser,
    editUserData,
    getUserData,
    updateUserImage,
    editShippingAddress,
    editBillingAddress,
};
