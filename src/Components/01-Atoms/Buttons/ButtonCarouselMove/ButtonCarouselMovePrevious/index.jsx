import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

import "../styles.css";

export default function ButtonCarouselMovePrevious({ onClick }) {
  return (
    <button
      type="button"
      className="button-carousel-move previous"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronCircleLeft} aria-hidden="true" />
      <span className="content">Previous</span>
    </button>
  );
}
