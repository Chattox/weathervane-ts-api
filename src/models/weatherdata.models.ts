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

  return newReading.save();
};
