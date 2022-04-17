export const wishlistReducer = (wishlistState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WISHLIST":
      return {
        ...wishlistState,
        wishlistItems: [...wishlistState.wishlistItems, payload],
        wishlistItemsQuantity: wishlistState.wishlistItemsQuantity + 1,
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...wishlistState,
        wishlistItems: wishlistState.wishlistItems.filter(
          (item) => item.id !== payload.id
        ),
        wishlistItemsQuantity: wishlistState.wishlistItemsQuantity - 1,
      };
    case "RESET_WISHLIST":
      return {
        wishlistItems: [],
        wishlistItemsQuantity: 0,
      };
    case "SET_WISHLIST_ITEMS":
      return {
        ...wishlistState,
        wishlistItems: payload,
        wishlistItemsQuantity: payload.length,
      };
    default:
      return wishlistState;
  }
};
