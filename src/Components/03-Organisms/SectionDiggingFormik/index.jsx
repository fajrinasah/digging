import DiggingToolbar from "../../02-Molecules/DiggingToolbarFormik";
import CardArticle from "../CardArticle";
import Pagination from "../../01-Atoms/Buttons/Pagination";
import Loader from "../../01-Atoms/Loader";

export default function SectionDigging({
  articles = [],
  filteredArticles = [],
  categories = [],
  isLoading,
  generateCurrentQuery = () => {},
  setCurrentQuery = () => {},
  generatePayload = () => {},
  dispatch = () => {},
  getArticles = () => {},
  generateFilteredResults = () => {},
  setFilteredArticles = () => {},
  totalPage,
  disabledPrevious,
  disabledNext,
  onChangePagination = (page = "1") => {},
}) {
  const RenderCardArticle = () => {
    return filteredArticles.map((article) => {
      return (
        <CardArticle
          direction="vertical"
          category={article?.Category?.name}
          articlePage={`/articleViewing/${article?.id}`}
          stateAboutArticle={{ id: article?.id }}
          mainshotSource={article?.imgURL}
          headline={article?.title}
          byline={article?.User?.username}
          subheadline={
            article?.content?.length > 100
              ? article?.content.slice(0, 101).concat("...")
              : article?.content
          }
        />
      );
    });
  };

  return (
    <div className="section-digging">
      <DiggingToolbar
        articles={articles}
        categories={categories}
        generateCurrentQuery={generateCurrentQuery}
        setCurrentQuery={setCurrentQuery}
        generatePayload={generatePayload}
        dispatch={dispatch}
        getArticles={getArticles}
        generateFilteredResults={generateFilteredResults}
        setFilteredArticles={setFilteredArticles}
      />
      <div className="cards-display d-flex-row">
        {isLoading ? <Loader color="main" bgColor="accent" /> : null}
        <RenderCardArticle />
        {/* <CardArticle direction="vertical" />
        <CardArticle direction="vertical" />
        <CardArticle direction="vertical" />
        <CardArticle direction="vertical" />
        <CardArticle direction="vertical" />
        <CardArticle direction="vertical" />
        <CardArticle direction="vertical" /> */}
      </div>
      <Pagination
        totalPage={totalPage}
        disabledPrevious={disabledPrevious}
        disabledNext={disabledNext}
        onChangePagination={onChangePagination}
      />
    </div>
  );
}
