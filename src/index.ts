import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import { weatherDataRouter } from "./routes/weatherdata.routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const dbUrl =
  process.env.APP_ENV === "production"
    ? `mongodb+srv://${encodeURIComponent(
        process.env.DB_USERNAME!
      )}:${encodeURIComponent(process.env.DB_PASSWORD!)}${
        process.env.DB_PROD_URL
      }`
    : process.env.DB_DEV_URL;

connect(dbUrl || "", { dbName: process.env.DB_COLLECTION || undefined })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/weatherdata", weatherDataRouter);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
