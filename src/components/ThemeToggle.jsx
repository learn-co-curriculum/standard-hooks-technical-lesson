import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

function ThemeToggle() {
	const { theme, setTheme } = useContext(ThemeContext);
	// TODO: Import and use useContext to access global theme state
	// TODO: Replace the hardcoded theme value with the dynamic theme from context

	return (
		<div>
			<h2>Theme Toggle</h2>
			<p>Current Theme: {theme}</p>
			{/* TODO: Make this button toggle between light and dark mode using useContext */}
			<button
				style={{ backgroundColor: "#000", color: "#fff" }}
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			>
				Toggle Theme
			</button>
		</div>
	);
}

export default ThemeToggle;
