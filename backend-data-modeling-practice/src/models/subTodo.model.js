import mongoose from "mongoose";
import { DATA_MODELS } from "../utils/constants";

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: DATA_MODELS.USER,
    },
  },
  { timestamps: true }
);

export const SubTodoModel = mongoose.model(DATA_MODELS.SUB_TODO, subTodoSchema);
