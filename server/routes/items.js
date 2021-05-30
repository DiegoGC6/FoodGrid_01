//const { request } = require("express");
const express = require("express");
const router = express.Router();
const Item = require("../models/item");

console.log("Item.js has been called");

router.get("/", async (req, res) => {
  try {
    console.log("Item.js get '/' can you speak to the DB?");
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



router.post("/", async (req, res) => {
  console.log("trying to post...");
  const item = new Item({
    itemName: req.body.itemName,
    itemSize: req.body.itemSize,
    itemQuantity: req.body.itemQuantity,
    userName: req.body.userName,
    expiryDate: req.body.expiryDate,
  });
  try {
    console.log("to try is not to do");
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  console.log("trying to patch");
  let itemToUpdate = req.body;
  try {
    let data = await Item.findByIdAndUpdate(req.params.id, itemToUpdate);
    console.log("Updated Item", data);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Item.findByIdAndDelete({ _id: id }, function (err) {
    if (!err) {
      console.log("item deleted");
    } else {
      console.log(err);
    }
  });
});

router.get('/:id', getItem, (req, res) => {
  res.json(res.item)
});



async function getItem(req, res, next){
  let item
  try {
   item = await Item.findById(req.params.id)
   if (item == null){
     return res.status(404).json({ message: 'cannot find Item' })
   } 
  } catch(err) {
    return res.status(500).json({ message: err.message })
  }
  res.item = item
  next()
}

router.get('/:userName', getUserName, (req, res) => {
  res.json(res.item)
});

async function getUserName(req, res, next){
  let item
  try {
   item = await Item.find({ userName: "Skape" })
  //  item = await Item.findById(req.params.userName)
   if (item == null){
     return res.status(404).json({ message: 'cannot find Item' })
   } 
  } catch(err) {
    return res.status(500).json({ message: err.message })
  }
  res.item = item
  next()
}


module.exports = router;


//db.inventory.find( { status: "A" }, { item: 1, status: 1 } )

