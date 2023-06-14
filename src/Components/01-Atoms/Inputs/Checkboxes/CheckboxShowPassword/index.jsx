import "../styles.css";

export default function CheckboxShowPassword({ showClicked }) {
  return (
    <div className="checkbox-custom checkbox-show-password d-flex-row">
      <input
        type="checkbox"
        name="checkbox-show-password"
        id="checkbox-show-password"
        onChange={showClicked}
      />
      <label for="checkbox-show-password">Show Password</label>
    </div>
  );
}
