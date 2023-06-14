import PageTitle from "../../01-Atoms/Texts/PageTitle";

export default function PageNotFound() {
  return (
    <div className="simple-page page-not-found d-flex-column">
      <PageTitle content="Error 404" />
      <p>The page you are looking for cannot be found.</p>
    </div>
  );
}
