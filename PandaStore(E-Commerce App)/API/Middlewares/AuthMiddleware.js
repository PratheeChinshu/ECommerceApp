const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false,message:"Unauthorized" })
  }
 
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false,message:"Unauthorized" })
    } else {
      const user = await User.findById(data.id)
      if (user) return res.json({ status: true, user: user.username ,email:user.email})
      else return res.json({ status: false ,message:"Unauthorized"})
      
    }
  })
  
}
// const User = require("../Models/UserModel");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// module.exports.userVerification = async (req, res,next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.json({ status: false });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.TOKEN_KEY);
//     const user = await User.findById(decoded.id);
//     if (user) {
//       req.user = user; // Set user in request
//       return next();
//     } else {
//       return res.json({ status: false });
//     }
//   } catch (err) {
//     return res.json({ status: false });
//   }
// };


// AuthMiddleware.js
// module.exports.userVerification = async (req, res, next) => {
//   const token = req.cookies.token;
//   const jwt = require("jsonwebtoken");
//   try {
//     console.log('Token:', token);  // Add this line

//     if (!token) {
//       return res.status(401).json({ error: "Unauthorized: Token not provided" });
//     }

//     const decoded = jwt.verify(token, process.env.TOKEN_KEY);
//     console.log('Decoded:', decoded);  // Add this line

//     const user = await User.findById(decoded.id);
//     console.log('User:', user);  // Add this line

//     if (user) {
//       req.user = user; // Set user in request
//       return next();
//     } else {
//       return res.status(401).json({ error: "Unauthorized: User not found" });
//     }
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };