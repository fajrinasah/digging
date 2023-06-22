import "./styles.css";

import InstructionTitle from "../../01-Atoms/Texts/SectionTitle";
import UserPhoto from "../../01-Atoms/Media/UserPhoto";
import LinkDisplayName from "../../01-Atoms/Navigations/LinkDisplayName";
import LinkUsername from "../../01-Atoms/Navigations/LinkUsername";
import NavKeyword from "../../01-Atoms/Navigations/NavKeyword";

export default function ArticleViewingDetails({
  articleKeywords = [],
  references = [{ listNumber: 0, listContent: "" }],
  authorPhoto,
  userPhotoOnClick = () => {},
  authorPhotoAlt,
  authorDisplayName = "Author's Display Name",
  authorUsername = "@author_username",
  authorProfilePage,
  userId = 0,
}) {
  const RenderKeywords = () => {
    return articleKeywords.map((keyword) => {
      return (
        <NavKeyword
          key={keyword.id}
          keywordName={keyword.name}
          keywordId={keyword.id}
          keywordDestination=""
        />
      );
    });
  };

  const RenderReferences = () => {
    return references.map((reference) => {
      return <li key={reference.listNumber}>{reference.listContent}</li>;
    });
  };

  return (
    <div className="article-viewing-details">
      <InstructionTitle
        content="Details"
        size="small"
        color="main"
        bgColor="contrast"
      />
      <div className="this-article-details">
        <details>
          <summary>
            <strong>Keywords</strong>
          </summary>
          <div className="keywords-container d-flex-row">
            <RenderKeywords />
          </div>
        </details>
        <details>
          <summary>
            <strong>References</strong>
          </summary>
          <ol className="references-list">
            <RenderReferences />
          </ol>
        </details>
      </div>
      <div className="author-details d-flex-row">
        <UserPhoto
          size="small"
          imgSource={authorPhoto}
          alt={authorPhotoAlt}
          onClick={userPhotoOnClick}
        />
        <div className="to-author-page d-flex-col as-end">
          <LinkDisplayName
            destination={authorProfilePage}
            userId={userId}
            displayName={authorDisplayName}
            color="main"
            bgColor="contrast"
            size="medium"
          />
          <LinkUsername
            destination={authorProfilePage}
            userId={userId}
            username={authorUsername}
            color="main"
            bgColor="contrast"
            size="small"
          />
        </div>
      </div>
    </div>
  );
}
