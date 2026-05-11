import { useContext } from "react";
import "./App.css"; // Import global styles
import ProfileForm from "./components/ProfileForm"; // Import ProfileForm
import ThemeToggle from "./components/ThemeToggle"; // Import ThemeToggle
import { ThemeContext } from "./context/ThemeContext";
// TODO: When useContext is implemented, apply the theme dynamically to this container

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
