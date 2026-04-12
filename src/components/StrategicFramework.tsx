import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Server, 
  Shield, 
  Workflow, 
  BrainCircuit, 
  Cpu, 
  Search, 
  Lightbulb, 
  Layers, 
  Settings, 
  Rocket, 
  BarChart3,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export function StrategicFramework() {
  const [activeCapability, setActiveCapability] = React.useState<string>("transformation");
  const [isAbsorbing, setIsAbsorbing] = React.useState(false);
  const [paths, setPaths] = React.useState<Record<string, string>>({});
  const [loopPath, setLoopPath] = React.useState<string>("");

  const containerRef = React.useRef<HTMLDivElement>(null);
  const transformationRef = React.useRef<HTMLDivElement>(null);
  const nodeRefs = React.useRef<Record<string, HTMLDivElement | null>>({});

  const containerRef2 = React.useRef<HTMLDivElement>(null);
  const nodeRefs2 = React.useRef<Record<number, HTMLDivElement | null>>({});

  const updatePaths = React.useCallback(() => {
    // Part 1 Paths
    if (containerRef.current && transformationRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const targetRect = transformationRef.current.getBoundingClientRect();
      
      const targetX = targetRect.left + targetRect.width / 2 - containerRect.left;
      const targetY = targetRect.top + targetRect.height / 2 - containerRect.top;

      const newPaths: Record<string, string> = {};

      Object.entries(nodeRefs.current).forEach(([id, el]) => {
        const element = el as HTMLDivElement | null;
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const startX = rect.left + rect.width / 2 - containerRect.left;
        const startY = rect.top + rect.height / 2 - containerRect.top;

        const cp1y = startY + (targetY - startY) * 0.4;
        const cp2y = startY + (targetY - startY) * 0.6;
        
        newPaths[id] = `M ${startX} ${startY} C ${startX} ${cp1y}, ${targetX} ${cp2y}, ${targetX} ${targetY}`;
      });

      setPaths(newPaths);
    }

    // Part 2 Loop Path
    if (containerRef2.current) {
      const containerRect = containerRef2.current.getBoundingClientRect();
      const centers = [1, 2, 3, 4, 5, 6].map(id => {
        const el = nodeRefs2.current[id];
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top
        };
      }).filter(Boolean) as {x: number, y: number}[];

      if (centers.length === 6) {
        const yOffset = 140; 
        const x1 = centers[0].x;
        const y1 = centers[0].y;
        const x6 = centers[5].x;
        const y6 = centers[5].y;

        // Check if wrapped (tablet layout)
        const isWrapped = centers[3].y > centers[0].y + 50;

        let path = "";
        if (!isWrapped) {
          path = `M ${x1} ${y1} L ${centers[1].x} ${centers[1].y} L ${centers[2].x} ${centers[2].y} L ${centers[3].x} ${centers[3].y} L ${centers[4].x} ${centers[4].y} L ${x6} ${y6} C ${x6 + 60} ${y6}, ${x6 + 60} ${y6 + yOffset}, ${x6} ${y6 + yOffset} L ${x1} ${y1 + yOffset} C ${x1 - 60} ${y1 + yOffset}, ${x1 - 60} ${y1}, ${x1} ${y1}`;
        } else {
          // Tablet 2-row flow: 1-2-3 -> 4-5-6 -> 1
          path = `M ${x1} ${y1} L ${centers[1].x} ${centers[1].y} L ${centers[2].x} ${centers[2].y} L ${centers[3].x} ${centers[3].y} L ${centers[4].x} ${centers[4].y} L ${x6} ${y6} C ${x6 + 60} ${y6}, ${x6 + 60} ${y1}, ${x1} ${y1}`;
        }
        setLoopPath(path);
      }
    }
  }, []);

  React.useEffect(() => {
    updatePaths();
    
    const resizeObserver = new ResizeObserver(() => {
      updatePaths();
    });

    if (containerRef.current) resizeObserver.observe(containerRef.current);
    if (containerRef2.current) resizeObserver.observe(containerRef2.current);

    window.addEventListener('resize', updatePaths);
    const timer = setTimeout(updatePaths, 200);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updatePaths);
      clearTimeout(timer);
    };
  }, [updatePaths]);

  // Trigger absorption effect periodically or based on flow
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAbsorbing(true);
      setTimeout(() => setIsAbsorbing(false), 500);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const capabilities = [
    {
      id: "infra",
      title: "Infrastructure",
      icon: Server,
      color: "cyan"
    },
    {
      id: "data",
      title: "Data Governance",
      icon: Shield,
      color: "cyan"
    },
    {
      id: "business",
      title: "Business Understanding",
      icon: Workflow,
      color: "cyan"
    },
    {
      id: "automation",
      title: "Automation & AI",
      icon: BrainCircuit,
      color: "cyan"
    }
  ];

  return (
    <section className="pt-12 pb-0 px-8 lg:px-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-cyan/2 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-display font-bold mb-6"
          >
            AI Transformation Framework
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-2xl mx-auto text-lg"
          >
            How infrastructure, data, business insight, and intelligent automation come together to drive operational transformation.
          </motion.p>
        </div>

        {/* PART 1 — AI TRANSFORMATION CAPABILITY FRAMEWORK */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <h3 className="text-sm font-mono text-accent-cyan uppercase tracking-[0.3em]">Part 1: Capability Framework</h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <div ref={containerRef} className="flex flex-col items-center relative min-h-[600px]">
            {/* Data Flow SVG Background (Desktop) */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full">
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-accent-cyan)" stopOpacity="0" />
                    <stop offset="50%" stopColor="var(--color-accent-cyan)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="var(--color-accent-violet)" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                
                {/* Connection Lines */}
                {capabilities.map((cap, i) => {
                  const path = paths[cap.id];
                  if (!path) return null;

                  return (
                    <g key={`flow-${cap.id}`}>
                      <motion.path
                        d={path}
                        fill="none"
                        stroke="url(#flowGradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: activeCapability === cap.id ? 1 : 0.3 }}
                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                      />
                      
                      {/* Particles */}
                      <motion.circle
                        r="2"
                        fill="var(--color-accent-cyan)"
                        className="shadow-[0_0_10px_var(--color-accent-cyan)]"
                      >
                        <animateMotion
                          dur={`${3 - (activeCapability === cap.id ? 1 : 0)}s`}
                          repeatCount="indefinite"
                          path={path}
                        />
                      </motion.circle>
                      <motion.circle
                        r="1.5"
                        fill="var(--color-accent-violet)"
                        opacity="0.6"
                      >
                        <animateMotion
                          dur={`${3 - (activeCapability === cap.id ? 1 : 0)}s`}
                          begin="0.5s"
                          repeatCount="indefinite"
                          path={path}
                        />
                      </motion.circle>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Top Row: Capability Nodes */}
            <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mb-12 relative z-10">
              {capabilities.map((item, i) => (
                <motion.div
                  key={item.id}
                  ref={(el) => (nodeRefs.current[item.id] = el)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onMouseEnter={() => setActiveCapability(item.id)}
                  className={cn(
                    "flex flex-col items-center gap-4 cursor-help group transition-all duration-500",
                    activeCapability === item.id ? "scale-105" : "hover:scale-105"
                  )}
                >
                  <div className={cn(
                    "w-20 h-20 lg:w-24 lg:h-24 rounded-full glass border flex items-center justify-center transition-all duration-500 relative",
                    activeCapability === item.id 
                      ? "border-accent-cyan/60 shadow-[0_0_30px_rgba(0,245,255,0.3)]" 
                      : "border-white/10 hover:border-accent-cyan/40"
                  )}>
                    {/* Pulse Glow */}
                    <div className={cn(
                      "absolute inset-0 rounded-full bg-accent-cyan/5 transition-opacity duration-500",
                      activeCapability === item.id ? "opacity-100 animate-pulse-slow" : "opacity-0"
                    )} />
                    <item.icon className={cn(
                      "h-8 w-8 lg:h-10 lg:w-10 transition-colors duration-500",
                      activeCapability === item.id ? "text-accent-cyan" : "text-white/50"
                    )} />
                  </div>
                  <span className={cn(
                    "text-xs font-display font-bold uppercase tracking-widest text-center max-w-[120px] transition-colors duration-500",
                    activeCapability === item.id ? "text-white" : "text-white/40"
                  )}>
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Dynamic Description Panel */}
            <div className="w-full max-w-[700px] mb-16 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 rounded-3xl border border-accent-cyan/20 shadow-[0_0_40px_rgba(0,245,255,0.1)] relative overflow-hidden text-center"
                >
                  <div className="absolute inset-0 bg-accent-cyan/5 pointer-events-none" />
                  
                  <h4 className="text-xl font-display font-bold text-white mb-4 uppercase tracking-wider">
                    {(() => {
                      const titles: Record<string, string> = {
                        infra: "Infrastructure Foundation",
                        data: "Data Governance & Analytics",
                        business: "Business & Process Understanding",
                        automation: "Automation & AI",
                        transformation: "AI Transformation"
                      };
                      return titles[activeCapability];
                    })()}
                  </h4>
                  <p className="text-white/70 leading-relaxed text-base lg:text-lg max-w-2xl mx-auto">
                    {(() => {
                      const descs: Record<string, string> = {
                        infra: "Understanding enterprise IT environments including data centers, system administration, and operational infrastructure that support scalable digital systems.",
                        data: "Establishing trusted data foundations through governance, data quality management, and analytics capabilities.",
                        business: "Analyzing operational workflows and aligning technology solutions with business objectives and productivity goals.",
                        automation: "Designing intelligent automation, AI assistants, and AI-driven workflows that transform insights into automated execution.",
                        transformation: "Integrating infrastructure, trusted data, business insight, and intelligent automation into scalable systems that improve productivity, speed, and operational performance."
                      };
                      return descs[activeCapability];
                    })()}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Node: AI Transformation */}
            <motion.div
              ref={transformationRef}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
              onMouseEnter={() => setActiveCapability("transformation")}
              className={cn(
                "flex flex-col items-center gap-6 cursor-help group transition-all duration-700 relative z-10",
                activeCapability === "transformation" ? "scale-110" : "hover:scale-105"
              )}
            >
              <div className={cn(
                "w-32 h-32 lg:w-40 lg:h-40 rounded-full glass border flex items-center justify-center transition-all duration-700 relative",
                activeCapability === "transformation" || isAbsorbing
                  ? "border-accent-violet/60 shadow-[0_0_50px_rgba(138,43,226,0.4)]" 
                  : "border-accent-violet/20",
                isAbsorbing && "brightness-125"
              )}>
                {/* Rotating Halo Ring */}
                <motion.div 
                  className="absolute -inset-4 rounded-full border border-dashed border-accent-violet/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Expanding Ring (Pulse) */}
                <motion.div 
                  className="absolute inset-0 rounded-full border border-accent-violet/40"
                  animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />

                {/* Absorption Ripple */}
                <AnimatePresence>
                  {isAbsorbing && (
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 1 }}
                      animate={{ scale: 2, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 rounded-full border-2 border-accent-cyan/40"
                    />
                  )}
                </AnimatePresence>

                {/* Core Energy Effect */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent-violet/20 via-transparent to-accent-cyan/10 animate-pulse-slow overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                <Cpu className={cn(
                  "h-12 w-12 lg:h-16 lg:w-16 transition-colors duration-700 relative z-10",
                  activeCapability === "transformation" ? "text-accent-violet" : "text-accent-violet/40"
                )} />
              </div>
              <span className={cn(
                "text-lg lg:text-xl font-display font-bold uppercase tracking-[0.3em] transition-colors duration-700",
                activeCapability === "transformation" ? "text-white" : "text-white/40"
              )}>
                AI Transformation
              </span>
            </motion.div>
          </div>
        </div>        {/* PART 2 — AI TRANSFORMATION OPERATING MODEL */}
        <div>
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <h3 className="text-sm font-mono text-accent-violet uppercase tracking-[0.3em]">Part 2: Operating Model</h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <div ref={containerRef2} className="relative pb-40 px-12">
            {/* Loop Flow SVG (Desktop/Tablet) */}
            <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full">
                <defs>
                  <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-accent-cyan)" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="var(--color-accent-violet)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="var(--color-accent-cyan)" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                
                {loopPath && (
                  <g>
                    <motion.path
                      d={loopPath}
                      fill="none"
                      stroke="url(#loopGradient)"
                      strokeWidth="1.5"
                      strokeDasharray="10 10"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    {/* Animated Particles */}
                    {[0, 1, 2, 3].map((i) => (
                      <motion.circle
                        key={`loop-particle-${i}`}
                        r="3"
                        fill="var(--color-accent-cyan)"
                        className="shadow-[0_0_15px_var(--color-accent-cyan)]"
                      >
                        <animateMotion
                          dur="10s"
                          repeatCount="indefinite"
                          begin={`${i * 2.5}s`}
                          path={loopPath}
                        />
                      </motion.circle>
                    ))}
                  </g>
                )}
              </svg>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {[
                {
                  id: 1,
                  title: "Discovery & Business Understanding",
                  desc: "Identify operational challenges, inefficiencies, and transformation opportunities.",
                  icon: Search
                },
                {
                  id: 2,
                  title: "AI Opportunity Identification",
                  desc: "Evaluate where AI and automation can deliver measurable productivity gains.",
                  icon: Lightbulb
                },
                {
                  id: 3,
                  title: "Solution Design",
                  desc: "Design scalable AI-powered workflows and system integrations.",
                  icon: Layers
                },
                {
                  id: 4,
                  title: "Automation & AI Implementation",
                  desc: "Develop automation pipelines, AI agents, and intelligent assistants.",
                  icon: Settings
                },
                {
                  id: 5,
                  title: "Operational Deployment",
                  desc: "Deploy AI solutions into real business environments and workflows.",
                  icon: Rocket
                },
                {
                  id: 6,
                  title: "Continuous Optimization",
                  desc: "Monitor performance, gather feedback, and continuously improve AI systems.",
                  icon: BarChart3
                }
              ].map((step, i) => (
                <motion.div
                  key={step.id}
                  ref={(el) => (nodeRefs2.current[step.id] = el)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="glass-card px-3 py-4 rounded-xl border border-white/10 group-hover:border-accent-cyan/40 transition-all duration-500 h-full min-h-[140px] flex flex-col items-center text-center relative overflow-hidden">
                    {/* Active Pulse Effect */}
                    <div className="absolute inset-0 bg-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform relative">
                      <step.icon className="h-3 w-3 text-accent-cyan" />
                      {/* Ripple */}
                      <motion.div 
                        className="absolute inset-0 rounded-lg border border-accent-cyan/30"
                        animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      />
                    </div>

                    <div className="absolute top-2 right-3 text-[8px] font-mono text-white/20 font-bold">
                      0{step.id}
                    </div>

                    <h4 className="text-[10px] font-display font-bold text-white mb-1.5 leading-tight group-hover:text-accent-cyan transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-[9px] text-white/40 leading-snug">
                      {step.desc}
                    </p>
                  </div>

                  {/* Mobile Arrow */}
                  {i < 5 && (
                    <div className="md:hidden flex justify-center my-4 text-white/10">
                      <ArrowRight className="rotate-90 h-6 w-6" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
