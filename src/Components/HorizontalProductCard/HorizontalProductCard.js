import { useAuth, useCart, useWishlist } from "contexts";
import {
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
  showToast,
  updateCartProductQty,
} from "utilities";
import "./HorizontalProductCard.css";

export const HorizontalProductCard = ({ product, page }) => {
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

  const {
    wishlistState: { wishlistItems },
    wishlistDispatch,
  } = useWishlist();
  const {
    cartState: { cartItems },
    cartDispatch,
  } = useCart();
  const {
    authState: { token },
  } = useAuth();

  const moveToCart = () => {
    let alreadyPresentProduct = cartItems.find(
      (cartProduct) => product._id === cartProduct._id
    );
    removeFromWishlist(product, token, wishlistDispatch);
    if (alreadyPresentProduct) {
      updateCartProductQty(
        alreadyPresentProduct,
        token,
        cartDispatch,
        "increment"
      );
      showToast("success", "Product Added to Cart");
    } else {
      addToCart({ ...product, qty: 1 }, token, cartDispatch);
    }
  };

  const moveToWishlist = () => {
    let alreadyPresentProduct = wishlistItems.find(
      (wishlistProduct) => product._id === wishlistProduct._id
    );
    if (alreadyPresentProduct) {
      showToast("error", "Product already present in your Wishlist");
    } else {
      removeFromCart(product, token, cartDispatch);
      addToWishlist(product, token, wishlistDispatch);
    }
  };

  let isCartPage = page === "Cart";

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
        {isCartPage && (
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
        )}
        {isCartPage ? (
          <button className="btn btn--secondary" onClick={moveToWishlist}>
            Move to Wishlist
          </button>
        ) : (
          <button className="btn btn--secondary" onClick={moveToCart}>
            Move to Cart
          </button>
        )}
      </div>
      <span
        className="card__btn-close"
        onClick={() =>
          isCartPage
            ? removeFromCart(product, token, cartDispatch)
            : removeFromWishlist(product, token, wishlistDispatch)
        }
      >
        <i className="fa fa-times-circle"></i>
      </span>
    </article>
  );
};
