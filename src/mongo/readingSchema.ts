import { Schema } from "mongoose";
import { Reading } from "../types";

export const readingSchema = new Schema<Reading>({
  nickname: { type: String, required: true },
  model: { type: String, required: true },
  uid: { type: String, required: true },
  timestamp: { type: String, required: true },
  logs: { type: String, required: false },
  readings: { type: Object, required: true },
});
