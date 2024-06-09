import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://Hameed:Hameed_2003@cluster0.jw1aixm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let cached = mongoose || { conn: null, promise: null };

export const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "potta",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
};
