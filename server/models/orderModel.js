import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  cartId: { type: mongoose.Schema.Types.ObjectId, ref: "carts" },
  totalOrderPrice: { type: Number, min: 0 },
  orderDate: { type: Date, default: Date.now },
  shippingAddress: {
    street: { type: String },
    city: { type: String },
    postalCode: { type: String },
    country: { type: String },
  },
  status: {
    type: String,
    enum: ["Pending", "Shipped", "Delivered"],
    default: "Pending",
  },
  paymentMethod: { type: String },
  transactionId: { type: String },
});