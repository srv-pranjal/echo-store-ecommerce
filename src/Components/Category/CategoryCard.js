import { useProducts } from "contexts";
import React from "react";
import { Link } from "react-router-dom";

export const CategoryCard = ({ categoryName, image, altText }) => {
  const { dispatch } = useProducts();

  const redirectToCategory = (categoryName) => {
    dispatch({ type: "CLEAR_ALL_FILTERS" });
    dispatch({
      type: "FILTER_BY_CATEGORY",
      payload: categoryName,
    });
  };

  return (
    <Link to="/products" onClick={() => redirectToCategory(categoryName)}>
      <article className="card card--vertical card--shadow">
        <div className="card__content">
          <div className="card__img-container">
            <img src={image} className="img-responsive" alt={altText} />
          </div>
          <div className="card__product-details">
            <div className="card__title category__title">
              <h2>{categoryName}</h2>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};
