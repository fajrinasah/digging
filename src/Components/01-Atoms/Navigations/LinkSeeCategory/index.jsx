import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
{
  /* import { Link } from "react-router-dom";
    
        <Link
            to={destination}
            className={}
          >
        </Link> */
}

export default function LinkSeeCategory({ destination = "", category = "" }) {
  return (
    <div className="link-see-category">
      <Link to={destination} className="link-of-see-category">
        All {category} findings
        <span>
          {" "}
          <FontAwesomeIcon icon={faAnglesRight} aria-hidden="true" />
        </span>
      </Link>
    </div>
  );
}
