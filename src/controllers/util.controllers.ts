import { Request, Response } from "express";
import { addTestData } from "../models";

export const createTestData = (req: Request, res: Response) => {
  return req.query.numToGen
    ? addTestData(req.query.numToGen as string)
        .then((readings) => res.status(201).json(readings))
        .catch((err) => {
          return res.status(400).json({ message: err.message });
        })
    : res.status(400).json({
        message: "Number of test readings to generate not supplied",
      });
};
