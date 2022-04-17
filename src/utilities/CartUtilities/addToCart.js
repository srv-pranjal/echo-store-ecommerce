import axios from "axios";
import { showToast } from "utilities";

export const addToCart = async (product, token, cartDispatch) => {
  try {
    await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    cartDispatch({ type: "ADD_TO_CART", payload: product });
    showToast("success", "Product Successfully Added to Cart");
  } catch (error) {
    showToast("error", "Failed to Add to Cart");
  }
};
