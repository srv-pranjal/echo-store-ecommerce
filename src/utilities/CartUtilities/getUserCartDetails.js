import axios from "axios";
import { showToast } from "utilities";

export const getUserCartDetails = async (token, cartDispatch) => {
  try {
    const {data: userCartDetails} = await axios.get("/api/user/cart", {
      headers: {
        authorization: token,
      },
    });
    cartDispatch({ type: "SET_CART_ITEMS", payload: userCartDetails.cart });
  } catch (error) {
    console.log(error);
    showToast("error", "Failed to Fetch Cart Details ");
  }
};
