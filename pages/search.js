import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search term:", searchTerm);
    setSearchTerm("");
  };

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <input
        className="px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button
        className="ml-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
