import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import InputEmail from "../../01-Atoms/Inputs/InputEmail";
import InputTel from "../../01-Atoms/Inputs/InputTel";
import InputText from "../../01-Atoms/Inputs/InputText";
import InputPassword from "../../01-Atoms/Inputs/InputPassword";
import InputConfirmPassword from "../../01-Atoms/Inputs/InputConfirmPassword";
import InputSubmit from "../../01-Atoms/Inputs/InputSubmit";

export default function FormRegister({
  handleSubmit,
  helpClicked,
  passwordShowClicked,
  confirmShowClicked,
  values,
  handleChange,
  handleBlur,
  submitDisabled,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="form-template form-register d-flex-column"
    >
      <SectionTitle
        content="Complete your data below to register"
        size="small"
        color="contrast"
        bgColor="main"
      />
      <div className="container">
        <InputEmail
          flexDirection="column"
          inputId="register-email"
          labelText="Email"
          required
          inputName="register-email"
          inputPlaceholder="example@mail.com"
          title="Register your email address"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <InputTel
          flexDirection="column"
          inputId="register-phone-number"
          labelText="Phone Number"
          required
          inputName="register-phone-number"
          inputPlaceholder="621234567890"
          title="Register your phone number"
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <InputText
          flexDirection="column"
          inputId="register-username"
          labelText="Username"
          required
          inputName="register-username"
          inputPlaceholder="yourUsername"
          title="Register what will be your username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <InputPassword
          flexDirection="column"
          inputId="register-password"
          labelText="Password"
          helpClicked={helpClicked}
          showClicked={passwordShowClicked}
          required
          inputName="register-password"
          title="Create a strong password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <InputConfirmPassword
          flexDirection="column"
          inputId="register-confirm-password"
          labelText="Confirm Password"
          showClicked={confirmShowClicked}
          required
          inputName="register-confirm-password"
          title="Re-enter your password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="form-button-container d-flex-column">
        <div className="decor-custom-div"></div>
        <InputSubmit
          value="Send verification to email"
          disabled={submitDisabled}
        />
      </div>
    </form>
  );
}
