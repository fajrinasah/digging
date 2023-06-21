import { Field } from "formik";

import "./styles.css";

export default function ProfileSectionRadios({
  viewMyFindings,
  viewConserved,
}) {
  return (
    <fieldset className="profile-section-radios d-flex-row">
      <div className="legend-container">
        <legend className="bold">View: </legend>
      </div>
      <div className="radios-container d-flex-row">
        <div className="radio-container d-flex-row">
          <input
            defaultChecked
            type="radio"
            name="viewOption"
            value="myFindings"
            id="myFindings"
            onChange={viewMyFindings}
          />
          <label htmlFor="myFindings" className="label-for-radio">
            My Findings
          </label>
        </div>
        <div className="radio-container d-flex-row">
          <input
            type="radio"
            name="viewOption"
            value="conserved"
            id="conserved"
            onChange={viewConserved}
          />
          <label htmlFor="conserved" className="label-for-radio">
            Conserved
          </label>
        </div>
      </div>
    </fieldset>
  );
}
