import "./styles.css";

import PageTitle from "../../01-Atoms/Texts/PageTitle";
import FormForgotReset from "../../02-Molecules/FormForgotReset";

export default function PageForgotReset() {
  return (
    <div className="page-forgot-reset">
      <PageTitle />
      <div className="form-container d-flex-row">
        <FormForgotReset />
      </div>
    </div>
  );
}
