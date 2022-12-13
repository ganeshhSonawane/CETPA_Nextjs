import Users from "../../../models/Users";
import connectDB from "../../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    //console.log(req.body);
    try {
      let temp = new Users({
        userid: parseInt(Math.random() * 10).toString(),
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password,
      });
      const response = await temp.save();
      res.status(201).json(response);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
};

export default connectDB(handler);
