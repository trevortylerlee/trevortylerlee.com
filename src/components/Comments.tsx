import { useState, useEffect } from "react";
import Giscus from "@giscus/react";

export default function Comments() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState("transparent_dark");

  useEffect(() => {
    const prefersDark = document.documentElement.classList.contains("dark")
    console.log(prefersDark);
    if (!prefersDark) {
      setTheme("noborder_light");
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
