import { createContext, useState } from "react";

// ✅ Step 1: Create the ThemeContext
export const ThemeContext = createContext();

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