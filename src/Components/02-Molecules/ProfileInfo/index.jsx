import "./styles.css";

import LinkDisplayName from "../../01-Atoms/Navigations/LinkDisplayName";
import LinkUsername from "../../01-Atoms/Navigations/LinkUsername";
import UserPhoto from "../../01-Atoms/Media/UserPhoto";

export default function ProfileInfo({
  displayName,
  username,
  bio = "Hello. This is a section for user’s short introduction (about). For example, it can be about user’s interests in anthropology, archaeology, museology, or other fields. ",
  imgSource,
  alt,
}) {
  return (
    <div className="profile-info d-flex-row">
      <div className="profile-info-details">
        <LinkDisplayName
          displayName={displayName}
          color="accent"
          size="large"
        />
        <LinkUsername
          username={username}
          color="contrast"
          bgColor="main"
          size="medium"
        />
        <div className="decor-custom-div"></div>
        <div className="profile-bio">
          <p>{bio}</p>
        </div>
      </div>
      <div className="profile-info-photo">
        <UserPhoto size="medium" imgSource={imgSource} alt={alt} />
      </div>
    </div>
  );
}
