import * as Yup from "yup";

/*==========================================
VALIDATION SCHEMA: Change Photo Profile
===========================================*/
// const FILE_SIZE = 160 * 1024;
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/webp", "image/png"];

export const changePhotoProfileValidationSchema = Yup.object().shape({
  file: Yup.mixed()
    .test(
      "fileSize",
      "File too large",
      (value) => value && value.size <= 2784 * 1856
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) =>
        value &&
        ["image/jpg", "image/jpeg", "image/webp", "image/png"].includes(
          value.type
        )
    ),
});
