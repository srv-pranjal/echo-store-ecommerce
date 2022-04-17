import axios from "axios";
import { showToast } from "utilities";

export const updateCartProductQty = async (
  product,
  token,
  cartDispatch,
  type
) => {
  try {
    const { data: userCartDetails } = await axios.post(
      `/api/user/cart/${product._id}`,
      { action: { type } },
      {
        headers: {
          authorization: token,
        },
      }
    );
    cartDispatch({ type: "SET_CART_ITEMS", payload: userCartDetails.cart });
  } catch (error) {
    showToast("error", "Failed to Update Product Quantity");
  }
};
