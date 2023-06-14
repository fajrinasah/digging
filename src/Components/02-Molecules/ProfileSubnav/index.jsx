import "./styles.css";

import NavLinkLi from "../../01-Atoms/Navigations/NavLinkLi";

export default function ProfileSubnav() {
  return (
    <nav className="profile-subnav" aria-label="profile navigation">
      <ul className="d-flex-row">
        <li>
          <NavLinkLi destination="" content="Own's Findings" />
        </li>
        <div className="decor-custom-div"></div>
        <li>
          <NavLinkLi destination="" content="Conserved" />
        </li>
      </ul>
    </nav>
  );
}
