import "./styles.css";

import ProfileInfo from "../../02-Molecules/ProfileInfo";
import FindingsCounter from "../../01-Atoms/Texts/FindingsCounter";
import ButtonStandard from "../../01-Atoms/Buttons/ButtonStandard";

export default function ProfileSectionInformation({
  // displayName,
  username,
  imgSource,
  totalFindings = "99",
  composeClicked,
  editClicked,
  followClicked,
  whose,
}) {
  const RenderButton = () => {
    if (whose === "own") {
      return (
        <div className="buttons-container d-flex-column">
          <ButtonStandard
            story="raised"
            bold="bold"
            content="Compose Finding"
            onClick={composeClicked}
          />
          <ButtonStandard
            story="ghost"
            bold=""
            content="Edit Profile"
            onClick={editClicked}
          />
        </div>
      );
    } else if (whose === "other") {
      return (
        <div className="buttons-container d-flex-column">
          <ButtonStandard
            story="raised"
            bold="bold"
            content="Follow"
            onClick={followClicked}
          />
        </div>
      );
    }
  };

  return (
    <div className={`profile-section-information ${whose}`}>
      <div className="main-info d-flex-row">
        <ProfileInfo
          // displayName={displayName}
          username={username}
          imgSource={imgSource}
        />
      </div>
      <div className="side-info">
        <FindingsCounter totalFindings={totalFindings} />
      </div>
      <RenderButton />
    </div>
  );
}
