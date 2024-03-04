import { useState } from "react";

export default function Tags() {
  const initialTags = [
    {
      content: "💻 Web Developer",
      href: "",
      title: "waiting for popover to be stable...",
      color: "teal",
    },
    {
      content: "💼 Working @ COMC",
      href: "https://comc.com",
      title: "since January 2021",
      color: "red",
    },
    {
      content: "🎓 BCIT",
      href: "",
      title: "Diploma in Digital Design and Development",
      color: "blue",
    },
    {
      content: "📄 HTML",
      color: "orange",
    },
    {
      content: "{} CSS",
      color: "pink",
    },
    {
      content: "🔄 Git",
      color: "brown",
    },
    {
      content: "🟨 JavaScript",
      color: "yellow",
    },
    {
      content: "⚛️ React",
      color: "purple",
    },
    {
      content: "▲ Next.js",
      color: "blue",
    },
    {
      content: "🚀 Astro",
      color: "orange",
    },
    {
      content: "🎨 Figma",
      color: "purple",
    },
    {
      content: "🖌️ Photoshop, Illustrator, AE",
      color: "cyan",
    },
    {
      content: "📷 Instagram",
      href: "https://www.instagram.com/trevortylerlee/",
      color: "pink",
    },
    {
      content: "🎮 Steam",
      href: "https://steamcommunity.com/profiles/76561198080019632/",
      color: "mint",
    },
    {
      content: "🧵 Threads",
      href: "https://www.threads.net/@trevortylerlee",
      color: "indigo",
    },
    {
      content: "🎵 TikTok",
      href: "https://www.tiktok.com/@boogerbuttcheeks",
      color: "pink",
    },
    {
      content: "🐦 X (Twitter)",
      href: "https://twitter.com/boogerbuttcheek",
      color: "teal",
    },
    {
      content: "📹 YouTube",
      href: "https://www.youtube.com/channel/UCNHiDTuUDdJATXFwqh17X2g",
      color: "red",
    },
  ];

  const additionalTags = [
    {
      content: "♋ Cancer 🦀",
      href: "",
      title: "also year of the rabbit 🐇",
      color: "teal",
    },
    {
      content: "🧠 INTJ",
      href: "https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator",
      title: "includes: gandalf, katniss, michelle obama",
      color: "orange",
    },
    {
      content: "🙌 Fast hands (167wpm)",
      href: "https://monkeytype.com/profile/boogerbuttcheeks",
      title: "not in my prime anymore tho",
      color: "yellow",
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
      color: "mint",
    },
    {
      content: "👓 Poor vision",
      href: "",
      title: "nearly -10 in both with astigmatism",
      color: "brown",
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
      color: "indigo",
    },
    {
      content: "👍 Likes Star Wars, LOTR",
      href: "",
      color: "orange",
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
          className="font-base cursor-pointer border-none bg-background font-mono text-sm text-gray-7 outline-none hover:text-foreground focus-visible:text-foreground dark:bg-black dark:text-gray-6 dark:hover:text-foreground dark:focus-visible:text-foreground"
        >
          see less -
        </button>
      ) : (
        <button
          onClick={showContent}
          className="font-base cursor-pointer border-none bg-background font-mono text-sm text-gray-7 outline-none hover:text-foreground focus-visible:text-foreground dark:bg-black dark:text-gray-6 dark:hover:text-foreground dark:focus-visible:text-foreground"
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
    red: "hover:ring-accent-red hover:bg-accent-red/10 dark:hover:bg-accent-red/20",
    orange:
      "hover:ring-accent-orange hover:bg-accent-orange/10 dark:hover:bg-accent-orange/20",
    yellow:
      "hover:ring-accent-yellow hover:bg-accent-yellow/10 dark:hover:bg-accent-yellow/20",
    green:
      "hover:ring-accent-green hover:bg-accent-green/10 dark:hover:bg-accent-green/20",
    mint: "hover:ring-accent-mint hover:bg-accent-mint/10 dark:hover:bg-accent-mint/20",
    teal: "hover:ring-accent-teal hover:bg-accent-teal/10 dark:hover:bg-accent-teal/20",
    cyan: "hover:ring-accent-cyan hover:bg-accent-cyan/10 dark:hover:bg-accent-cyan/20",
    blue: "hover:ring-accent-blue hover:bg-accent-blue/10 dark:hover:bg-accent-blue/20",
    indigo:
      "hover:ring-accent-indigo hover:bg-accent-indigo/10 dark:hover:bg-accent-indigo/20",
    purple:
      "hover:ring-accent-purple hover:bg-accent-purple/10 dark:hover:bg-accent-purple/20",
    pink: "hover:ring-accent-pink hover:bg-accent-pink/10 dark:hover:bg-accent-pink/20",
    brown:
      "hover:ring-accent-brown hover:bg-accent-brown/10 dark:hover:bg-accent-brown/20",
  };

  const ringColorClass = colorClasses[color] || "";

  return href ? (
    <a
      className={`transition-scale inline-flex cursor-pointer select-none px-2 py-0.5 text-foreground no-underline ring-2 ring-foreground/10 dark:ring-1 ${ringColorClass}`}
      href={href}
      title={title ? title : null}
    >
      {content}
    </a>
  ) : (
    <div
      className={`transition-scale inline-flex cursor-default select-none px-2 py-0.5 ring-2 ring-foreground/10 dark:ring-1 ${ringColorClass}`}
      title={title ? title : null}
    >
      {content}
    </div>
  );
}
