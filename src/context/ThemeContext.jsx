import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Step 1: Create the ThemeContext using createContext().
// This context will hold the global theme state ("light" | "dark") and a
// setter function so any nested component can read or toggle the theme
// without prop drilling.
export const ThemeContext = createContext();

// Step 2: ThemeProvider manages theme state and exposes it to children
// via the context provider. Wrapping the app with this component makes
// theme data available to all descendant components.
export function ThemeProvider({ children }) {
  // Step 3: Define global theme state, defaulting to "light".
  const [theme, setTheme] = useState("light");

  return (
    // Step 4: Provide theme state and the toggle function to all children.
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
