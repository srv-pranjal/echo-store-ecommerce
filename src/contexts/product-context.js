import { createContext, useContext, useReducer } from "react";

import { productReducer } from "../reducers";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    sortBy: null,
    priceRange: 90000,
    rating: 0,
    categories: [],
  });
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
