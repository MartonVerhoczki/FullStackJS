const Persons = ({ persons, filter, handleDelete }) => {
    return persons
      .filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
      .map((person) => (
        <div key={person.id} className='person'>
          <p>
            {person.name} - {person.number}
          </p>
          <button onClick={handleDelete(person)}>Delete</button>
        </div>
      ));
  };

  export default Persons;