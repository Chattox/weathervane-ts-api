import { Request } from "express";

export const addReading = (req: Request) => {
  console.log(req.body);
};
