import { useAuth, useCart } from "contexts";
import { useNavigate } from "react-router-dom";
import { addToCart } from "utilities";

export const ProductCard = ({ product }) => {
  const {
    cartState: { cartItems },
    cartDispatch,
  } = useCart();
  const {
    authState: { isLoggedIn, token },
  } = useAuth();
  const {
    title,
    image,
    rating,
    description,
    originalPrice,
    discountedPrice,
    discountPercent,
    altText,
  } = product;

  const navigate = useNavigate();

  return (
    <article className="card card--vertical card--shadow">
      <div className="card__content">
        <div className="card__img-container">
          <img src={image} className="img-responsive" alt={altText} />
        </div>
        <div className="card__product-details">
          <div className="card__title">
            <h2>{title}</h2>
            <div className="rating">
              <label>
                <i className="fa fa-star rating__star rating__star--selected"></i>
              </label>
              {rating}
            </div>
          </div>
          <div className="card__description">
            {description}
            <div className="card__price-wrapper">
              <span className="card__price-original">₹{originalPrice}</span>
              <span className="card__price-discounted">₹{discountedPrice}</span>
              <span className="card__discount highlight">
                {discountPercent}% OFF
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card__footer">
        <button className="btn btn--outline-secondary">Add to Wishlist</button>
        {isLoggedIn ? (
          cartItems.find((cartProduct) => cartProduct.id === product.id) ? (
            <button
              className="btn btn--primary"
              onClick={() => navigate("/cart")}
            >
              Go to Cart
            </button>
          ) : (
            <button
              className="btn btn--primary"
              onClick={() =>
                addToCart({ ...product, qty: 1 }, token, cartDispatch)
              }
            >
              Add to Cart
            </button>
          )
        ) : (
          <button
            className="btn btn--primary"
            onClick={() => navigate("/login", { replace: true })}
          >
            Add to Cart
          </button>
        )}
      </div>
    </article>
  );
};
