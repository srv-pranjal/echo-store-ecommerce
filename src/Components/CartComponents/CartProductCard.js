import { useAuth, useCart } from "contexts";
import { removeFromCart, updateCartProductQty } from "utilities";

export const CartProductCard = ({ product }) => {
  const {
    title,
    image,
    rating,
    description,
    originalPrice,
    discountedPrice,
    discountPercent,
    altText,
    qty,
  } = product;

  const { cartDispatch } = useCart();
  const {
    authState: { token },
  } = useAuth();

  return (
    <article className="card card--horizontal">
      <div className="card__content">
        <div className="card__img-container">
          <img src={image} alt={altText} className="img-responsive" />
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
        <div>
          <div className="cart__quantity">
            <button
              className="btn btn--outline-secondary cart__btn-icon"
              onClick={() =>
                qty > 1
                  ? updateCartProductQty(
                      product,
                      token,
                      cartDispatch,
                      "decrement"
                    )
                  : removeFromCart(product, token, cartDispatch)
              }
            >
              <i className="fa fa-minus"></i>
            </button>
            <span className="highlight">{qty}</span>
            <button
              className="btn btn--outline-secondary cart__btn-icon"
              onClick={() =>
                updateCartProductQty(product, token, cartDispatch, "increment")
              }
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
        <button className="btn btn--secondary">Move to Wishlist</button>
      </div>
      <span
        className="card__btn-close"
        onClick={() => removeFromCart(product, token, cartDispatch)}
      >
        <i className="fa fa-times-circle"></i>
      </span>
    </article>
  );
};
