const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
  productid: {
    type: ObjectId,
    ref: "Product",
  },
  producttitle: String,
  quantity: Number,
  productprice: Number,
  deliverydate: Date,
});

const ProductCart = mongoose.model("ProductCart", ProductCartSchema);

const orderSchema = new mongoose.Schema(
  {
    products: [ProductCartSchema],
    transaction_id: {},
    amount: {
      type: Number,
    },
    address: String,
    status: {
      type: String,
      default: "Received",
      enum: ["Cancelled", "Delivered", "Shipped", "Processing", "Received"],
    },
    updated: Date,
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order, ProductCart };
