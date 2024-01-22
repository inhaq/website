import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
  { id: "#about", label: "About" },
  { id: "#stack", label: "Stack" },
  { id: "#work", label: "Work" },
  { id: "#education", label: "Education" },
  { id: "#projects", label: "Projects" },
  { id: "#contact", label: "Contact" },
];

export default function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex space-x-1 max-h-8">
      {tabs.map((tab) => (
        <a
          key={tab.id}
          href={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-forsythia"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-forsythia outline-mint transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-saffron mix-blend-overlay opacity-30 text-forsythia"
              style={{ borderRadius: 9999, opacity: 0.25 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </a>
      ))}
    </div>
  );
}
