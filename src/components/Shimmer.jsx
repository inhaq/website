import { motion } from "framer-motion";
import "./Shimmer.css";

export default function Shimmer() {
  return (
    <div
      style={{
        "--background": "30 41 59",
        "--highlight": "255 255 255",
        "--bg-color":
          "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
      }}
      className="shimmer-container relative flex aspect-[2/1] w-full max-w-lg flex-col items-center justify-center rounded-xl border border-transparent p-8 text-center
      [background:padding-box_var(--bg-color),border-box_var(--border-color)] overflow-hidden"
    >
      <motion.div
        animate={{
          x: ["-270px", "250px"],
          opacity: [0.5, 0.8, 0.6, 0.4, 0.2, 0.1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="shimmer-effect absolute inset-y-0 w-10 h-[3px]"
        style={{
          background: `linear-gradient(270deg,rgba(255,255,255,.6) 0%,hsla(0,0%,100%,0) 100%)`,
        }}
      />
      <p className="text-xl w-100 font-medium text-white z-10 relative">
        Hello, gradient
      </p>
    </div>
  );
}
