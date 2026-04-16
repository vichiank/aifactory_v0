"use client"

import * as React from "react";
import { motion } from "motion/react";
import { Database, Cpu, Globe, Server, Shield, Zap } from "lucide-react";

export function ArchitectureDiagram() {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-20 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        
        {/* Input Sources */}
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-2">Input Layer</h3>
            <div className="h-px w-12 bg-cyan-500/50 mx-auto" />
          </div>
          
          {[
            { name: "Web APIs", icon: Globe },
            { name: "User Data", icon: Server },
            { name: "Legacy Systems", icon: Database }
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-4 rounded-xl border border-white/10 flex items-center gap-4 group hover:border-cyan-500/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                <item.icon className="h-5 w-5 text-white/70 group-hover:text-cyan-400" />
              </div>
              <span className="text-sm font-medium text-white/80">{item.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Processing Layer */}
        <div className="relative flex flex-col items-center">
          {/* Connecting Lines (Visual only, SVG below handles real ones) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M 0 20 Q 50 20 50 50"
                fill="none"
                stroke="url(#line-gradient)"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M 0 50 Q 50 50 50 50"
                fill="none"
                stroke="url(#line-gradient)"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M 0 80 Q 50 80 50 50"
                fill="none"
                stroke="url(#line-gradient)"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
                  <stop offset="50%" stopColor="rgba(6, 182, 212, 0.5)" />
                  <stop offset="100%" stopColor="rgba(6, 182, 212, 0.8)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative z-10 w-48 h-48 rounded-full glass border-2 border-cyan-500/30 flex flex-col items-center justify-center text-center p-6 shadow-[0_0_50px_rgba(6,182,212,0.2)]"
          >
            <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping duration-[3000ms]" />
            <Cpu className="h-10 w-10 text-cyan-400 mb-3" />
            <h3 className="text-sm font-display font-bold text-white uppercase tracking-tighter">LLM Processing</h3>
            <p className="text-[10px] text-white/40 mt-1 font-mono">Cognitive Layer</p>
          </motion.div>

          <div className="mt-8 flex gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-400 uppercase">
              <Zap className="h-3 w-3" />
              <span>Real-time</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[10px] font-mono text-violet-400 uppercase">
              <Shield className="h-3 w-3" />
              <span>Secure</span>
            </div>
          </div>
        </div>

        {/* Enterprise Database */}
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-sm font-mono text-violet-400 uppercase tracking-widest mb-2">Storage Layer</h3>
            <div className="h-px w-12 bg-violet-500/50 mx-auto" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center group hover:border-violet-500/50 transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
              <Database className="h-8 w-8 text-white/70 group-hover:text-violet-400" />
            </div>
            <h4 className="text-lg font-display font-semibold text-white">Enterprise Database</h4>
            <p className="text-xs text-white/40 mt-2 leading-relaxed">
              Vector-optimized storage for high-dimensional embeddings and relational metadata.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
