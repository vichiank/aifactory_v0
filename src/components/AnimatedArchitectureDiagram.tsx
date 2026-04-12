import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Database, 
  Globe, 
  Cpu, 
  Workflow, 
  Layout, 
  FileSpreadsheet, 
  Bell, 
  Zap, 
  Layers, 
  Target, 
  BarChart3,
  Search,
  MessageSquare,
  ShieldCheck,
  Building2,
  Wallet
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Node {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  x: number;
  y: number;
  isAI?: boolean;
}

interface Layer {
  id: string;
  title: string;
  y: number;
  nodes: Node[];
}

const LAYERS: Layer[] = [
  {
    id: "sources",
    title: "DATA SOURCES",
    y: 12,
    nodes: [
      { id: "marketing", title: "Marketing Platforms", subtitle: "Connects to Google, Meta, and LinkedIn APIs.", icon: Globe, x: 20, y: 12 },
      { id: "crm", title: "CRM Systems", subtitle: "Syncs customer data from Salesforce and HubSpot.", icon: UsersIcon, x: 40, y: 12 },
      { id: "finance", title: "Financial Systems", subtitle: "Integrates with ERP and billing platforms.", icon: Wallet, x: 60, y: 12 },
      { id: "db", title: "Internal Databases", subtitle: "Direct access to proprietary operational data.", icon: Database, x: 80, y: 12 },
    ]
  },
  {
    id: "pipeline",
    title: "DATA PIPELINE",
    y: 37,
    nodes: [
      { id: "integration", title: "Data Integration", subtitle: "Normalizes and cleans fragmented data streams.", icon: Layers, x: 35, y: 37 },
      { id: "workflow", title: "Automation Workflow", subtitle: "Orchestrates data movement and triggers AI.", icon: Workflow, x: 65, y: 37 },
    ]
  },
  {
    id: "ai",
    title: "AI INTELLIGENCE",
    y: 62,
    nodes: [
      { id: "ai_engine", title: "AI Analysis Engine", subtitle: "Processes data and generates core insights.", icon: Cpu, x: 35, y: 62, isAI: true },
      { id: "insights", title: "Insight Generation", subtitle: "Synthesizes analysis into strategic advice.", icon: Target, x: 65, y: 62 },
    ]
  },
  {
    id: "impact",
    title: "BUSINESS IMPACT",
    y: 87,
    nodes: [
      { id: "reports", title: "Automated Reports", subtitle: "Generated PDF and slide decks for teams.", icon: FileSpreadsheet, x: 25, y: 87 },
      { id: "dashboard", title: "Dashboards", subtitle: "Real-time visualization of performance.", icon: Layout, x: 50, y: 87 },
      { id: "decision", title: "Decision Support", subtitle: "Smart alerts and strategic recommendations.", icon: ShieldCheck, x: 75, y: 87 },
    ]
  }
];

// Generate connections between adjacent layers
const CONNECTIONS: { from: string; to: string }[] = [];
for (let i = 0; i < LAYERS.length - 1; i++) {
  const currentLayer = LAYERS[i];
  const nextLayer = LAYERS[i + 1];
  currentLayer.nodes.forEach(fromNode => {
    nextLayer.nodes.forEach(toNode => {
      CONNECTIONS.push({ from: fromNode.id, to: toNode.id });
    });
  });
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function AnimatedArchitectureDiagram() {
  const [hoveredNodeId, setHoveredNodeId] = React.useState<string | null>(null);

  const allNodes = LAYERS.flatMap(l => l.nodes);

  return (
    <div className="w-full bg-[#0B0F14] p-6 lg:p-10 rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-violet/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative h-[800px] w-full max-w-5xl mx-auto">
        {/* Layer Group Titles & Containers */}
        {LAYERS.map((layer) => (
          <div 
            key={layer.id}
            style={{ top: `${layer.y}%` }}
            className="absolute left-1/2 -translate-x-1/2 w-full -translate-y-1/2 z-0"
          >
            {/* Group Container with Relative Positioning */}
            <div className="relative w-full h-36 glass-card rounded-[2.5rem] border border-white/5 opacity-30">
              {/* Group Title - Positioned strictly at the top of the container */}
              <div className="absolute -top-6 left-6 lg:left-10">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-3 bg-accent-cyan rounded-full shadow-[0_0_10px_rgba(0,245,255,0.8)]" />
                  <h3 className="text-[10px] lg:text-xs font-mono text-accent-cyan uppercase tracking-[0.4em] font-bold drop-shadow-[0_0_8px_rgba(0,245,255,0.4)]">
                    {layer.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10">
          <defs>
            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#00F5FF" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {CONNECTIONS.map((conn, idx) => {
            const fromNode = allNodes.find(n => n.id === conn.from);
            const toNode = allNodes.find(n => n.id === conn.to);
            if (!fromNode || !toNode) return null;

            const isHighlighted = hoveredNodeId === conn.from || hoveredNodeId === conn.to;
            const path = `M ${fromNode.x}% ${fromNode.y}% L ${toNode.x}% ${toNode.y}%`;

            return (
              <React.Fragment key={`${conn.from}-${conn.to}`}>
                {/* Static Base Line */}
                <path
                  d={path}
                  stroke={isHighlighted ? "rgba(0, 245, 255, 0.2)" : "rgba(255,255,255,0.03)"}
                  strokeWidth={isHighlighted ? "2" : "1"}
                  fill="none"
                  className="transition-all duration-300"
                />
                
                {/* Animated Flow Line */}
                <motion.path
                  d={path}
                  stroke="url(#flow-gradient)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="10 40"
                  animate={{
                    strokeDashoffset: [100, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: idx * 0.1
                  }}
                  className={cn("opacity-20", isHighlighted && "opacity-60")}
                />

                {/* Flowing Particles */}
                {idx % 3 === 0 && (
                  <motion.circle
                    r="1.5"
                    fill="#00F5FF"
                    filter="url(#glow)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                  >
                    <animateMotion
                      dur={`${3 + Math.random() * 2}s`}
                      repeatCount="indefinite"
                      path={path}
                    />
                  </motion.circle>
                )}
              </React.Fragment>
            );
          })}
        </svg>

        {/* Architecture Nodes */}
        {allNodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            onMouseEnter={() => setHoveredNodeId(node.id)}
            onMouseLeave={() => setHoveredNodeId(null)}
          >
            <div className="relative group cursor-pointer">
              {/* Outer Glow */}
              <div className={cn(
                "absolute inset-0 rounded-2xl blur-xl opacity-0 transition-opacity duration-500",
                node.isAI ? "bg-accent-violet opacity-20" : "bg-accent-cyan opacity-10",
                hoveredNodeId === node.id && "opacity-40"
              )} />

              {/* Node Card - Reduced size to 110x110 */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "w-[110px] h-[110px] p-2 rounded-2xl glass border flex flex-col items-center justify-center gap-1.5 transition-all duration-500 relative z-10",
                  node.isAI 
                    ? "border-accent-violet/40 shadow-[0_0_30px_rgba(138,43,226,0.3)] bg-accent-violet/10" 
                    : "border-white/10 group-hover:border-accent-cyan/50 group-hover:shadow-[0_0_20px_rgba(0,245,255,0.15)]"
                )}
              >
                {/* Icon Container */}
                <div className={cn(
                  "w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center transition-colors duration-500",
                  node.isAI ? "bg-accent-violet/10" : "group-hover:bg-accent-cyan/10"
                )}>
                  <node.icon className={cn(
                    "h-5 w-5 transition-colors duration-500",
                    node.isAI ? "text-accent-violet" : "text-white/40 group-hover:text-accent-cyan group-hover:brightness-125"
                  )} />
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col items-center gap-0.5 max-w-[100px] text-center">
                  <h4 className="text-[10px] font-bold text-white leading-tight uppercase tracking-tight">
                    {node.title}
                  </h4>
                  <p className="text-[8px] text-white/40 leading-tight opacity-70 line-clamp-2">
                    {node.subtitle}
                  </p>
                </div>

                {/* AI Engine Pulse */}
                {node.isAI && (
                  <div className="absolute inset-0 rounded-2xl animate-pulse bg-accent-violet/5 pointer-events-none" />
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
