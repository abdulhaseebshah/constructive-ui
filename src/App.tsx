import React from "react";
import { Button } from "./components/ui/button";
import { useTheme } from "next-themes";

function App() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        variant={"outline"}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </Button>
    </>
  );
}

export default App;
