import { useEffect } from "react";
import axios from "axios";
import { ProductCard } from "Components";
import { useProducts } from "contexts/product-context";
import { getFilteredProducts } from "utilities";

export const ProductList = () => {
  const {
    state: { products, sortBy, rating, categories, priceRange },
    dispatch,
  } = useProducts();

  useEffect(() => {
    (async () => {
      try {
        const productResponse = await axios.get("/api/products");
        dispatch({
          type: "LOAD_PRODUCTS",
          payload: productResponse.data.products,
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    document.title = "Products | Echo Store";
  }, []);

  const productsToDisplay = getFilteredProducts(
    products,
    sortBy,
    rating,
    categories,
    priceRange
  );

  return (
    <section className="section center-main-axis center-cross-axis">
      {productsToDisplay.length > 0 ? (
        productsToDisplay.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <h1>No Products Found</h1>
      )}
    </section>
  );
};
