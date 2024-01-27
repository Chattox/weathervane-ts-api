import { Request, Response } from "express";
import { addReading } from "../models";

export const postReading = (req: Request, res: Response) => {
  addReading(req);
  res.sendStatus(200);
};
