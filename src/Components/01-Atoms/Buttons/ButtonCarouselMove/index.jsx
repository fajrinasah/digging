import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function ButtonCarouselMove({
  moveTo = "next",
  content = "Next",
  onClick,
}) {
  const direction = { moveTo };
  if (direction === "next") {
    return (
      <button
        type="button"
        className={`button-carousel-move ${moveTo}`}
        onClick={onClick}
      >
        <span className="content">{content}</span>
        <FontAwesomeIcon icon={faChevronCircleRight} aria-hidden="true" />
      </button>
    );
  } else {
    return (
      <button
        type="button"
        className={`button-carousel-move ${moveTo}`}
        onClick={onClick}
      >
        <span className="content">{content}</span>
        <FontAwesomeIcon icon={faChevronCircleLeft} aria-hidden="true" />
      </button>
    );
  }
}
