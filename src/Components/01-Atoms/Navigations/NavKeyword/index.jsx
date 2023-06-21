import { Link } from "react-router-dom";

import "./styles.css";

export default function NavKeyword({
  keywordName,
  keywordId,
  keywordDestination,
}) {
  return (
    <Link
      to={keywordDestination}
      state={{ keywordName: keywordName, keywordId: keywordId }}
      className="nav-keyword"
    >
      <div className="link-to-keyword-page">
        <p>{keywordName}</p>
      </div>
    </Link>
  );
}
