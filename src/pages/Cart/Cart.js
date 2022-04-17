import { useEffect } from "react";
import { PriceCard, HorizontalProductCard } from "Components";
import "./Cart.css";
import { useCart } from "contexts";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "hooks";

export const Cart = () => {
  const {
    cartState: { cartItems, cartItemsQuantity },
  } = useCart();

  useDocumentTitle("Cart | Echo Store");

  return (
    <main>
      <h1 className="section__heading">My Cart</h1>
      {cartItemsQuantity > 0 ? (
        <section className="section cart">
          <section className="cart__items">
            {cartItems.map((product) => (
              <HorizontalProductCard
                key={product.id}
                product={product}
                page={"Cart"}
              />
            ))}
          </section>
          <PriceCard />
        </section>
      ) : (
        <section className="cart__empty">
          <p className="heading--4">Your Echo Cart is Empty!</p>
          <p>
            <Link to="/wishlist" className="btn btn--link-text" role="button">
              View your Wishlist
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
