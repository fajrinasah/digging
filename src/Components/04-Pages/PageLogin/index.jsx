import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Formik } from "formik";

import { login } from "../../../Store/Slices/Authorization/slices";
import { loginValidationSchema } from "../../../ValidationSchemata/loginValidationSchema";

import PageTitle from "../../01-Atoms/Texts/PageTitle";
import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import InputSubmit from "../../01-Atoms/Inputs/InputSubmit";
import CheckboxShowPassword from "../../01-Atoms/Inputs/CheckboxShowPassword";
import SnackbarNotification from "../../02-Molecules/SnackbarNotification";

import "./styles.css";
import "../../01-Atoms/Inputs/styles.css";
import "../../01-Atoms/Inputs/InputPassword/styles.css";
import "../../01-Atoms/Inputs/InputConfirmPassword/styles.css";
import "../../01-Atoms/Texts/ModalHelp/styles.css";

export default function PageLogin({ dispatch, id }) {
  const [optionData, setOptionData] = useState("email");

  function getLoginOption(option = "") {
    return setOptionData(option);
  }

  /*--------------Show Password Toggle--------------*/

  const [passwordIsShown, setPasswordIsShown] = useState(false);

  const togglePassword = () => {
    setPasswordIsShown((passwordIsShown) => !passwordIsShown);
  };

  /*------------------------------*/

  // if user is already verified
  // (which means they already got their id
  // and we can get that id from state),
  // redirect to home page
  if (id) return <Navigate to="/" replace />;

  return (
    <div className="page-form-template page-login d-flex-column">
      <PageTitle content="Welcome Back!" />
      <div className="nav-to-register-page d-flex-row">
        <p>
          Don't have an account yet?{" "}
          <Link to="/register" className="link-to-register-page">
            Register
          </Link>
        </p>
      </div>
      <Formik
        initialValues={{
          email: "",
          phone: "",
          username: "",
          password: "",
        }}
        validationSchema={loginValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            dispatch(
              login({
                email: values.email,
                phone: values.phone,
                username: values.username,
                password: values.password,
              })
            );
            console.log(`CLICKED: send login request`);
            setSubmitting(false);
          } catch (error) {
            console.log("error", error?.message);
            return { message: error?.message };
          }
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className="container">
            <form
              onSubmit={handleSubmit}
              className="form-template form-login d-flex-column"
            >
              <SectionTitle
                content="Login with your email, username, or phone number"
                size="small"
                color="contrast"
                bgColor="main"
              />
              <div className="container">
                <fieldset className="login-option-radios d-flex-column">
                  <legend className="label-for-input">Login option</legend>
                  <div className="radios-container input-for-label">
                    <div className="radio-container d-flex-row">
                      <input
                        defaultChecked
                        type="radio"
                        name="loginOption"
                        value="email"
                        id="email"
                        onChange={() => getLoginOption("email")}
                      />
                      <label
                        htmlFor="login-option-email"
                        className="label-for-radio"
                      >
                        Email
                      </label>
                    </div>
                    <div className="radio-container d-flex-row">
                      <input
                        type="radio"
                        name="loginOption"
                        value="phone"
                        id="loginOptionPhone"
                        onChange={() => getLoginOption("phone")}
                      />
                      <label
                        htmlFor="loginOptionPhone"
                        className="label-for-radio"
                      >
                        Phone Number
                      </label>
                    </div>
                    <div className="radio-container d-flex-row">
                      <input
                        type="radio"
                        name="loginOption"
                        value="username"
                        id="loginOptionUsername"
                        onChange={() => getLoginOption("username")}
                      />
                      <label
                        htmlFor="loginOptionUsername"
                        className="label-for-radio"
                      >
                        Username
                      </label>
                    </div>
                  </div>
                </fieldset>

                <div className={`label-and-input d-flex-column`}>
                  <label
                    htmlFor={
                      optionData === "email"
                        ? "inputEmail"
                        : optionData === "phone"
                        ? "inputPhone"
                        : "inputUsername"
                    }
                    className="label-for-input"
                  >
                    {(optionData === "email"
                      ? "Email"
                      : optionData === "phone"
                      ? "Phone Number"
                      : "Username") || "(Choose login option)"}
                  </label>
                  <input
                    className="input-for-label"
                    type={optionData}
                    id={
                      optionData === "email"
                        ? "inputEmail"
                        : optionData === "phone"
                        ? "inputPhone"
                        : "inputUsername"
                    }
                    name={optionData}
                    placeholder="Input your email, phone number, or username here"
                    title="Input for email, phone number, or username"
                    value={
                      optionData === "email"
                        ? values.email
                        : optionData === "phone"
                        ? values.phone
                        : values.username
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.email || errors.phone || errors.username ? (
                  <SnackbarNotification
                    content={errors.email || errors.phone || errors.username}
                    color="main"
                    bgColor="accent"
                  />
                ) : null}

                <div className="input-password label-and-input d-flex-column">
                  <label htmlFor="password" className="label-for-input">
                    Password
                  </label>
                  <input
                    className="input-for-label"
                    type={passwordIsShown ? "text" : "password"}
                    id="password"
                    name="password"
                    title="Re-enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <CheckboxShowPassword
                    showClicked={togglePassword}
                    id="checkbox-show-confirm-password"
                  />
                </div>
                {touched.password && errors.password ? (
                  <SnackbarNotification
                    content={errors.password}
                    color="main"
                    bgColor="accent"
                  />
                ) : null}

                <div className="nav-to-reset-password-page d-flex-row">
                  <Link
                    to="/forgotPassword"
                    className="link-to-reset-password-page"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="form-button-container d-flex-column">
                  <div className="decor-custom-div"></div>
                  <InputSubmit value="Login" disabled={isSubmitting} />
                </div>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
}
