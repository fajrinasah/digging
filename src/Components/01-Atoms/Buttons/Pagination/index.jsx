import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function Pagination({
  totalPage,
  disabledPrevious = false,
  disabledNext = false,
  onChangePagination = (page = "1") => {},
}) {
  const RenderButtonPage = () => {
    for (let i = 1; i <= totalPage; i++) {
      return (
        <button
          key={i}
          className="button-page"
          onClick={() => onChangePagination(`${i}`)}
        >
          {i}
        </button>
      );
    }
  };

  return (
    <div className="pagination d-flex-row">
      <button
        className="previous"
        disabled={disabledPrevious}
        onClick={() => onChangePagination(`previous`)}
      >
        <FontAwesomeIcon icon={faCircleChevronLeft} /> {"  "} Previous
      </button>

      <div className="button-page-container d-flex-row">
        <RenderButtonPage />
      </div>

      <button
        className="next"
        disabled={disabledNext}
        onClick={() => onChangePagination(`next`)}
      >
        Next {"  "}
        <FontAwesomeIcon icon={faCircleChevronRight} />
      </button>
    </div>
  );
}
