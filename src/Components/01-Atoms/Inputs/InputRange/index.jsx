import "../styles.css";

export default function InputRange({
  flexDirection = "row",
  inputId = "",
  labelText = "",
  required = true,
  inputName = "",
  inputPlaceholder = "",
  min = "",
  max = "",
  step = "any",
  title = "",
}) {
  return (
    <div className={`label-and-input d-flex-${flexDirection}`}>
      <label for={inputId} className="label-for-input">
        {labelText}
      </label>
      <input
        className="input-for-label"
        type="range"
        required={required}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        min={min}
        max={max}
        step={step}
        title={title}
      />
    </div>
  );
}
