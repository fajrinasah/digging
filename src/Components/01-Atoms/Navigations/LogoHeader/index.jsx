import { NavLink } from "react-router-dom";

import "./styles.css";

export default function LogoHeader() {
  return (
    <h1 class="logo small">
      <NavLink to="/" end>
        Digging
      </NavLink>
    </h1>
  );
}
