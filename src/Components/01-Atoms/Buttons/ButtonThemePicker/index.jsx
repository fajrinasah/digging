import "./styles.css";

export default function ButtonThemePicker() {
  const changeTheme = (newTheme) => {
    const root = document.querySelector(":root");
    root.className = root.className === newTheme ? newTheme : newTheme;
  };

  return (
    <div className="button-theme-picker">
      <button
        type="button"
        className="theme-button default"
        onClick={() => changeTheme("default-theme")}
      >
        <span className="sr-only">Default Theme</span>
      </button>
      <button
        type="button"
        className="theme-button dimmed"
        onClick={() => changeTheme("dimmed-theme")}
      >
        <span className="sr-only">Dimmed Theme</span>
      </button>
      <button
        type="button"
        className="theme-button dark"
        onClick={() => changeTheme("dark-theme")}
      >
        <span className="sr-only">Dark Theme</span>
      </button>
    </div>
  );
}
