"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { clearCart, getCartProducts } from "./connected-action";
import { updateProductQuantity } from "./product-action";
import connectMongo from "@/dbConnect/connectMongo";
import { OrderModel, orderModel } from "@/models/connected-model";
import { editShippingAddress } from "./user-action";
import { Resend } from "resend";
import PdfPage from "@/components/pdfgenerate/PdfPage";
import { compile } from "@fileforge/react-print";
import { Onedoc } from "@onedoc/client";

async function placeOrder(formData) {
    const data = Object.fromEntries(formData);

    if (
        !data.email ||
        !data["first-name"] ||
        !data["last-name"] ||
        !data.address ||
        !data.city ||
        !data.aggrement === "on"
    ) {
        return {
            message: "All fields are required",
        };
        // throw new Error("All fields are required");
    }

    const session = await auth();

    const cartProducts = await getCartProducts(session?.user?.id);

    const productPromise = cartProducts.map(async (product) => {
        await updateProductQuantity(product?.productId?._id, product?.quantity);

        return {
            productId: product?.productId?._id,
            quantity: product?.quantity,
        };
    });

    const products = await Promise.all(productPromise);
    const totalCost = cartProducts
        .map(
            (product) => product?.productId?.discount_price * product?.quantity
        )
        .reduce((a, b) => a + b, 0);

    const ordered = await addToOrder({
        user: session?.user?.id,
        products,
        totalCost,
    });

    await editShippingAddress(session?.user?.email, {
        name: `${data["first-name"]} ${data["last-name"]}`,
        address: `${data.address}, ${data.city}, ${data?.country || null}`,
        email: data?.email,
        phone: data?.phone,
    });

    const allProducts = cartProducts.map((product) => product?.productId);

    await sendEmail(data, allProducts, totalCost);

    await clearCart(session?.user?.id);
    redirect(`/checkout/${ordered?._id}`);
}

async function addToOrder(finalData) {
    await connectMongo();
    const orderCreate = OrderModel.create(finalData);
    return orderCreate;
}

async function getOrder(orderId) {
    await connectMongo();
    return await OrderModel.find({ _id: orderId }).populate(
        "products.productId"
    );
}

async function sendEmail(data, products, totalCost) {
    const invoice = {
        user: {
            name: `${data["first-name"]} ${data["last-name"]}`,
            address: `${data.address}, ${data.city}, ${data?.country || null}`,
            phone: data?.phone,
            email: data?.email,
        },
        products,
        totalCost,
    };

    const page = <PdfPage invoice={invoice} />;
    const onedoc = new Onedoc(process.env.NEXT_PUBLIC_ONEDOC_API_KEY);

    const { link, file, error, info } = await onedoc.render({
        html: await compile(page),
        save: true,
        expiresIn: 1,
    });

    const resend = new Resend(process.env.RESEND_API_KEY);

    const sendEmail = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: data?.email,
        subject: `Dear ${data["first-name"]} ${data["last-name"]}, Order has been placed!`,
        html: `<p>Soon you will receive products. <br/>Your Order has comfirmed (<strong><a href='${link}'>Invoice</a></strong>)!</p> `,
    });
    return sendEmail;
}

export { placeOrder, addToOrder, getOrder, sendEmail };
