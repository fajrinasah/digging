import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function InputFileCustom({
  accept,
  buttonContent = "Choose file",
  value,
  onChange,
  onBlur,
}) {
  return (
    <label class="input-file-custom">
      <input
        className="input-hidden"
        type="file"
        id="change-photo"
        name="change-photo"
        accept={accept}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <FontAwesomeIcon icon={faUpload} /> {buttonContent}
    </label>
  );
}
