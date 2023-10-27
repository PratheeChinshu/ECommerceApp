// CartMiddleware.js
const User = require("../Models/UserModel");

module.exports.addToCartMiddleware = async (req, res, next) => {
  try {
    console.log("Request receieved",req.params.itemId);
    const userId = req.user.id; // Assuming you have user authentication middleware
    console.log("User ID:",userId);
    const itemId = req.params.itemId; // Assuming the item ID is in the request parameters

    // Implement your logic to add the item to the user's cart
    // For simplicity, let's assume a direct association between user and cart
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the item already exists in the cart
    const itemIndex = user.cart.items.findIndex((cartItem) => cartItem.item.equals(itemId));

    if (itemIndex !== -1) {
      user.cart.items[itemIndex].quantity += 1;
    } else {
      user.cart.items.push({ item: itemId, quantity: 1 });
    }

    await user.save();

    res.status(200).json({ message: "Item added to the cart successfully" });
  } catch (error) {
    console.error("Error in addToCartMiddleware:",error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.viewCartMiddleware = async (req, res, next) => {
  try {
    const userId = req.user.id; // Assuming you have user authentication middleware
    const user = await User.findById(userId).populate({
      path: 'cart',
      populate: { path: 'items.item', model: 'items' },
    });

    if (!user.cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json(user.cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
