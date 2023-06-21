import { Link, Navigate } from "react-router-dom";

import "./styles.css";

{
  /*
  import { Link, Navigate } from "react-router-dom";
  */
}

export default function LinkUsername({
  destination = "",
  userId = 0,
  username = "@username",
  color = "contrast",
  bgColor = "transparent",
  size = "medium",
}) {
  return (
    <div className={`link-username color-${color} bg-${bgColor}`}>
      <Link
        to={destination}
        state={{ userId: userId }}
        className={`link-of-username ${size} click-to-get-down hvr-underline-from-center`}
      >
        {username}
      </Link>
    </div>
  );
}
