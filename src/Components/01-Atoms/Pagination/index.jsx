import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function Pagination({ buttonPage }) {
  const RenderButtonPage = () => {
    return <button className="button-page">{buttonPage}</button>;
  };

  return (
    <div className="pagination d-flex-row">
      <button className="previous">
        <FontAwesomeIcon icon={faCircleChevronLeft} /> {"  "} Previous
      </button>

      <div className="button-page-container d-flex-row">
        <RenderButtonPage />
        <button className="button-page">1</button>
        <button className="button-page">2</button>
        <button className="button-page">3</button>
      </div>

      <button className="next">
        Next {"  "}
        <FontAwesomeIcon icon={faCircleChevronRight} />
      </button>
    </div>
  );
}
