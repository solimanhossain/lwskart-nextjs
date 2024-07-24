import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    thumbnail: { type: Number, required: true, min: 0 },
    image: [String],
    brand: { type: String, required: true },
    sku: { type: String, required: true },
    reviewsNumber: [String],
    ratings: { type: Number, min: 0, max: 5 },
    description: { type: String, required: true },
    availability: { type: String, required: true },
    discount_price: { type: Number, required: true, min: 0 },
    sizes: [String],
    colors: [String],
    details: { type: Object, required: false },
    category: { type: String, required: true },
    soldCounts: { type: Number, required: false },
    quantity: { type: Number, required: true },
    date: { type: Date, require: true },
});

export const ProductModel =
    mongoose.models.products ?? mongoose.model("products", productSchema);
