import "../styles.css";

export default function InputTextArea({
  flexDirection = "row",
  inputId = "",
  labelText = "",
  required = true,
  autoCapitalize = "",
  inputName = "",
  inputPlaceholder = "",
  defaultValue,
  cols,
  rows,
  minLength = "",
  maxLength = "",
  title = "",
}) {
  return (
    <div className={`label-and-textarea d-flex-${flexDirection}`}>
      <label for={inputId} className="label-for-textarea">
        {labelText}
      </label>
      <textarea
        className="textarea-for-label"
        required={required}
        autoCapitalize={autoCapitalize}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        defaultValue={defaultValue}
        cols={cols}
        rows={rows}
        minLength={minLength}
        maxLength={maxLength}
        title={title}
      ></textarea>
    </div>
  );
}
