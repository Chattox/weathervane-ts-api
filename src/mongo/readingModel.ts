import { model } from "mongoose";
import { IReading, readingSchema } from "./readingSchema";

export const Reading = model<IReading>("Reading", readingSchema);
