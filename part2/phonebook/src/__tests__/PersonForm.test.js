import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import PersonForm from "../components/PersonForm";

describe("PersonForm component tests", () => {
  test("should render content", () => {
    const component = render(
      <PersonForm
        handleNewPerson={jest.fn()}
        setNewName={jest.fn()}
        setNewNumber={jest.fn()}
      ></PersonForm>
    );
    expect(component.container.querySelector("#personForm")).toBeVisible();
    expect(screen.getByPlaceholderText("Name")).toBeVisible();
    expect(screen.getByPlaceholderText("Number")).toBeVisible();
    expect(screen.getByText("Add")).toBeVisible();
  });

  test("should add new person", () => {
    let newName;
    let newNumber;
    const createPerson = jest.fn((e) => e.preventDefault());
    const nameChangeHandler = jest.fn((value) => (newName = value));
    const numberChangeHandler = jest.fn((value) => (newNumber = value));

    const component = render(
      <PersonForm
        handleNewPerson={createPerson}
        setNewName={nameChangeHandler}
        setNewNumber={numberChangeHandler}
      ></PersonForm>
    );

    const nameInput = component.container.querySelector("#nameInput");
    const numberInput = component.container.querySelector("#numberInput");

    fireEvent.change(nameInput, { target: { value: "testname" } });
    fireEvent.change(numberInput, { target: { value: "testnumber" } });

    const addButton = component.getByText("Add");

    fireEvent.click(addButton);

    expect(newName).toMatch("testname");
    expect(newNumber).toMatch("testnumber");

    expect(createPerson.mock.calls).toHaveLength(1);
  });
});
