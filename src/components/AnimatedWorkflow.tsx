import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Database, 
  Settings, 
  BrainCircuit, 
  BarChart3, 
  ArrowDown,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkflowNodeProps {
  icon: React.ElementType;
  title: string;
  description: string;
  isActive: boolean;
  isAI?: boolean;
}

const WorkflowNode = ({ icon: Icon, title, description, isActive, isAI }: WorkflowNodeProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        scale: isActive ? 1.05 : 1,
        borderColor: isActive ? (isAI ? "rgba(167, 139, 250, 0.5)" : "rgba(34, 211, 238, 0.5)") : "rgba(255, 255, 255, 0.08)",
        backgroundColor: isActive ? (isAI ? "rgba(139, 92, 246, 0.1)" : "rgba(6, 182, 212, 0.1)") : "rgba(15, 23, 42, 0.6)",
      }}
      className={cn(
        "relative w-64 p-5 rounded-2xl border glass transition-all duration-500 group cursor-help",
        isAI && "shadow-[0_0_30px_rgba(139,92,246,0.1)]"
      )}
    >
      <div className="flex items-center gap-4">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500",
          isActive 
            ? (isAI ? "bg-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]" : "bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)]")
            : "bg-white/5 text-white/40"
        )}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h4 className={cn(
            "text-sm font-bold transition-colors duration-500",
            isActive ? "text-white" : "text-white/40"
          )}>
            {title}
          </h4>
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mt-0.5">
            {isAI ? "Intelligence" : "System Node"}
          </p>
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 -right-4 translate-x-full top-1/2 -translate-y-1/2 w-48 p-3 glass rounded-xl border border-white/10 z-50 pointer-events-none">
        <p className="text-xs text-white/70 leading-relaxed">
          {description}
        </p>
      </div>

      {isAI && (
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-2xl bg-violet-500/20 blur-xl -z-10"
        />
      )}
    </motion.div>
  );
};

const DataFlowLine = ({ active }: { active: boolean }) => {
  return (
    <div className="relative h-16 w-px flex flex-col items-center">
      <div className="absolute inset-0 w-px bg-gradient-to-b from-white/5 via-white/20 to-white/5" />
      
      {/* Animated Particles */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 80, opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-1 h-4 bg-gradient-to-b from-cyan-400 to-transparent blur-[1px] rounded-full"
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 80, opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5,
              }}
              className="absolute w-1 h-4 bg-gradient-to-b from-violet-400 to-transparent blur-[1px] rounded-full"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AnimatedWorkflowProps {
  steps?: {
    label: string;
    icon: React.ElementType;
    sub: string;
    description?: string;
  }[];
}

export function AnimatedWorkflow({ steps: customSteps }: AnimatedWorkflowProps) {
  const [activeStep, setActiveStep] = React.useState(0);

  const defaultSteps = [
    {
      icon: Database,
      label: "Data Sources",
      sub: "APIs / Databases",
      description: "Aggregating raw data from marketing platforms, internal databases, and operational systems."
    },
    {
      icon: Settings,
      label: "Automation Workflow",
      sub: "Data Pipeline",
      description: "Orchestration engine managing data collection, cleaning, and transformation pipelines."
    },
    {
      icon: BrainCircuit,
      label: "AI Engine",
      sub: "Analysis & Insight",
      description: "Advanced LLM models performing semantic analysis, trend detection, and insight synthesis."
    },
    {
      icon: BarChart3,
      label: "Business Output",
      sub: "Report / Dashboard",
      description: "Final delivery of automated reports, dashboards, and strategic decision support data."
    }
  ];

  const steps = customSteps || defaultSteps;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="py-12 flex flex-col items-center relative w-full max-w-2xl mx-auto">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center w-full">
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            <WorkflowNode
              icon={step.icon}
              title={step.label}
              description={step.description || step.sub}
              isActive={activeStep === index}
              isAI={index === 2} // Assuming the 3rd step is always AI for this layout
            />
            {index < steps.length - 1 && (
              <DataFlowLine active={activeStep === index || activeStep === (index + 1)} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Legend / Status */}
      <div className="mt-12 flex items-center gap-8 px-6 py-3 glass rounded-full border border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Data Flowing</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)] animate-pulse" />
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">AI Active</span>
        </div>
      </div>
    </div>
  );
}
