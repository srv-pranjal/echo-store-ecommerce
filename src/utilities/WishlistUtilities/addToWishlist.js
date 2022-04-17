import axios from "axios";
import { showToast } from "utilities";

export const addToWishlist = async (product, token, wishlistDispatch) => {
  try {
    await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
    showToast("success", "Product Added to Wishlist");
  } catch (error) {
    showToast("error", "Failed to Add to Wishlist");
  }
};
