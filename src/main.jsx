import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

// TODO: Import ThemeProvider when useContext is implemented
// TODO: Wrap <App /> with <ThemeProvider> to enable global theme state

// Renders the main App component
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
