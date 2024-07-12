// generates random readings to add to test database
// only for use in dev mode

import pc from "picocolors";
import { Reading } from "../types";

// min and max values per reading to generate values between
// also compass directions for wind_direction
const minMaxValues = {
  pressure: {
    min: 950,
    max: 1050,
  },
  temperature: {
    min: -5,
    max: 30,
  },
  rain: {
    min: 0,
    max: 5,
  },
  rain_per_second: {
    min: 0,
    max: 5,
  },
  humidity: {
    min: 0,
    max: 100,
  },
  wind_speed: {
    min: 0,
    max: 10,
  },
  wind_direction: [0, 45, 90, 135, 180, 225, 270, 315],
  luminance: {
    min: 0,
    max: 4000,
  },
};

const getRand = (min: number, max: number) => {
  return Math.random() * (max - min + 1) + min;
};

const round = (n: number, d: number): number => {
  const precis = Math.pow(10, d);
  return Math.round(n * precis) / precis;
};

export const generateTestData = (numToGen: number) => {
  if (process.env.APP_ENV === "development") {
    let testTimestamp = new Date();

    const readings: Reading[] = [];

    for (let i = 0; i < numToGen; i++) {
      // build readings object, incrementing timestamp by 15 mins for each reading
      testTimestamp.setMinutes(testTimestamp.getMinutes() + 15);

      const windDirIndex = round(
        getRand(0, minMaxValues.wind_direction.length - 2),
        0
      );

      const reading: Reading = {
        nickname: "generated-test-reading",
        model: "test-data",
        uid: "test-data",
        timestamp: testTimestamp.toISOString(),
        readings: {
          pressure: round(
            getRand(minMaxValues.pressure.min, minMaxValues.pressure.max),
            2
          ),
          temperature: round(
            getRand(minMaxValues.temperature.min, minMaxValues.temperature.max),
            2
          ),
          rain: round(getRand(minMaxValues.rain.min, minMaxValues.rain.max), 4),
          rain_per_second: round(
            getRand(
              minMaxValues.rain_per_second.min,
              minMaxValues.rain_per_second.max
            ),
            10
          ),
          humidity: round(
            getRand(minMaxValues.humidity.min, minMaxValues.humidity.max),
            2
          ),
          wind_speed: round(
            getRand(minMaxValues.wind_speed.min, minMaxValues.wind_speed.max),
            6
          ),
          wind_direction: minMaxValues.wind_direction[windDirIndex],
          luminance: round(
            getRand(minMaxValues.luminance.min, minMaxValues.luminance.max),
            2
          ),
        },
      };
      readings.push(reading);
    }
    return readings;
  } else {
    console.log(
      `${pc.red(
        "[ERROR]"
      )} Cannot generate test data outside of development environment`
    );
    return [];
  }
};
