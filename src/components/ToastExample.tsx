import Toastify from "./Toastify";
import toast from "react-hot-toast";
import { Howl, Howler } from "howler";

export default Toastify(function Button({ message }) {
  Howler.volume(0.2);

  const sound = new Howl({
    src: ["/minecraft.mp3"],
  });

  const notify = () => {
    toast("Hello World!");
    sound.play();
  };

  return (
    <>
      <button
        className="rounded-sm border border-[#767676] bg-[#EFEFEF] px-[6px] py-[1px] font-sans text-sm text-black hover:bg-[#e1e1e1] active:bg-[#d9d9d9]"
        onClick={notify}
        style={{}}
      >
        {message}
      </button>
    </>
  );
});
