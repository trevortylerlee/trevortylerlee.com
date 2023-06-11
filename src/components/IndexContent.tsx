import { motion } from "framer-motion";
import { getCollection } from "astro:content";

export default function IndexContent() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div initial="hidden" variants={container} animate="show">
      <div className="flex max-w-[768px] flex-col items-center gap-6 px-2 pb-8 pt-16 sm:flex-row">
        <motion.div
          variants={listItem}
          className="flex items-center justify-center"
        >
          <img
            src="/me-with-roxy.webp"
            alt="A picture of young Trevor with my dog Roxy."
            className="max-w-[100px] rounded-full hover:invert"
          />
        </motion.div>
        <motion.div
          variants={listItem}
          className="block text-xl text-center sm:text-left"
        >
          <h1>
            Frontend developer and designer. Currently working at{" "}
            <a href="https://www.comc.com/">COMC</a> and studying Digital Design
            and Development at BCIT.
          </h1>
        </motion.div>
      </div>

      <div className="py-4">
        <motion.h1 variants={listItem} className="mb-2 text-2xl font-bold">
          Projects
        </motion.h1>
        <ul className="flex flex-col gap-2">
          <motion.li variants={listItem}>
            <a className="text-lg" href="https://phished.up.railway.app">
              Phished
            </a>
            <p>
              Send, monitor, and track your own phishing emails. Educational
              purposes only.
            </p>
          </motion.li>
          <motion.li variants={listItem}>
            <a className="text-lg" href="https://text2array.vercel.app">
              Text 2 Array
            </a>
            <p>Tired of typing out arrays? Same... </p>
          </motion.li>
        </ul>
      </div>
      <div className="pb-16 pt-4">
        <motion.h1 variants={listItem} className="mb-2 text-2xl font-bold">
          Posts
        </motion.h1>
        <ul className="flex flex-col gap-2">
          <motion.li variants={listItem}>
            <a className="text-lg" href="/posts/view-transition">
              Animating page transitions with 3 lines of code
            </a>
          </motion.li>
          <motion.li variants={listItem}>
            <a className="text-lg" href="/posts/hottoast">
              Using react-hot-toast with Astro
            </a>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
}
