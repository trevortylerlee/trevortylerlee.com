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
        className="flex"
      >
        {label}
        {children}
      </button>
    </>
  );
});
