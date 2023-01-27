import Toastify from "./Toastify";
import toast from "react-hot-toast";

export default Toastify(function Button({ message }) {
  const notify = () => toast("Toast!");

  return (
    <>
      <button
        onClick={notify}
        style={{
          all: "unset",
          color: "#000000",
          background: "#EFEFEF",
          padding: "1px 6px",
          border: "2px outset rgb(118, 118, 118",
          fontFamily: "Arial",
          fontWeight: "400",
          letterSpacing: "normal",
        }}
      >
        {message}
      </button>
    </>
  );
});
