import "./styles.css";
{
  /* import { NavLink } from "react-router-dom";

    <NavLink
        to={destination}
        className={}
      >
    </NavLink> */
}

export default function LinkUserPhoto({
  destination = "",
  srGuide = "",
  src = "",
  alt = "",
}) {
  return (
    <div class="link nav-user-photo">
      <a href="" class="link-nav-user-photo">
        <span class="sr-only">{srGuide}</span>
        <img src={src} alt={alt} />
      </a>
      {/*
    <NavLink
        to={destination}
        className="link-nav-user-photo"
      >
      <span class="sr-only">{srGuide}</span>
        <img src={src} alt={alt} />
    </NavLink> */}
    </div>
  );
}
