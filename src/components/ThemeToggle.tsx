import { useTheme } from "../context/ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";
import "./styles/ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      data-cursor="disable"
    >
      <div className={`theme-toggle-track ${isDark ? "is-dark" : "is-light"}`}>
        <span className="theme-toggle-icon sun-icon">
          <FiSun />
        </span>
        <span className="theme-toggle-icon moon-icon">
          <FiMoon />
        </span>
        <span className="theme-toggle-thumb" />
      </div>
    </button>
  );
};

export default ThemeToggle;
