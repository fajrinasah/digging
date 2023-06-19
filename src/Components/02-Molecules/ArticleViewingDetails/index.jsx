import "./styles.css";

import InstructionTitle from "../../01-Atoms/Texts/SectionTitle";
import UserPhoto from "../../01-Atoms/Media/UserPhoto";
import LinkDisplayName from "../../01-Atoms/Navigations/LinkDisplayName";
import LinkUsername from "../../01-Atoms/Navigations/LinkUsername";

export default function ArticleViewingDetails({
  keywords,
  references,
  authorPhoto,
  authorPhotoAlt,
  authorDisplayName = "Author's Display Name",
  authorUsername = "@author_username",
  authorProfilePage,
}) {
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
          <div className="keywords-container d-flex-row">{keywords}</div>
        </details>
        <details>
          <summary>
            <strong>References</strong>
          </summary>
          {references}
        </details>
      </div>
      <div className="author-details d-flex-row">
        <UserPhoto size="small" imgSource={authorPhoto} alt={authorPhotoAlt} />
        <div className="to-author-page d-flex-col as-end">
          <LinkDisplayName
            destination={authorProfilePage}
            displayName={authorDisplayName}
            color="main"
            bgColor="contrast"
            size="medium"
          />
          <LinkUsername
            destination={authorProfilePage}
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
