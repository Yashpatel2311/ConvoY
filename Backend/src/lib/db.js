import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb connect successfully");
  } catch (error) {
    console.log("error to connect mongodb" + error);
  }
};
