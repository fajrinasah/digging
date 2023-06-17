import "./styles.css";
import { dataForList } from "./dataModel";

import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import LinkTopArticleLi from "../../02-Molecules/LinkTopArticleLi";

export default function HomeSectionTopTenList({ data = [{}] }) {
  const RenderList = () =>
    dataForList.map((article, index) => {
      return (
        <LinkTopArticleLi
          key={index}
          rankNumber={index + 1}
          articleDestination={article.articlePage}
          profileDestination={article.authorProfile}
          headline={article.headline}
          byline={article.byline}
          color="contrast"
          bgColorHover="contrast"
        />
      );
    });

  return (
    <div className="home-section-top-ten-list">
      <SectionTitle
        content="Most Conserved"
        size="small"
        color="contrast"
        bgColor="main"
      />
      <RenderList />
    </div>
  );
}
