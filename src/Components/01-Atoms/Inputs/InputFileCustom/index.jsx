import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function InputFileCustom({
  accept,
  buttonContent = "Choose file",
}) {
  return (
    <label class="input-file-custom">
      <input
        className="input-hidden"
        type="file"
        id="change-photo"
        name="change-photo"
        accept={accept}
      />
      <FontAwesomeIcon icon={faUpload} /> {buttonContent}
    </label>
  );
}
