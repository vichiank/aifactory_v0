import * as React from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Cpu, 
  Database, 
  Globe, 
  Layout, 
  Zap,
  TrendingUp,
  Workflow,
  ArrowRight,
  Target,
  Layers,
  Table as TableIcon,
  Lightbulb,
  Shield,
  ArrowDown,
  BrainCircuit
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import { AnimatedWorkflow } from "./AnimatedWorkflow";

export interface ProjectCaseStudyProps {
  onBack: () => void;
  title: string;
  description: string;
  domain: string;
  tags: string[];
  heroIcon: React.ElementType;
  heroBanner?: React.ReactNode;
  businessContext: string;
  businessIcon?: React.ElementType;
  challenges: string[];
  aiOpportunity: {
    title: string;
    description: string;
    features: string[];
  };
  solutionOverview: string;
  workflowSteps: {
    label: string;
    icon: React.ElementType;
    sub: string;
    description?: string;
  }[];
  architecture: {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    position: { x: number; y: number };
    connections?: string[];
  }[];
  techStack?: {
    category: string;
    tools: string[];
  }[];
  impact: {
    label: string;
    value: string;
    desc: string;
  }[];
  transformationInsight?: string;
  children?: React.ReactNode;
}

export function ProjectCaseStudy({
  onBack,
  title,
  description,
  domain,
  tags,
  heroIcon: HeroIcon,
  heroBanner,
  businessContext,
  businessIcon: BusinessIcon = Globe,
  challenges,
  aiOpportunity,
  solutionOverview,
  workflowSteps,
  architecture,
  techStack,
  impact,
  transformationInsight,
  children
}: ProjectCaseStudyProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen pb-20 selection:bg-accent-cyan/30"
    >
      {/* Header */}
      <header className="sticky top-0 z-30 glass border-b border-accent-cyan/20 px-8 py-4 flex items-center justify-between">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="text-white/60 hover:text-accent-cyan hover:bg-white/5 gap-2 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Button>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan font-mono text-[10px] uppercase tracking-wider">Use Cases</Badge>
          <Badge variant="outline" className="bg-accent-violet/10 border-accent-violet/20 text-accent-violet font-mono text-[10px] uppercase tracking-wider">AI Transformation</Badge>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-8 pt-16">
        {/* 1. Use Case (Hero Section) */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start justify-between mb-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.2)]">
                    <HeroIcon className="text-accent-cyan h-6 w-6 animate-pulse" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-[0.3em] mb-1">{domain}</span>
                    <h1 className="text-4xl lg:text-6xl font-display font-bold tracking-tight text-white neon-text-cyan">
                      {title}
                    </h1>
                  </div>
                </div>
                <p className="text-xl lg:text-2xl text-white/70 leading-relaxed font-light">
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <Badge key={tag} className="bg-white/5 border-white/10 text-white/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {heroBanner ? (
              <div className="rounded-[2.5rem] overflow-hidden border border-white/10 relative shadow-2xl shadow-accent-cyan/5 group">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-10" />
                {heroBanner}
              </div>
            ) : (
              <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 relative bg-white/[0.02] flex items-center justify-center group">
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <HeroIcon className="w-32 h-32 text-white/5 group-hover:text-accent-cyan/10 transition-colors duration-700" />
              </div>
            )}
          </motion.div>
        </section>

        {/* 2. Business Context */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 lg:p-16 rounded-[3rem] border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-violet/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                <BusinessIcon className="h-5 w-5" />
                Business Context
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3">
                  <p className="text-xl lg:text-2xl text-white/80 leading-relaxed font-light">
                    {businessContext}
                  </p>
                </div>
                <div className="lg:col-span-2 relative aspect-square">
                  {/* Floating Nodes Animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute w-64 h-64 rounded-full border border-white/5 animate-[spin_30s_linear_infinite_reverse]" />
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full bg-accent-cyan/20 border border-accent-cyan/40"
                        animate={{
                          x: [Math.cos(i) * 100, Math.cos(i + 2) * 120, Math.cos(i) * 100],
                          y: [Math.sin(i) * 100, Math.sin(i + 2) * 120, Math.sin(i) * 100],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 10 + i * 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    ))}
                    <BusinessIcon className="w-16 h-16 text-accent-cyan opacity-20" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 3. Operational Challenge */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-red-400/80 uppercase tracking-[0.3em] mb-12 text-center flex items-center justify-center gap-3">
              <AlertCircleIcon className="h-5 w-5" />
              Operational Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-red-400/20 transition-all duration-500 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-red-400/5 border border-red-400/10 flex items-center justify-center group-hover:bg-red-400/10 transition-colors">
                      <Zap className="h-5 w-5 text-red-400/40 group-hover:text-red-400 transition-colors" />
                    </div>
                    <p className="text-lg text-white/60 group-hover:text-white/90 transition-colors leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 4. AI Opportunity */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 lg:p-20 rounded-[3.5rem] border border-accent-violet/30 bg-accent-violet/[0.02] relative overflow-hidden group shadow-[0_0_50px_rgba(138,43,226,0.1)]"
          >
            {/* Animated Data Flow Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full">
                <motion.path
                  d="M -100 100 Q 200 0 500 200 T 1200 100"
                  fill="none"
                  stroke="url(#violet-gradient)"
                  strokeWidth="2"
                  animate={{ strokeDashoffset: [1000, 0] }}
                  strokeDasharray="10 20"
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="violet-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#8A2BE2" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-1">
                  <h2 className="text-sm font-mono text-accent-violet uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                    <Lightbulb className="h-5 w-5" />
                    AI Opportunity
                  </h2>
                  <h3 className="text-3xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight">
                    {aiOpportunity.title}
                  </h3>
                  <p className="text-xl text-white/60 leading-relaxed mb-10">
                    {aiOpportunity.description}
                  </p>
                </div>
                <div className="flex-1 grid grid-cols-1 gap-4 w-full">
                  {aiOpportunity.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-violet/40 transition-all group/item">
                      <div className="w-2 h-2 rounded-full bg-accent-violet shadow-[0_0_10px_rgba(138,43,226,0.8)]" />
                      <span className="text-white/80 group-hover/item:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 5. Proposed Solution */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-[0.3em] mb-6">Proposed Solution</h2>
              <p className="text-2xl lg:text-3xl font-display font-medium text-white leading-tight">
                {solutionOverview}
              </p>
            </div>
            
            <div className="relative p-10 lg:p-20 glass rounded-[3rem] border border-white/10 overflow-hidden bg-white/[0.01]">
              <div className="absolute inset-0 grid-pattern opacity-5" />
              <AnimatedWorkflow steps={workflowSteps} />
            </div>
          </motion.div>
        </section>

        {/* 6. Solution Architecture */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-[0.3em] mb-20 text-center">Solution Architecture</h2>
            
            <div className="relative h-[600px] w-full max-w-4xl mx-auto">
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                <defs>
                  <linearGradient id="cyan-gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00F5FF" />
                    <stop offset="100%" stopColor="#8A2BE2" />
                  </linearGradient>
                  <filter id="line-glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                {architecture.map((node) => 
                  node.connections?.map((connId) => {
                    const target = architecture.find(n => n.id === connId);
                    if (!target) return null;
                    const path = `M ${node.position.x}% ${node.position.y}% L ${target.position.x}% ${target.position.y}%`;
                    return (
                      <React.Fragment key={`${node.id}-${connId}`}>
                        {/* Static Base Line */}
                        <motion.path
                          d={path}
                          stroke="url(#cyan-gradient-line)"
                          strokeWidth="1"
                          fill="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 0.15 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                        />
                        
                        {/* Animated Streaming Line */}
                        <motion.path
                          d={path}
                          stroke="url(#cyan-gradient-line)"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="10 40"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ 
                            pathLength: 1, 
                            opacity: 0.4,
                            strokeDashoffset: [100, 0]
                          }}
                          viewport={{ once: true }}
                          transition={{ 
                            pathLength: { duration: 1.5, delay: 0.4 },
                            opacity: { duration: 0.5, delay: 0.4 },
                            strokeDashoffset: { duration: 4, repeat: Infinity, ease: "linear" }
                          }}
                          filter="url(#line-glow)"
                        />
                      </React.Fragment>
                    );
                  })
                )}
              </svg>

              {/* Architecture Nodes */}
              {architecture.map((node, i) => {
                const isCore = node.position.x === 50 && node.position.y === 30;
                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{ left: `${node.position.x}%`, top: `${node.position.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "glass-card p-6 rounded-[2rem] border border-white/10 flex flex-col items-center text-center gap-4 w-56 transition-all duration-200",
                        "hover:border-accent-cyan/40 hover:shadow-[0_0_40px_rgba(0,245,255,0.15)]",
                        isCore && "border-accent-cyan/30 shadow-[0_0_30px_rgba(0,245,255,0.1)]"
                      )}
                    >
                      {/* Icon Container - Glowing Square */}
                      <div className={cn(
                        "w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-200",
                        "shadow-[0_0_15px_rgba(255,255,255,0.05)]",
                        "group-hover:border-accent-cyan/50 group-hover:shadow-[0_0_25px_rgba(0,245,255,0.3)]",
                        isCore && "border-accent-cyan/40 shadow-[0_0_20px_rgba(0,245,255,0.2)]"
                      )}>
                        <node.icon className={cn(
                          "h-7 w-7 text-white/40 transition-colors duration-200",
                          "group-hover:text-accent-cyan group-hover:brightness-125",
                          isCore && "text-accent-cyan/60"
                        )} />
                      </div>
                      
                      {/* Text Content - Always Visible */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-accent-cyan transition-colors duration-200">
                          {node.title}
                        </h4>
                        <p className="text-[10px] text-white/40 leading-relaxed font-medium">
                          {node.description}
                        </p>
                      </div>

                      {/* Shadow Bloom Effect on Hover */}
                      <div className="absolute inset-0 rounded-[2rem] bg-accent-cyan/0 group-hover:bg-accent-cyan/5 transition-colors duration-200 -z-10" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* 7. Expected Business Impact */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-[0.3em] mb-16 text-center">Expected Business Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impact.map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:border-accent-cyan/30 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />
                  <p className="text-4xl font-display font-bold text-white mb-2 group-hover:neon-text-cyan transition-all">{stat.value}</p>
                  <p className="text-xs font-mono text-accent-cyan uppercase tracking-widest mb-4">{stat.label}</p>
                  <p className="text-[10px] text-white/40 leading-relaxed">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Transformation Insight (Optional but kept for value) */}
        {transformationInsight && (
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 lg:p-16 glass rounded-[3rem] border border-accent-cyan/20 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-cyan/40" />
              <div className="relative z-10">
                <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                  <BrainCircuit className="h-5 w-5" />
                  Transformation Insight
                </h2>
                <p className="text-2xl lg:text-3xl text-white font-medium leading-relaxed italic font-display">
                  "{transformationInsight}"
                </p>
              </div>
            </motion.div>
          </section>
        )}

        {/* Extra Children */}
        {children}

        {/* Call to Action */}
        <section className="pt-20 border-t border-white/5 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold mb-8">Ready to transform your operations?</h2>
            <Button 
              className="bg-accent-cyan text-black hover:bg-accent-cyan/90 px-12 h-14 rounded-2xl font-bold shadow-[0_0_30px_rgba(0,245,255,0.3)] transition-all hover:scale-105 group"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else onBack();
              }}
            >
              Discuss This Use Case
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}

function BriefcaseIcon(props: any) {
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
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function AlertCircleIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
}
