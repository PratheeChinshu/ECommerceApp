const mongoose = require("mongoose");

const AddItemSchema = new mongoose.Schema({
  item_name: {
    type: String,
    required: true,
  },
  item_type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  item_image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("items", AddItemSchema);
