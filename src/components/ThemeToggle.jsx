import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  // TODO: Import and use useContext to access global theme state
  const { theme, setTheme } = useContext(ThemeContext);
  // TODO: Replace the hardcoded theme value with the dynamic theme from context

  return (
    <div>
      <h2>Theme Toggle</h2>
      <p>Current Theme:{theme}</p>
      {/* TODO: Make this button toggle between light and dark mode using useContext */}
      <button onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")} style={{ backgroundColor: "#000", color: "#fff" }}>
        Toggle Theme
      </button>
    </div >
  );
}

export default ThemeToggle;
