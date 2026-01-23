import { createContext, useState } from "react";

// TODO: Create a ThemeContext using createContext()
// TODO: Define and export a ThemeProvider that will manage theme state

// Placeholder export for now
export const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light")

return (
    <ThemeContext.Provider
    value={{theme, setTheme}}>{children}</ThemeContext.Provider>
);
}
