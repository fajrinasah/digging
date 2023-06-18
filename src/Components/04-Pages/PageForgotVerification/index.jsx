import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Formik } from "formik";

import { register } from "../../../Store/Slices/Authorization/slices";
import { registerValidationSchema } from "../../../ValidationSchemata/registerValidationSchema";

import PageTitle from "../../01-Atoms/Texts/PageTitle";
import SectionTitle from "../../01-Atoms/Texts/SectionTitle";
import InputSubmit from "../../01-Atoms/Inputs/InputSubmit";
import ButtonHelp from "../../01-Atoms/Buttons/ButtonHelp";
import CheckboxShowPassword from "../../01-Atoms/Inputs/CheckboxShowPassword";
import SnackbarNotification from "../../02-Molecules/SnackbarNotification";

import "./styles.css";
import "../../01-Atoms/Inputs/styles.css";
import "../../01-Atoms/Inputs/InputPassword/styles.css";
import "../../01-Atoms/Inputs/InputConfirmPassword/styles.css";
import "../../01-Atoms/Texts/ModalHelp/styles.css";

export default function PageForgotVerification() {
  return (
    <div>
      <p></p>
    </div>
  );
}
