import mongoose from "mongoose";
import { DATA_MODELS } from "../../utils/constants.js";

/**
 * @description ->  Individual Order Schema
 */
const orderItemSchema = new mongoose.Schema({
  orderId: {
    // Each order is representation of a single product so we need to reference orderId with Product Id
    type: mongoose.Schema.Types.ObjectId,
    ref: DATA_MODELS.ECOM.PRODUCT,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

/**
 * @description ->  Order Schema made by each user
 */
const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: DATA_MODELS.ECOM.USER,
    },
    orderItems: {
      type: [orderItemSchema], // orderItems is a collection of individual order -> so defined a separate schema for each order
    },
    shippingAddress: {
      type: String, // we can define a separate schema for this shipping address,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"], // enum values
      default: "PENDING",
    },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model(DATA_MODELS.ECOM.ORDER, orderSchema);

export default OrderModel;
