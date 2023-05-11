import { useState, useEffect } from "react";
import { LucideMonitor, LucideMoon, LucideSun } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
        <button
          aria-label="Change color theme"
          className="inline-flex h-10 w-10 select-none items-center justify-center gap-1 rounded border border-neutral-100 bg-neutral-100 font-medium text-neutral-500 hover:bg-neutral-200 hover:text-neutral-600 focus-visible:text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-300 dark:focus-visible:text-neutral-300"
        >
          {colorTheme === "system" && <LucideMonitor />}
          {colorTheme === "light" && <LucideSun />}
          {colorTheme === "dark" && <LucideMoon />}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="rounded-xs w-40 dark:bg-skin-darkGray5 dark:text-white"
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
          <DropdownMenuRadioItem value="system" className="py-2 pl-7">
            System
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="light" className="py-2 pl-7">
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark" className="py-2 pl-7">
            Dark
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
