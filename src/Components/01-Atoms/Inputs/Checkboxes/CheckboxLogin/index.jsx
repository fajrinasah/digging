import "../styles.css";

export default function CheckboxLogin({
  onChangeEmail,
  onChangeUsername,
  onChangePhoneNumber,
}) {
  return (
    <div className="checkbox-custom checkbox-login d-flex-row">
      <input
        type="checkbox"
        name="checkbox-login-email"
        id="checkbox-login-email"
        onChange={onChangeEmail}
      />
      <label for="checkbox-login-email">Email</label>
      <input
        type="checkbox"
        name="checkbox-login-username"
        id="checkbox-login-username"
        onChange={onChangeUsername}
      />
      <label for="checkbox-login-username">Username</label>
      <input
        type="checkbox"
        name="checkbox-login-phone-number"
        id="checkbox-login-phone-number"
        onChange={onChangePhoneNumber}
      />
      <label for="checkbox-login-phone-number">Phone Number</label>
    </div>
  );
}
