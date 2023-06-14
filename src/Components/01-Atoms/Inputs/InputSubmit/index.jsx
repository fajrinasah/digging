import "../../Buttons/ButtonStandard/styles.css";

export default function InputSubmit({ value }) {
  return (
    <input
      type="submit"
      value={value}
      className="input-submit button-standard raised"
    />
  );
}
