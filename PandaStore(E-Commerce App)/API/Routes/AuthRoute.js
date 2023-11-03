// const { Login, Signup } = require("../Controllers/AuthController");
// const {userVerification} =require("../Middlewares/AuthMiddleware");
// const {addToCart,viewCart}=require('../Controllers/cartController')
// const router = require("express").Router();
// const {AddItem,DeleteItem,GetItem,UpdateItem,ViewItem, GetItemByCategory }=require("../Controllers/item");
// router.post("/", userVerification);
// router.post("/signup", Signup);
// router.post('/login', Login);
// router.post("/additem", AddItem);
// router.get("/item",ViewItem );
// router.put("/item/:id",UpdateItem);
// router.get("/item/:id",GetItem );
// router.get("/item/category/:item_type",GetItemByCategory);
// router.delete("/item/:id",DeleteItem );
// router.post('/cart/add/:itemId', addToCart);
// router.get('/cart', viewCart);

// module.exports = router;


// const { Login, Signup } = require("../Controllers/AuthController");
// const { userVerification } = require("../Middlewares/AuthMiddleware");

// const {
//   AddItem,
//   DeleteItem,
//   GetItem,
//   UpdateItem,
//   ViewItem,
//   GetItemByCategory,
// } = require("../Controllers/item");
// const router = require("express").Router();

// router.post("/", userVerification);
// router.post("/signup", Signup);
// router.post("/login", Login);
// router.post("/additem", AddItem);
// router.get("/item", ViewItem);
// router.put("/item/:id", UpdateItem);
// router.get("/item/:id", GetItem);
// router.get("/item/category/:item_type", GetItemByCategory);
// router.delete("/item/:id", DeleteItem);


// module.exports = router;
// AuthRoute.js
const { addToCartMiddleware, viewCartMiddleware , removeFromCartMiddleware} = require("../Middlewares/CartMiddleware");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const { Login, Signup } = require("../Controllers/AuthController");
const {
  AddItem,
  DeleteItem,
  GetItem,
  UpdateItem,
  ViewItem,
  GetItemByCategory,
} = require("../Controllers/item");

const router = require("express").Router();
 router.post("/", userVerification);
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/addtocart/:itemId", addToCartMiddleware);
router.get("/viewcart", viewCartMiddleware);
router.post("/additem", AddItem);
router.get("/item", ViewItem);
router.put("/item/:id", UpdateItem);
router.get("/item/:id", GetItem);
router.get("/item/category/:item_type", GetItemByCategory);
router.delete("/item/:id", DeleteItem);
router.delete("/cart/remove/:itemId", removeFromCartMiddleware);

module.exports = router;
