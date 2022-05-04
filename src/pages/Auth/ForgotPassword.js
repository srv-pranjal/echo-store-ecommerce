import { useState } from "react";
import { showToast } from "utilities";
import axios from "axios";
import { useDocumentTitle } from "hooks";
import { ThreeDots } from "react-loader-spinner";
import { MailSent } from "Components";

export const ForgotPassword = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mailSent, setMailSent] = useState(false);

  useDocumentTitle("Forgot Password | Echo Store");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let response = "";
    try {
      response = await axios.post("/api/auth/forgot-password", {
        email: userEmail,
        protocol: window.location.protocol,
        host: window.location.host,
      });
      if (response.data.status === "OK") {
        setIsLoading(false);
        setMailSent(true);
      }
    } catch (error) {
      setIsLoading(false);
      showToast("error", error.response.data.errors[0]);
    }
  };

  if (mailSent) return <MailSent />;
  return (
    <div className="authentication">
      <form
        className="authentication__form forgot"
        onSubmit={forgotPasswordHandler}
      >
        <h2>Forgot Password</h2>
        <p className="authentication__subtitle forgot__msg">
          Enter your email and we'll send a link on your email to reset your
          password
        </p>
        <div className="authentication__field">
          <label>Email</label>
          <input
            className="input input--outlined"
            placeholder="Email"
            type="email"
            required
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        {isLoading ? (
          <div className="loader">
            <ThreeDots width="50" color="blue" ariaLabel="loading-indicator" />
          </div>
        ) : (
          <button
            className="btn btn--primary authentication__btn forgot__btn"
            type="submit"
          >
            SEND LINK
          </button>
        )}
      </form>
    </div>
  );
};
