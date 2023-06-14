import "./styles.css";

import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import InputEmail from "../../01-Atoms/Inputs/InputEmail";
import InputTel from "../../01-Atoms/Inputs/InputTel";
import InputButton from "../../01-Atoms/Inputs/InputButton";

export default function FormProfilePrivateData({
  changeClicked,
  currentEmail,
  currentPhoneNumber,
}) {
  return (
    <fieldset className="form-profile private-data d-flex-column">
      <legend>
        <SectionTitle
          content="Private Data"
          size="small"
          color="contrast"
          bgColor="main"
        />
      </legend>
      <InputEmail
        flexDirection="row"
        inputId="user-email"
        labelText="Email"
        inputName="user-email"
        inputPlaceholder=""
        defaultValue={currentEmail}
      />
      <InputTel
        flexDirection="row"
        inputId="user-phone-number"
        labelText="Phone Number"
        inputName="user-phone-number"
        inputPlaceholder=""
        defaultValue={currentPhoneNumber}
      />
      <InputButton
        flexDirection="row"
        content="Password"
        buttonContent="Change"
        buttonClicked={changeClicked}
      />
    </fieldset>
  );
}
