import { Link } from "react-router-dom";

import "./styles.css";

export default function LinkTopArticleLi({
  rankNumber = "",
  articleDestination = {},
  articleState = {},
  profileDestination = {},
  profileState = {},
  headline = "",
  byline = "",
  color = "contrast",
  bgColorHover = "contrast",
}) {
  return (
    <div className="link-top-article-li">
      <div className="rank-number">
        <p>{rankNumber}</p>
      </div>
      <div
        className={`article-details color-${color} hover-bg-${bgColorHover}`}
      >
        <Link
          className="article-headline"
          to={articleDestination}
          state={articleState}
        >
          {headline}
        </Link>
        <div className="custom-div"></div>
        <Link
          className="article-byline"
          to={profileDestination}
          state={profileState}
        >
          {byline}
        </Link>
      </div>
    </div>
  );
}
