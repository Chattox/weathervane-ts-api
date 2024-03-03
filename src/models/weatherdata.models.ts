import { ReadingModel } from "../mongo";
import { Reading } from "../types";

export const addReading = (reading: Reading) => {
  const anomalousWindSpeed = 958.8141; // The value the wind speed sensor returns when it glitches

  const newReading = new ReadingModel({
    nickname: reading.nickname,
    model: reading.model,
    uid: reading.uid,
    timestamp: reading.timestamp,
    readings:
      reading.readings.wind_speed === anomalousWindSpeed // Wind speed sensor glitch workaround, ignore reading if sensor glitched on this reading
        ? { ...reading.readings, wind_speed: 0 }
        : reading.readings,
  });

  const timestamp = new Date();

  console.log(
    `[${timestamp.toLocaleString("en-GB")}] Adding new reading:
    Timestamp: ${reading.timestamp}
    Station: ${reading.nickname}`
  );
  if (reading.readings.wind_speed === anomalousWindSpeed) {
    console.log(
      `[${timestamp.toLocaleString(
        "en-GB"
      )}]: Wind speed sensor glitch detected, ignoring wind speed value`
    );
  }

  return newReading.save();
};

export const fetchAllReadings = () => {
  return ReadingModel.find();
};

export const fetchLatestReading = () => {
  return ReadingModel.find().sort({ timestamp: -1 }).limit(1).exec();
};
