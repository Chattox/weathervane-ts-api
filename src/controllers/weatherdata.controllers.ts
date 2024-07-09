import { Request, Response } from "express";
import { addReading, fetchAllReadings, fetchLatestReading } from "../models";
import { fetchStations } from "../models/weatherdata.models";

export const postReading = (req: Request, res: Response) => {
  addReading(req.body)
    .then((reading) => res.status(201).json(reading))
    .catch((err) => res.status(400).json({ message: err.message }));
};

export const getAllReadings = (req: Request, res: Response) => {
  if (req.query.station) {
    fetchAllReadings(req.query.station as string)
      .then((readings) => res.status(200).json(readings))
      .catch((err) => res.status(400).json({ message: err.message }));
  } else {
    res.status(400).json({ message: "No station URL parameter found" });
  }
};

export const getLatestReading = (req: Request, res: Response) => {
  if (req.query.station) {
    fetchLatestReading(req.query.station as string)
      .then((reading) => res.status(200).json(reading))
      .catch((err) => res.status(400).json({ message: err.message }));
  } else {
    res.status(400).json({ message: "No station URL parameter found" });
  }
};

export const getStations = (req: Request, res: Response) => {
  fetchStations()
    .then((stations) => res.status(200).json(stations))
    .catch((err) => res.status(400).json({ message: err.message }));
};
