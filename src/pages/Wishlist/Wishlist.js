import "./Wishlist.css";
import { useWishlist } from "contexts";
import { Link } from "react-router-dom";
import { HorizontalProductCard } from "Components";
import { useDocumentTitle } from "hooks";

export const Wishlist = () => {
  const {
    wishlistState: { wishlistItems, wishlistItemsQuantity },
  } = useWishlist();

  useDocumentTitle("Wishlist | Echo Store");

  return (
    <main>
      <h1 className="section__heading">My Wishlist</h1>
      {wishlistItemsQuantity > 0 ? (
        <section className="section wishlist">
          <section className="wishlist__items">
            {wishlistItems.map((product) => (
              <HorizontalProductCard
                key={product.id}
                product={product}
                page={"Wishlist"}
              />
            ))}
          </section>
        </section>
      ) : (
        <section className="wishlist__empty">
          <p className="heading--4">Your Echo Wishlist is Empty!</p>
          <p>
            <Link to="/cart" className="btn btn--link-text" role="button">
              Go to Cart
            </Link>
            or
            <Link to="/products" className="btn btn--link-text" role="button">
              Continue Shopping
            </Link>
          </p>
        </section>
      )}
    </main>
  );
};
