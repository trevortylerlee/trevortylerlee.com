import { useState } from "react";

export default function Tags() {
  const initialTags = [
    {
      content: "💻 Web Developer",
      href: "",
      title: "waiting for popover to be stable...",
    },
    {
      content: "💼 Working @ COMC",
      href: "https://comc.com",
      title: "since January 2021",
    },
    {
      content: "🎓 BCIT",
      href: "",
      title: "Diploma in Digital Design and Development",
    },
    {
      content: "🇨🇦 Canadian",
      href: "",
      title: "British Columbian",
    },
    {
      content: "♋ Cancer 🦀",
      href: "",
      title: "also year of the rabbit 🐇",
    },
    {
      content: "🙌 Fast hands (167wpm)",
      href: "https://monkeytype.com/profile/boogerbuttcheeks",
      title: "not in my prime anymore tho",
    },
    {
      content: "🧠 INTJ",
      href: "https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator",
      title: "includes: gandalf, katniss, michelle obama",
    },
    {
      content: "🏊 Can swim",
      href: "",
      title: "stuck on level 9",
    },
    {
      content: "🤿 Can't scuba",
      href: "",
      title: "collapsed lung. can't skydive either",
    },
    {
      content: "🐦 X (Twitter)",
      href: "https://twitter.com/boogerbuttcheek",
    },
  ];

  const additionalTags = [
    {
      content: "🐍 Slytherin",
      href: "",
      title: "patronus is a chow chow dog",
    },
    {
      content: "🫲 Left-handed 👈",
      href: "https://en.wikipedia.org/wiki/Bias_against_left-handed_people",
      title: "right-footed",
    },
    {
      content: "🎸 Likes Taylor Swift, Kanye West",
      href: "https://open.spotify.com/user/trevortylerlee?si=6ca50e2df1b540a1",
    },
    {
      content: "👍 Likes Star Wars, LOTR",
      href: "",
    },
    {
      content: "👓 Poor vision",
      href: "",
      title: "nearly -10 in both with astigmatism",
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

  const allTags = tags.map(({ content, href, title }, index) => (
    <Tag content={content} href={href} key={index} title={title} />
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

function Tag({ content, href, title }) {
  return href ? (
    <a
      className="transition-scale inline-flex select-none px-2 py-0.5 text-foreground no-underline ring-1 ring-foreground/10 hover:bg-foreground/5 active:bg-foreground/5"
      href={href}
      title={title ? title : null}
    >
      {content}
    </a>
  ) : (
    <div
      className="transition-scale inline-flex cursor-default select-none px-2 py-0.5 ring-1 ring-foreground/10"
      title={title ? title : null}
    >
      {content}
    </div>
  );
}
