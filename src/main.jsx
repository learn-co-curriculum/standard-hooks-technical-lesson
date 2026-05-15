import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext.jsx"; // ✅ Import ThemeProvider

// TODO: Import ThemeProvider when useContext is implemented
// TODO: Wrap <App /> with <ThemeProvider> to enable global theme state

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
	<App />
  </ThemeProvider>
);