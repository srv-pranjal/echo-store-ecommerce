import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { Navbar } from "./Components";
import {
  Home,
  Products,
  Login,
  Signup,
  Logout,
  ForgotPassword,
  Cart,
  PrivateRoutes,
  Wishlist,
  ResetPassword,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose="3000" closeOnClick="true" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:userID" element={<ResetPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<Mockman />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
