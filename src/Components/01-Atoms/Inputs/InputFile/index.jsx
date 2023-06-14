import "../styles.css";

export default function InputFile({
  flexDirection = "row",
  inputId = "",
  labelText = "",
  required = true,
  inputName = "",
  inputPlaceholder = "",
  multiple = true,
  accept = "",
  title = "",
}) {
  return (
    <div className={`label-and-input d-flex-${flexDirection}`}>
      <label for={inputId} className="label-for-input">
        {labelText}
      </label>
      <input
        className="input-for-label"
        type="file"
        required={required}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        multiple={multiple}
        accept={accept}
        title={title}
      />
    </div>
  );
}
