import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router";
import Components from "./pages/components/Components.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <Navigate to={"/components/button"} replace />,
      },
      {
        path: "components/:componentName",
        Component: Components
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>,
);
