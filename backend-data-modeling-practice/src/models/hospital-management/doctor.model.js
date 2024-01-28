import mongoose from "mongoose";
import { DATA_MODELS } from "../../utils/constants.js";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String, // Added as String so that we can mention the currency as rupees or $ and so on
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: DATA_MODELS.HOSPITAL_MANAGEMENT.HOSPITAL,
      },
    ],
  },
  { timestamps: true }
);

const DoctorModel = mongoose.model(
  DATA_MODELS.HOSPITAL_MANAGEMENT.DOCTOR,
  doctorSchema
);

export default DoctorModel;
