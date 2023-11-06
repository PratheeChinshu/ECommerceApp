const Cart = require("../Models/cartModel");
const User = require("../Models/UserModel");
const Item = require("../Models/item");

const CartMiddleware = require("../Middlewares/CartMiddleware");

exports.addToCart = CartMiddleware.addToCartMiddleware;

exports.viewCart = CartMiddleware.viewCartMiddleware;
