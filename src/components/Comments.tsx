import { useState, useEffect } from "react";
import Giscus from "@giscus/react";

export default function Comments() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState("dark_high_contrast");

  useEffect(() => {
    if (localStorage.getItem("colorMode") === "dark") {
      setTheme("dark_high_contrast");
    } else {
      setTheme("light_high_contrast");
    }
    setIsMounted(true);
  }, []);

  return (
    <div className="pb-8">
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
        />
      ) : null}
    </div>
  );
}
