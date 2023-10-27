// cartModel.js
const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'items', // Reference to the Item model
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ShopUser', // Reference to the User model
    required: true,
  },
  items: [CartItemSchema],
});

module.exports = mongoose.model('Cart', CartSchema);