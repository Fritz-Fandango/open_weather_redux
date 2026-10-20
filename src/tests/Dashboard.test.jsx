import axios from "axios";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import Dashboard from "../components/Dashboard";
import configureStore from "../store/configureStore";

vi.mock("axios");

const day = (dt) => ({
  dt,
  humidity: 40,
  sunrise: dt,
  sunset: dt + 3600,
  temp: { min: 50, max: 70 },
  weather: [{ icon: "10d" }],
});

const forecast = {
  current: {
    dt: 1618308000,
    temp: 61.5,
    feels_like: 59.5,
    pressure: 1012,
    wind_speed: 7,
  },
  daily: [day(1618308000), day(1618394400), day(1618480800)],
};

const renderDashboard = () =>
  render(
    <Provider store={configureStore()}>
      <Dashboard />
    </Provider>,
  );

afterEach(() => {
  vi.clearAllMocks();
});

describe("Dashboard", () => {
  it("fetches the weather when it mounts", () => {
    axios.get.mockReturnValue(new Promise(() => {}));

    renderDashboard();

    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it("shows a loading message while the request is in flight", async () => {
    axios.get.mockReturnValue(new Promise(() => {}));

    renderDashboard();

    expect(await screen.findByText("Loading…")).toBeInTheDocument();
  });

  it("shows an error message when the request fails", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));

    renderDashboard();

    expect(
      await screen.findByText(/there was an error loading the weather/i),
    ).toBeInTheDocument();
  });

  it("renders the current KPIs and one card per forecast day", async () => {
    axios.get.mockResolvedValue({ status: 200, data: forecast });

    renderDashboard();

    expect(await screen.findByText("Weather App")).toBeInTheDocument();
    expect(screen.getByText("Today's weather")).toBeInTheDocument();
    expect(screen.getByText(/61.5/)).toBeInTheDocument();
    expect(screen.getByText("Forecasted weather")).toBeInTheDocument();
    expect(screen.getAllByAltText("Avatar")).toHaveLength(3);
  });

  it("omits the current KPIs when the response has no current data", async () => {
    axios.get.mockResolvedValue({
      status: 200,
      data: { daily: [day(1618308000)] },
    });

    renderDashboard();

    expect(await screen.findByText("Forecasted weather")).toBeInTheDocument();
    expect(screen.queryByText("Today's weather")).not.toBeInTheDocument();
    expect(screen.getAllByAltText("Avatar")).toHaveLength(1);
  });
});
