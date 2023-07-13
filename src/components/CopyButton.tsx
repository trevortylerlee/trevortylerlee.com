import Toastify from "./Toastify";
import toast from "react-hot-toast";
import { useState } from "react";

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

  const handleClick = () => {
    copyToClipboard(copyText);
  };

  return (
    <>
      <button
        aria-label="Copy email address"
        onClick={handleClick}
        className="flex transition-all active:scale-95 hover:opacity-90"
      >
        {label}
        {children}
      </button>
    </>
  );
});
