import { useAuth } from "contexts";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Auth.css";
import { showToast } from "utilities";

export const Logout = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    authDispatch({ type: "LOGOUT" });
    showToast("info", "Redirecting to Home Page . . .");
  }, [authDispatch]);

  useEffect(() => {
    document.title = "Logout | Echo Store";
  }, []);

  useEffect(() => {
    setTimeout(() => navigate("/", { replace: true }), 3000);
  }, [navigate]);
  return (
    <main className="authentication">
      <div className="logout-container">
        <h3 className="authentication__title">Logged Out Successfully</h3>
        <p className="authentication__subtitle">
          Thank You for visiting Echo Store!.
        </p>
        <p className="authentication__subtitle">
          <Link to="/" className="btn btn--link-text" role="button">
            <i className="fa fa-arrow-left"></i> Back to Home Page
          </Link>
        </p>
      </div>
    </main>
  );
};
