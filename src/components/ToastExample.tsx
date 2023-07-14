import Toastify from "./Toastify";
import toast from "react-hot-toast";

export default Toastify(function Button({ message }) {
  const notify = () => toast("Hello World!");

  return (
    <>
      <button
        className="bg-[#EFEFEF] text-black rounded-sm px-1 border-[#767676] border hover:bg-[#e1e1e1] active:bg-[#d9d9d9]"
        onClick={notify}
        style={{}}
      >
        {message}
      </button>
    </>
  );
});
