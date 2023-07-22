import Toastify from "./Toastify";
import toast from "react-hot-toast";

export default Toastify(function Button({ message }) {
  const notify = () => toast("Hello World!");

  return (
    <>
      <button
        className="rounded-sm border border-[#767676] bg-[#EFEFEF] px-1 text-black hover:bg-[#e1e1e1] active:bg-[#d9d9d9]"
        onClick={notify}
        style={{}}
      >
        {message}
      </button>
    </>
  );
});
