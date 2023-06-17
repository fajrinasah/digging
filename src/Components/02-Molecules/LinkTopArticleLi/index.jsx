import { Link } from "react-router-dom";

import "./styles.css";
{
  /* import { Link } from "react-router-dom";
        
            <Link
                to={destination}
                className={}
              >
            </Link> */
}

export default function LinkTopArticleLi({
  rankNumber = "",
  articleDestination = "",
  profileDestination = "",
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
        <Link className="article-headline" to={articleDestination}>
          {headline}
        </Link>
        <div className="custom-div"></div>
        <Link className="article-byline" to={profileDestination}>
          {byline}
        </Link>
      </div>
    </div>
  );
}
