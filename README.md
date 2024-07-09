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

### /weatherdata/all

#### - GET

Returns all readings from target station

Requires:

- URL query param `?station=<string>`

#### Return example

```json
[
  {
    "_id": "65b53ddb5e6c546d9f721e24",
    "nickname": "garden-station",
    "model": "weather",
    "uid": "e66164084344262d",
    "timestamp": "2024-01-27T11:45:04Z",
    "readings": {
      "pressure": 1028.91,
      "rain": 0,
      "wind_speed": 0,
      "temperature": 17.55,
      "humidity": 56.28,
      "wind_direction": 90,
      "rain_per_second": 0,
      "luminance": 33.79
    },
    "__v": 0
  },
  {
    "_id": "65ba044cb05d75702dbe29d4",
    "nickname": "garden-station",
    "model": "weather",
    "uid": "e66164084344262d",
    "timestamp": "2024-01-30T13:30:05Z",
    "readings": {
      "pressure": 1030.79,
      "rain": 0,
      "wind_speed": 1.551479,
      "temperature": 8.4,
      "humidity": 63.55,
      "wind_direction": 45,
      "rain_per_second": 0,
      "luminance": 465.99
    },
    "__v": 0
  }
]
```

### /weatherdata/latest

#### - GET

Returns latest single reading from target station

Requires:

- URL query param `?station=<string>`

#### Return example

```json
[
  {
    "_id": "65ba044cb05d75702dbe29d4",
    "nickname": "garden-station",
    "model": "weather",
    "uid": "e66164084344262d",
    "timestamp": "2024-01-30T13:30:05Z",
    "readings": {
      "pressure": 1030.79,
      "rain": 0,
      "wind_speed": 1.551479,
      "temperature": 8.4,
      "humidity": 63.55,
      "wind_direction": 45,
      "rain_per_second": 0,
      "luminance": 465.99
    },
    "__v": 0
  }
]
```

### /weatherdata/stations

#### - GET

Returns list of station names found in database

#### Return example

```json
{
  "stations": ["garden-station", "test-station", "shed-station"]
}
```
