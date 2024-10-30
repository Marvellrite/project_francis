import mongoose from "mongoose";

const connectDB = async (uri:string)=> await mongoose.connect(uri);

export default connectDB;