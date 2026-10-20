# Open Weather Redux

A weather dashboard built with React, Redux and Vite, using the OpenWeather One Call API.

## Setup

Create a `.env` file in the project root:

```
VITE_WEATHER_URL=
VITE_LATITUDE_PARAM=
VITE_LONGITUDE_PARAM=
VITE_EXCLUDE_PARAM=
VITE_UNITS_PARAM=
VITE_WEATHER_API_KEY=
```

Note that `VITE_*` values are inlined into the built bundle, so the API key is visible to anyone who loads the app.

## Scripts

- `npm run dev` starts the dev server.
- `npm test` runs the tests once with Vitest.
- `npm run build` builds for production into `build/`.
- `npm run preview` serves the production build locally.
