import mongoose from "mongoose";
import { DATA_MODELS } from "../../utils/constants.js";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    specializations: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const HospitalModel = mongoose.model(
  DATA_MODELS.HOSPITAL_MANAGEMENT.HOSPITAL,
  hospitalSchema
);

export default HospitalModel;
