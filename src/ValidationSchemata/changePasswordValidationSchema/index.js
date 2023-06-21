import * as Yup from "yup";

/*==========================================
VALIDATION SCHEMA: Change Password
===========================================*/

export const changePasswordValidationSchema = Yup.object({
  currentPassword: Yup.string()
    .required("Current password is required.")
    .min(6, "Password must be at least 6 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must contain at least 6 characters, min. 1 letter, min. 1 uppercase letter, min. 1 symbol"
    ),
  password: Yup.string()
    .required("New password is required.")
    .min(6, "Password must be at least 6 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must contain at least 6 characters, min. 1 letter, min. 1 uppercase letter, min. 1 symbol"
    ),
  confirmPassword: Yup.string()
    .required("Plase re-enter your password.")
    .oneOf(
      [Yup.ref("password"), null],
      `Password in "Confirm Password" must match with the password above.`
    ),
});
