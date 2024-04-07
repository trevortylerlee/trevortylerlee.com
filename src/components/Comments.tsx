import { useState, useEffect } from "react";
import Giscus from "@giscus/react";

export default function Comments() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState("transparent_dark");

  useEffect(() => {
    const classList = document.documentElement.classList;
    const prefersDark = classList.contains("dark");
    const prefersLight = classList.contains("light");
    const prefersHacker = classList.contains("hacker");
    const prefersRedDragon = classList.contains("red-dragon");
    const prefersSNES = classList.contains("snes");
    const prefersUbe = classList.contains("ube");
    const prefersViceCity = classList.contains("vice-city");

    if (prefersDark || prefersRedDragon || prefersViceCity) {
      setTheme("transparent_dark");
    } else if (prefersHacker || prefersSNES || prefersUbe || prefersLight) {
      setTheme("noborder_light");
    } else {
      const systemTheme = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(systemTheme ? "dark" : "light");
    }
    setIsMounted(true);
  }, []);

  return (
    <div>
      {isMounted ? (
        <Giscus
          repo="trevortylerlee/trevortylerlee.com"
          repoId="R_kgDOIetyNw"
          category="Announcements"
          categoryId="DIC_kwDOIetyN84CYUKP"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={theme}
          lang="en"
          loading="lazy"
          id="giscus"
        />
      ) : null}
    </div>
  );
}
