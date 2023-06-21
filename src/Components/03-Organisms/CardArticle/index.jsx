import "./styles.css";
import CardArticleFirstHalf from "../../02-Molecules/CardArticleFirstHalf";
import CardArticleSecondHalf from "../../02-Molecules/CardArticleSecondHalf";

export default function CardArticle({
  direction = "horizontal",
  category = "Category",
  categoryPage,
  articlePage,
  articleId,
  mainshotSource,
  headline,
  byline,
  subheadline,
}) {
  return (
    <div className={`card-article ${direction}`}>
      <div className="first-half">
        <CardArticleFirstHalf
          category={category}
          categoryPage={categoryPage}
          mainshotSource={mainshotSource}
        />
      </div>
      <div className="second-half">
        <CardArticleSecondHalf
          articlePage={articlePage}
          articleId={articleId}
          headline={headline}
          byline={byline}
          subheadline={subheadline}
        />
      </div>
    </div>
  );
}
