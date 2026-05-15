import React, { useContext } from "react";
import "./App.css";
import ProfileForm from "./components/ProfileForm";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeContext } from "./context/ThemeContext"; // ✅ Import ThemeContext

function App() {
  const { theme } = useContext(ThemeContext);

  return (
	<div className={`app-container ${theme === "dark" ? "dark" : ""}`}>
  	<h1>Standard Hooks in React</h1>
  	<ProfileForm />
  	<ThemeToggle />
	</div>
  );
}

export default App;