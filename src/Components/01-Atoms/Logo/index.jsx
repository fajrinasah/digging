import "./styles.css";

export default function Logo({ size = "large" }) {
  return <p className={`logo ${size}`}>Digging</p>;
}

/*
Example:

<Logo size="big" />
*/
