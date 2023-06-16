import { Link } from "react-router-dom";

import "./styles.css";

export default function AccessLoginRegister({}) {
  return (
    <div className="access-login-register-container">
      <div className="access-login-register">
        <p>
          <Link to="/register" className="link-access-register">
            Register
          </Link>{" "}
          or{" "}
          <Link to="/login" className="link-access-login">
            Login
          </Link>{" "}
          <br />
          <br />
          to access more features!
        </p>
      </div>
    </div>
  );
}
