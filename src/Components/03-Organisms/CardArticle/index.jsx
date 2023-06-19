import "./styles.css";
import CardArticleFirstHalf from "../../02-Molecules/CardArticleFirstHalf";
import CardArticleSecondHalf from "../../02-Molecules/CardArticleSecondHalf";

export default function CardArticle({
  direction = "horizontal",
  category = "Category",
  categoryPage,
  articlePage,
  stateAboutArticle = { id: 0 },
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
          stateAboutArticle={stateAboutArticle}
          headline={headline}
          byline={byline}
          subheadline={subheadline}
        />
      </div>
    </div>
  );
}
