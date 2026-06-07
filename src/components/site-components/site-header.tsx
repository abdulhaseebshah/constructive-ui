import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

function SiteHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b sticky top-0 dark:bg-background z-50">
      <div className="flex items-center justify-between px-7 py-5">
        <div>
          <h3 className="text-xl font-bold">Constructive UI</h3>
          <p>React & TypeScript Design System</p>
        </div>
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant={"outline"}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
      </div>
    </header>
  );
}

export default SiteHeader;
