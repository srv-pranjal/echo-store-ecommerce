export const ProductCard = ({
  product: {
    title,
    image,
    rating,
    description,
    originalPrice,
    discountedPrice,
    discountPercent,
    altText,
  },
}) => {
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
        <button className="btn btn--primary">Add to Cart</button>
      </div>
    </article>
  );
};
