import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import InputPassword from "../../01-Atoms/Inputs/InputPassword";
import InputConfirmPassword from "../../01-Atoms/Inputs/InputConfirmPassword";
import InputSubmit from "../../01-Atoms/Inputs/InputSubmit";

export default function FormForgotReset({
  pattern,
  helpClicked,
  passwordShowClicked,
  confirmShowClicked,
  saveClicked,
}) {
  return (
    <div className="form-template form-forgot-reset d-flex-column">
      <SectionTitle
        content="Input new password"
        size="small"
        color="contrast"
        bgColor="main"
      />
      <div className="container">
        <InputPassword
          flexDirection="column"
          inputId="new-password"
          labelText="New Password"
          helpClicked={helpClicked}
          showClicked={passwordShowClicked}
          required
          inputName="new-password"
          inputPlaceholder="password"
          minLength="6"
          pattern={pattern}
          title="New Password"
        />
        <InputConfirmPassword
          flexDirection="column"
          inputId="confirm-new-password"
          labelText="Confirm New Password"
          showClicked={confirmShowClicked}
          required
          inputName="confirm-new-password"
          inputPlaceholder="password"
          minLength="6"
          pattern={pattern}
          title="Confirm New Password"
        />
      </div>
      <div className="form-button-container d-flex-column">
        <div className="decor-custom-div"></div>
        <InputSubmit value="Save changes" />
      </div>
    </div>
  );
}
