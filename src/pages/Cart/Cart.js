import { useEffect } from "react";
import { PriceCard, CartProductCard } from "Components";
import "./Cart.css";
import { useCart } from "contexts";
import { Link } from "react-router-dom";

export const Cart = () => {
  const {
    cartState: { cartItems, cartItemsQuantity },
  } = useCart();

  useEffect(() => {
    document.title = "Cart | Echo Store";
  }, []);

  return (
    <main>
      <h1 className="section__heading">My Cart</h1>
      {cartItemsQuantity > 0 ? (
        <section className="section cart">
          <section className="cart__items">
            {cartItems.map((product) => (
              <CartProductCard key={product.id} product={product} />
            ))}
          </section>
          <PriceCard />
        </section>
      ) : (
        <section className="cart__empty">
          <p className="heading--4">Your Echo Cart is Empty!</p>
          <Link to="/products" class="btn btn--link-text" role="button">
            Continue Shopping
          </Link>
        </section>
      )}
    </main>
  );
};
