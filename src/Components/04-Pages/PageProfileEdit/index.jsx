import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Formik } from "formik";

import { changeProfileValidationSchema } from "../../../ValidationSchemata/changeProfileValidationSchema";
import {
  changeUsername,
  changeEmail,
  changePhone,
  changePhotoProfile,
} from "../../../Store/Slices/Authorization/slices";

import "./styles.css";
import "../../02-Molecules/FormProfilePublicData/styles.css";
import "../../02-Molecules/FormProfilePrivateData/styles.css";

import PageTitle from "../../01-Atoms/Texts/PageTitle";
import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import UserPhoto from "../../01-Atoms/Media/UserPhoto";
import InputFileCustom from "../../01-Atoms/Inputs/InputFileCustom";
import InputButton from "../../01-Atoms/Inputs/InputButton";
import ButtonStandard from "../../01-Atoms/Buttons/ButtonStandard";
import InputSubmit from "../../01-Atoms/Inputs/InputSubmit";
import SnackbarNotification from "../../02-Molecules/SnackbarNotification";
import { toastBlank, toastError } from "../../01-Atoms/CustomToasts";

/*===============================================================*/
//
/*===============================================================*/

export default function PageProfileEdit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /*=====================GLOBAL STATE=============================*/

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

  /*=====================LOCAL STATE=============================*/
  const [photo, setPhoto] = useState(null);
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);

  /*==================================================*/

  /*=====================PHOTO CHANGE=============================*/
  const changePhotoHandler = (e) => {
    const selectedPhoto = e.target.files[0];

    // Validate the requirements
    if (selectedPhoto) {
      const { type, size } = selectedPhoto;
      const allowedExtensions = [
        "image/jpg",
        "image/jpeg",
        "image/webp",
        "image/png",
      ];
      const maxSize = 3 * 1024 * 1024;

      if (allowedExtensions.includes(type) && size <= maxSize) {
        setPhoto(selectedPhoto);
        console.log("selected photo is valid");
      } else {
        setPhoto(null);
        e.target.value = null;
        console.log("selected photo is not valid");
        toastError(
          "Please upload a valid photo (.jpg, .jpeg, .webp, .png) with maximum size 3MB"
        );
      }
    }
  };

  /*========================GO TO PAGE CHANGE PASSWORD=============================*/

  const changeClicked = () => {
    navigate("/changePassword");
  };

  /*=======================USE EFFECT TO DISPATCH==============================*/
  // still stuck!!!
  /*=========================================================================*/
  useEffect(() => {
    console.log("useEffect is running");
    // console.log(isPhotoUploaded);
    // console.log(photo);
    if (isPhotoUploaded) {
      const formData = new FormData();
      formData.append("file", photo);
      console.log("dispatching changePhotoProfile");
      dispatch(changePhotoProfile(formData))
        .then(() => {
          setPhoto(null);
          setIsPhotoUploaded(false);
          window.location.reload();
        })
        .catch((error) => {
          toastError("Failed updating photo");
          console.log(error);
        });
    }
  }, [isPhotoUploaded, photo]);

  /*======================UTILITY FUNCTIONS===============================*/
  const uploadPhotoHandler = (e) => {
    e.preventDefault();
    setIsPhotoUploaded(true);
    console.log("selected photo was uploaded");
  };

  const cancelUploadPhoto = () => {
    setPhoto(null);
    console.log("updating photo was canceled");
  };

  return (
    <div className="page-profile-edit d-flex-column">
      <PageTitle content="Edit Profile Data" />
      <div className="form-container d-flex-row">
        <div className="left-side d-flex-column">
          <UserPhoto imgSource={imgProfile} />
          <form
            className="upload-photo d-flex-column"
            onSubmit={uploadPhotoHandler}
          >
            <InputFileCustom
              accept="image/jpg, image/jpeg, image/webp, image/png"
              buttonContent="Upload a photo"
              onChange={changePhotoHandler}
            />
            {photo && (
              <div className="upload-photo-buttons">
                <InputSubmit
                  story="raised"
                  value="Upload"
                  disabled={false}
                  // onSubmit={uploadPhotoHandler}
                />
                <ButtonStandard
                  story="ghost"
                  bold=""
                  content="Cancel"
                  onClick={cancelUploadPhoto}
                />
              </div>
            )}
          </form>
        </div>

        <Formik
          initialValues={{
            username: username,
            email: email,
            phone: phone,
          }}
          validationSchema={changeProfileValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            if (values.username !== username)
              dispatch(
                changeUsername({
                  currentUsername: username,
                  newUsername: values.username,
                })
              );

            if (values.email !== email)
              dispatch(
                changeEmail({
                  currentEmail: email,
                  newEmail: values.email,
                })
              );

            if (values.phone !== phone)
              dispatch(
                changePhone({
                  currentPhone: phone,
                  newPhone: values.phone,
                })
              );

            if (
              values.username === username &&
              values.email === email &&
              values.phone === phone
            )
              toastBlank("Nothing to be changed");
            setSubmitting(false);
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
            <form onSubmit={handleSubmit} className="right-side d-flex-column">
              <fieldset className="form-profile public-data d-flex-column">
                <legend>
                  <SectionTitle
                    content="Public Data"
                    size="small"
                    color="contrast"
                    bgColor="main"
                  />
                </legend>

                {/*----------------------DISPLAY NAME------------------------*/}

                <div className={`label-and-input d-flex-row`}>
                  <label htmlFor="displayName" className="label-for-input">
                    Display Name
                  </label>
                  <input
                    className="input-for-label"
                    type="text"
                    id="displayName"
                    name="displayName"
                    placeholder="Display Name"
                    // value={values.displayName}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                  />
                </div>
                {/* {touched.displayName && errors.displayName ? (
                  <SnackbarNotification
                    content={errors.displayName}
                    color="main"
                    bgColor="accent"
                  />
                ) : null} */}

                {/*----------------------USERNAME------------------------*/}

                <div className={`label-and-input d-flex-row`}>
                  <label htmlFor="username" className="label-for-input">
                    Username
                  </label>
                  <input
                    className="input-for-label"
                    type="text"
                    id="username"
                    name="username"
                    placeholder={username}
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

                {/*----------------------ABOUT------------------------*/}

                <div className={`label-and-textarea d-flex-row`}>
                  <label htmlFor="about" className="label-for-textarea">
                    About
                  </label>
                  <textarea
                    className="textarea-for-label"
                    id="about"
                    name="about"
                    title="Tell us about yourself"
                    // value={values.about}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                  ></textarea>
                </div>
                {/* {touched.about && errors.about ? (
                  <SnackbarNotification
                    content={errors.about}
                    color="main"
                    bgColor="accent"
                  />
                ) : null} */}
              </fieldset>

              {/*===============================================*/}
              {/*===============================================*/}

              <fieldset className="form-profile private-data d-flex-column">
                <legend>
                  <SectionTitle
                    content="Private Data"
                    size="small"
                    color="contrast"
                    bgColor="main"
                  />
                </legend>

                {/*----------------------EMAIL------------------------*/}

                <div className={`label-and-input d-flex-row`}>
                  <label htmlFor="email" className="label-for-input">
                    Email
                  </label>
                  <input
                    className="input-for-label"
                    type="email"
                    id="email"
                    name="email"
                    placeholder={email}
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

                {/*----------------------PHONE------------------------*/}

                <div className={`label-and-input d-flex-row`}>
                  <label htmlFor="phone" className="label-for-input">
                    Phone Number
                  </label>
                  <input
                    className="input-for-label"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={phone}
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

                {/*----------------------PASSWORD------------------------*/}

                <InputButton
                  flexDirection="row"
                  content="Password"
                  buttonContent="Go to change password page"
                  buttonClicked={changeClicked}
                />
              </fieldset>

              <div className="button-container">
                <InputSubmit value="Save changes" disabled={isSubmitting} />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
