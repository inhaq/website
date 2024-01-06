import { motion } from "framer-motion";

export default function Shimmer() {
  return (
    <div
      style={{
        "--background": "30 41 59",
        "--highlight": "255 255 255",
        "--bg-color":
          "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
        "--border-color": `linear-gradient(0deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0) 100%)
          `,
      }}
      className="relative flex aspect-[2/1] w-full max-w-md flex-col items-center justify-center rounded-xl border border-transparent p-8 text-center
      [background:padding-box_var(--bg-color),border-box_var(--border-color)] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          x: ["-100%", "100%"],
          opacity: 0.5,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          opacity: "0.5",
        }}
        className="absolute inset-y-0 w-full h-[1px]"
        style={{
          background: `linear-gradient(296deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 5%,
            rgba(255, 255, 255, 0) 10%)`,
        }}
      />
      <p className="text-xl font-medium text-white z-10 relative">
        Hello, gradient
      </p>
    </div>
  );
}
