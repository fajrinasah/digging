import "./styles.css";

import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import InputText from "../../01-Atoms/Inputs/InputText";
import InputTextArea from "../../01-Atoms/Inputs/InputTextArea";

export default function FormProfilePublicData({
  currentDisplayName,
  currentUsername,
  currentAbout,
}) {
  return (
    <fieldset className="form-profile public-data d-flex-column">
      <legend>
        <SectionTitle
          content="Public Data"
          size="small"
          color="contrast"
          bgColor="main"
        />
      </legend>
      <InputText
        flexDirection="row"
        inputId="user-display-name"
        labelText="Display Name"
        autoCapitalize="words"
        inputName="user-display-name"
        inputPlaceholder=""
        defaultValue={currentDisplayName}
      />
      <InputText
        flexDirection="row"
        inputId="user-username"
        labelText="Username"
        autoCapitalize="words"
        inputName="user-username"
        inputPlaceholder=""
        defaultValue={currentUsername}
      />
      <InputTextArea
        flexDirection="row"
        inputId="user-about"
        labelText="About"
        autoCapitalize="sentences"
        inputName="user-about"
        inputPlaceholder=""
        defaultValue={currentAbout}
      />
    </fieldset>
  );
}
