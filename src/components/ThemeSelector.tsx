import { useState, useEffect } from "react";
import { LucideMonitor, LucideMoon, LucideSun } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "./ui/dropdown-menu";

export default function ThemeSelector() {
  const [colorTheme, setColorTheme] = useState("bottom");

  useEffect(() => {
    const localTheme = localStorage.theme;
    if (localTheme) {
      setColorTheme(localTheme);
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setColorTheme(systemTheme);
    }
  }, []);

  useEffect(() => {
    if (colorTheme === "dark") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }

    if (colorTheme === "light") {
      localStorage.theme = "light";
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }

    if (colorTheme === "system") {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, [colorTheme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button aria-label="Change color theme" className="flex justify-center items-center w-10 h-10">
          {colorTheme === "system" && <LucideMonitor size={28} />}
          {colorTheme === "light" && <LucideSun size={28} />}
          {colorTheme === "dark" && <LucideMoon size={28} />}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-36 rounded-xs dark:bg-neutral-950 dark:text-white"
        sideOffset={12}
        side="bottom"
        align="end"
      >
        <DropdownMenuLabel>Change Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          className="p-0"
          value={colorTheme}
          onValueChange={setColorTheme}
        >
          <DropdownMenuRadioItem
            value="system"
            className="py-2 pl-7"
          >
            System
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="light"
            className="py-2 pl-7"
          >
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="dark"
            className="py-2 pl-7"
          >
            Dark
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
