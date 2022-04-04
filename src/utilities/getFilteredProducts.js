import {
  getCategoryFilteredProducts,
  getPriceFilteredProducts,
  getRatingFilteredProducts,
  getSortedProducts,
} from "./";

export const getFilteredProducts = (
  products,
  sortBy,
  rating,
  categoryList,
  priceRange
) => {
  const sortedProducts = getSortedProducts(products, sortBy);
  const ratingFilteredProducts = getRatingFilteredProducts(
    sortedProducts,
    rating
  );
  const categoryFilteredProducts = getCategoryFilteredProducts(
    ratingFilteredProducts,
    categoryList
  );
  const productsToDisplay = getPriceFilteredProducts(
    categoryFilteredProducts,
    priceRange
  );
  return productsToDisplay;
};
