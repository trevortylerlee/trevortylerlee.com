import Toastify from "./Toastify";
import toast from "react-hot-toast";

export default Toastify(function Button({ message }) {
  const notify = () => toast("Hello World!");

  return (
    <>
      <button
        onClick={notify}
        style={{
        }}
      >
        {message}
      </button>
    </>
  );
});
