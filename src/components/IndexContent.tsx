import { motion } from "framer-motion";

export default function IndexContent() {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    }

    const listItem = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

  return (
    <motion.div initial="hidden" variants={container} animate="show">
      <motion.div variants={listItem} className="font-content pb-8 pt-16 text-xl">
        Software developer and designer. Currently working at{" "}
        <a href="https://www.comc.com/">COMC</a> and studying Digital Design and
        Development at BCIT. Graduating June 2023 :)
      </motion.div>

      <div className="py-4">
        <motion.h1 variants={listItem} className="mb-2 text-2xl font-bold">Projects</motion.h1>
        <ul className="flex flex-col gap-2">
          <motion.li variants={listItem}>
            <a className="text-lg" href="https://phished.up.railway.app">
              Phished
            </a>
            <p className="text-gray-4">
              Send, monitor, and keep track of phishing emails. Educational
              purposes only.
            </p>
          </motion.li>
          <motion.li variants={listItem}>
            <a className="text-lg" href="https://text2array.vercel.app">
              Text 2 Array
            </a>
            <p className="text-gray-4">
              Tired of typing out arrays? Me too...
            </p>
          </motion.li>
        </ul>
      </div>
      <div className="pb-16 pt-4">
        <motion.h1 variants={listItem} className="mb-2 text-2xl font-bold">Posts</motion.h1>
        <ul className="flex flex-col gap-2">
          <motion.ul variants={listItem}>
            <a className="text-lg" href="/posts/hottoast">
              Using react-hot-toast with Astro
            </a>
          </motion.ul>
        </ul>
      </div>
    </motion.div>
  );
}
