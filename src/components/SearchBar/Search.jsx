import { useState } from "react";
import "./search.scss";

const Search = () => {
  const types = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchBar">
      <div className="searchType">
        {types.map((type) => (
          <button
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          min={0}
          max={10000000}
          name="minPrice"
          placeholder="Min Price"
        />
        <input
          type="number"
          min={0}
          max={10000000}
          name="maxPrice"
          placeholder="Max Price"
        />
        <button>
          <img src="/search.png" alt="search" />
        </button>
      </form>
    </div>
  );
};

export default Search;
