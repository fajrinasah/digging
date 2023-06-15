import "../styles.css";

export default function InputTel({
  flexDirection = "row",
  inputId = "",
  labelText = "",
  required = true,
  inputName = "",
  inputPlaceholder = "",
  defaultValue,
  minLength = "",
  maxLength = "",
  pattern = "",
  title = "",
  value,
  onChange,
  onBlur,
}) {
  return (
    <div className={`label-and-input d-flex-${flexDirection}`}>
      <label for={inputId} className="label-for-input">
        {labelText}
      </label>
      <input
        className="input-for-label"
        type="tel"
        required={required}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        defaultValue={defaultValue}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        title={title}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}
