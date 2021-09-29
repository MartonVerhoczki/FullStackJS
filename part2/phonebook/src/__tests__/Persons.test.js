import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import Persons from "../components/Persons";

describe("Persons component tests", () => {
  const persons = [
    {
      name: "Arto Hellas",
      number: "040-123456",
      id: 1,
    },
    {
      name: "Ada Lovelace",
      number: "39-44-5323523",
      id: 2,
    },
  ];

  test("should render content", () => {
    render(
      <Persons persons={persons} handleDelete={jest.fn()} filter=""></Persons>
    );
    expect(screen.getByText(/Arto Hellas/)).toBeVisible();
  });

  test("should call delete handler with correct value", () => {
    const mochHandler = jest.fn((person) => (event) => person);
    const component = render(
      <Persons persons={persons} handleDelete={mochHandler} filter=""></Persons>
    );

    const button = component.getAllByRole("button")[0];
    fireEvent.click(button);

    expect(mochHandler.mock.results[0].value()).toEqual(persons[0]);
  });

  test("should not filter persons without filter", () => {
    const { container } = render(
      <Persons persons={persons} handleDelete={jest.fn} filter=""></Persons>
    );

    expect(container.getElementsByClassName("person")).toHaveLength(2);
  });

  test("should filter persons with filter", () => {
    const { container } = render(
      <Persons persons={persons} handleDelete={jest.fn} filter="arto"></Persons>
    );

    expect(container.getElementsByClassName("person")).toHaveLength(1);
  });
});
