# Weathervane API

#### For receiving data from Pimoroni's Enviro weather station

## Installation

- `npm i`
- Create and populate `.env` in root dir using variables from `.env.example`
- `npm run dev` for development
- `npm run build && npm run start` for production

## Endpoints

### /weatherdata

#### - POST

Accepts JSON body:

```json
{
  "nickname": "",
  "model": "",
  "uid": "",
  "timestamp": "",
  "readings": {
    "pressure": 0, // hectopascals (hPa)
    "rain": 0, // millimetres (mm)
    "wind_speed": 0, // metres per second (m/s)
    "temperature": 0, // degrees celcius (°C)
    "humidity": 0, // percent (%)
    "wind_direction": 0, // degrees (°)
    "rain_per_second": 0, // millimetres per second (mm/s)
    "luminance": 0 // lux (lx)
  }
}
```

Saves this to database and returns added document
