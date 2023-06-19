import { Link } from "react-router-dom";

import "./styles.css";

export default function NavKeyword({ keywordName, keywordDestination }) {
  return (
    <Link
      to={keywordDestination}
      state={{ keyword: keywordName }}
      className="nav-keyword"
    >
      <div className="link-to-keyword-page">
        <p>{keywordName}</p>
      </div>
    </Link>
  );
}
