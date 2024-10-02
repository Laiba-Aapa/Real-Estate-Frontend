import { useState } from "react";
import "./search.scss";
import { Link } from "react-router-dom";

const Search = () => {
  const types = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "buy",
    City: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="searchBar">
      <div className="searchType">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="City"
          placeholder="City Location"
          onChange={handleChange}
        />
        <input
          type="number"
          min={0}
          max={10000000}
          name="minPrice"
          placeholder="Min Price"
          onChange={handleChange}
        />
        <input
          type="number"
          min={0}
          max={10000000}
          name="maxPrice"
          placeholder="Max Price"
          onChange={handleChange}
        />
        <Link
          to={`/list?type=${query.type}&City=${query.City}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          <button>
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Search;
