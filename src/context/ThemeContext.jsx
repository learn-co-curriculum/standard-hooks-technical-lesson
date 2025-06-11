import React from "react";
import { createContext, useState } from "react";

// TODO: Create a ThemeContext using createContext()
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	// TODO: Define and export a ThemeProvider that will manage theme state
	const [theme, setTheme] = useState("light");

	return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}

// Placeholder export for now
