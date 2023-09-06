import mongoose from "mongoose";

export const sleepDataSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    sleepTime: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 100,
    },
    date: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    name: {
      type: String,
      trim: true,
      maxlength: 100,
    },
  },
  {
    timestamps: true,
  }
);

export const sleepDataModel = mongoose.model("SleepData", sleepDataSchema);
