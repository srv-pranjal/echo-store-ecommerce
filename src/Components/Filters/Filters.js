import { useState, useEffect } from "react";
import axios from "axios";
import { useProducts } from "contexts/product-context";

export const Filters = () => {
  const ratingOptions = ["4", "3", "2", "1"];
  const priceOptions = ["0", "5000", "10000", "15000", "20000", "25000", "30000", "35000", "40000", "45000", "50000", "55000", "60000", "65000", "70000", "75000", "80000", "85000", "90000"];
  
  const {
    state: { sortBy, rating, categories, priceRange },
    dispatch,
  } = useProducts();

  const [category, setCategory] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategory(response.data.categories);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);
  return (
    <aside className="sidebar">
      <div className="filter">
        <div className="filter__title">
          <h2>Filters</h2>
          <button
            className="btn btn--error"
            onClick={() => dispatch({ type: "CLEAR_ALL_FILTERS" })}
          >
            Clear
          </button>
        </div>

        <h3 className="filter__subtitle">Price</h3>
        <div className="filter__card">
          <div className="filter__title">
            <span>0</span>
            <span>{priceRange}</span>
            <span>90000</span>
          </div>
          <datalist id="price-list">
            {priceOptions.map((priceOption, index) => (
              <option key={index} value={priceOption}></option>
            ))}
          </datalist>
          <input
            list="price-list"
            type="range"
            min={0}
            max={90000}
            step={5000}
            value={priceRange}
            className="filter__range"
            onChange={(e) =>
              dispatch({ type: "FILTER_BY_PRICE", payload: e.target.value })
            }
          />
        </div>

        <h3 className="filter__subtitle">Category</h3>
        <div className="filter__card">
          {category.map(({ id, categoryName }) => {
            return (
              <label key={id} className="filter__wrapper">
                <input
                  type="checkbox"
                  value={categoryName}
                  checked={categories.includes(categoryName)}
                  onChange={(e) =>
                    dispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: categoryName,
                    })
                  }
                />
                {categoryName}
              </label>
            );
          })}
        </div>

        <h3 className="filter__subtitle">Ratings</h3>
        <div className="filter__card">
          {ratingOptions.map((ratingOption, index) => {
            return (
              <label key={index} className="filter__wrapper">
                <input
                  type="radio"
                  name="rating"
                  value={ratingOption}
                  checked={rating === ratingOption}
                  onChange={(e) =>
                    dispatch({
                      type: "FILTER_BY_RATING",
                      payload: e.target.value,
                    })
                  }
                />
                {ratingOption} stars and above
              </label>
            );
          })}
        </div>

        <h3 className="filter__subtitle">Sort By</h3>
        <div className="filter__card">
          <label className="filter__wrapper">
            <input
              type="radio"
              name="sortBy"
              value="LOW_TO_HIGH"
              checked={sortBy === "LOW_TO_HIGH"}
              onChange={(e) =>
                dispatch({ type: "SORT_BY", payload: e.target.value })
              }
            />
            Price - Low to High
          </label>
          <label className="filter__wrapper">
            <input
              type="radio"
              name="sortBy"
              value="HIGH_TO_LOW"
              checked={sortBy === "HIGH_TO_LOW"}
              onChange={(e) =>
                dispatch({ type: "SORT_BY", payload: e.target.value })
              }
            />
            Price - High to Low
          </label>
        </div>
      </div>
    </aside>
  );
};
