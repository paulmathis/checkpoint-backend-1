const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderDate: {
    type: String,
    required: true
  },
  orderTime: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Order", orderSchema);
