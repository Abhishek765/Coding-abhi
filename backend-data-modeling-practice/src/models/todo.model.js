import mongoose from "mongoose";
import { DATA_MODELS } from "../utils/constants";

const todoSchema = new mongoose.Schema(
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
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: DATA_MODELS.SUB_TODO,
      },
    ], //! Array of sub-todos
  },
  { timestamps: true }
);

export const TodoModel = mongoose.model(DATA_MODELS.TODO, todoSchema);
