import { toast } from "react-hot-toast";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import ModalDefaultText from "../Texts/ModalDefaultText";

export function toastBlank(content = "") {
  toast.custom(
    <ModalDefaultText
      type="toast"
      content={content}
      color="main"
      bold="bold"
      bgColor="contrast"
    />
  );
}

export function toastSuccess(content = "") {
  toast.custom(
    <ModalDefaultText
      type="toast"
      icon={faCircleCheck}
      content={content}
      color="main"
      bold="bold"
      bgColor="contrast"
    />
  );
}

export function toastError(content = "") {
  toast.custom(
    <ModalDefaultText
      type="toast"
      icon={faCircleXmark}
      content={content}
      color="main"
      bold="bold"
      bgColor="accent"
    />
  );
}
