import { useAuth } from "contexts";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Auth.css";
import { showToast } from "utilities";
import { useDocumentTitle } from "hooks";

export const Logout = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    authDispatch({ type: "LOGOUT" });
    showToast("info", "Redirecting to Home Page . . .");
  }, [authDispatch]);

  useDocumentTitle("Logout | Echo Store");

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
      </div>
    </main>
  );
};
