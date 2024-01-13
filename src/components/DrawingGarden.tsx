import { useState } from "react";
import { Howl, Howler } from "howler";

export default function DrawingGarden() {
  const [isMuted, setIsMuted] = useState(true);

  function toggleMute() {
    setIsMuted(!isMuted);
  }

  return (
    <>
      <button
        onClick={toggleMute}
        className="group mb-8 mt-8 flex cursor-default items-center rounded-sm border border-[#767676] bg-[#EFEFEF] px-[6px] py-[1px] font-[Verdana] text-xl !text-black !no-underline hover:bg-[#e1e1e1] active:bg-[#d9d9d9]"
      >
        {isMuted ? "🔇" : "🔈"}
      </button>
      <div className="grid grid-cols-8">
        {[...Array(256)].map((_, index) => (
          <Cell key={index} isMuted={isMuted} />
        ))}
      </div>
    </>
  );
}

function Cell({ key, isMuted }) {
  const emojis = [
    "🍇",
    "🍈",
    "🍉",
    "🍊",
    "🍋",
    "🍌",
    "🍍",
    "🥭",
    "🍎",
    "🍏",
    "🍐",
    "🍑",
    "🍒",
    "🍓",
    "🫐",
    "🥝",
    "🥥",
  ];

  const sound = new Howl({
    src: ["/boop.mp3"],
  });

  function getNumberFromZeroToSixteen() {
    return Math.floor(Math.random() * 17);
  }

  return (
    <span
      className="flex cursor-default select-none justify-center py-4 text-2xl"
      onPointerEnter={(e) => {
        let target = e.target as HTMLSpanElement;
        target.textContent = emojis[getNumberFromZeroToSixteen()];
        if (!isMuted) {
          sound.play();
        }
      }}
    >
      ~
    </span>
  );
}
