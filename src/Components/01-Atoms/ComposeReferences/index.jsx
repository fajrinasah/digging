import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import "./styles.css";

const modules = {
  toolbar: [["italic", "link", { list: "ordered" }]],
};

export default function ComposeReferences() {
  return (
    <div className="compose-references">
      <ReactQuill
        modules={modules}
        theme="bubble"
        placeholder="References goes here..."
      />
    </div>
  );
}
