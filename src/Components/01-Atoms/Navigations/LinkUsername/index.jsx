import { Link, Navigate } from "react-router-dom";

import "./styles.css";

{
  /*
  import { Link, Navigate } from "react-router-dom";
  */
}

export default function LinkUsername({
  destination = "",
  username = "@username",
  color = "contrast",
  bgColor = "transparent",
  size = "medium",
}) {
  return (
    <div class={`link-username color-${color} bg-${bgColor}`}>
      <Link
        to={destination}
        className={`link-of-username ${size} click-to-get-down hvr-underline-from-center`}
      >
        {username}
      </Link>
      {/* 
      <Navigate
        to={destination}
        className={`link-of-username ${size} ${color} ${bgColor} click-to-get-down hvr-underline-from-center`}
      >
        {username}
      </Navigate>
      */}
    </div>
  );
}
