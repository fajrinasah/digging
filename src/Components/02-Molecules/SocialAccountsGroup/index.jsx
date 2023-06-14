import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import "./styles.css";

import LinkSocialAccount from "../../01-Atoms/Navigations/LinkSocialAccount";

export default function SocialAccountsGroup() {
  return (
    <div className="social-accounts-group d-flex-row">
      <LinkSocialAccount
        destination=""
        srGuide="Go to our Instagram profile"
        faIcon={faInstagram}
        color="main"
        bgColor="accent"
      />
      <LinkSocialAccount
        destination=""
        srGuide="Go to our Pinterest profile"
        faIcon={faPinterest}
        color="main"
        bgColor="accent"
      />
      <LinkSocialAccount
        destination=""
        srGuide="Go to our YouTube channel"
        faIcon={faYoutube}
        color="main"
        bgColor="accent"
      />
    </div>
  );
}
