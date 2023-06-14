import "../styles.css";

export default function Radio(onChange) {
  return (
    <div className="checkbox-custom checkbox-show-password d-flex-row">
      <input
        type="checkbox"
        name="checkbox-show-password"
        id="checkbox-show-password"
        onChange={onChange}
      />
      <label for="checkbox-show-password">Show Password</label>
    </div>
  );
}
