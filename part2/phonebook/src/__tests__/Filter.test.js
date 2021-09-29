import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import Filter from "../components/Filter";

describe("Filter component tests", () => {
  test("should render content", () => {
    const component = render(<Filter filter="" handleFilter={jest.fn()} />);

    expect(component.container.querySelector("#filter")).toBeVisible();
  });

  test("should render filter string", () => {
    render(<Filter filter="test" handleFilter={jest.fn()} />);

    expect(screen.getByDisplayValue("test")).toBeVisible();
  });

  test("should call handler with correct value", () => {
    let currentFilter;
    const mockHandler = jest.fn(
      (event) => (currentFilter = event.target.value)
    );
    render(<Filter filter="" handleFilter={mockHandler} />);
    fireEvent.change(screen.getByPlaceholderText("Filter"), {
      target: { value: "testFilter" },
    });
    expect(currentFilter).toEqual("testFilter");
  });
});
