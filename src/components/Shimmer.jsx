import { motion } from "framer-motion";
import { useState } from "react";
import "./Shimmer.css";

export default function Shimmer() {
  const text =
    "Crafting digital experiences so smooth, they should come with a jazz soundtrack.";
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <div
      style={{
        "--background": "30 41 59",
        "--highlight": "255 255 255",
        "--bg-color":
          "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
      }}
      className="shimmer-container relative flex aspect-[2/1] w-full max-w-[1320px] flex-col items-center justify-center rounded-xl border border-transparent  text-center
      [background:padding-box_var(--bg-color),border-box_var(--border-color)] overflow-hidden"
    >
      <motion.div
        animate={{
          x: ["0px", "1320px"],
          opacity: [0.5, 0.8, 1, 0.7, 0.5, 0.3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="shimmer-effect absolute inset-0 w-10 h-[3px]"
        style={{
          background: `linear-gradient(270deg,rgba(255,255,255,.6) 0%,hsla(0,0%,100%,0) 100%)`,
        }}
      />
      <div className="w-[100%] h-[100%] main-hero">
        <motion.p className="z-10 relative p-14 font-title text-5xl text-mint text-left max-w-screen-lg">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              onHoverStart={() => setHoverIndex(index)}
              onHoverEnd={() => setHoverIndex(null)}
              style={{
                WebkitTextStroke:
                  hoverIndex === index ? "3px currentColor" : "0px",
              }}
              whileHover={{ scaleX: 1.2, paddingInline: 0.8 }}
              transition={{ duration: 1 }}
              className="inline-block cursor-pointer whitespace-pre-wrap"
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
}
