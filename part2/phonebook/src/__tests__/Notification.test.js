import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import Notification from "../components/Notification";

describe("Notification component tests", () => {
  test("should render empty content without message", () => {
    const component = render(<Notification message={null} />);
    expect(component.container).toBeEmptyDOMElement();
  });

  test("should render content with message", () => {
    const component = render(<Notification message="test" />);
    expect(component.container).toHaveTextContent("test");
  });
});
