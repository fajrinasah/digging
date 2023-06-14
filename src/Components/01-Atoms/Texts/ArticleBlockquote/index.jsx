export default function ArticleBlockquote({ content, size = "large" }) {
  return <div className={`article-blockquote ${size}`}>{content}</div>;
}
