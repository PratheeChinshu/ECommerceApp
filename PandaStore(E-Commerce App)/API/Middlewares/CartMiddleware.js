// CartMiddleware.js
const Cart = require("../Models/cartModel");
const Item = require("../Models/item");

module.exports.addToCartMiddleware = async (req, res, next) => {
  try {
    const itemId = req.params.itemId;
    // For simplicity, we assume a common cart for all users
    let cart = await Cart.findOne({ commonCart: true });

    if (!cart) {
      cart = await Cart.create({ commonCart: true });
    }

    const item = await Item.findById(itemId);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    const cartItemIndex = cart.items.findIndex((cartItem) =>
      cartItem.item.equals(itemId)
    );

    if (cartItemIndex !== -1) {
      cart.items[cartItemIndex].quantity += 1;
    } else {
      cart.items.push({ item: itemId, quantity: 1 });
    }

    await cart.save();

    res.status(200).json({ message: "Item added to the cart successfully" });
  } catch (error) {
    console.error("Error in addToCartMiddleware:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.viewCartMiddleware = async (req, res, next) => {
  try {
    // For simplicity, we assume a common cart for all users
    const cart = await Cart.findOne({ commonCart: true }).populate({
      path: "items.item",
      model: "items",
    });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    // console.log(cart);
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.removeFromCartMiddleware = async (req, res, next) => {
  try {
    const itemId = req.params.itemId;

    const cart = await Cart.findOne({ commonCart: true });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const cartItemIndex = cart.items.findIndex((cartItem) =>
      cartItem.item.equals(itemId)
    );

    if (cartItemIndex !== -1) {
      cart.items.splice(cartItemIndex, 1);
      await cart.save();
      res
        .status(200)
        .json({ message: "Item removed from the cart successfully" });
    } else {
      res.status(404).json({ message: "Item not found in the cart" });
    }
  } catch (error) {
    console.error("Error in removeFromCartMiddleware:", error);
    res.status(500).json({ message: "Server error" });
  }
};
