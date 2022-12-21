import Users from "../../../models/Users";
import connectDB from "../../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      let data = await Users.findOne({ email: req.body.email });
      if (Object.keys(data).length !== 0) {
        if (data.password === req.body.password) {
          res.status(200).json(data);
        } else {
          res.status(400).json({ message: "Invalid Password" });
        }
      } else {
        res.status(400).json({ message: "User not found" });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
};

export default connectDB(handler);
