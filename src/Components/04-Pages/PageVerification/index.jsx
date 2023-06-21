import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { verifyAccount } from "../../../Store/Slices/Authorization/slices";
import { Link } from "react-router-dom";

import "./styles.css";
import PageTitle from "../../01-Atoms/Texts/PageTitle";

export default function PageVerification() {
  const dispatch = useDispatch();
  const { isRegisterLoading, isVerified } = useSelector((state) => {
    return {
      isRegisterLoading: state.auth.isRegisterLoading,
      isVerified: state.auth.isVerified,
    };
  });

  useEffect(() => {
    dispatch(verifyAccount());
  }, []);

  const RenderPageVerification = () => {
    if (isRegisterLoading) {
      return (
        <div className="simple-page page-register-verification d-flex-column">
          <PageTitle content="Verifying..." />
          <div className="details-container d-flex-column">
            <p>Please check your email's inbox.</p>
            <p>You will be redirected to home page after you are verified.</p>
          </div>
        </div>
      );
    } else if (isVerified) {
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
  };

  return <RenderPageVerification />;
}
