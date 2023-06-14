import "./styles.css";

import PageTitle from "../../01-Atoms/Texts/PageTitle";
import FormLogin from "../../02-Molecules/FormLogin";

export default function PageLogin() {
  return (
    <div className="page-login d-flex-column">
      <PageTitle content="Welcome Back!" />
      <FormLogin />
    </div>
  );
}
