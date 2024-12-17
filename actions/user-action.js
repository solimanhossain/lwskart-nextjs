"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import connectMongo from "@/dbConnect/connectMongo";
import { UserAddressModel, UserModel } from "@/models/user-model";
import { revalidatePath } from "next/cache";

async function loginUser(formData) {
    await connectMongo();
    const user = Object.fromEntries(formData);
    const isExist = await UserModel.findOne({
        email: user.email,
        password: user.password,
    });
    if (!isExist) return { error: "Email or password mismatch" };

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

    const email = formData.get("email");
    const isExist = await UserModel.findOne({ email });
    if (isExist) return { error: "Email already exists." };

    try {
        const user = Object.fromEntries(formData);
        await UserModel.create(user);
        redirect("/login");
    } catch (err) {
        return { error: "An error occurred during registration." };
    }
}

async function updateUserImage(imgUrl, email) {
    await connectMongo();
    try {
        const user = await UserModel.findOne({ email });
        user.image = imgUrl;
        await user.save();
        redirect("/account");
    } catch (error) {
        return { error };
    }
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
    try {
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
    } catch (error) {
        return { error };
    }
}

async function editBillingAddress(email, userData) {
    await connectMongo();
    try {
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
    } catch (error) {
        return { error };
    }
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
