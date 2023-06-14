import { Link, Navigate } from "react-router-dom";

import "./styles.css";
{
  /*
import { Link, Navigate } from "react-router-dom";
*/
}

export default function LinkDisplayName({
  destination = "",
  displayName = "Display Name",
  color = "contrast",
  bgColor = "transparent",
  size = "medium",
}) {
  return (
    <div class={`link-display-name color-${color} bg-${bgColor}`}>
      <Link
        to={destination}
        className={`link-of-display-name ${size} click-to-get-down hvr-underline-from-center`}
      >
        {displayName}
      </Link>
      {/* 
      <Navigate
        to={destination}
        className={`link-of-display-name ${size} ${color} ${bgColor} click-to-get-down hvr-underline-from-center`}
      >
        {displayName}
      </Navigate>
      */}
    </div>
  );
}
