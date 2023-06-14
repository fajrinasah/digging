import "../styles.css";
import "./styles.css";

import ButtonHelp from "../../Buttons/ButtonHelp";
import CheckboxShowPassword from "../Checkboxes/CheckboxShowPassword";

export default function InputPassword({
  flexDirection = "row",
  inputId = "",
  labelText = "",
  helpClicked,
  showClicked,
  required = true,
  inputName = "",
  inputPlaceholder = "",
  minLength = "",
  maxLength = "",
  pattern = "",
  title = "",
}) {
  return (
    <div className={`input-password label-and-input d-flex-${flexDirection}`}>
      <label for={inputId} className="label-for-input">
        {labelText}
      </label>
      <ButtonHelp detail="See guides" onClick={helpClicked} />
      <input
        className="input-for-label"
        type="password"
        required={required}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        title={title}
      />
      <CheckboxShowPassword showClicked={showClicked} />
    </div>
  );
}
