export const getPriceFilteredProducts = (products, price) => {
  return products.filter((product) => product.discountedPrice <= price);
};
