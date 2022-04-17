import axios from "axios";
import { showToast } from "utilities";

export const getUserWishlistDetails = async (token, wishlistDispatch) => {
  try {
    const { data: userWishlistDetails } = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: token,
      },
    });
    wishlistDispatch({
      type: "SET_WISHLIST_ITEMS",
      payload: userWishlistDetails.wishlist,
    });
  } catch (error) {
    showToast("error", "Failed to Fetch Wishlist Details ");
  }
};
