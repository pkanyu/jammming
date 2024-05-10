// SearchBar.js
import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const search = () => {
    onSearch(term);
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
      />
      <button onClick={search}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
