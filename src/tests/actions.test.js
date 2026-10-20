import axios from "axios";

vi.mock("axios");

const loadActions = async () => {
  vi.stubEnv("VITE_WEATHER_URL", "https://example.test/onecall");
  vi.stubEnv("VITE_LATITUDE_PARAM", "10");
  vi.stubEnv("VITE_LONGITUDE_PARAM", "20");
  vi.stubEnv("VITE_EXCLUDE_PARAM", "minutely");
  vi.stubEnv("VITE_UNITS_PARAM", "imperial");
  vi.stubEnv("VITE_WEATHER_API_KEY", "secret");
  vi.resetModules();

  return import("../actions");
};

afterEach(() => {
  vi.unstubAllEnvs();
  vi.clearAllMocks();
});

describe("action creators", () => {
  it("creates the expected plain actions", async () => {
    const actions = await loadActions();
    const weather = { current: {} };

    expect(actions.weatherHasErrored(true)).toEqual({
      type: "WEATHER_HAS_ERRORED",
      hasErrored: true,
    });
    expect(actions.weatherIsLoading(false)).toEqual({
      type: "WEATHER_IS_LOADING",
      isLoading: false,
    });
    expect(actions.weatherFetchDataSuccess(weather)).toEqual({
      type: "WEATHER_FETCH_DATA_SUCCESS",
      weather,
    });
  });
});

describe("weatherFetchData", () => {
  it("requests the URL built from the env vars", async () => {
    const { weatherFetchData } = await loadActions();
    axios.get.mockResolvedValue({ status: 200, data: {} });

    await weatherFetchData()(vi.fn());

    expect(axios.get).toHaveBeenCalledWith(
      "https://example.test/onecall?lat=10&lon=20&exclude=minutely&units=imperial&appid=secret",
    );
  });

  it("dispatches loading on, loading off, then success", async () => {
    const { weatherFetchData } = await loadActions();
    const data = { current: { temp: 70 } };
    const dispatch = vi.fn();
    axios.get.mockResolvedValue({ status: 200, data });

    await weatherFetchData()(dispatch);

    expect(dispatch.mock.calls.map(([action]) => action)).toEqual([
      { type: "WEATHER_IS_LOADING", isLoading: true },
      { type: "WEATHER_IS_LOADING", isLoading: false },
      { type: "WEATHER_FETCH_DATA_SUCCESS", weather: data },
    ]);
  });

  it("dispatches an error when the request rejects", async () => {
    const { weatherFetchData } = await loadActions();
    const dispatch = vi.fn();
    axios.get.mockRejectedValue(new Error("Network Error"));

    await weatherFetchData()(dispatch);

    expect(dispatch).toHaveBeenLastCalledWith({
      type: "WEATHER_HAS_ERRORED",
      hasErrored: true,
    });
    expect(dispatch).not.toHaveBeenCalledWith(
      expect.objectContaining({ type: "WEATHER_FETCH_DATA_SUCCESS" }),
    );
  });

  it("succeeds when status is 200 and the status text is empty (HTTP/2)", async () => {
    const { weatherFetchData } = await loadActions();
    const data = { current: { temp: 70 } };
    const dispatch = vi.fn();
    axios.get.mockResolvedValue({ status: 200, statusText: "", data });

    await weatherFetchData()(dispatch);

    expect(dispatch).toHaveBeenLastCalledWith({
      type: "WEATHER_FETCH_DATA_SUCCESS",
      weather: data,
    });
  });

  it("dispatches an error when the response status is not 200", async () => {
    const { weatherFetchData } = await loadActions();
    const dispatch = vi.fn();
    axios.get.mockResolvedValue({ status: 500, statusText: "", data: {} });

    await weatherFetchData()(dispatch);

    expect(dispatch).toHaveBeenLastCalledWith({
      type: "WEATHER_HAS_ERRORED",
      hasErrored: true,
    });
  });
});
