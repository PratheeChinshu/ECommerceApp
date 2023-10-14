const { Login, Signup } = require("../Controllers/AuthController");
const {userVerification} =require("../Middlewares/AuthMiddleware")
const router = require("express").Router();
const {AddItem,DeleteItem,GetItem,UpdateItem,ViewItem }=require("../Controllers/item");
router.post("/", userVerification);
router.post("/signup", Signup);
router.post('/login', Login);
router.post("/additem", AddItem);
router.get("/item",ViewItem );
router.put("/item/:id",UpdateItem);
router.get("/item/:id",GetItem );
router.delete("/item/:id",DeleteItem );
module.exports = router;



