import "../../Buttons/ButtonStandard/styles.css";

export default function InputSubmit({
  value = "Submit",
  disabled = false,
  story = "raised",
}) {
  return (
    <input
      type="submit"
      value={value}
      className={`input-submit button-standard ${story}`}
      disabled={disabled}
    />
  );
}
