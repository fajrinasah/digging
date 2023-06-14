import "./styles.css";
import NavLinkLi from "../../01-Atoms/Navigations/NavLinkLi";

export default function Nav({ flexDirection = "row" }) {
  return (
    <nav className={`nav d-flex-${flexDirection}`}>
      <ul>
        <li>
          <NavLinkLi destination="/digging" content="Start Digging" />
        </li>
        <div className="decor-custom-div"></div>
        <li>
          <NavLinkLi destination="/compose" content="Publish a Finding" />
        </li>
        <div className="decor-custom-div"></div>
        <li>
          <NavLinkLi destination="/profile" content="My Conservations" />
        </li>
      </ul>
    </nav>
  );
}
