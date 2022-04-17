export const cartReducer = (cartState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...cartState,
        cartItemsQuantity: cartState.cartItemsQuantity + 1,
        cartItems: [...cartState.cartItems, payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        cartItems: cartState.cartItems.filter((item) => item.id !== payload.id),
        cartItemsQuantity: cartState.cartItemsQuantity - 1,
      };
    case "RESET_CART":
      return {
        cartItems: [],
        cartItemsQuantity: 0,
      };
    case "SET_CART_ITEMS":
      return {
        ...cartState,
        cartItems: payload,
        cartItemsQuantity: payload.length,
      };
    default:
      return cartState;
  }
};
