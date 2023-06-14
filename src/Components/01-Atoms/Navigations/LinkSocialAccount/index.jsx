import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";

export default function LinkSocialAccount({
  destination = "",
  srGuide = "",
  faIcon = {},
  color = "main",
  bgColor = "accent",
}) {
  return (
    <div class={`link-social-account d-flex-row bg-${bgColor}`}>
      <Link
        to={destination}
        className={`link-of-social-account color-${color} bg-${bgColor}`}
      >
        <span class="sr-only">{srGuide}</span>
        <FontAwesomeIcon icon={faIcon} />
      </Link>
    </div>
  );
}
