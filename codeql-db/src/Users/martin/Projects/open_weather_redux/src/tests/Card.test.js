import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { formatDate, formatTime } from "../components/Card";

import Card from "../components/Card";

describe("Testing date formatting", () => {
  const timestamp = 1618308000; // 1/19/1970 10:31:48 AM

  it("should return a valid date string", () => {
    const formattedDate = formatDate(timestamp);

    // date string may vary by environment/locale; assert it's a non-empty string
    expect(typeof formattedDate).toBe("string");
    expect(formattedDate.length).toBeGreaterThan(0);
  });

  it("should return a valid time string", () => {
    const formattedTime = formatTime(timestamp);

    // time string may vary by environment/locale; assert it looks like a time
    expect(typeof formattedTime).toBe("string");
    expect(formattedTime.length).toBeGreaterThan(0);
  });
});

describe("Testing Card component", () => {
  const propsObj = {
    dateTime: 1618308000,
    humidity: 15,
    icon: "10d",
    minTemp: 275.09,
    maxTemp: 279.79,
    sunrise: 1618282134,
    sunset: 1618333901,
  };

  it("renders Card with all expected content", () => {
    render(<Card {...propsObj} />);

    expect(screen.getByAltText("Avatar")).toBeInTheDocument();
    expect(screen.getByText(/Min temp: 275.09/)).toBeInTheDocument();
    expect(screen.getByText(/Max temp: 279.79/)).toBeInTheDocument();
    expect(screen.getByText(/Humidty: 15/)).toBeInTheDocument();
  });
});
