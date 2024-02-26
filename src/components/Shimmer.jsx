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
      className="shimmer-container relative mt-2 flex aspect-[2/1] w-full flex-col items-center justify-center overflow-hidden rounded-xl border  border-transparent
      p-20 text-center [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
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
        className="shimmer-effect absolute inset-0 h-[3px] w-40"
        style={{
          background: `linear-gradient(270deg,rgba(255,255,255,.6) 0%,hsla(0,0%,100%,0) 100%)`,
        }}
      />
      <div className="z-10 flex h-[100%] w-[100%]">
        <div>
          <h1 className="z-20 flex font-title text-7xl font-normal text-forsythia opacity-100">
            Inzimam ul haq
          </h1>
          <br />
          <p className="z-10 mr-20 max-w-screen-lg text-left font-sg text-xl font-light text-mint">
            Hi 👋, I am{" "}
            <span className="text-forsythia hover:text-saffron">
              Full-Stack Engineer{" "}
            </span>
            - dedicated to crafting exceptionally smooth digital experiences
            through meticulous design and functionality.
          </p>
          <br />
          <p className="z-10 mr-20 max-w-screen-lg text-left font-sg text-xl font-light text-mint">
            Proficient in both frontend and backend technologies, I collaborate
            seamlessly across teams, ensuring the delivery of user-centric
            solutions. Led teams effectively, fostering an environment where
            individuals thrive and deliver their best work.
          </p>
          <div className="flex space-x-3">
            <button className="mt-8 flex bg-forsythia px-5 py-2 font-sg text-lg font-bold text-dead mix-blend-lighten backdrop-opacity-20 transition-all hover:bg-saffron">
              Schedule a meeting
            </button>
            <button className="mt-8 flex bg-forsythia px-5 py-2 font-sg text-lg font-bold text-dead mix-blend-lighten backdrop-opacity-20 transition-all hover:bg-saffron">
              Download Resume
            </button>
          </div>
        </div>
        <div className="aspect-auto max-h-80 rounded-3xl object-cover px-2.5 lg:max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}
