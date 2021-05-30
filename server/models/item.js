require("./db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemName: {
    type: String,
    // required: true,
  },
  itemSize: {
    type: String,
    // required: true,
  },
  itemQuantity: {
    type: Number,
    // required: true,
  },
    userName: {
    type: String,
    // required: true,
    // unique: true,
  },

    expiryDate: {
    type: Date,
    // required: true,
    // unique: true,
  },
    postDate: {
      type: Date,
      default: Date.now,
    }
});

module.exports = mongoose.model("Item", itemSchema);
