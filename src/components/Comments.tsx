import { useState, useEffect } from "react";
import Giscus from "@giscus/react";

export default function Comments() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState("transparent_dark");

  useEffect(() => {
    const prefersDark = document.documentElement.classList.contains("dark");
    const prefersLight = document.documentElement.classList.contains("light");
    const prefersRedDragon =
      document.documentElement.classList.contains("red-dragon");
    const prefersSNES = document.documentElement.classList.contains("snes");
    const prefersUbe = document.documentElement.classList.contains("ube");
    const prefersViceCity =
      document.documentElement.classList.contains("vice-city");
    if (prefersLight) {
      setTheme("noborder_light");
    } else if (prefersDark) {
      setTheme("transparent_dark");
    } else if (prefersRedDragon) {
      setTheme("transparent_dark");
    } else if (prefersSNES) {
      setTheme("noborder_light");
    } else if (prefersUbe) {
      setTheme("noborder_light");
    } else if (prefersViceCity) {
      setTheme("transparent_dark");
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
