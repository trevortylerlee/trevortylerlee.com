import { useState } from "react";

export default function Tags() {
  const initialTags = [
    {
      content: "💻 Web Developer",
      href: "",
      title: "waiting for popover to be stable...",
      color: "cyan",
    },
    {
      content: "🎓 BCIT",
      href: "",
      title: "Diploma in Digital Design and Development",
      color: "yellow",
    },
    {
      content: "✉️ Email",
      href: "mailto:trevortylerlee@gmail.com",
      color: "red",
      title: "",
    },
    {
      content: "🦋 Bluesky",
      href: "https://bsky.app/profile/trevortylerlee.com",
      color: "blue",
      title: "",
    },
  ];

  const additionalTags = [
    {
      content: "📄 HTML",
      color: "yellow",
      href: "",
      title: "",
    },
    {
      content: "{} CSS",
      color: "pink",
      href: "",
      title: "",
    },
    {
      content: "🔄 Git",
      color: "purple",
      href: "",
      title: "",
    },
    {
      content: "🟨 JavaScript",
      color: "yellow",
      href: "",
      title: "",
    },
    {
      content: "⚛️ React",
      color: "purple",
      href: "",
      title: "",
    },
    {
      content: "▲ Next.js",
      color: "blue",
      href: "",
      title: "",
    },
    {
      content: "🚀 Astro",
      color: "red",
      href: "",
      title: "",
    },
    {
      content: "🎨 Figma",
      color: "blue",
      href: "",
      title: "",
    },
    {
      content: "🖌️ Photoshop, Illustrator, AE",
      color: "cyan",
      href: "",
      title: "",
    },

    {
      content: "📷 Instagram",
      href: "https://www.instagram.com/trevortylerlee/",
      color: "pink",
      title: "",
    },
    {
      content: "🎮 Steam",
      href: "https://steamcommunity.com/profiles/76561198080019632/",
      color: "cyan",
      title: "",
    },
    {
      content: "🧵 Threads",
      href: "https://www.threads.net/@trevortylerlee",
      color: "purple",
      title: "",
    },
    {
      content: "🎵 TikTok",
      href: "https://www.tiktok.com/@boogerbuttcheeks",
      color: "red",
      title: "",
    },
    {
      content: "🐦 X (Twitter)",
      href: "https://twitter.com/boogerbuttcheek",
      color: "cyan",
      title: "",
    },
    {
      content: "📹 YouTube",
      href: "https://www.youtube.com/channel/UCNHiDTuUDdJATXFwqh17X2g",
      color: "red",
      title: "",
    },
    {
      content: "♋ Cancer 🦀",
      href: "",
      title: "also year of the rabbit 🐇",
      color: "cyan",
    },
    {
      content: "🧠 INTJ",
      href: "https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator",
      title: "includes: gandalf, katniss, michelle obama",
      color: "yellow",
    },
    {
      content: "🙌 Fast hands (167wpm)",
      href: "https://monkeytype.com/profile/boogerbuttcheeks",
      title: "not in my prime anymore tho",
      color: "red",
    },
    {
      content: "🐍 Slytherin",
      href: "",
      title: "patronus is a chow chow dog",
      color: "green",
    },
    {
      content: "🫲 Left-handed 👈",
      href: "https://en.wikipedia.org/wiki/Bias_against_left-handed_people",
      title: "right-footed",
      color: "cyan",
    },
    {
      content: "👓 Poor vision",
      href: "",
      title: "nearly -10 in both with astigmatism",
      color: "purple",
    },
    {
      content: "🏊 Can swim",
      href: "",
      title: "stuck on level 9",
      color: "blue",
    },
    {
      content: "🤿 Can't scuba",
      href: "",
      title: "collapsed lung. can't skydive either",
      color: "red",
    },
    {
      content: "🎸 Likes Taylor Swift, Kanye West",
      href: "https://open.spotify.com/user/trevortylerlee?si=6ca50e2df1b540a1",
      color: "pink",
      title: "",
    },
    {
      content: "👍 Likes Star Wars, LOTR",
      href: "",
      color: "green",
      title: "",
    },
  ];

  const [tags, setTags] = useState(initialTags);
  const [isOpen, setIsOpen] = useState(false);

  const allTags = tags.map(({ content, href, title, color }, index) => (
    <Tag
      content={content}
      href={href}
      key={index}
      title={title}
      color={color}
    />
  ));

  function showContent() {
    setTags([...initialTags, ...additionalTags]);
    setIsOpen(!isOpen);
  }

  function hideContent() {
    setTags(initialTags);
    setIsOpen(!isOpen);
  }

  return (
    <>
      {allTags}
      {isOpen ? (
        <button
          onClick={hideContent}
          className="font-base bg-backdrop cursor-pointer border-none font-mono text-sm text-gray-9 outline-none hover:text-gray-10 focus-visible:text-gray-10"
        >
          see less -
        </button>
      ) : (
        <button
          onClick={showContent}
          className="font-base bg-backdrop cursor-pointer border-none font-mono text-sm text-gray-9 outline-none hover:text-gray-10 focus-visible:text-gray-10"
        >
          see more +
        </button>
      )}
    </>
  );
}

function Tag({ content, href, title, color }) {
  // TailwindCSS doesn't evaluate dynamic class names at runtime
  const colorClasses = {
    red: "dark:bg-black dark:ring-red-3 hover:ring-red-6 dark:hover:ring-red-4 dark:hover:bg-red-2 dark:hover:bg-red-1 bg-red-1",
    blue: "dark:bg-black dark:ring-blue-3 hover:ring-blue-6 dark:hover:ring-blue-4 dark:hover:bg-blue-2 dark:hover:bg-blue-1 bg-blue-1",
    yellow:
      "dark:bg-black dark:ring-yellow-3 hover:ring-yellow-6 dark:hover:ring-yellow-4 dark:hover:bg-yellow-2 dark:hover:bg-yellow-1 bg-yellow-1",
    green:
      "dark:bg-black dark:ring-green-3 hover:ring-green-6 dark:hover:ring-green-4 dark:hover:bg-green-2 dark:hover:bg-green-1 bg-green-1",
    cyan: "dark:bg-black dark:ring-cyan-3 hover:ring-cyan-6 dark:hover:ring-cyan-4 dark:hover:bg-cyan-2 dark:hover:bg-cyan-1 bg-cyan-1",
    purple:
      "dark:bg-black dark:ring-purple-3 hover:ring-purple-6 dark:hover:ring-purple-4  dark:hover:bg-purple-2 dark:hover:bg-purple-1 bg-purple-1",
    pink: "dark:bg-black dark:ring-pink-3 hover:ring-pink-6 dark:hover:ring-pink-4  dark:hover:bg-pink-2 dark:hover:bg-pink-1 bg-pink-1",
  };

  const ringColorClass = colorClasses[color] || "";

  return href ? (
    <a
      className={`inline-flex cursor-pointer select-none rounded-full px-2 py-0.5 text-xs text-gray-9 no-underline ring-2 ring-gray-10/10 hover:text-gray-10 focus-visible:text-gray-10 dark:ring-2 ${ringColorClass}`}
      href={href}
      title={title ? title : null}
    >
      {content}
    </a>
  ) : (
    <div
      className={`inline-flex cursor-default select-none rounded-full px-2 py-0.5 text-xs text-gray-9 ring-2 ring-gray-10/10 hover:text-gray-10 focus-visible:text-gray-10 dark:ring-2 ${ringColorClass}`}
      title={title ? title : null}
    >
      {content}
    </div>
  );
}
