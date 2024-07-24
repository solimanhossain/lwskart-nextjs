"use server";

import connectMongo from "@/dbConnect/connectMongo";
import { ProductModel } from "@/models/product-model";

async function getAllProducts() {
    await connectMongo();
    return await ProductModel.find().lean();
}

async function getSingleProduct(productId) {
    await connectMongo();
    try {
        return await ProductModel.findOne({ _id: productId }).lean();
    } catch (error) {
        return null;
    }
}

async function findSortedProducts(obj) {
    await connectMongo();
    return await ProductModel.find().sort(obj).lean();
}

async function distinctUniqueCategory(str) {
    await connectMongo();
    return await ProductModel.distinct(str);
}

async function aggregateCategoryCount() {
    await connectMongo();
    return await ProductModel.aggregate([
        { $group: { _id: "$category", count: { $sum: 1 } } },
    ]);
}

async function updateProductQuantity(productId, count = 1) {
    await connectMongo();
    const product = await ProductModel.findOne({ _id: productId });
    let remain = product?.quantity - count;
    product.quantity = remain;
    await ProductModel.findOneAndUpdate({ _id: productId }, product);
}

async function searchQuaryFinder(obj) {
    await connectMongo();
    return await ProductModel.find(obj).lean();
}

export {
    getAllProducts,
    getSingleProduct,
    findSortedProducts,
    distinctUniqueCategory,
    aggregateCategoryCount,
    updateProductQuantity,
    searchQuaryFinder,
};
