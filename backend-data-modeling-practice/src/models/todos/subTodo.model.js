import mongoose from "mongoose";
import { DATA_MODELS } from "../../utils/constants.js";

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
      ref: DATA_MODELS.TODOS.USER,
    },
  },
  { timestamps: true }
);

const SubTodoModel = mongoose.model(DATA_MODELS.TODOS.SUB_TODO, subTodoSchema);

export default SubTodoModel;
