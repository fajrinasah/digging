import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

import { forgotPassword } from "../../../Store/Slices/Authorization/slices";
import { forgotPasswordValidationSchema } from "../../../ValidationSchemata/forgotPasswordValidationSchema";

import PageTitle from "../../01-Atoms/Texts/PageTitle";
import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import InputSubmit from "../../01-Atoms/Inputs/InputSubmit";
import SnackbarNotification from "../../02-Molecules/SnackbarNotification";

import "./styles.css";
import "../../01-Atoms/Inputs/styles.css";

export default function PageForgotPassword({ dispatch }) {
  const navigate = useNavigate();

  return (
    <div className="page-form-template page-forgot-password d-flex-column">
      <PageTitle content="Forgot Password" />
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={forgotPasswordValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            dispatch(forgotPassword(values));
            console.log(`CLICKED: send forgot password request`);
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
              className="form-template form-forgot-password d-flex-column"
            >
              <SectionTitle
                content="We will send a verification mail for you to change password"
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

                <div className="form-button-container d-flex-column">
                  <div className="decor-custom-div"></div>
                  <InputSubmit
                    value="Send verification to email"
                    disabled={isSubmitting}
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
