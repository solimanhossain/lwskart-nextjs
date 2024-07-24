import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: { required: true, type: String },
    email: { required: true, type: String },
    password: { required: true, type: String },
    image: { required: false, type: String, default: null },
    phone: { required: false, type: Number, default: null },
});
const UserModel = mongoose.models.users ?? mongoose.model("users", userSchema);

const addressSchema = new Schema({
    email: { required: true, type: String },
    shippingAdress: { required: false, type: Object },
    billingAdress: { required: false, type: Object },
});
const UserAddressModel =
    mongoose.models.addresses ?? mongoose.model("addresses", addressSchema);

export { UserModel, UserAddressModel };
