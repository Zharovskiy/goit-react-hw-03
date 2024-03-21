const SearchBox = ({ searchValue, handleChange }) => {
  return (
    <label>
      <span>Find contacts by name</span>
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
      />
    </label>
  );
};

export default SearchBox;
