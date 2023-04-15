import { useState, useEffect, useRef } from "react";
import CopyButton from "./CopyButton";

import {
  Home,
  Smile,
  AtSign,
  Github,
  Linkedin,
  Twitter,
  Monitor,
  Sun,
  Moon,
  Rss,
  Menu,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./ui/command";

export function CommandBar() {

  const [open, setOpen] = useState(false);
  const [copyTrigger, setCopyTrigger] = useState(false);
  const [footerPhrase, setFooterPhrase] = useState("Press ⌘ K to close");

  const [isMac, setIsMac] = useState(true);
  const [isWin, setIsWin] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let isMac = /Mac/i.test(navigator.userAgent);
    let isWin = /Win/i.test(navigator.userAgent);
    let isMobile = window.innerWidth

    if (isMac) {
      setFooterPhrase("Press ⌘ K to close");
      setIsMac(true);
      setIsWin(false);
      setIsMobile(false);
    } else if (isWin) {
      setFooterPhrase("Press Ctrl + K to close");
      setIsWin(true);
      setIsMac(false);
      setIsMobile(false);
    } else if (isMobile < 420) {
      setFooterPhrase("");
      setIsMobile(true);
      setIsMac(false);
      setIsWin(false);
    } else {
      console.log("Unknown");
    }
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey || e.key === "k" && e.ctrlKey) {
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  function handleClick() {
    setOpen((open) => !open)
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="h-10 w-10 self-center text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 inline-flex select-none items-center gap-1 rounded border border-neutral-100 bg-neutral-100 font-medium dark:border-neutral-700 dark:bg-neutral-900 focus-visible:text-neutral-600 dark:focus-visible:text-neutral-300"
      >
        <Menu className="h-7 w-7 mx-auto" />
      </button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandGroup heading="Suggestions">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandItem
              aria-label="Go to Homepage"
              onSelect={(value) => {
                window.location.href = "https://trevortylerlee.com/";
              }}
            >
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem
              aria-label="About me"
              onSelect={(value) => {
                window.location.href = "https://trevortylerlee.com/about";
              }}
            >
              <Smile className="mr-2 h-4 w-4" />
              <span>About</span>
            </CommandItem>
            <CommandItem
              onSelect={(value) => {
                setCopyTrigger((copyTrigger) => !copyTrigger);
              }}
            >
              <CopyButton
                copyText="trevortylerlee@gmail.com"
                copyTrigger={copyTrigger}
                setCopyTrigger={setCopyTrigger}
              >
                <AtSign className="mr-2 h-4 w-4" />
                <span>Email me</span>
              </CopyButton>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup
            heading="Social media"
            className="mt-3"
          >
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandItem
              aria-label="Github"
              onSelect={(value) => {
                window.location.href = "https://github.com/boogerbuttcheeks";
              }}
            >
              <Github className="mr-2 h-4 w-4" />
              <span>Github</span>
            </CommandItem>
            <CommandItem
              aria-label="LinkedIn"
              onSelect={(value) => {
                window.location.href =
                  "https://www.linkedin.com/in/trevortylerlee/";
              }}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              <span>LinkedIn</span>
            </CommandItem>
            <CommandItem
              aria-label="Twitter"
              onSelect={(value) => {
                window.location.href = "https://twitter.com/boogerbuttcheek";
              }}
            >
              <Twitter className="mr-2 h-4 w-4" />
              <span>Twitter</span>
            </CommandItem>
            <CommandItem
              aria-label="RSS Feed"
              onSelect={(value) => {
                window.location.href = "https://trevortylerlee.com/rss.xml";
              }}
            >
              <Rss className="mr-2 h-4 w-4" />
              <span>RSS Feed</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings" className="mt-3">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandItem
              aria-label="Use system theme"
              onSelect={(value) => {
                localStorage.setItem("theme", "system");
                location.reload();
              }}
            >
              <Monitor className="mr-2 h-4 w-4" />
              <span>Use system theme</span>
            </CommandItem>
            <CommandItem
              aria-label="Change to light theme"
              onSelect={(value) => {
                localStorage.setItem("theme", "light");
                location.reload();
              }}
            >
              <Sun className="mr-2 h-4 w-4" />
              <span>Light theme</span>
            </CommandItem>
            <CommandItem
              aria-label="Use dark theme"
              onSelect={(value) => {
                localStorage.setItem("theme", "dark");
                location.reload();
              }}
            >
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark theme</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
        <CommandSeparator className="mt-2"/>
        <div className="text-xs dark:bg-neutral-700 px-2 py-1 bg-neutral-100">
          <p className="text-right opacity-50">{footerPhrase}</p>
        </div>
      </CommandDialog>
    </>
  );
}
