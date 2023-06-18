import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Formik } from "formik";
import { register } from "../../../Store/Slices/Authorization/slices";
import { registerValidationSchema } from "../../../ValidationSchemata/registerValidationSchema";

import "./styles.css";
import PageTitle from "../../01-Atoms/Texts/PageTitle";
import FormRegister from "../../02-Molecules/FormRegister";
import SnackbarNotification from "../../02-Molecules/SnackbarNotification";

export default function PageRegister() {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => {
    return {
      id: state.auth?.id,
    };
  });

  const isRegisterLoading = useSelector((state) => {
    return {
      isRegisterLoading: state.auth?.isRegisterLoading,
    };
  });

  /*----------------------------*/
  // Utility Functions

  const helpClicked = () => {};

  const passwordShowClicked = () => {};

  const confirmShowClicked = () => {};

  /*------------------------------*/

  // if user is already verified
  // (which means they already got their id
  // and we can get that id from state),
  // redirect to home page
  if (id) return <Navigate to="/" replace />;

  return (
    <div className="page-form-template page-register d-flex-column">
      <PageTitle content="Hello, Felow History Enthusiast!" />
      <div className="nav-to-register-page">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      <Formik
        initialValues={{
          email: "",
          phoneNumber: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validate={(values) => {
          try {
            registerValidationSchema.validateSync(values);
            return null;
          } catch (error) {
            console.log("error", error?.message);
            return { message: error?.message };
          }
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(register(values));
          setSubmitting(false);
        }}
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
          <div className="container">
            <FormRegister
              handleSubmit={handleSubmit}
              helpClicked={helpClicked}
              passwordShowClicked={passwordShowClicked}
              confirmShowClicked={confirmShowClicked}
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              submitDisabled={isRegisterLoading}
            />
            {errors.message && (
              <SnackbarNotification content={errors.message} />
            )}
          </div>
        )}
      </Formik>
    </div>
  );
}
