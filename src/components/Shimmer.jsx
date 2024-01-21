import { motion } from "framer-motion";
import "./Shimmer.css";

export default function Shimmer({ text, children }) {
  return (
    <div
      style={{
        "--background": "30 41 59",
        "--highlight": "255 255 255",
        "--bg-color":
          "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
      }}
      className="shimmer-container relative flex aspect-[2/1] w-full flex-col items-center justify-center rounded-xl border border-transparent  text-center
      [background:padding-box_var(--bg-color),border-box_var(--border-color)] overflow-hidden p-20"
    >
      <motion.div
        animate={{
          x: ["0px", "1300px"],
          opacity: [0.5, 0.8, 1, 0.7, 0.5, 0.3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="shimmer-effect absolute inset-0 w-10 h-[4px]"
        style={{
          background: `linear-gradient(270deg,rgba(255,255,255,.6) 0%,hsla(0,0%,100%,0) 100%)`,
        }}
      />
      <div className="w-[100%] h-[100%] flex z-10">
        <p className="z-10 relative font-title text-5xl text-mint text-left max-w-screen-lg mr-10">
          {text}
        </p>
        <div className="aspect-auto max-h-80 rounded-3xl object-cover px-2.5 lg:max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}
