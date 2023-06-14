import "./styles.css";

import LogoHeader from "../../01-Atoms/Navigations/LogoHeader";
import Nav from "../../02-Molecules/Nav";
import ButtonThemePicker from "../../01-Atoms/Buttons/ButtonThemePicker";

export default function Header() {
  return (
    <div className="header-container">
      <header>
        <LogoHeader className="logo" />
        <Nav flexDirection="row" />
        <ButtonThemePicker />
      </header>
    </div>
  );
}
