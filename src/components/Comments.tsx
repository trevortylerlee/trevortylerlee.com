import { useState, useEffect } from "react";
import Giscus from "@giscus/react";

export default function Comments() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("colorMode") === "dark"
      ? "dark_high_contrast"
      : "light_high_contrast",
  );

  useEffect(() => {
    setIsMounted(true);
  });

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
        />
      ) : null}
    </div>
  );
}
