import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./styles.css";

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote"],
    ["image", "video"],
  ],
};

export default function ComposeTextbody() {
  return (
    <div className="compose-textbody">
      <ReactQuill
        modules={modules}
        theme="snow"
        placeholder="Content goes here..."
      />
    </div>
  );
}
