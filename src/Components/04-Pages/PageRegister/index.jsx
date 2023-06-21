import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Formik } from "formik";
import { useSelector } from "react-redux";

import { register } from "../../../Store/Slices/Authorization/slices";
import { registerValidationSchema } from "../../../ValidationSchemata/registerValidationSchema";

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

export default function PageRegister({ dispatch, id }) {
  const isRegisterLoading = useSelector((state) => {
    return state.auth?.isRegisterLoading;
  });
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

  /*------------------------------*/

  // if user is already verified
  // (which means they already got their id
  // and we can get that id from state),
  // redirect to home page
  if (id) return <Navigate to="/" replace />;

  return (
    <div className="page-form-template page-register d-flex-column">
      <PageTitle content="Hello, Felow History Enthusiast!" />
      <div className="nav-to-register-page d-flex-row">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="link-to-register-page">
            Login
          </Link>
        </p>
      </div>
      <Formik
        initialValues={{
          email: "",
          phone: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            dispatch(register(values));
            console.log(`CLICKED: send verification to email`);
            setSubmitting(false);
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
              className="form-template form-register d-flex-column"
            >
              <SectionTitle
                content="Complete your data below to register"
                size="small"
                color="contrast"
                bgColor="main"
              />
              <div className="container">
                <div className={`label-and-input d-flex-column`}>
                  <label htmlFor="email" className="label-for-input">
                    Email
                  </label>
                  <input
                    className="input-for-label"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@mail.com"
                    title="Register your email address"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {touched.email && errors.email ? (
                  <SnackbarNotification
                    content={errors.email}
                    color="main"
                    bgColor="accent"
                  />
                ) : null}

                <div className={`label-and-input d-flex-column`}>
                  <label htmlFor="phone" className="label-for-input">
                    Phone Number
                  </label>
                  <input
                    className="input-for-label"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="62123456789"
                    title="Register your phone number"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {touched.phone && errors.phone ? (
                  <SnackbarNotification
                    content={errors.phone}
                    color="main"
                    bgColor="accent"
                  />
                ) : null}

                <div className={`label-and-input d-flex-column`}>
                  <label htmlFor="username" className="label-for-input">
                    Username
                  </label>
                  <input
                    className="input-for-label"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="yourUsername"
                    title="Register what will be your username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {touched.username && errors.username ? (
                  <SnackbarNotification
                    content={errors.username}
                    color="main"
                    bgColor="accent"
                  />
                ) : null}

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
                  <InputSubmit
                    value="Send verification to email"
                    disabled={isRegisterLoading}
                  />
                </div>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
}
