const Filter = ({ filter, handleFilter }) => {
    return (
      <div id='filter'>
        Filter shown with:{" "}
        <input placeholder='Filter' value={filter} onChange={(event) => handleFilter(event)} />
      </div>
    );
  };

  export default Filter