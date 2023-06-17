import * as Yup from "yup";

/*==========================================
VALIDATION SCHEMA: Login
===========================================*/

export const loginValidationSchema = Yup.object({
  email: Yup.string(), //.required("Email is required."),
  phone: Yup.string(), //.required("Phone number is required."),
  username: Yup.string(), //.required("Username is required."),
  password: Yup.string(), //.required("Password is required."),
});
