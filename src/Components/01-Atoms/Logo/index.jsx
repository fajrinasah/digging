import "./styles.css";

export default function Logo({ size = "large" }) {
  return <p class={`logo ${size}`}>Digging</p>;
}

/*
Example:

<Logo size="big" />
*/
