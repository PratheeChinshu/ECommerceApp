const User = require("../Models/item");
const items = require("../Models/item");
module.exports.AddItem = async (req, res, next) => {
  try {
    const {
      item_name,
      item_type,
      description,
      price,
      size,
      manufacturer,
      item_image,
    } = req.body;
    const item = await User.create({
      item_name,
      item_type,
      description,
      price,
      size,
      manufacturer,
      item_image,
    });
    res
      .status(201)
      .json({ message: "Item added succesfully", success: true, item });
    next();
  } catch (error) {
    console.error(error);
  }
};
module.exports.DeleteItem = async (req, res, next) => {
  try {
    const deleteItem = await items.findByIdAndDelete(req.params.id);
    if (!deleteItem) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
module.exports.GetItemByCategory = async (req, res) => {
  try {
    const item = await items.find({ item_type: req.params.item_type });
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Item by ID" });
  }
};

module.exports.GetItem = async (req, res) => {
  try {
    const item = await items.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Item by ID" });
  }
};
module.exports.UpdateItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    const updateditem = req.body;
    const result = await User.findByIdAndUpdate(itemId, updateditem, {
      new: true,
    });
    if (!result) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(result);
  } catch (error) {
    console.error("Error updating item", error);
    res
      .status(500)
      .json({ message: "Error updating item", error: error.message });
  }
};
module.exports.ViewItem = async (req, res, next) => {
  try {
    const item = await items.find();
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching item" });
  }
};
