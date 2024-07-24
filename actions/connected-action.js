"use server";

import connectMongo from "@/dbConnect/connectMongo";
import { WishlistModel, CartListModel } from "@/models/connected-model";
import { getSingleProduct } from "./product-action";

async function addToWishlist(userId, productId) {
    await connectMongo();
    const addProduct = new WishlistModel({
        userId,
        productId,
    });
    await addProduct.save();

    return {
        status: "added",
        message: "Added to wishlist!",
    };
}

async function removeFromWishlist(userId, productId) {
    await connectMongo();
    await WishlistModel.findOneAndDelete({ userId, productId });
}

async function getWishlist(userId) {
    await connectMongo();
    const wishlists = await WishlistModel.find({ userId })
        .populate("productId")
        .lean();
    return wishlists;
}

async function isWishlisted(userId, productId) {
    await connectMongo();
    const product = await WishlistModel.findOne({ userId, productId });
    if (product) {
        return true;
    }
    return false;
}

async function addToCart(userId, productId, count = 1) {
    await connectMongo();
    const product = await getSingleProduct(productId);
    if (!product?.quantity) {
        return {
            status: "error",
            message: "Product is out of stock!",
        };
    } else if (product.quantity < count) {
        return {
            status: "error",
            message: "Product quantity is not available!",
        };
    }
    const isAddedCart = await CartListModel.findOne({ userId, productId });

    if (isAddedCart) {
        // update cart quantity
        await CartListModel.findOneAndUpdate(
            { userId, productId },
            { quantity: isAddedCart.quantity + count }
        );
        return {
            status: "updated",
            message: "Cart updated!",
        };
    }
    // add to cart
    const addProduct = new CartListModel({
        userId,
        productId,
        quantity: count,
    });
    await addProduct.save();

    return {
        status: "added",
        message: "Added to cart!",
    };
}

async function getCartProducts(userId) {
    await connectMongo();
    const cartlists = await CartListModel.find({ userId })
        .populate("productId")
        .lean();
    return cartlists;
}

async function removeFromCart(userId, productId) {
    await connectMongo();
    const isAddedCart = await CartListModel.findOne({ userId, productId });
    if (isAddedCart.quantity > 1) {
        await CartListModel.findOneAndUpdate(
            { userId, productId },
            { quantity: isAddedCart.quantity - 1 }
        );
        return {
            status: "updated",
            message: "Cart updated!",
        };
    }
    await CartListModel.findOneAndDelete({ userId, productId });

    return {
        status: "deleted",
        message: "Removed from cart!",
    };
}

async function clearCart(userId) {
    await connectMongo();
    await CartListModel.deleteMany({ userId });
}

export {
    addToWishlist,
    removeFromWishlist,
    getWishlist,
    isWishlisted,
    addToCart,
    getCartProducts,
    removeFromCart,
    clearCart,
};
