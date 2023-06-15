import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSurprise } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function NoFinding() {
  return (
    <div className="no-finding d-flex-row">
      <FontAwesomeIcon icon={faFaceSurprise} aria-hidden="true" />
      <div className="no-finding-content">
        <p>Sorry, no finding yet!</p>
      </div>
    </div>
  );
}
