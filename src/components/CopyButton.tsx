import Toastify from "./Toastify";
import toast from "react-hot-toast";
import { useState } from "react";
import { Howl, Howler } from "howler";

export default Toastify(function Button({ copyText, label, children }) {
  const copyToClipboard = async (copyText) => {
    try {
      await navigator.clipboard.writeText(copyText);
      toast.success("Email copied!");
    } catch (err) {
      console.log(err);
      toast.error("Error copying to clipboard");
    }
  };

  const sound = new Howl({
    src: ["/boop.mp3"],
  });

  const handleClick = () => {
    copyToClipboard(copyText);
    sound.play();
  };

  return (
    <>
      <button
        aria-label="Copy email address to clipboard"
        title="Copy email address to clipboard"
        onClick={handleClick}
        className="flex cursor-copy transition-all hover:opacity-90 active:scale-95"
      >
        {label}
        {children}
      </button>
    </>
  );
});
