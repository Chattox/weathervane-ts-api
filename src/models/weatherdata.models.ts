import { ReadingModel } from "../mongo";
import { Reading } from "../types";

export const addReading = (reading: Reading) => {
  const newReading = new ReadingModel({
    nickname: reading.nickname,
    model: reading.model,
    uid: reading.uid,
    timestamp: reading.timestamp,
    readings: reading.readings,
  });

  const timestamp = new Date()

  console.log(`[${timestamp.toLocaleString('en-GB')}]: Adding new reading from ${reading.nickname} to database`)

  return newReading.save();
};

export const fetchAllReadings = () => {
  return ReadingModel.find();
};
