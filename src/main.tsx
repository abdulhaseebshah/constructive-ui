import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import "./assets/styles/variables.css";

import App from "./App.tsx";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
