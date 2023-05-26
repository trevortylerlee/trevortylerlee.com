import { Circle } from "lucide-react";
import { useEffect, useState } from "react";

export default function PrimarySelector() {
  const colors = [
    "red",
    "orange",
    "green",
    "teal",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];

  const [currentColor, setCurrentColor] = useState(null);

  useEffect(() => {
    const storedColor = localStorage.getItem("primaryColor");
    setCurrentColor(storedColor || "blue");
    document.documentElement.setAttribute(
      "data-theme",
      storedColor || "blue"
    );
  }, []);

  function handleClick() {
    const oldColor = localStorage.getItem("primaryColor");

    let newColor = oldColor;
    while (oldColor === newColor) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      newColor = colors[randomIndex];
    }

    setCurrentColor(newColor);
    localStorage.setItem("primaryColor", newColor);
    document.documentElement.setAttribute("data-theme", newColor);
  }

  return (
    <button
      aria-label="Change primary color"
      onClick={handleClick}
      className="flex h-11 w-11 items-center justify-center animate-in fade-in-0 slide-in-from-right-5 duration-500 motion-reduce:animate-none"
    >
      <Circle fill={`rgb(var(--${currentColor}))`} size={32} />
    </button>
  );
}
