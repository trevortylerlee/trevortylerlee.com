import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      aria-label="Change theme"
      onClick={handleClick}
      className="flex h-11 w-11 items-center justify-center animate-in fade-in-0 slide-in-from-right-5 spin-in-180 duration-700 motion-reduce:animate-none"
    >
      {theme === "dark" ? <Moon size={32} /> : <Sun size={32} />}
    </button>
  );
}
