import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { formatTime } from "../components/Card";

import CurrentKPIs from "../components/CurrentKPIs";

describe("Testing date formatting", () => {
  const timestamp = 1618308000;

  it("should return a valid time string", () => {
    const formattedTime = formatTime(timestamp);

    expect(typeof formattedTime).toBe("string");
    expect(formattedTime.length).toBeGreaterThan(0);
  });
});

describe("Testing CurrentKPIs component", () => {
  const propsObj = {
    dt: 1618308000,
    temp: 275.09,
    feels_like: 279.79,
    pressure: 15,
    wind_speed: 300,
  };

  it("renders CurrentKPIs with expected content", () => {
    render(<CurrentKPIs current={propsObj} />);

    expect(screen.getByText(/275.09/)).toBeInTheDocument();
    expect(screen.getByText(/279.79/)).toBeInTheDocument();
  });
});
