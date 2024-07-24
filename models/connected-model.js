import mongoose, { Schema } from "mongoose";

const wishlistSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "products",
        required: true,
    },
});

const WishlistModel =
    mongoose.models?.wishlists ?? mongoose.model("wishlists", wishlistSchema);

const cartlistSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "products",
        required: true,
    },
    quantity: { type: Number, required: true, min: 1 },
    //auto delete after 1h
    createdAt: { type: Date, default: Date.now, expires: 3600 },
});

const CartListModel =
    mongoose.models?.carts ?? mongoose.model("carts", cartlistSchema);

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    products: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                ref: "products",
                required: true,
            },
            quantity: { type: Number, required: true, min: 1 },
        },
    ],
    totalCost: { type: Number, required: true },
});

const OrderModel =
    mongoose.models?.orders ?? mongoose.model("orders", orderSchema);

export { WishlistModel, CartListModel, OrderModel };
