import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
	<div>
  	<h2>Theme Toggle</h2>
  	<p>Current Theme: {theme}</p>
  	<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
    	Toggle Theme
  	</button>
	</div>
  );
}

export default ThemeToggle;