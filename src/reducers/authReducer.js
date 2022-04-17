export const authReducer = (authState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...authState,
        isLoggedIn: true,
        token: payload.token,
        user: payload.user,
      };
    case "SIGNUP":
      return {
        ...authState,
        isLoggedIn: true,
        token: payload.token,
        user: payload.user,
      };
    case "LOGOUT":
      return {
        ...authState,
        isLoggedIn: false,
        token: "",
        user: {},
      };
    default:
      return authState;
  }
};
