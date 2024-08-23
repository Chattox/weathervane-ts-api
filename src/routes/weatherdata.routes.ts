import { Router } from "express";
import {
  postReading,
  getAllReadings,
  getLatestReading,
  getDateRangeReadings,
  getStations,
} from "../controllers";
import { utilRouter } from "./util.routes";

export const weatherDataRouter = Router();

weatherDataRouter.post("/", postReading);

weatherDataRouter.get("/all", getAllReadings);
weatherDataRouter.get("/latest", getLatestReading);
weatherDataRouter.get("/daterange", getDateRangeReadings);
weatherDataRouter.get("/stations", getStations);
if (process.env.APP_ENV === "development") {
  weatherDataRouter.use("/util", utilRouter);
}
