// // cartController.js
// const Cart = require('../Models/cartModel');
// const User = require('../Models/UserModel');
// const Item = require('../Models/item');

// exports.addToCart = async (req, res) => {
//   try {
//     const userId = req.user.id; // Assuming you have middleware for user authentication

//     // Get user's cart
//     let user = await User.findById(userId).populate('cart');
//     if (!user.cart) {
//       // If the user doesn't have a cart, create one
//       const cart = await Cart.create({ user: userId });
//       user.cart = cart;
//       await user.save();
//     }

//     const itemId = req.params.itemId;

//     // Check if the item exists
//     const item = await Item.findById(itemId);
//     if (!item) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     // Check if the item is already in the user's cart
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
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };
// cartController.js
const Cart = require("../Models/cartModel");
const User = require("../Models/UserModel");
const Item = require("../Models/item");
// CartController.js
const CartMiddleware = require("../Middlewares/CartMiddleware");

exports.addToCart = CartMiddleware.addToCartMiddleware;

exports.viewCart = CartMiddleware.viewCartMiddleware;

// exports.addToCart = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     let user = await User.findById(userId).populate("cart");

//     if (!user.cart) {
//       const cart = await Cart.create({ user: userId });
//       user.cart = cart;
//       await user.save();
//     }

//     const itemId = req.params.itemId;
//     const item = await Item.findById(itemId);

//     if (!item) {
//       return res.status(404).json({ message: "Item not found" });
//     }

//     const cartItemIndex = user.cart.items.findIndex(
//       (cartItem) => cartItem.item.equals(itemId)
//     );

//     if (cartItemIndex !== -1) {
//       user.cart.items[cartItemIndex].quantity += 1;
//     } else {
//       user.cart.items.push({ item: itemId });
//     }

//     await user.cart.save();
//     res.status(200).json({ message: "Item added to the cart successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
// exports.viewCart = async (req, res) => {
//   try {
//     const userId = req.user.id; // Assuming you have middleware for user authentication
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