import pc from "picocolors";
import { ReadingModel } from "../mongo";
import { Reading } from "../types";

export const addReading = (reading: Reading) => {
  const anomalousWindSpeed = 958.8141; // The value the wind speed sensor returns when it glitches

  const newReading = new ReadingModel({
    nickname: reading.nickname,
    model: reading.model,
    uid: reading.uid,
    timestamp: reading.timestamp,
    logs: reading.logs,
    voltage: reading.voltage,
    readings:
      reading.readings.wind_speed === anomalousWindSpeed // Wind speed sensor glitch workaround, ignore reading if sensor glitched on this reading
        ? { ...reading.readings, wind_speed: 0 }
        : reading.readings,
  });

  const timestamp = new Date();

  const stationColor = (station: string) => {
    if (station === "garden-station") {
      return `${pc.magenta(`${station}`)}`;
    } else if (station === "office-station") {
      return `${pc.cyan(`${station}`)}`;
    } else {
      return station;
    }
  };

  console.log(
    `${pc.green("[INFO]")} ${pc.bold(
      `[${timestamp.toLocaleString("en-GB")}]`
    )} Adding new reading:
    \tTimestamp: ${reading.timestamp}
    \tStation: ${stationColor(reading.nickname)}`
  );
  if (reading.readings.wind_speed === anomalousWindSpeed) {
    console.log(
      `${pc.yellow("[WARN]")} ${pc.bold(
        `[${timestamp.toLocaleString("en-GB")}]`
      )} Wind speed sensor glitch detected, ignoring wind speed value`
    );
  }

  return newReading.save();
};

export const fetchAllReadings = (stationName: string) => {
  return ReadingModel.find({ nickname: stationName }, [
    "timestamp",
    "readings",
    "voltage",
  ]);
};

export const fetchLatestReading = (stationName: string) => {
  return ReadingModel.find({ nickname: stationName }, [
    "timestamp",
    "readings",
    "voltage",
  ])
    .sort({ timestamp: -1 })
    .limit(1)
    .exec();
};

export const fetchReadingsInDateRange = (
  stationName: string,
  startDate: string,
  endDate: string
) => {
  return ReadingModel.find(
    {
      nickname: stationName,
      timestamp: { $gte: startDate, $lt: endDate },
    },
    ["timestamp", "readings", "voltage"]
  );
};

export const fetchStations = () => {
  return ReadingModel.distinct("nickname").then((stations) => ({
    stations: stations,
  }));
};
