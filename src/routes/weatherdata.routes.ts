import { Router } from "express";
import { postReading } from "../controllers";
import { getAllReadings } from "../controllers/weatherdata.controllers";

export const weatherDataRouter = Router();

weatherDataRouter.post("/", postReading);

weatherDataRouter.get("/all", getAllReadings);
