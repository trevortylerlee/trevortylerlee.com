import { useState, useEffect, useRef } from "react";
import CopyButton from "./CopyButton";

import {
  Scroll,
  Home,
  CreditCard,
  Settings,
  Smile,
  User,
  AtSign,
  Github,
  Linkedin,
  Twitter,
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
  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [copyTrigger, setCopyTrigger] = useState(false);
  const [pages, setPages] = useState([]);
  const page = pages[pages.length - 1]

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/" && e.metaKey) {
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
        className="text-sm text-neutral-500 dark:text-neutral-400 my-1 px-1"
      >
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-neutral-100 bg-neutral-100 px-1.5 font-mono text-[10px] font-medium text-neutral-600 opacity-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">
          <span className="text-xs">⌘</span>/
        </kbd>
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
                window.location.href = "http://localhost:3000/";
              }}
            >
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem
              aria-label="About me"
              onSelect={(value) => {
                window.location.href = "http://trevortylerlee.com/about";
              }}
            >
              <Smile className="mr-2 h-4 w-4" />
              <span>About</span>
            </CommandItem>
            <CommandItem
              aria-label="Copy email address to clipboard"
              onSelect={(value) => {
                setCopyTrigger(copyTrigger => !copyTrigger)
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
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup
            heading="Social media"
            className="mt-3"
          >
            <CommandItem
              aria-label="Go to Homepage"
              onSelect={(value) => {
                window.location.href = "https://github.com/boogerbuttcheeks";
              }}
            >
              <Github className="mr-2 h-4 w-4" />
              <span>Github</span>
            </CommandItem>
            <CommandItem
              aria-label="Go to Homepage"
              onSelect={(value) => {
                window.location.href =
                  "https://www.linkedin.com/in/trevortylerlee/";
              }}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              <span>LinkedIn</span>
            </CommandItem>
            <CommandItem
              aria-label="Go to Homepage"
              onSelect={(value) => {
                window.location.href = "https://twitter.com/boogerbuttcheek";
              }}
            >
              <Twitter className="mr-2 h-4 w-4" />
              <span>Twitter</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
