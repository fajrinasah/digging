import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import InputEmail from "../../01-Atoms/Inputs/InputEmail";
import InputTel from "../../01-Atoms/Inputs/InputTel";
import InputText from "../../01-Atoms/Inputs/InputText";
import InputPassword from "../../01-Atoms/Inputs/InputPassword";
import InputConfirmPassword from "../../01-Atoms/Inputs/InputConfirmPassword";
import InputSubmit from "../../01-Atoms/Inputs/InputSubmit";

export default function FormRegister({
  pattern,
  helpClicked,
  passwordShowClicked,
  confirmShowClicked,
}) {
  return (
    <div className="form-template form-register d-flex-column">
      <SectionTitle
        content="Complete your data below to register"
        size="small"
        color="contrast"
        bgColor="main"
      />
      <div className="container">
        <InputEmail
          flexDirection="column"
          inputId=""
          labelText="Email"
          required
          inputName=""
          inputPlaceholder=""
          minLength=""
          maxLength=""
          title=""
        />
        <InputTel
          flexDirection="column"
          inputId=""
          labelText="Phone Number"
          required
          inputName=""
          inputPlaceholder=""
          minLength=""
          maxLength=""
          title=""
        />
        <InputText
          flexDirection="column"
          inputId=""
          labelText="Username"
          required
          inputName=""
          inputPlaceholder=""
          minLength=""
          maxLength=""
          pattern=""
          title=""
        />
        <InputPassword
          flexDirection="column"
          inputId="password"
          labelText="Password"
          helpClicked={helpClicked}
          showClicked={passwordShowClicked}
          required
          inputName="password"
          inputPlaceholder="password"
          minLength="6"
          pattern={pattern}
          title="Password"
        />
        <InputConfirmPassword
          flexDirection="column"
          inputId="confirm-password"
          labelText="Confirm Password"
          showClicked={confirmShowClicked}
          required
          inputName="confirm-password"
          inputPlaceholder="password"
          minLength="6"
          pattern={pattern}
          title="Confirm Password"
        />
      </div>
      <div className="form-button-container d-flex-column">
        <div className="decor-custom-div"></div>
        <InputSubmit value="Send verification to email" />
      </div>
    </div>
  );
}
