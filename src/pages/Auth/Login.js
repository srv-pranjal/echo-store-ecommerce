import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";
import axios from "axios";
import { showToast } from "utilities";
import { useAuth } from "contexts";
import { useDocumentTitle } from "hooks";

export const Login = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  let from = location.state?.from?.pathname || "/products";

  useDocumentTitle("Login | Echo Store");

  const loginHandler = async (e) => {
    e.preventDefault();
    let response = "";
    try {
      response = await axios.post("/api/auth/login", user);
      const { foundUser, encodedToken } = response.data;
      if (foundUser) {
        localStorage.setItem("USER", JSON.stringify(foundUser));
        localStorage.setItem("TOKEN", encodedToken);
        authDispatch({
          type: "LOGIN",
          payload: { user: foundUser, token: encodedToken },
        });
        navigate(from, { replace: true });
        showToast("success", "Login Succeeded!");
      }
    } catch (error) {
      showToast("error", error.response.data.errors[0]);
    }
  };
  return (
    <div className="authentication">
      <form className="authentication__form" onSubmit={(e) => loginHandler(e)}>
        <h3 className="authentication__title">LOG IN</h3>
        <p className="authentication__subtitle">Enter email and password</p>
        <div className="authentication__field">
          <label>Email</label>
          <input
            className="input input--outlined"
            placeholder="Email"
            type="email"
            required
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="authentication__field">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              className="input input--outlined"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <span
              className="show-pwd"
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              <i
                className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"}
                aria-hidden="true"
              ></i>
            </span>
          </div>
        </div>
        <div className="authentication__help">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <Link to="/login" className="highlight" role="button">
            Forgot Password?
          </Link>
        </div>
        <button className="btn btn--primary authentication__btn" type="submit">
          LOG IN
        </button>
        <button
          className="btn btn--secondary authentication__btn"
          type="submit"
          onClick={() =>
            setUser({
              ...user,
              email: "pranjal.s@gmail.com",
              password: "pranjal.s",
            })
          }
        >
          Login As Guest
        </button>
        <p className="authentication__subtitle">
          Don't have an account?
          <Link to="/signup" className="highlight" role="button">
            Sign up!
          </Link>
        </p>
      </form>
    </div>
  );
};
