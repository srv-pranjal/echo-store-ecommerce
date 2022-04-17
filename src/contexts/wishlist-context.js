import { createContext, useContext, useReducer, useEffect } from "react";
import { wishlistReducer } from "reducers";
import { useAuth } from "./auth-context";
import { getUserWishlistDetails } from "utilities";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const {
    authState: { isLoggedIn, token },
  } = useAuth();

  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlistItems: [],
    wishlistItemsQuantity: 0,
  });

  useEffect(() => {
    isLoggedIn
      ? getUserWishlistDetails(token, wishlistDispatch)
      : wishlistDispatch({ type: "RESET_WISHLIST" });
  }, [isLoggedIn, token]);

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
