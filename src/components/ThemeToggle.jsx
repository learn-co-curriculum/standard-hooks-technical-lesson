import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  // useContext reads the current theme and the setTheme function from the
  // global ThemeContext, allowing this component to display and toggle theme
  // without receiving props from a parent.
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Theme Toggle</h2>
      {/* Display the current theme value from context. */}
      <p>Current Theme: {theme}</p>
      {/* Button toggles between "light" and "dark" by calling setTheme. */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
