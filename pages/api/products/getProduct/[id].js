import Products from "../../../../models/Products";
import connectDB from "../../../../middleware/mongoose";

const handler = async (req, res) => {
  const { id } = req.query;
  console.log("id", id);
  const data = await Products.findOne({ id: id });
  res.status(200).json(data);
};

export default connectDB(handler);
