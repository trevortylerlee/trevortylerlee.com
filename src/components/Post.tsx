import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { set } from "astro/zod";

export default function Post({
  date,
  title,
  description,
  link,
  href,
  src,
  alt,
}) {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        console.log('mouse entered')
        setIsHovered(true)
    }

    function handleMouseLeave() {
        console.log('mouse left')
        setIsHovered(false)
    }

  return (
    <a
      className="group h-full"
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-full rounded border bg-gray-2/40 p-2 transition-all dark:border-gray-10 dark:bg-gray-10/20">
        <div className="items-center p-4 grayscale transition-all group-hover:grayscale-0 group-focus:grayscale-0">
          <img
            src={src}
            alt={alt}
            className="h-full w-full rounded object-cover"
          />
        </div>
        <div className="p-2">
          <div className="py-2 text-sm leading-loose">
            <span className="uppercase brightness-75">{date}</span>
            <h1 className="text-4xl font-bold transition-all group-hover:text-primary group-focus:text-primary hover:underline">
              {title}
            </h1>
          </div>
          <p className="max-w-md pb-16 pt-4 font-content leading-normal">
            {description}
          </p>
          <a
            href="#"
            className=" group inline-flex items-center rounded-full dark:bg-gray-1 dark:text-gray-11 bg-gray-11 text-gray-1 px-6 py-2 font-semibold transition dark:hover:bg-gray-1/80 hover:bg-gray-11/80 font-content absolute bottom-4 right-4"
          >
            {link}
            <svg
              className="-mr-1 ml-2 mt-0.5 stroke-gray-1 dark:stroke-gray-11 stroke-2"
              fill="none"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              aria-hidden="true"
            >
              <path
                className="opacity-0 transition group-hover:opacity-100 group-focus:opacity-100"
                d="M0 5h7"
              ></path>
              <path
                className="transition group-hover:translate-x-[3px] group-focus:translate-x-[3px]"
                d="M1 1l4 4-4 4"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </a>
  );
}
