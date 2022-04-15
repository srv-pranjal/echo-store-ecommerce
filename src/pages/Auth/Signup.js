import axios from "axios";
import { useAuth } from "contexts";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { showToast } from "utilities";
import "./Auth.css";

export const Signup = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    document.title = "SignUp | Echo Store";
  }, []);

  const signupHandler = async (e) => {
    e.preventDefault();
    let response = "";
    try {
      const { confirmPassword, ...currUser } = user;
      response = await axios.post("/api/auth/signup", currUser);
      const { createdUser, encodedToken } = response.data;
      if (createdUser) {
        localStorage.setItem("USER", JSON.stringify(createdUser));
        localStorage.setItem("TOKEN", encodedToken);
        authDispatch({
          type: "SIGNUP",
          payload: { user: createdUser, token: encodedToken },
        });
        navigate("/", { replace: true });
        showToast("success", "Registration Successful!!");
      }
    } catch (error) {
      showToast("error", error.response.data.errors[0]);
    }
  };

  return (
    <main className="authentication signup">
      <form
        onSubmit={signupHandler}
        className="authentication__form signup__form"
      >
        <h3 className="authentication__title">SIGN UP</h3>
        <p className="authentication__subtitle">Enter your details</p>
        <div className="authentication__field">
          <label>First Name</label>
          <input
            className="input input--outlined"
            placeholder="First Name"
            required
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
        </div>
        <div className="authentication__field">
          <label>Last Name</label>
          <input
            className="input input--outlined"
            placeholder="Last Name"
            required
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </div>
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
                className={showPassword ? "fa fa-eye" : "fa fa-eye-slash"}
                aria-hidden="true"
              ></i>
            </span>
          </div>
        </div>
        <div className="authentication__field">
          <label>Confirm Password</label>
          <div className="password-wrapper">
            <input
              className="input input--outlined"
              placeholder="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              required
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
            />
            <span
              className="show-pwd"
              onClick={() =>
                setShowConfirmPassword((showPassword) => !showPassword)
              }
            >
              <i
                className={
                  showConfirmPassword ? "fa fa-eye" : "fa fa-eye-slash"
                }
                aria-hidden="true"
              ></i>
            </span>
          </div>
        </div>
        {user.confirmPassword.length > 0 &&
          user.password.length > 0 &&
          user.password !== user.confirmPassword && (
            <p className="error-message">* Passwords do not match</p>
          )}

        <button
          className={
            (user.password !== user.confirmPassword ? "btn--disabled" : "") +
            " btn btn--primary authentication__btn"
          }
        >
          SIGN UP
        </button>
        <p className="authentication__subtitle">
          Already have an account?
          <Link to="/login" className="highlight" role="button">
            Log In!
          </Link>
        </p>
      </form>
    </main>
  );
};
