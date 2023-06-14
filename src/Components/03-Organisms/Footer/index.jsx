import "./styles.css";

import NavFooter from "../../02-Molecules/NavFooter";
import SocialAccountsGroup from "../../02-Molecules/SocialAccountsGroup";
import NewsletterSignup from "../../02-Molecules/NewsletterSignup";

export default function Footer() {
  return (
    <div className="footer-container d-flex-column">
      <footer className="d-flex-row">
        <NavFooter />
        <SocialAccountsGroup />
        <NewsletterSignup />
      </footer>
    </div>
  );
}
