import { createContext, useContext, useReducer } from "react";
import { authReducer } from "reducers";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("TOKEN");
  const user = localStorage.getItem("USER");
  const [authState, authDispatch] = useReducer(authReducer, {
    isLoggedIn: false,
    token,
    user: JSON.parse(user),
  });

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
