import "./styles.css";
// import { dataForList } from "./dataModel";

import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import LinkTopArticleLi from "../../02-Molecules/LinkTopArticleLi";

export default function HomeSectionTopTenList({ mostConservedArticles = [] }) {
  const RenderList = () =>
    mostConservedArticles.map((article, index) => {
      return (
        <LinkTopArticleLi
          key={article?.id}
          rankNumber={index + 1}
          articleDestination={`/articleViewing/${article?.id}`}
          articleState={{ articleId: article?.id }}
          profileDestination={`/profile/${article?.User?.username}`}
          profileState={{ UserId: article?.UserId }}
          headline={article?.title}
          byline={article?.User?.username}
          color="contrast"
          bgColorHover="contrast"
        />
      );
    });

  return (
    <section className="home-section-top-ten-list">
      <SectionTitle
        content="Most Conserved"
        size="small"
        color="contrast"
        bgColor="main"
      />
      <RenderList />
    </section>
  );
}
