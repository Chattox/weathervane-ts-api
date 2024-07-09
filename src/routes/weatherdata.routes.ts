import { Router } from "express";
import { postReading, getAllReadings, getLatestReading } from "../controllers";
import { utilRouter } from "./util.routes";
import { getStations } from "../controllers/weatherdata.controllers";

export const weatherDataRouter = Router();

weatherDataRouter.post("/", postReading);

weatherDataRouter.get("/all", getAllReadings);
weatherDataRouter.get("/latest", getLatestReading);
weatherDataRouter.get("/stations", getStations);
if (process.env.APP_ENV === "development") {
  weatherDataRouter.use("/util", utilRouter);
}
