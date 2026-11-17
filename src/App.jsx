
import { useContext, useState } from "react";
import "./App.css";
import ProfileForm from "./components/ProfileForm";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeContext } from "./context/ThemeContext";

function Counter() {
  // useState manages local component state for the count value.
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function App() {
  // useContext reads the current theme value from the global ThemeContext.
  const { theme } = useContext(ThemeContext);

  return (
    // Conditionally apply the "dark" CSS class based on the current theme so
    // styles in App.css can style light/dark mode.
    <div className={`app-container ${theme === "dark" ? "dark" : ""}`}>
      <h1>Standard Hooks in React</h1>
      <Counter />
      <ProfileForm />
      <ThemeToggle />
    </div>
  );
}

export default App;
