import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
  { id: "#about", label: "About" },
  { id: "#projects", label: "Projects" },
  { id: "#contact", label: "Contact" },
];

export default function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex space-x-1 max-h-12">
      {tabs.map((tab) => (
        <a
          key={tab.id}
          href={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-saffron"
          } relative rounded-full font-title font-bold px-3 py-1.5 text-base text-forsythia outline-mint transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-forsythia mix-blend-difference text-forsythia"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </a>
      ))}
    </div>
  );
}
