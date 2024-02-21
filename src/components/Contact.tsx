import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("trevortylerlee@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Could not copy text: ", err);
    }
  };

  return (
    <div className="group flex max-w-[300px] cursor-default items-center gap-2.5 text-[20px]">
      <a
        href="mailto:trevortylerlee@gmail.com"
        className="flex h-10 w-10 cursor-pointer items-center rounded-lg bg-white ring-1 ring-foreground/10 hover:ring-primary focus-visible:ring-primary dark:bg-black"
      >
        <svg
          className="mx-auto"
          fill="none"
          height="24"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>Send email</title>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      </a>
      <button
        className="flex h-10 w-10 cursor-pointer items-center rounded-lg border-none bg-white text-primary ring-1 ring-foreground/10 hover:ring-primary focus-visible:ring-primary dark:bg-black"
        onClick={copyEmail}
      >
        {copied ? (
          <svg
            className="mx-auto text-primary"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Email copied</title>
            <path d="M20 6L9 17l-5-5" />
          </svg>
        ) : (
          <svg
            className="mx-auto text-primary"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Copy email</title>
            <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z" />
          </svg>
        )}
      </button>
      <div className="ml-4 flex flex-col py-3 leading-4">
        <div className="text-base text-gray-6">Send me an email...</div>
        <div className="text-base text-gray-6 group-hover:text-foreground">
          {copied ? "Copied!" : "Do it!"}
        </div>
      </div>
    </div>
  );
}
