import { model } from "mongoose";
import { readingSchema } from "./readingSchema";
import { Reading } from "../types";

export const ReadingModel = model<Reading>("Reading", readingSchema);
