import Products from "../../../models/Products";
import connectDB from "../../../middleware/mongoose";

const handler = async (req, res) => {
  try {
    const data = await Products.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export default connectDB(handler);
