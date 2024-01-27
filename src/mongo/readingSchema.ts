import { Schema } from "mongoose";

export interface IReading {
  nickname: string;
  model: string;
  uid: string;
  timestamp: string;
  readings: {
    pressure: number;
    temperature: number;
    rain: number;
    rain_per_second: number;
    humidity: number;
    wind_speed: number;
    wind_direction: number;
    luminance: number;
  };
}

export const readingSchema = new Schema<IReading>({
  nickname: { type: String, required: true },
  model: { type: String, required: true },
  uid: { type: String, required: true },
  timestamp: { type: String, required: true },
  readings: { type: Object, required: true },
});
