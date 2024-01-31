import { Request, Response } from "express";
import { addReading } from "../models";
import {
  fetchAllReadings,
  fetchLatestReading,
} from "../models/weatherdata.models";

export const postReading = (req: Request, res: Response) => {
  addReading(req.body)
    .then((reading) => res.status(201).json(reading))
    .catch((err) => res.status(400).json({ message: err.message }));
};

export const getAllReadings = (req: Request, res: Response) => {
  fetchAllReadings()
    .then((readings) => res.status(200).json(readings))
    .catch((err) => res.status(400).json({ message: err.message }));
};

export const getLatestReading = (req: Request, res: Response) => {
  fetchLatestReading()
    .then((reading) => res.status(200).json(reading))
    .catch((err) => console.log(err));
};
