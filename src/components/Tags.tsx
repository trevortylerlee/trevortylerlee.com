import { useState } from "react";

export default function Tags() {
  const initialTags = [
    {
      content: "💻 Web Developer",
      href: "",
    },
    {
      content: "💼 Working @ COMC",
      href: "https://comc.com",
    },
    {
      content: "🎓 BCIT",
      href: "",
    },
    {
      content: "🇨🇦 Canadian",
      href: "",
    },
    {
      content: "♋ Cancer 🦀",
      href: "",
    },
    {
      content: "🙌 Fast hands (167wpm)",
      href: "https://monkeytype.com/profile/boogerbuttcheeks",
    },
    {
      content: "🧠 INTJ",
      href: "https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator",
    },
    {
      content: "🏊 Can swim",
      href: "",
    },
    {
      content: "🤿 Can't scuba",
      href: "",
    },
    {
      content: "🐦 X (formerly Twitter)",
      href: "https://twitter.com/boogerbuttcheek",
    },
  ];

  const additionalTags = [
    {
      content: "🎸 Likes Taylor Swift, Kanye West",
      href: "https://open.spotify.com/user/trevortylerlee?si=6ca50e2df1b540a1",
    },
    {
      content: "🐍 Slytherin",
      href: "",
    },
    {
      content: "👍 Likes Star Wars, LOTR",
      href: "",
    },
    {
      content: "👓 Poor vision",
      href: "",
    },
    {
      content: "👾 Discord",
      href: "discordapp.com/users/537056251704508426",
    },
    {
      content: "📷 Instagram",
      href: "https://www.instagram.com/trevortylerlee/",
    },
    {
      content: "🎮 Steam",
      href: "https://steamcommunity.com/profiles/76561198080019632/",
    },
    {
      content: "🧵 Threads",
      href: "https://www.threads.net/@trevortylerlee",
    },
    {
      content: "🎵 TikTok",
      href: "https://www.tiktok.com/@boogerbuttcheeks",
    },
    {
      content: "📹 YouTube",
      href: "https://www.youtube.com/channel/UCNHiDTuUDdJATXFwqh17X2g",
    },
  ];

  const [tags, setTags] = useState(initialTags);
  const [isOpen, setIsOpen] = useState(false);

  const allTags = tags.map(({ content, href }, index) => (
      <Tag content={content} href={href} key={index} />
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
          className="font-base cursor-pointer border-none bg-background font-mono text-gray-6 outline-none hover:text-foreground focus-visible:text-foreground dark:bg-black"
        >
          see less -
        </button>
      ) : (
        <button
          onClick={showContent}
          className="font-base cursor-pointer border-none bg-background font-mono text-gray-6 outline-none hover:text-foreground focus-visible:text-foreground dark:bg-black"
        >
          see more +
        </button>
      )}
    </>
  );
}

function Tag({ content, href }) {
  return href ? (
    <a
      className="transition-scale inline-flex select-none px-2 py-0.5 text-foreground no-underline ring-1 ring-foreground/10 hover:bg-foreground/5 active:bg-foreground/5"
      href={href}
    >
      {content}
    </a>
  ) : (
    <div className="transition-scale inline-flex cursor-default select-none px-2 py-0.5 ring-1 ring-foreground/10">
      {content}
    </div>
  );
}
