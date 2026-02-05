import { createContext, useContext, useState } from "react";
// TODO: Create a ThemeContext using createContext()
export const ThemeContext = createContext();
// TODO: Define and export a ThemeProvider that will manage theme state
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


// Placeholder export for now
//export const ThemeContext = {};
