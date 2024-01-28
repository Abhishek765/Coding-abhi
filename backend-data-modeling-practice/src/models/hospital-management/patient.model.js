import mongoose from "mongoose";
import { DATA_MODELS } from "../../utils/constants.js";

const patientEncounterSchema = new mongoose.Schema({
  admittedIn: {
    // In which hospital patient is admitted in
    type: mongoose.Schema.Types.ObjectId,
    ref: DATA_MODELS.HOSPITAL_MANAGEMENT.HOSPITAL,
  },
  dateOfVisit: {
    type: Date,
    required: true,
  },
  reasonForVisit: {
    type: String,
    required: true,
  },
  diagnoseWith: {
    type: String,
    required: true,
  },
});

const patientProgressNotesSchema = new mongoose.Schema({
  currentProgress: {
    type: String,
    required: true,
  },
  responseOfTreatment: {
    type: String,
    required: true,
  },
  changesInSymptom: {
    type: String,
  },
});

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["M", "F", "O"],
      required: true,
    },
    encounterDetails: patientEncounterSchema,
    treatmentPlans: [
      {
        type: String,
      },
    ],
    progressNotes: patientProgressNotesSchema,
    medicalInsuranceDetails: {
      type: String,
      required: true,
    },
    billingInfo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PatientModel = mongoose.model(
  DATA_MODELS.HOSPITAL_MANAGEMENT.PATIENT,
  patientSchema
);

export default PatientModel;
