import { Link, Navigate } from "react-router-dom";

import "./styles.css";
{
  /*
import { Link, Navigate } from "react-router-dom";
*/
}

export default function LinkDisplayName({
  destination = "",
  userId = 0,
  displayName = "Display Name",
  color = "contrast",
  bgColor = "transparent",
  size = "medium",
}) {
  return (
    <div className={`link-display-name color-${color} bg-${bgColor}`}>
      <Link
        to={destination}
        state={{ userId: userId }}
        className={`link-of-display-name ${size} click-to-get-down hvr-underline-from-center`}
      >
        {displayName}
      </Link>
    </div>
  );
}
