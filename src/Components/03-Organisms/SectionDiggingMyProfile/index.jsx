import CardArticle from "../CardArticle";
import Loader from "../../01-Atoms/Loader";

export default function SectionDiggingMyProfile({
  myArticles,
  myConservedArticles,
  isLoading,
  myFindings,
}) {
  const RenderCardArticle = () => {
    if (myFindings) {
      return myArticles.map((article) => {
        return (
          <CardArticle
            key={article?.id}
            direction="vertical"
            category={article?.Category?.name}
            articlePage={`/articleViewing/${article?.id}`}
            articleId={article?.id}
            userId={article?.UserId}
            mainshotSource={article?.imageURL}
            headline={article?.title}
            byline={article?.User?.username}
            subheadline={
              article?.content?.length > 100
                ? article?.content?.slice(0, 101).concat("...")
                : article?.content
            }
          />
        );
      });
    } else {
      return myConservedArticles.map((article) => {
        return (
          <CardArticle
            key={article?.BlogId}
            direction="vertical"
            category={article?.Blog?.Category?.name}
            articlePage={`/articleViewing/${article?.BlogId}`}
            articleId={article?.BlogId}
            userId={article?.UserId}
            mainshotSource={article?.imageURL}
            headline={article?.Blog?.title}
            byline={article?.User?.username}
            subheadline={
              article?.Blog?.content.length > 100
                ? article?.Blog?.content?.slice(0, 101).concat("...")
                : article?.Blog?.content
            }
          />
        );
      });
    }
  };

  return (
    <div className="section-digging d-flex-column">
      <div className="cards-display d-flex-row">
        {isLoading ? <Loader color="main" bgColor="accent" /> : null}
        <RenderCardArticle />
      </div>
    </div>
  );
}
