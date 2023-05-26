import { motion } from "framer-motion";
import { getCollection } from "astro:content";
import Ztext from "react-ztext";

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
      <motion.div variants={listItem} className="pb-8 pt-16 text-xl">
        Software developer and designer. Currently working at{" "}
        <a href="https://www.comc.com/">COMC</a> and studying Digital Design and
        Development at BCIT. Graduating June 2023 :)
      </motion.div>

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

      <motion.div className="absolute pointer-events-none aria-hidden bottom-72 right-16 hidden rotate-12 opacity-10 sm:block">
        <Ztext
          depth="2rem"
          direction="both"
          event="pointer"
          eventRotation="60deg"
          eventDirection="default"
          fade={true}
          layers={20}
          perspective="600px"
          style={{
            fontSize: "5rem",
          }}
        >
          <span>🫣</span>
        </Ztext>
      </motion.div>
    </motion.div>
  );
}
