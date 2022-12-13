import Users from "../../../models/Users";
import connectDB from "../../../middleware/mongoose";

const handler = async (req, res) => {
  try {
    const data = await Users.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export default connectDB(handler);
