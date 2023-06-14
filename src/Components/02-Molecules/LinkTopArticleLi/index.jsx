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
    <div class="link-top-article-li">
      <div class="rank-number">
        <p>{rankNumber}</p>
      </div>
      <div class={`article-details color-${color} hover-bg-${bgColorHover}`}>
        <Link class="article-headline" to={articleDestination}>
          {headline}
        </Link>
        <div class="custom-div"></div>
        <Link class="article-byline" to={profileDestination}>
          {byline}
        </Link>
      </div>
    </div>
  );
}
