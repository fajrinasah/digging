import "./styles.css";

import LinkCategory from "../../01-Atoms/Navigations/LinkCategory";
import ArticleHeadline from "../../01-Atoms/Texts/ArticleHeadline";
import LinkSeeCategory from "../../01-Atoms/Navigations/LinkSeeCategory";

export default function CardCategory({
  category,
  categoryPage,
  headline,
  byline = "byline",
}) {
  return (
    <div className="card-category">
      <LinkCategory category={category} destination={categoryPage} />
      <p className="p-top">TOP</p>
      <div className="article-details">
        <ArticleHeadline headline={headline} color="contrast" size="smallest" />
        <p className="article-byline">{byline}</p>
      </div>
      <LinkSeeCategory />
    </div>
  );
}
