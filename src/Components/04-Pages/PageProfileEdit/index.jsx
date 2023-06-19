import "./styles.css";

import PageTitle from "../../01-Atoms/Texts/PageTitle";
import UserPhoto from "../../01-Atoms/Media/UserPhoto";
import InputFileCustom from "../../01-Atoms/Inputs/InputFileCustom";
import FormProfilePublicData from "../../02-Molecules/FormProfilePublicData";
import FormProfilePrivateData from "../../02-Molecules/FormProfilePrivateData";
import ButtonStandard from "../../01-Atoms/Buttons/ButtonStandard";
import InputSubmit from "../../01-Atoms/Inputs/InputSubmit";

export default function PageProfileEdit() {
  return (
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
  );
}
