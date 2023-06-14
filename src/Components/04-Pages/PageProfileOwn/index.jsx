import PageTitle from "../../01-Atoms/Texts/PageTitle";
import ProfileSectionInformation from "../../03-Organisms/ProfileSectionInformation";
import ProfileSubnav from "../../02-Molecules/ProfileSubnav";
import SectionDigging from "../../03-Organisms/SectionDigging";

export default function PageProfileOwn() {
  return (
    <div className="page-profile own d-flex-column">
      <PageTitle content="My Profile" />
      <ProfileSectionInformation whose="own" />
      <ProfileSubnav />
      <SectionDigging />
    </div>
  );
}
