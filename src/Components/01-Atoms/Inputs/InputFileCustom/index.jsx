import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function InputFileCustom({
  accept,
  buttonContent = "Choose file",
  // value,
  onChange,
  // onBlur,
}) {
  return (
    <label className="input-file-custom">
      <input
        className="input-hidden"
        type="file"
        id="change-photo"
        name="file"
        accept={accept}
        // value={value}
        onChange={onChange}
        // onBlur={onBlur}
      />
      <FontAwesomeIcon icon={faUpload} /> {buttonContent}
      <span className="sr-only">Upload a photo</span>
    </label>
  );
}
