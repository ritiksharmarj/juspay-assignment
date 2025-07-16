import { MoonIcon, SunIcon } from "./icons";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <SunIcon className="dark:-rotate-90 rotate-0 scale-100 transition-all dark:scale-0" />
      <MoonIcon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
