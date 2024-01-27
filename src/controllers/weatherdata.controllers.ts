import { Request, Response } from "express";
import { addReading } from "../models";

export const postReading = (req: Request, res: Response) => {
  addReading(req.body)
    .then((reading) => res.status(201).json(reading))
    .catch((err) => res.status(400).json({ message: err.message }));
};
