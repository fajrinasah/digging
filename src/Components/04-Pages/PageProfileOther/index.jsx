import PageTitle from "../../01-Atoms/Texts/PageTitle";
import ProfileSectionInformation from "../../03-Organisms/ProfileSectionInformation";
import ProfileSubnav from "../../02-Molecules/ProfileSubnav";
import SectionDigging from "../../03-Organisms/SectionDigging";

export default function PageProfileOther() {
  return (
    <div className="page-profile other d-flex-column">
      <PageTitle content="Digger's Profile" />
      <ProfileSectionInformation whose="other" />
      <ProfileSubnav />
      <SectionDigging />
    </div>
  );
}
