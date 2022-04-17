import axios from "axios";
import { showToast } from "utilities";

export const removeFromCart = async (product, token, cartDispatch) => {
  try {
    await axios.delete(`/api/user/cart/${product._id}`, {
      headers: {
        authorization: token,
      },
    });
    cartDispatch({ type: "REMOVE_FROM_CART", payload: product });
    showToast("info", "Product Removed From Cart");
  } catch (error) {
    showToast("error", "Failed to Remove From Cart");
  }
};
