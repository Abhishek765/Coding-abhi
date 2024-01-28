import mongoose from "mongoose";
import { DATA_MODELS } from "../../utils/constants.js";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model(DATA_MODELS.ECOM.USER, userSchema);

export default UserModel;
