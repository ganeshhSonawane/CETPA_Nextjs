import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect(
    "mongodb+srv://ganeshh:mongodb@cluster0.z2whh0p.mongodb.net/nextjs?retryWrites=true&w=majority"
  );
  return handler(req, res);
};

export default connectDB;
