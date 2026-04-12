import * as React from "react";
import { motion } from "motion/react";

export function ContactHeader() {
  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Faint background layer of abstract connecting lines and nodes */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="nodes-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="#00f5ff" />
              <circle cx="120" cy="80" r="1.5" fill="#9d00ff" />
              <circle cx="60" cy="160" r="1.5" fill="#00f5ff" />
              <circle cx="160" cy="140" r="1.5" fill="#9d00ff" />
              <line x1="20" y1="20" x2="120" y2="80" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="120" y1="80" x2="160" y2="140" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="20" y1="20" x2="60" y2="160" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="60" y1="160" x2="160" y2="140" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nodes-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <span className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-sans text-white leading-[1] tracking-tighter">
            Let's Build the Future
          </span>
          <span className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-sans leading-[1] tracking-tighter bg-gradient-to-r from-[#00f5ff] to-[#9d00ff] bg-clip-text text-transparent">
            Together.
          </span>
        </motion.div>
      </div>
    </div>
  );
}
