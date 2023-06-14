import "../styles.css";

export default function InputWhat({
  flexDirection = "row",
  inputId = "",
  labelText = "",
  required = true,
  inputName = "",
  inputPlaceholder = "",
  multiple = "",
  min = "",
  max = "",
  step = "any",
  minLength = "",
  maxLength = "",
  accept = "",
  pattern = "",
  title = "",
}) {
  return (
    <div className={`label-and-input ${flexDirection}`}>
      <label for={inputId} className="label-for-input">
        {labelText}
      </label>
      <input
        className="input-for-label"
        type=""
        required={required}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        multiple={multiple}
        min={min}
        max={max}
        step={step}
        minLength={minLength}
        maxLength={maxLength}
        accept={accept}
        pattern={pattern}
        title={title}
      />
    </div>
  );
}
