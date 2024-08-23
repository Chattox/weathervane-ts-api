export type Reading = {
  nickname: string;
  model: string;
  uid: string;
  timestamp: string;
  logs?: string;
  voltage?: number;
  readings: {
    pressure: number;
    temperature: number;
    rain: number;
    rain_per_second: number;
    humidity: number;
    wind_speed: number;
    wind_direction: number;
    luminance: number;
  };
};
