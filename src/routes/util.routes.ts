import { Router } from "express";
import { createTestData } from "../controllers";

export const utilRouter = Router();

utilRouter.get("/generatetestdata", createTestData);
