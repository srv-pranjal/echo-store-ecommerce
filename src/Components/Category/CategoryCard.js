import React from "react";
import { Link } from "react-router-dom";

export const CategoryCard = ({ categoryName, image, altText }) => {
  return (
    <Link to="/products">
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
