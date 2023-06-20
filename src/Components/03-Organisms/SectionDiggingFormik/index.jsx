import DiggingToolbar from "../../02-Molecules/DiggingToolbarFormik";
import CardArticle from "../CardArticle";
import Pagination from "../../01-Atoms/Buttons/Pagination";
import Loader from "../../01-Atoms/Loader";

export default function SectionDigging({
  searchState = false,
  setSearchState = () => {},
  articles = [],
  filteredArticles = [],
  categories = [],
  isLoading,
  generateCurrentQuery = () => {},
  setCurrentQuery = () => {},
  generatePayload = () => {},
  dispatch = () => {},
  getArticles = () => {},
  // searchArticles = () => {},
  searchArticlesTitle = () => {},
  searchArticlesKeyword = () => {},
  setFilteredArticles = () => {},
  totalPage,
  disabledPrevious,
  disabledNext,
  onChangePagination = (page = "1") => {},
}) {
  const RenderCardArticle = () => {
    if (!searchState) {
      return articles.map((article) => {
        return (
          <CardArticle
            key={article?.id}
            direction="vertical"
            category={article?.Category?.name}
            articlePage={`/articleViewing/${article?.id}`}
            stateAboutArticle={{ id: article?.id }}
            mainshotSource={article?.imageURL}
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
    } else {
      return filteredArticles.map((article) => {
        return (
          <CardArticle
            key={article?.id}
            direction="vertical"
            category={article?.Category?.name}
            articlePage={`/articleViewing/${article?.id}`}
            stateAboutArticle={{ id: article?.id }}
            mainshotSource={article?.imageURL}
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
    }
  };

  return (
    <div className="section-digging d-flex-column">
      <DiggingToolbar
        setSearchState={setSearchState}
        // articles={articles}
        categories={categories}
        generateCurrentQuery={generateCurrentQuery}
        setCurrentQuery={setCurrentQuery}
        generatePayload={generatePayload}
        dispatch={dispatch}
        getArticles={getArticles}
        // searchArticles={searchArticles}
        searchArticlesTitle={searchArticlesTitle}
        searchArticlesKeyword={searchArticlesKeyword}
        setFilteredArticles={setFilteredArticles}
        // filteredArticles={filteredArticles}
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
