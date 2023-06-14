import "./styles.css";
import LinkCategory from "../../01-Atoms/Navigations/LinkCategory";
import ArticleMainshot from "../../01-Atoms/Media/ArticleMainshot";

export default function CardArticleFirstHalf({
  category = "Anthropology",
  categoryPage,
  mainshotSource,
}) {
  return (
    <div className="card-article-first-half d-flex-column">
      <div>
        <LinkCategory category={category} destination={categoryPage} />
      </div>
      <div>
        <ArticleMainshot size="small" imgSource={mainshotSource} />
      </div>
    </div>
  );
}
