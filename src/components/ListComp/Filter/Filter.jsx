import { useSearchParams } from "react-router-dom";
import "./filter.scss";
import { useState } from "react";

const Filter = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    City: searchParams.get("City") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 1000000,
    bedroom: searchParams.get("bedroom") || 1,
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };
  const handleFilter = () => {
    setSearchparams(query);
  };

  return (
    <div className="filter">
      <h1>
        Search results for <b>{searchParams.get("City")}</b>
      </h1>
      <div className="filter__top">
        <div className="item">
          <label htmlFor="City">Location</label>
          <input
            type="text"
            id="City"
            name="City"
            placeholder="City Location"
            onChange={handleChange}
            defaultValue={query.City}
          />
        </div>
      </div>
      <div className="filter__bottom">
        <div className="filter__left">
          <div className="item">
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              onChange={handleChange}
              defaultValue={query.type}
            >
              <option value="" selected>
                Any
              </option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="property">Property</label>
            <select
              name="property"
              id="property"
              onChange={handleChange}
              defaultValue={query.property}
            >
              <option value="" selected>
                Any
              </option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="minPrice">Min Price</label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="Any"
              onChange={handleChange}
              defaultValue={query.minPrice}
            />
          </div>
        </div>
        <div className="filter__right">
          <div className="item">
            <label htmlFor="maxPrice">Max Price</label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              placeholder="Any"
              onChange={handleChange}
              defaultValue={query.maxPrice}
            />
          </div>
          <div className="item">
            <label htmlFor="bedroom">Bedroom</label>
            <input
              type="text"
              id="bedroom"
              name="bedroom"
              placeholder="Any"
              onChange={handleChange}
              defaultValue={query.bedroom}
            />
          </div>
          <div className="item button">
            <label htmlFor="button">search</label>
            <button onClick={handleFilter}>
              <img src="/search.png" alt="search" />
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
