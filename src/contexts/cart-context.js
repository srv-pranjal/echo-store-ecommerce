import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "reducers";
import { useAuth } from "./auth-context";
import { getUserCartDetails } from "utilities";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const {
    authState: { isLoggedIn, token },
  } = useAuth();

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartItems: [],
    cartItemsQuantity: 0,
  });

  useEffect(() => {
    isLoggedIn
      ? getUserCartDetails(token, cartDispatch)
      : cartDispatch({ type: "RESET_CART" });
  }, [isLoggedIn, token]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
