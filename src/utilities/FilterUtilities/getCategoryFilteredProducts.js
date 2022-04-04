export const getCategoryFilteredProducts = (products, categoryList) => {
  if (categoryList && categoryList.length > 0) {
    return products.filter((product) => {
      return categoryList.includes(product.categoryName);
    });
  }
  return products;
};
