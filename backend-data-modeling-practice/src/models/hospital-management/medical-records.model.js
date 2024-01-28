import mongoose from "mongoose";
import { DATA_MODELS } from "../../utils/constants.js";

const medicalRecordsSchema = new mongoose.Schema(
  {
    patientsInfo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: DATA_MODELS.HOSPITAL_MANAGEMENT.PATIENT,
      },
    ],
  },
  { timestamps: true }
);

const MedicalRecordsModel = mongoose.model(
  DATA_MODELS.HOSPITAL_MANAGEMENT.MEDICAL_RECORDS,
  medicalRecordsSchema
);

export default MedicalRecordsModel;
