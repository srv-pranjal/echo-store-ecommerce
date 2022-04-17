import { useCart } from "contexts";

export const PriceCard = () => {
  const {
    cartState: { cartItems },
  } = useCart();

  let { totalPrice, totalDiscount } = cartItems.reduce(
    (prev, curr) => ({
      ...prev,
      totalPrice: prev.totalPrice + curr.originalPrice * curr.qty,
      totalDiscount:
        prev.totalDiscount +
        Math.ceil(curr.originalPrice * curr.qty * (curr.discountPercent / 100)),
    }),
    { totalPrice: 0, totalDiscount: 0 }
  );
  return (
    <article className="card card--vertical order">
      <div className="card__content">
        <div className="card__product-details">
          <div className="card__title">
            <h2>ORDER DETAILS</h2>
          </div>
          <div className="card__description">
            <hr />
            <div className="order__item">
              <span>Bag Total</span> <span>₹{totalPrice}</span>
            </div>
            <div className="order__item">
              <span>Discount</span> <span>- ₹{totalDiscount}</span>
            </div>
            <div className="order__item">
              <span>Delivery</span> <span>Free</span>
            </div>
            <hr />
            <div className="order__item">
              <span>
                <strong>Total Amount</strong>
              </span>
              <span>
                <strong>₹{totalPrice - totalDiscount}</strong>
              </span>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="card__footer">
        <button className="btn btn--primary">Place Order</button>
      </div>
    </article>
  );
};
