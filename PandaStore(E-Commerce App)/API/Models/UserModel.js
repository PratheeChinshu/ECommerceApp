const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Cart =require('./cartModel');
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  // cart:{
  //   type:mongoose.Schema.Types.ObjectId,
  //   ref:'Cart',
  // },
  // token:{
  //   type:String,
  //   required:false
  // }
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("ShopUser", userSchema);