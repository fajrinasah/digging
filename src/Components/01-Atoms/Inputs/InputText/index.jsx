import "../styles.css";

export default function InputText({
  flexDirection = "row",
  inputId = "",
  labelText = "",
  required = true,
  autoCapitalize = "",
  inputName = "",
  inputPlaceholder = "",
  defaultValue,
  minLength = "",
  maxLength = "",
  pattern = "",
  title = "",
}) {
  return (
    <div className={`label-and-input d-flex-${flexDirection}`}>
      <label for={inputId} className="label-for-input">
        {labelText}
      </label>
      <input
        className="input-for-label"
        type="text"
        required={required}
        autoCapitalize={autoCapitalize}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        defaultValue={defaultValue}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        title={title}
      />
    </div>
  );
}
