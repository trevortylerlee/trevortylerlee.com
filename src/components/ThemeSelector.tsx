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
  const [colorTheme, setColorTheme] = useState("system");

  useEffect(() => {
    const localTheme = localStorage.theme;
    if (localTheme === "dark" || localTheme === "light") {
      setColorTheme(localTheme);
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
      localStorage.theme = "system";

      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [colorTheme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button aria-label="Change color theme" className="flex justify-center items-center w-10 h-10 hover:bg-neutral-200 dark:hover:bg-neutral-800">
          {colorTheme === "system" && <LucideMonitor size={28} />}
          {colorTheme === "light" && <LucideSun size={28} />}
          {colorTheme === "dark" && <LucideMoon size={28} />}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-40 rounded-xs dark:bg-neutral-950 dark:text-white"
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
