import React from "react";
import { Link } from "react-router-dom";
import { hero } from "assets";
import { useProducts } from "contexts";

export const Hero = () => {
  const { dispatch } = useProducts();
  return (
    <section>
      <div className="hero">
        <img className="hero__img" src={hero} alt="Responsive" />
        <div className="hero__overlay">
          <p>
            Get the best deals on electronics at Echo Store. Upto 45% off on 1st
            Order
          </p>
          <Link
            className="btn btn--primary"
            role="button"
            to="/products"
            onClick={() => dispatch({ type: "CLEAR_ALL_FILTERS" })}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};
