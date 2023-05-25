import Toastify from "./Toastify";
import toast from "react-hot-toast";

export default Toastify(function Button({ message }) {
  const notify = () => toast("Hello World!");

  return (
    <>
      <button className="outline px-2 py-1 rounded" onClick={notify} style={{}}>
        {message}
      </button>
    </>
  );
});
