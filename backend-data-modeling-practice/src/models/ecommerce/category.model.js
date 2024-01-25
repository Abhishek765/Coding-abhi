import mongoose from "mongoose";
import { DATA_MODELS } from "../../utils/constants";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const CategoryModel = mongoose.model(DATA_MODELS.ECOM.CATEGORY, categorySchema);

export default CategoryModel;
