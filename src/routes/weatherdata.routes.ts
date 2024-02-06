import { Router } from "express";
import { postReading, getAllReadings, getLatestReading } from "../controllers";
import { utilRouter } from "./util.routes";

export const weatherDataRouter = Router();

weatherDataRouter.post("/", postReading);

weatherDataRouter.get("/all", getAllReadings);
weatherDataRouter.get("/latest", getLatestReading);
if (process.env.APP_ENV === "development") {
  weatherDataRouter.use("/util", utilRouter);
}
