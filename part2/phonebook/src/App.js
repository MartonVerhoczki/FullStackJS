import axios from "axios";
import React, { useState, useEffect } from "react";
import AppService from "./service/AppService";
import "./App.css";

const Filter = ({ filter, setFilter }) => {
  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      Filter shown with: <input value={filter} onChange={handleFilter} />
    </div>
  );
};

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  setSuccessMessage,
}) => {
  const handleNewPerson = (event) => {
    event.preventDefault();
    if (persons.map((person) => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      AppService.create({ name: newName, number: newNumber }).then((person) => {
        let copy = [...persons];
        copy.push(person);
        setPersons(copy);
        setSuccessMessage(`${person.name} successfully added to contacts`);
        setTimeout(() => setSuccessMessage(null), 5000);
      });
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

const Persons = ({ persons, setPersons, filter }) => {
  const handleDelete = (person) => {
    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
      AppService.remove(person.id);
      setPersons(persons.filter((p) => p.id !== person.id));
    }
  };

  return persons
    .filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    )
    .map((person) => (
      <div key={person.id}>
        <p>
          {person.name} - {person.number}
        </p>
        <button onClick={() => handleDelete(person)}>Delete</button>
      </div>
    ));
};

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="success">{message}</div>;
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  }, []);

  return (
    <>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <Filter filter={filter} setFilter={setFilter} />
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setSuccessMessage={setSuccessMessage}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} filter={filter} />
    </>
  );
};

export default App;
