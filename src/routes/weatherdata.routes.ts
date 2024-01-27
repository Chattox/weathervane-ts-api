import { Router } from "express";
import { postReading } from "../controllers";

export const weatherDataRouter = Router();

weatherDataRouter.post("/", postReading);
