import { ReadingModel } from "../mongo";
import { generateTestData } from "../utils/generateTestData";

export const addTestData = (numToGen: string) => {
  const testReadings = generateTestData(+numToGen);
  return ReadingModel.insertMany(testReadings);
};
