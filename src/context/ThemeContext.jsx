import { createContext, useState } from "react";
import PropTypes from "prop-types";

// ✅ Step 1: Create the ThemeContext
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // ✅ Step 2: Define global theme state
  const [theme, setTheme] = useState("light");

  return (
	// ✅ Step 3: Provide theme state and toggle function to all components
	<ThemeContext.Provider value={{ theme, setTheme }}>
  	{children}
	</ThemeContext.Provider>
  );
}

ThemeProvider.Context = ThemeContext;

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};