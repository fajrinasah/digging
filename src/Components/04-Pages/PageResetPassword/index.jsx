import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

import { resetPassword } from "../../../Store/Slices/Authorization/slices";
import { resetPasswordValidationSchema } from "../../../ValidationSchemata/resetPasswordValidationSchema";

import PageTitle from "../../01-Atoms/Texts/PageTitle";
import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import InputSubmit from "../../01-Atoms/Inputs/InputSubmit";
import ButtonHelp from "../../01-Atoms/Buttons/ButtonHelp";
import CheckboxShowPassword from "../../01-Atoms/Inputs/CheckboxShowPassword";
import SnackbarNotification from "../../02-Molecules/SnackbarNotification";

import "./styles.css";
import "../../01-Atoms/Inputs/styles.css";
import "../../01-Atoms/Inputs/InputPassword/styles.css";
import "../../01-Atoms/Inputs/InputConfirmPassword/styles.css";
import "../../01-Atoms/Texts/ModalHelp/styles.css";

export default function PageResetPassword({ dispatch }) {
  const navigate = useNavigate();

  /*---------------Show Password Guides Toggle-------------*/
  const [guidesIsShown, setGuidesIsShown] = useState(false);

  const helpClicked = () => {
    setGuidesIsShown((guidesIsShown) => !guidesIsShown);
  };

  /*--------------Show Password Toggle--------------*/

  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const [confirmPasswordIsShown, setConfirmPasswordIsShown] = useState(false);

  const togglePassword = () => {
    setPasswordIsShown((passwordIsShown) => !passwordIsShown);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordIsShown(
      (confirmPasswordIsShown) => !confirmPasswordIsShown
    );
  };

  return (
    <div className="page-form-template page-reset-password d-flex-column">
      <PageTitle content="Reset Password" />
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        validationSchema={resetPasswordValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            dispatch(resetPassword(values));
            console.log(`CLICKED: reset password`);
            setSubmitting(false);
            navigate("/");
          } catch (error) {
            console.log("error", error?.message);
            return { message: error?.message };
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className="container">
            <form
              onSubmit={handleSubmit}
              className="form-template form-reset-password d-flex-column"
            >
              <SectionTitle
                content="Complete your data below to register"
                size="small"
                color="contrast"
                bgColor="main"
              />
              <div className="container">
                <div className="input-password label-and-input d-flex-column">
                  <label htmlFor="password" className="label-for-input">
                    Password
                  </label>
                  <div className="guides-container">
                    {guidesIsShown ? (
                      <div className="modal-help">
                        <ul>
                          <li>Must contains at least six characters</li>
                          <li>Must contains at least one letter</li>
                          <li>Must contains at least one uppercase letter</li>
                          <li>Must contains at least one symbol</li>
                        </ul>
                      </div>
                    ) : null}
                    <ButtonHelp detail="See guides" onClick={helpClicked} />
                  </div>
                  <input
                    className="input-for-label"
                    type={passwordIsShown ? "text" : "password"}
                    id="password"
                    name="password"
                    title="Create a strong password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <CheckboxShowPassword
                    showClicked={togglePassword}
                    id="checkbox-show-password"
                  />
                </div>
                {touched.password && errors.password ? (
                  <SnackbarNotification
                    content={errors.password}
                    color="main"
                    bgColor="accent"
                  />
                ) : null}

                <div className="input-confirm-password label-and-input d-flex-column">
                  <label htmlFor="confirmPassword" className="label-for-input">
                    Confirm Password
                  </label>
                  <input
                    className="input-for-label"
                    type={confirmPasswordIsShown ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    title="Re-enter your password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <CheckboxShowPassword
                    showClicked={toggleConfirmPassword}
                    id="checkbox-show-confirm-password"
                  />
                </div>
                {touched.confirmPassword && errors.confirmPassword ? (
                  <SnackbarNotification
                    content={errors.confirmPassword}
                    color="main"
                    bgColor="accent"
                  />
                ) : null}

                <div className="form-button-container d-flex-column">
                  <div className="decor-custom-div"></div>
                  <InputSubmit value="Reset password" disabled={isSubmitting} />
                </div>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
}
