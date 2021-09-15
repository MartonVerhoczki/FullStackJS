import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const Filter = () => {
    const handleFilter = (event) => {
      setFilter(event.target.value);
    };

    return (
      <div>
        Filter shown with: <input value={filter} onChange={handleFilter} />
      </div>
    );
  };

  const PersonForm = () => {
    const handleNewPerson = (event) => {
      event.preventDefault();
      if (persons.map((person) => person.name).includes(newName)) {
        alert(`${newName} is already added to phonebook`);
      } else {
        let copy = [...persons];
        copy.push({ name: newName, number: newNumber });
        setPersons(copy);
      }
    };

    return (
      <form onSubmit={handleNewPerson}>
        <label>
          Name:
          <input onChange={(event) => setNewName(event.target.value)} />
        </label>
        <label>
          Number:
          <input onChange={(event) => setNewNumber(event.target.value)} />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  };

  const Persons = () => {
    return persons
      .filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
      .map((person) => (
        <div key={person.id}>
          <p>
            {person.name} - {person.number}
          </p>
        </div>
      ));
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Filter />
      <PersonForm />

      <h2>Numbers</h2>
      <Persons />
    </>
  );
};

export default App;
