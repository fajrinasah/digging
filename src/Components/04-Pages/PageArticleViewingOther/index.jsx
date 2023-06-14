import LinkCategory from "../../01-Atoms/Navigations/LinkCategory";
import ArticleDate from "../../01-Atoms/Texts/ArticleDate";
import ArticleHeadline from "../../01-Atoms/Texts/ArticleHeadline";
import ArticleSubheadline from "../../01-Atoms/Texts/ArticleSubheadline";
import ArticleFigureFigcaption from "../../01-Atoms/Media/ArticleFigure/ArticleFigureFigcaption";
import ArticleFigureImage from "../../01-Atoms/Media/ArticleFigure/ArticleFigureImage";
import ArticleLede from "../../01-Atoms/Texts/ArticleLede";
import ArticleTextbody from "../../01-Atoms/Texts/ArticleTextbody";
import DummyArticleTextbody from "../../../DummyData/DummyArticleTextbody";
import ArticleViewingDetails from "../../02-Molecules/ArticleViewingDetails";
import ButtonStandard from "../../01-Atoms/Buttons/ButtonStandard";

export default function PageArticleViewingOther({
  category,
  categoryPage,
  publishedDate,
  lastEditedDate,
  headline,
  subheadline,
  figcaption,
  figureImageSource,
  lede,
  textbody,
  keywords,
  references,
  authorPhoto,
  authorPhotoAlt,
  authorDisplayName,
  authorUsername,
  authorProfilePage,
  conserveClicked,
}) {
  return (
    <div className="page-article-viewing other">
      <div className="category">
        <LinkCategory category={category} destination={categoryPage} />
      </div>
      <div className="date d-flex-row">
        <ArticleDate
          srGuide="Published date:"
          date={publishedDate}
          bold="bold"
        />
        <ArticleDate
          srGuide="Last edited date:"
          date={lastEditedDate}
          bold=""
        />
      </div>
      <div className="headline">
        <ArticleHeadline headline={headline} color="contrast" size="small" />
      </div>
      <div className="subheadline">
        <ArticleSubheadline
          subheadline={subheadline}
          color="contrast"
          size="small"
          bold="bold"
        />
      </div>
      <div className="figure">
        <figure className="article-figure d-flex-row">
          <ArticleFigureFigcaption figcaption={figcaption} />
          <ArticleFigureImage size="large" imgSource={figureImageSource} />
        </figure>
      </div>
      <div className="lede">
        <ArticleLede lede={lede} color="contrast" size="small" bold="bold" />
      </div>
      <div className="textbody">
        <DummyArticleTextbody color="contrast" size="medium" />
      </div>
      <div className="article-viewing-details-container d-flex-column">
        <ArticleViewingDetails
          keywords={keywords}
          references={references}
          authorPhoto={authorPhoto}
          authorPhotoAlt={authorPhotoAlt}
          authorDisplayName={authorDisplayName}
          authorUsername={authorUsername}
          authorProfilePage={authorProfilePage}
        />
        <div className="button-container">
          <ButtonStandard
            story="raised"
            bold="bold"
            content="Conserve it!"
            onClick={conserveClicked}
          />
        </div>
      </div>
    </div>
  );
}
