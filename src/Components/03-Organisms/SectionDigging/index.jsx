import DiggingToolbar from "../../02-Molecules/DiggingToolbarFormik";
import CardArticle from "../CardArticle";
import Pagination from "../../01-Atoms/Buttons/Pagination";

export default function SectionDigging({
  articles = [],
  optionsForCategory,
  onChangeCategory,
  onChangeSortFromNewest,
  onChangeSortFromOldest,
  onChangeSelectSearch,
  onChangeInputSearch,
  totalPage,
  disabledPrevious,
  disabledNext,
  onChangePagination = (page = "1") => {},
}) {
  const RenderCardArticle = () => {
    return articles.map((article) => {
      return (
        <CardArticle
          direction="vertical"
          category={article?.Category?.name}
          articlePage={`/articleViewing/${article?.id}`}
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
        optionsForCategory={optionsForCategory}
        onChangeCategory={onChangeCategory}
        onChangeSortFromNewest={onChangeSortFromNewest}
        onChangeSortFromOldest={onChangeSortFromOldest}
        onChangeSelectSearch={onChangeSelectSearch}
        onChangeInputSearch={onChangeInputSearch}
      />
      <div className="cards-display d-flex-row">
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
