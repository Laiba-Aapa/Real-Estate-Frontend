import "./filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search results for <b>London</b>
      </h1>
      <div className="filter__top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="filter__bottom">
        <div className="filter__left">
          <div className="item">
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
              <option value="" selected>
                Any
              </option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="property">Property</label>
            <select name="property" id="property">
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
            />
          </div>
          <div className="item">
            <label htmlFor="bedroom">Bedroom</label>
            <input type="text" id="bedroom" name="bedroom" placeholder="Any" />
          </div>
          <div className="item button">
            <label htmlFor="button">search</label>
            <button>
              <img src="/search.png" alt="search" />
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
