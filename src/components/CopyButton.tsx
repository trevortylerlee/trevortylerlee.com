import Toastify from "./Toastify";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default Toastify(function Button({ copyText, label, children, copyTrigger, setCopyTrigger }) {
  const notify = async () => {
      try {
        await copy(copyText) && toast.success("Email copied!");
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
        aria-label="Copy email address"
        onClick={notify}
        className="flex"

        // This is a hack to disable focus for the cmdk copy button 
        tabIndex={label === 'trevortylerlee@gmail.com' ? 0 : -1}
      >
        {label}
        {children}
      </button>
    </>
  );
});
