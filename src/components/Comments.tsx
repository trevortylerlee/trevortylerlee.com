import { useState, useEffect } from "react";
import Giscus from "@giscus/react";

export default function Comments() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState("transparent_dark");

  useEffect(() => {
    if (localStorage.getItem("colorMode") === "dark") {
      setTheme("transparent_dark");
    } else {
      setTheme("noborder_light");
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
          id="giscus"
        />
      ) : null}
    </div>
  );
}
