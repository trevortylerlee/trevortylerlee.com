import Toastify from "./Toastify";
import toast from "react-hot-toast";
import style from "../styles/CopyButton.module.css";
import { useEffect } from "react";

export default Toastify(function Button({ copyText, label, children, copyTrigger, setCopyTrigger }) {
  const notify = () => {
      try {
        copy(copyText) && toast.success("Email copied!");
      } catch (err) {
        console.log(err);
        toast.error("Error copying to clipboard");
      }
  };

  const copy = async (copyText: string) => {
    try {
      navigator.clipboard.writeText('trevortylerlee@gmail.com');
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  useEffect(() => {
    if (copyTrigger) {
      notify();
      setCopyTrigger(false)
    }
  }, [copyTrigger])

  return (
    <>
      <button
        // aria-label={
        //   message === "trevortylerlee@gmail.com"
        //     ? "Copy email"
        //     : "Copy phone number"
        // }
        aria-label="Copy email address"
        onClick={notify}
        className="flex"
      >
        {label}
        {children}
      </button>
    </>
  );
});
