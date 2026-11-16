import { useContext } from "react";
import "./App.css";
import ProfileForm from "./components/ProfileForm";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  // useContext reads the current theme value from the global ThemeContext.
  const { theme } = useContext(ThemeContext);

  return (
    // Conditionally apply the "dark" CSS class based on the current theme so
    // styles in App.css can style light/dark mode.
    <div className={`app-container ${theme === "dark" ? "dark" : ""}`}>
      <h1>Standard Hooks in React</h1>
      <ProfileForm />
      <ThemeToggle />
    </div>
  );
}

export default App;
