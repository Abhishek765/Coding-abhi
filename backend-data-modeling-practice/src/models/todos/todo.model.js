import mongoose from "mongoose";
import { DATA_MODELS } from "../../utils/constants.js";

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
      ref: DATA_MODELS.TODOS.USER,
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: DATA_MODELS.TODOS.SUB_TODO,
      },
    ], //! Array of sub-todos
  },
  { timestamps: true }
);

const TodoModel = mongoose.model(DATA_MODELS.TODOS.TODO, todoSchema);

export default TodoModel;
