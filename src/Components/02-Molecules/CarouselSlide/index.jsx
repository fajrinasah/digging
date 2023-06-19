import "./styles.css";
import LinkCategory from "../../01-Atoms/Navigations/LinkCategory";
import ArticleDate from "../../01-Atoms/Texts/ArticleDate";
import ArticleMainshot from "../../01-Atoms/Media/ArticleMainshot";
import ArticleHeadline from "../../01-Atoms/Texts/ArticleHeadline";
import ArticleSubheadline from "../../01-Atoms/Texts/ArticleSubheadline";
import ArticleLede from "../../01-Atoms/Texts/ArticleLede";
import ButtonStandard from "../../01-Atoms/Buttons/ButtonStandard";

export default function CarouselSlide({
  key = {},
  category = "Category",
  categoryPage,
  date = "1995/10/30",
  byline = "byline",
  mainshotSource,
  headline = "This is Supposed to be the Headline",
  subheadline = "This is the article’s subheadline to catch user’s attention to this particular article.",
  lede = "This is a short paragraph as the article’s lede. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes nascetur ridiculus mus. ",
  onClick,
}) {
  return (
    <div className="carousel-slide d-flex-column">
      <div className="carousel-slide-content d-flex-row">
        <div className="carousel-slide-left-side d-flex-column">
          <LinkCategory category={category} destination={categoryPage} />
          <div className="carousel-slide-details">
            <ArticleDate srGuide="Published on:" date={date} bold="" />
            <p className="article-byline">{byline}</p>
          </div>
          <ArticleMainshot size="small" imgSource={mainshotSource} />
        </div>
        <div className="carousel-slide-right-side d-flex-column">
          <div className="content">
            <ArticleHeadline
              headline={headline}
              color="contrast"
              size="smaller"
            />
            <ArticleSubheadline
              subheadline={subheadline}
              color="contrast"
              size="smaller"
              bold="bold"
            />
            <div className="decor-custom-div"></div>
            <ArticleLede lede={lede} color="contrast" size="small" bold="" />
          </div>
          <div className="decor-blurred"></div>
          <ButtonStandard story="ghost" content="Dig it!" onClick={onClick} />
        </div>
      </div>
    </div>
  );
}
