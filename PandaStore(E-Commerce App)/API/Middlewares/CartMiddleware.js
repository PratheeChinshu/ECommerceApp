// // CartMiddleware.js
// const User = require("../Models/UserModel");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");
// const Cart = require("../Models/cartModel");
// const Item = require('../Models/item');
// module.exports.addToCartMiddleware = async (req, res, next) => {
//   try {
//     console.log("Request receieved",req.params.itemId);
//     const token = req.cookies.token
//     const tok=jwt.decode(token) 
//     const userId = tok.id// Assuming you have user authentication middleware
//     console.log("User ID:",userId);
//     const itemId = req.params.itemId; // Assuming the item ID is in the request parameters

//     // Implement your logic to add the item to the user's cart
//     // For simplicity, let's assume a direct association between user and cart
//     let user = await User.findById(userId).populate('cart');
//     if (!user.cart) {
//       // If the user doesn't have a cart, create one
//       const cart = await Cart.create({ user: userId });
//       user.cart = cart;
//       await user.save();
//     }

//     // Check if the item already exists in the cart
//     const item = await Item.findById(itemId);
//     if (!item) {
//       return res.status(404).json({ message: 'Item not found' });
//     }
//     const cartItemIndex = user.cart.items.findIndex((cartItem) => cartItem.item.equals(itemId));

//     if (cartItemIndex !== -1) {
//       // If the item is already in the cart, increase the quantity
//       user.cart.items[cartItemIndex].quantity += 1;
//     } else {
//       // If the item is not in the cart, add it
//       user.cart.items.push({ item: itemId });
//     }

//     await user.cart.save();
//     res.status(200).json({ message: 'Item added to the cart successfully' });
//   } catch (error) {
//     console.error("Error in addToCartMiddleware:",error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports.viewCartMiddleware = async (req, res, next) => {
//   try {
//     const userId = req.user.id; // Assuming you have user authentication middleware
//     const user = await User.findById(userId).populate({
//       path: 'cart',
//       populate: { path: 'items.item', model: 'items' },
//     });

//     if (!user.cart) {
//       return res.status(404).json({ message: 'Cart not found' });
//     }

//     res.status(200).json(user.cart);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

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

    const cartItemIndex = cart.items.findIndex((cartItem) => cartItem.item.equals(itemId));

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
    const cart = await Cart.findOne({ commonCart: true }).populate({ path: 'items.item', model: 'items' });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
   // console.log(cart);
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};



module.exports.removeFromCartMiddleware = async (req, res, next) => {
  try {
    const itemId = req.params.itemId;

    const cart = await Cart.findOne({ commonCart: true });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const cartItemIndex = cart.items.findIndex((cartItem) => cartItem.item.equals(itemId));

    if (cartItemIndex !== -1) {
      cart.items.splice(cartItemIndex, 1);
      await cart.save();
      res.status(200).json({ message: 'Item removed from the cart successfully' });
    } else {
      res.status(404).json({ message: 'Item not found in the cart' });
    }
  } catch (error) {
    console.error('Error in removeFromCartMiddleware:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// CartMiddleware.js
// const User = require("../Models/UserModel");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");
// const cart = require("../Models/cartModel");
// module.exports.addToCartMiddleware = async (req, res, next) => {
//   try {
//     console.log("Request receieved",req.params.itemId);
//     const token = req.cookies.token
//     const tok=jwt.decode(token) 
//     const userId = tok.id// Assuming you have user authentication middleware
//     console.log("User ID:",userId);
//     const itemId = req.params.itemId; // Assuming the item ID is in the request parameters

//     // Implement your logic to add the item to the user's cart
//     // For simplicity, let's assume a direct association between user and cart
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Check if the item already exists in the cart
//     const itemIndex = user.cart.items.findIndex((cartItem) => cartItem.item.equals(itemId));

//     if (itemIndex !== -1) {
//       user.cart.items[itemIndex].quantity += 1;
//     } else {
//       user.cart.items.push({ item: itemId, quantity: 1 });
//     }

//     await user.save();

//     res.status(200).json({ message: "Item added to the cart successfully" });
//   } catch (error) {
//     console.error("Error in addToCartMiddleware:",error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports.viewCartMiddleware = async (req, res, next) => {
//   try {
//     const userId = req.user.id; // Assuming you have user authentication middleware
//     const user = await User.findById(userId).populate({
//       path: 'cart',
//       populate: { path: 'items.item', model: 'items' },
//     });

//     if (!user.cart) {
//       return res.status(404).json({ message: 'Cart not found' });
//     }

//     res.status(200).json(user.cart);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };
