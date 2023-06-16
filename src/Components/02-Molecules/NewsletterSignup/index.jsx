import "./styles.css";

import ButtonStandard from "../../01-Atoms/Buttons/ButtonStandard";

export default function NewsletterSignup({ emailPattern, signupClicked }) {
  return (
    <div className="newsletter-signup d-flex-column">
      <p>
        Want to know more about historical research updates? <br />
        Our weekly newsletter is ready to be delivered to you.
      </p>
      <div className="input-signup-email d-flex-row">
        <label htmlFor="email-for-newsletter-signup d-flex-row">
          <span className="sr-only">Enter your email address</span>
        </label>
        <input
          className="input-for-newsletter-signup"
          type="email"
          id="email-for-newsletter-signup"
          name="email-for-newsletter-signup"
          placeholder="Enter your email address here"
          minLength="10"
          pattern={emailPattern}
        />
        <ButtonStandard
          story="raised"
          bold="bold"
          content="Sign me up!"
          onClick={signupClicked}
        />
      </div>
    </div>
  );
}
