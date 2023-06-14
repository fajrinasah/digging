import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

import "../styles.css";

export default function ButtonCarouselMoveNext({ onClick }) {
  return (
    <button
      type="button"
      className="button-carousel-move next"
      onClick={onClick}
    >
      <span className="content">Next</span>
      <FontAwesomeIcon icon={faChevronCircleRight} aria-hidden="true" />
    </button>
  );
}
