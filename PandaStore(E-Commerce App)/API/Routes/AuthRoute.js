const {
  addToCartMiddleware,
  viewCartMiddleware,
  removeFromCartMiddleware,
} = require("../Middlewares/CartMiddleware");
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
