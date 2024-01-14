import { useState } from "react";
import { Howl, Howler } from "howler";

export default function DrawingGarden() {
  Howler.volume(0.25);

  const [isMuted, setIsMuted] = useState(true);
  const [category, setCategory] = useState("fruit");

  function toggleMute() {
    setIsMuted(!isMuted);
  }

  function optionChange(e) {
    setCategory(e.target.value);
  }

  return (
    <>
      <div className="flex items-center justify-between align-middle">
        <button
          onClick={toggleMute}
          className="group mb-8 mt-8 flex cursor-default items-center rounded-sm border border-[#767676] bg-[#EFEFEF] px-[6px] py-[1px] font-[Verdana] text-xl !text-black !no-underline hover:bg-[#e1e1e1] active:bg-[#d9d9d9]"
        >
          {isMuted ? "🔇" : "🔈"}
        </button>
        <span className="flex gap-3">
          <label>
            <input
              type="radio"
              name="emojis"
              value="fruit"
              checked={category === "fruit"}
              onChange={optionChange}
              className="mr-1"
            />
            Fruits
          </label>
          <label>
            <input
              type="radio"
              name="emojis"
              value="animal"
              checked={category === "animal"}
              onChange={optionChange}
              className="mr-1"
            />
            Animals
          </label>
          <label>
            <input
              type="radio"
              name="emojis"
              value="space"
              checked={category === "space"}
              onChange={optionChange}
              className="mr-1"
            />
            Space
          </label>
        </span>
      </div>
      <div className="grid grid-cols-8">
        {[...Array(256)].map((_, index) => (
          <Cell key={index} isMuted={isMuted} category={category} />
        ))}
      </div>
    </>
  );
}

function Cell({ key, isMuted, category }) {
  const fruits = [
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

  const animals = [
    "🐒",
    "🐥",
    "🦉",
    "🫎",
    "🐝",
    "🦋",
    "🐌",
    "🐞",
    "🐙",
    "🦎",
    "🦀",
    "🐡",
    "🐋",
    "🦈",
    "🦭",
    "🦧",
    "🦚",
    "🦦",
    "🦥",
    "🦔",
  ];

  const space = [
    "🌎",
    "🪐",
    "🔭",
    "☄️",
    "🛸",
    "🛰️",
    "🚀",
    "🌙",
    "☀️",
    "⭐️",
    "✨",
    "💫",
  ];

  const sound = new Howl({
    src: [`/sounds/${category}-${getNumberFromZeroToX(3) + 1}.mp3`],
  });

  function getNumberFromZeroToX(number) {
    return Math.floor(Math.random() * number);
  }

  return (
    <span
      className="flex cursor-default select-none justify-center py-4 text-2xl"
      onPointerEnter={(e) => {
        let target = e.target as HTMLSpanElement;
        if (category === "fruit") {
          target.textContent = fruits[getNumberFromZeroToX(fruits.length)];
        } else if (category === "animal") {
          target.textContent = animals[getNumberFromZeroToX(animals.length)];
        } else if (category === "space") {
          target.textContent = space[getNumberFromZeroToX(space.length)];
        } else {
          target.textContent = fruits[getNumberFromZeroToX(fruits.length)];
        }

        if (!isMuted) {
          sound.play();
        }
      }}
    >
      ~
    </span>
  );
}
