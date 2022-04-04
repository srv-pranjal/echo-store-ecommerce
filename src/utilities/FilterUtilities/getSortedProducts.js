export const getSortedProducts = (products, sortBy) => {
  if (sortBy === "LOW_TO_HIGH")
    return [...products].sort(
      (product1, product2) => product1.discountedPrice - product2.discountedPrice
    );
  if (sortBy === "HIGH_TO_LOW")
    return [...products].sort(
      (product1, product2) => product2.discountedPrice - product1.discountedPrice
    );
  return products;
};
