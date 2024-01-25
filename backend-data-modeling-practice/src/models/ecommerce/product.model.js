import mongoose from "mongoose";
import { DATA_MODELS } from "../../utils/constants";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productImage: {
      type: String, // Will store CDN image url may be from s3 or cloudinary
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    // Each product belongs to a category
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: DATA_MODELS.ECOM.CATEGORY,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: DATA_MODELS.ECOM.USER,
    },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model(DATA_MODELS.ECOM.PRODUCT, productSchema);

export default ProductModel;
