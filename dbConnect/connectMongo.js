import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
const cached = {};

export default async function connectMongo() {
    if (!MONGO_URI) {
        throw new Error("Please define MONGO_URI environment variable");
    }

    if (cached.connection) {
        return cached.connection;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };
        cached.promise = mongoose.connect(MONGO_URI, opts);
    }

    try {
        cached.connection = await cached.promise;
    } catch (err) {
        cached.promise = undefined;
        throw err;
    }

    return cached.connection;
}
