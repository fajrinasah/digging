import "./styles.css";

import LogoHeader from "../../01-Atoms/Navigations/LogoHeader";
import Nav from "../../02-Molecules/Nav";
import ButtonStandard from "../../01-Atoms/Buttons/ButtonStandard";
import ButtonThemePicker from "../../01-Atoms/Buttons/ButtonThemePicker";

export default function Header() {
  return (
    <div className="header-container">
      <header>
        <LogoHeader className="logo" />
        <Nav flexDirection="row" />
        <ButtonStandard
          story="ghost"
          content="Logout"
          onClick={logoutClicked}
        />
        <ButtonThemePicker />
      </header>
    </div>
  );
}
