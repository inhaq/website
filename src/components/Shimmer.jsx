import { motion } from "framer-motion";
import "./Shimmer.css";

export default function Shimmer({ children }) {
  return (
    <div
      style={{
        "--background": "30 41 59",
        "--highlight": "255 255 255",
        "--bg-color":
          "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
      }}
      className="shimmer-container relative mt-10 flex aspect-[2/1] w-full flex-col items-center justify-center rounded-xl border border-transparent  text-center
      [background:padding-box_var(--bg-color),border-box_var(--border-color)] overflow-hidden p-20"
    >
      <motion.div
        animate={{
          x: ["-200px", "1300px"],
          opacity: [0.5, 0.8, 1, 0.7, 0.5, 0.3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="shimmer-effect absolute inset-0 w-40 h-[4px]"
        style={{
          background: `linear-gradient(270deg,rgba(255,255,255,.6) 0%,hsla(0,0%,100%,0) 100%)`,
        }}
      />
      <div className="w-[100%] h-[100%] flex z-10">
        <div>
          <h1 className="flex uppercase text-7xl opacity-100 z-20 font-normal text-forsythia font-title">
            Inzimam ul haq
          </h1>
          <br />
          <p className="z-10 font-sg text-xl text-mint text-left max-w-screen-lg mr-20 font-light">
            Hi 👋, I am{" "}
            <span className="text-forsythia hover:text-saffron">
              Full-Stack Engineer
            </span>{" "}
            , dedicated to crafting exceptionally smooth digital experiences
            through meticulous design and functionality.
          </p>
          <br />
          <p className="z-10 font-sg text-xl text-mint text-left max-w-screen-lg mr-20 font-light">
            Proficient in both frontend and backend technologies, I collaborate
            seamlessly across teams, ensuring the delivery of user-centric
            solutions. Led teams effectively, fostering an environment where
            individuals thrive and deliver their best work.
          </p>
          <div className="space-x-3 flex">
            <button className="flex mt-8 px-5 py-2 bg-forsythia text-dead mix-blend-lighten font-bold font-sg text-lg hover:bg-saffron transition-all backdrop-opacity-20">
              Schedule a meeting
            </button>
            <button className="flex mt-8 px-5 py-2 bg-forsythia text-dead mix-blend-lighten font-bold font-sg text-lg hover:bg-saffron transition-all backdrop-opacity-20">
              Download Resume
            </button>
          </div>
        </div>
        <div className="aspect-auto max-h-80 rounded-3xl object-cover px-2.5 lg:max-w-none">
          {children}
          <div className="flex justify-center space-x-10 mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-7 fill-forsythia hover:fill-saffron transition cursor-pointer opacity-50 hover:opacity-100"
            >
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zM17.61 20.644h2.039L6.486 3.24H4.298z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-7 fill-forsythia hover:fill-saffron transition cursor-pointer opacity-50 hover:opacity-100"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-7 fill-forsythia hover:fill-saffron transition cursor-pointer opacity-50 hover:opacity-100"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
