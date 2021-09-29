import axios from "axios";
import React, { useState, useEffect } from "react";
import AppService from "./service/AppService";
import "./App.css";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";


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

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

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

  const handleDelete = (person) => (event) => {
    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
      AppService.remove(person.id);
      setPersons(persons.filter((p) => p.id !== person.id));
    }
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <Filter
        filter={filter}
        setFilter={setFilter}
        handleFilter={handleFilter}
      />
      <PersonForm
        handleNewPerson={handleNewPerson}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} handleDelete={handleDelete} />
    </>
  );
};

export default App;
