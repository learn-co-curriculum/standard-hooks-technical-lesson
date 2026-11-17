import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext"; // ✅ Import ThemeProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
	<App />
  </ThemeProvider>
);