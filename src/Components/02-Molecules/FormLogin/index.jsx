import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import ButtonStandard from "../../01-Atoms/Buttons/ButtonStandard";
import InputText from "../../01-Atoms/Inputs/InputText";
import InputPassword from "../../01-Atoms/Inputs/InputPassword";

export default function FormLogin({ helpClicked, showClicked, loginClicked }) {
  return (
    <div className="form-template form-login d-flex-column">
      <SectionTitle
        content="Login with your email, username, or phone number"
        size="small"
        color="contrast"
        bgColor="main"
      />
      <InputText
        flexDirection="column"
        inputId="login-data"
        labelText="Email/Username/Phone"
        required
        inputName="forgot-verification"
        inputPlaceholder="your email, username, or phone number"
        title="Email for change password verification"
      />
      <InputPassword
        flexDirection="column"
        inputId="login-password"
        labelText="Password"
        helpClicked={helpClicked}
        showClicked={showClicked}
        required
        inputName="login-password"
        inputPlaceholder="password"
        title="Password"
      />
      <div className="form-button-container d-flex-column">
        <div className="decor-custom-div"></div>
        <ButtonStandard
          story="raised"
          bold="bold"
          content="Login"
          onClick={loginClicked}
        />
      </div>
    </div>
  );
}
