import { Formik } from "formik";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeProfileValidationSchema } from "../../../ValidationSchemata/changeProfileValidationSchema";

import "./styles.css";

import PageTitle from "../../01-Atoms/Texts/PageTitle";
import UserPhoto from "../../01-Atoms/Media/UserPhoto";
import InputFileCustom from "../../01-Atoms/Inputs/InputFileCustom";
import FormProfilePublicData from "../../02-Molecules/FormProfilePublicData";
import FormProfilePrivateData from "../../02-Molecules/FormProfilePrivateData";
import ButtonStandard from "../../01-Atoms/Buttons/ButtonStandard";
import InputSubmit from "../../01-Atoms/Inputs/InputSubmit";
import SnackbarNotification from "../../02-Molecules/SnackbarNotification";

export default function PageProfileEdit({ dispatch, resetPassword }) {
  const navigate = useNavigate();

  const imgProfile = useSelector((state) => {
    return state.auth?.imgProfile;
  });

  const email = useSelector((state) => {
    return state.auth?.email;
  });

  const phone = useSelector((state) => {
    return state.auth?.phone;
  });

  const username = useSelector((state) => {
    return state.auth?.username;
  });

  return (
    <Formik
      initialValues={{
        file: null,
        email: "",
        phone: "",
        username: "",
      }}
      validationSchema={changeProfileValidationSchema}
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
      {" "}
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className="page-profile-edit d-flex-column">
          <PageTitle content="Edit Profile Data" />
          <div className="form-container d-flex-row">
            <div className="left-side d-flex-column">
              <UserPhoto />
              {/* <InputFileCustom accept="" buttonContent="Choose photo" /> */}
              <InputFileCustom
                accept="image/jpg, image/jpeg, image/webp, image/png"
                buttonContent="Choose photo"
                value={values.file}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.file && errors.file ? (
                <SnackbarNotification
                  content={errors.file}
                  color="main"
                  bgColor="accent"
                />
              ) : null}
            </div>
            <div className="right-side d-flex-column">
              <FormProfilePublicData />
              <FormProfilePrivateData />
            </div>
          </div>
          <div className="button-container">
            <InputSubmit value="Save changes" />
          </div>
        </div>
      )}
    </Formik>
  );
}
