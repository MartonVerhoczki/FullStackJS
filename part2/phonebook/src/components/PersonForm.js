const PersonForm = ({ handleNewPerson, setNewName, setNewNumber }) => {
    return (
      <form id='personForm' onSubmit={(event) => handleNewPerson(event)}>
        <label>
          Name:
          <input id="nameInput" placeholder='Name' onChange={(event) => setNewName(event.target.value)} required/>
        </label>
        <label>
          Number:
          <input id="numberInput" placeholder='Number' onChange={(event) => setNewNumber(event.target.value)} required/>
        </label>
        <button type="submit">Add</button>
      </form>
    );
  };

export default PersonForm