import "./styles.css";

import Logo from "../../01-Atoms/Logo";
import Nav from "../Nav";

export default function NavFooter() {
  return (
    <div className="nav-footer d-flex-row">
      <Logo size="medium" />
      <Nav flexDirection="column" />
    </div>
  );
}
