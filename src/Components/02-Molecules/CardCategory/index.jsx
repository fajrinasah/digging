import { Link } from "react-router-dom";

import "./styles.css";

import LinkCategory from "../../01-Atoms/Navigations/LinkCategory";
import ArticleHeadline from "../../01-Atoms/Texts/ArticleHeadline";
import LinkSeeCategory from "../../01-Atoms/Navigations/LinkSeeCategory";

export default function CardCategory({
  category,
  categoryPage,
  articlePage,
  headline,
  byline = "byline",
}) {
  return (
    <div className="card-category">
      <LinkCategory category={category} destination={categoryPage} />
      <p className="p-top">TOP</p>

      <Link destination={articlePage} className="article-details">
        <ArticleHeadline headline={headline} color="contrast" size="smallest" />
        <p className="article-byline">{byline}</p>
      </Link>
      <LinkSeeCategory />
    </div>
  );
}
