import configureStore from "../store/configureStore";

describe("configureStore", () => {
  it("starts with the default state", () => {
    expect(configureStore().getState()).toEqual({
      weather: [],
      weatherHasErrored: false,
      weatherIsLoading: false,
    });
  });

  it("accepts an initial state", () => {
    const store = configureStore({
      weather: { current: {} },
      weatherHasErrored: true,
      weatherIsLoading: false,
    });

    expect(store.getState().weatherHasErrored).toBe(true);
  });

  it("handles plain actions", () => {
    const store = configureStore();

    store.dispatch({ type: "WEATHER_IS_LOADING", isLoading: true });

    expect(store.getState().weatherIsLoading).toBe(true);
  });

  it("supports thunks through redux-thunk", async () => {
    const store = configureStore();
    const thunk = (dispatch) =>
      Promise.resolve(
        dispatch({ type: "WEATHER_HAS_ERRORED", hasErrored: true }),
      );

    await store.dispatch(thunk);

    expect(store.getState().weatherHasErrored).toBe(true);
  });
});
