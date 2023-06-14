import "./styles.css";

import PageTitle from "../../01-Atoms/Texts/PageTitle";
import FormRegister from "../../02-Molecules/FormRegister";

export default function PageRegister() {
  return (
    <div className="page-register d-flex-column">
      <PageTitle content="Hello, Felow History Enthusiast!" />
      <FormRegister />
    </div>
  );
}
