import "./styles.css";

import Logo from "../../01-Atoms/Logo";
import RandomFunFact from "../../01-Atoms/Texts/RandomFunFact";

export default function Masthead() {
  return (
    <div className="masthead d-flex-column">
      <Logo size="large" />
      <RandomFunFact size="medium" />
    </div>
  );
}
