import { Link } from "react-router-dom";

import "./styles.css";
import ArticleHeadline from "../../01-Atoms/Texts/ArticleHeadline";
import ArticleSubheadline from "../../01-Atoms/Texts/ArticleSubheadline";

export default function CardArticleSecondHalf({
  articlePage,
  articleId = 0,
  headline,
  byline = "byline",
  subheadline,
}) {
  return (
    <div className="link-to-article-page-container d-flex-column">
      <Link
        to={articlePage}
        state={{ articleId: articleId }}
        className="link-to-article-page"
      >
        <ArticleHeadline headline={headline} color="contrast" size="smaller" />
        <p className="article-byline">{byline}</p>
        <ArticleSubheadline
          subheadline={subheadline}
          color="contrast"
          size="smaller"
          bold=""
        />
      </Link>
    </div>
  );
}
