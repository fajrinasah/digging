import "./styles.css";

import PageTitle from "../../01-Atoms/Texts/PageTitle";
import UserPhoto from "../../01-Atoms/Media/UserPhoto";
import InputFileCustom from "../../01-Atoms/Inputs/InputFileCustom";
import FormProfilePublicData from "../../02-Molecules/FormProfilePublicData";
import FormProfilePrivateData from "../../02-Molecules/FormProfilePrivateData";
import ButtonStandard from "../../01-Atoms/Buttons/ButtonStandard";

export default function PageProfileEdit() {
  return (
    <div className="page-profile-edit d-flex-column">
      <PageTitle content="Edit Profile Data" />
      <div className="form-container d-flex-row">
        <div className="left-side d-flex-column">
          <UserPhoto />
          <InputFileCustom accept="" buttonContent="Choose photo" />
        </div>
        <div className="right-side d-flex-column">
          <FormProfilePublicData />
          <FormProfilePrivateData />
        </div>
      </div>
      <div className="button-container">
        <ButtonStandard story="raised" content="Save Changes" onClick="" />
      </div>
    </div>
  );
}
