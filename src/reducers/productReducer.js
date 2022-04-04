export const productReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { ...state, products: action.payload };
    case "SORT_BY":
      return { ...state, sortBy: action.payload };
    case "FILTER_BY_PRICE":
      return { ...state, priceRange: action.payload };
    case "FILTER_BY_CATEGORY":
      return state.categories.includes(action.payload)
        ? {
            ...state,
            categories: state.categories.filter(
              (item) => item !== action.payload
            ),
          }
        : {
            ...state,
            categories: [...state.categories.concat(action.payload)],
          };

    case "FILTER_BY_RATING":
      return { ...state, rating: action.payload };
    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        sortBy: "",
        priceRange: 90000,
        rating: 0,
        categories: [],
      };
    default:
      return state;
  }
};
