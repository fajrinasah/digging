import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import ButtonStandard from "../../01-Atoms/Buttons/ButtonStandard";
import InputEmail from "../../01-Atoms/Inputs/InputEmail";

export default function FormForgotVerification({ sendClicked }) {
  return (
    <div className="form-forgot-verification">
      <SectionTitle
        content="We will send a verification mail for you to change password"
        size="small"
        color="contrast"
        bgColor="main"
      />
      <InputEmail
        flexDirection="column"
        inputId="forgot-verification"
        labelText="Email"
        required
        inputName="forgot-verification"
        inputPlaceholder="youremail@mail.com"
        minLength="10"
        title="Email for change password verification"
      />
      <div className="form-button-container d-flex-column">
        <div className="decor-custom-div"></div>
        <ButtonStandard
          story="raised"
          bold="bold"
          content="Send verification"
          onClick={sendClicked}
        />
      </div>
    </div>
  );
}
