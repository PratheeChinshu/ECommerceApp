const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false, message: "Unauthorized" });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false, message: "Unauthorized" });
    } else {
      const user = await User.findById(data.id);
      if (user)
        return res.json({
          status: true,
          user: user.username,
          email: user.email,
        });
      else return res.json({ status: false, message: "Unauthorized" });
    }
  });
};
