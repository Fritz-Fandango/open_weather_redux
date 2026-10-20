import rootReducer from "../reducers";
import {
  weather,
  weatherHasErrored,
  weatherIsLoading,
} from "../reducers/weather";

describe("weather reducer", () => {
  it("defaults to an empty array", () => {
    expect(weather(undefined, { type: "@@INIT" })).toEqual([]);
  });

  it("stores the payload on WEATHER_FETCH_DATA_SUCCESS", () => {
    const payload = { current: { temp: 70 }, daily: [] };

    expect(
      weather([], { type: "WEATHER_FETCH_DATA_SUCCESS", weather: payload }),
    ).toBe(payload);
  });

  it("ignores unrelated actions", () => {
    const state = { current: {} };

    expect(weather(state, { type: "OTHER" })).toBe(state);
  });
});

describe("weatherHasErrored reducer", () => {
  it("defaults to false", () => {
    expect(weatherHasErrored(undefined, { type: "@@INIT" })).toBe(false);
  });

  it("sets the flag on WEATHER_HAS_ERRORED", () => {
    expect(
      weatherHasErrored(false, { type: "WEATHER_HAS_ERRORED", hasErrored: true }),
    ).toBe(true);
    expect(
      weatherHasErrored(true, { type: "WEATHER_HAS_ERRORED", hasErrored: false }),
    ).toBe(false);
  });

  it("ignores unrelated actions", () => {
    expect(weatherHasErrored(true, { type: "OTHER" })).toBe(true);
  });
});

describe("weatherIsLoading reducer", () => {
  it("defaults to false", () => {
    expect(weatherIsLoading(undefined, { type: "@@INIT" })).toBe(false);
  });

  it("sets the flag on WEATHER_IS_LOADING", () => {
    expect(
      weatherIsLoading(false, { type: "WEATHER_IS_LOADING", isLoading: true }),
    ).toBe(true);
    expect(
      weatherIsLoading(true, { type: "WEATHER_IS_LOADING", isLoading: false }),
    ).toBe(false);
  });

  it("ignores unrelated actions", () => {
    expect(weatherIsLoading(true, { type: "OTHER" })).toBe(true);
  });
});

describe("root reducer", () => {
  it("exposes the expected initial state shape", () => {
    expect(rootReducer(undefined, { type: "@@INIT" })).toEqual({
      weather: [],
      weatherHasErrored: false,
      weatherIsLoading: false,
    });
  });
});
