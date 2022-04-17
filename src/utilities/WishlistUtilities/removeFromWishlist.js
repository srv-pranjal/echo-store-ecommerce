import axios from "axios";
import { showToast } from "utilities";

export const removeFromWishlist = async (product, token, wishlistDispatch) => {
  try {
    await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: {
        authorization: token,
      },
    });
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
    showToast("info", "Product Removed From Wishlist");
  } catch (error) {
    showToast("error", "Failed to Remove From Wishlist");
  }
};
