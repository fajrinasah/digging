import { Link } from "react-router-dom";

import "./styles.css";
import PageTitle from "../../01-Atoms/Texts/PageTitle";

export default function PageRegisterVerified() {
  return (
    <div className="simple-page page-register-verified d-flex-column">
      <PageTitle content="Successfully Verified!" />
      <div className="details-container d-flex-column">
        <p>
          Go to{" "}
          <Link to="/" className="back-home">
            Home
          </Link>{" "}
          page to start exploring.
        </p>
      </div>
    </div>
  );
}
