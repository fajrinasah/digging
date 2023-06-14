import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function ButtonToTop() {
  return (
    <button id="button-to-top" className="scrollToTopBtn">
      <FontAwesomeIcon icon={faArrowUp} aria-hidden="true" />
      <span className="sr-only">Back to Top</span>
    </button>
  );
}
