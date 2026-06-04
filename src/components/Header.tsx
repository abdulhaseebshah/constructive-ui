import { useTheme } from "next-themes";
import React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import Navigation from "./Navigation";

function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="p-4 border-b">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <h3 className="text-xl font-bold">Contructive UI</h3>
        <Navigation />
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant="outline"
          className="cursor-pointer"
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
      </div>
    </div>
  );
}

export default Header;
