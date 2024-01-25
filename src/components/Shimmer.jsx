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
      className="shimmer-container relative mt-2 flex aspect-[2/1] w-full flex-col items-center justify-center rounded-xl border border-transparent  text-center
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
          <h1 className="flex text-7xl opacity-100 z-20 font-normal text-forsythia font-title">
            Inzimam ul haq
          </h1>
          <br />
          <p className="z-10 font-sg text-xl text-mint text-left max-w-screen-lg mr-20 font-light">
            Hi 👋, I am{" "}
            <span className="text-forsythia hover:text-saffron">
              Full-Stack Engineer{" "}
            </span>
            - dedicated to crafting exceptionally smooth digital experiences
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
        </div>
      </div>
    </div>
  );
}
