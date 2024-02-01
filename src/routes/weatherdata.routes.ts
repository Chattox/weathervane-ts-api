import { Router } from "express";
import { postReading } from "../controllers";
import {
  getAllReadings,
  getLatestReading,
} from "../controllers/weatherdata.controllers";

export const weatherDataRouter = Router();

weatherDataRouter.post("/", postReading);

weatherDataRouter.get("/all", getAllReadings);
weatherDataRouter.get("/latest", getLatestReading);
