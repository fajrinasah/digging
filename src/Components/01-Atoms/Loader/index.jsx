import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function Loader({ color = "contrast", bgColor = "main" }) {
  return (
    <div className={`loader color-${color} bg-${bgColor} d-flex-row`}>
      <FontAwesomeIcon icon={faBrush} aria-hidden="true" className="brush" />
      <div className="loader-content">
        <p>Brushing up findings...</p>
      </div>
    </div>
  );
}
