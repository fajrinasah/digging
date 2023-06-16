import { useSelector } from "react-redux";

import "./styles.css";

import LogoHeader from "../../01-Atoms/Navigations/LogoHeader";
import Nav from "../../02-Molecules/Nav";
import ButtonStandard from "../../01-Atoms/Buttons/ButtonStandard";
import ButtonThemePicker from "../../01-Atoms/Buttons/ButtonThemePicker";

export default function Header({ logoutClicked }) {
  const { id } = useSelector((state) => {
    return {
      id: state.auth?.id,
    };
  });

  return (
    <div className="header-container">
      <header>
        <LogoHeader className="logo" />
        <Nav flexDirection="row" />
        <div className="button-container d-flex-row">
          {id ? (
            <ButtonStandard
              story="ghost"
              content="Logout"
              bold=""
              onClick={logoutClicked}
            />
          ) : null}
          <ButtonThemePicker />
        </div>
      </header>
    </div>
  );
}
