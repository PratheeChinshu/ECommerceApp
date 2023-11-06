//

const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  commonCart: {
    type: Boolean,
    default: false,
  },
  items: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "items", // Reference to your Item model
      },
      quantity: {
        type: Number,
        default: 0,
      },
    },
  ],
});

module.exports = mongoose.model("carts", cartSchema);
