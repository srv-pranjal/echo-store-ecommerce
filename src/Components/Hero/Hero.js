import React from "react";
import { Link } from "react-router-dom";
import { hero } from "../../assets";

export const Hero = () => {
  return (
    <section>
      <div className="hero">
        <img className="hero__img" src={hero} alt="Responsive" />
        <div className="hero__overlay">
          <p>
            Get the best deals on electronics at Echo Store. Upto 45% off on 1st
            Order
          </p>
          <Link className="btn btn--primary" role="button" to="/products">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};
