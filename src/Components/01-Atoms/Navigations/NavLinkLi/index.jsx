import "./styles.css";
import { NavLink } from "react-router-dom";

export default function NavLinkLi({ destination = "", content = "" }) {
  return (
    <NavLink to={destination} className="nav-link-li">
      {content}
    </NavLink>
  );
}
