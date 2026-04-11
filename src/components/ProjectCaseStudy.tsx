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
  tags: string[];
  heroIcon: React.ElementType;
  heroBanner?: React.ReactNode;
  goal: string;
  businessContext: string;
  challenges: string[];
  opportunityAnalysis: {
    process: string;
    potential: "High" | "Medium" | "Low";
    opportunity: string;
  }[];
  solutionOverview: string;
  workflowSteps: {
    label: string;
    icon: React.ElementType;
    sub: string;
    description?: string;
  }[];
  architecture: {
    title: string;
    description: string;
  }[];
  techStack: {
    category: string;
    tools: string[];
  }[];
  impact: {
    label: string;
    value: string;
    desc: string;
  }[];
  transformationInsight: string;
  children?: React.ReactNode; // For any extra sections like "Example Insights"
}

export function ProjectCaseStudy({
  onBack,
  title,
  description,
  tags,
  heroIcon: HeroIcon,
  heroBanner,
  goal,
  businessContext,
  challenges,
  opportunityAnalysis,
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
      className="min-h-screen pb-20"
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
          <Badge variant="outline" className="bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan font-mono text-[10px] uppercase">Case Study</Badge>
          <Badge variant="outline" className="bg-accent-violet/10 border-accent-violet/20 text-accent-violet font-mono text-[10px] uppercase">AI Transformation</Badge>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-8 pt-16">
        {/* 1. Hero Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between mb-12">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.2)]">
                    <HeroIcon className="text-accent-cyan h-6 w-6 animate-pulse" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight">{title}</h1>
                </div>
                <p className="text-xl text-white/70 leading-relaxed">
                  {description}
                </p>
              </motion.div>
            </div>
            <div className="flex flex-wrap gap-3">
              {tags.map(tag => (
                <Badge key={tag} className="bg-white/5 border-white/10 text-white/60 px-3 py-1">{tag}</Badge>
              ))}
            </div>
          </div>

          {heroBanner ? (
            <div className="rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl shadow-accent-cyan/5">
              {heroBanner}
            </div>
          ) : (
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 relative bg-white/[0.02] flex items-center justify-center">
              <div className="absolute inset-0 grid-pattern opacity-10" />
              <HeroIcon className="w-32 h-32 text-white/5" />
            </div>
          )}
        </section>

        {/* 2. Project Goal */}
        <section className="mb-20">
          <div className="glass p-8 lg:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/5 blur-[80px] rounded-full" />
            <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-6 flex items-center gap-2">
              <Target className="h-4 w-4" />
              Project Goal
            </h2>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
              {goal}
            </p>
          </div>
        </section>

        <Separator className="bg-white/5 mb-20" />

        {/* 3. Business Context & 4. Operational Challenges */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest flex items-center gap-2">
                <BriefcaseIcon className="h-4 w-4" />
                Business Context
              </h2>
              <p className="text-white/60 leading-relaxed">
                {businessContext}
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-sm font-mono text-red-400 uppercase tracking-widest flex items-center gap-2">
                <AlertCircleIcon className="h-4 w-4" />
                Operational Challenges
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {challenges.map((challenge, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-400/20 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-red-400/50 mt-0.5" />
                    <span className="text-sm text-white/70">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. AI Opportunity Analysis */}
        <section className="mb-20">
          <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-8 flex items-center gap-2">
            <TableIcon className="h-4 w-4" />
            AI Opportunity Analysis
          </h2>
          <div className="glass rounded-2xl border border-white/10 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-4 text-xs font-mono text-white/40 uppercase tracking-widest">Process</th>
                  <th className="p-4 text-xs font-mono text-white/40 uppercase tracking-widest">Automation Potential</th>
                  <th className="p-4 text-xs font-mono text-white/40 uppercase tracking-widest">AI Opportunity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {opportunityAnalysis.map((item, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-sm text-white font-medium">{item.process}</td>
                    <td className="p-4">
                      <Badge variant="outline" className={cn(
                        "text-[10px] uppercase font-mono px-2 py-0.5",
                        item.potential === "High" ? "text-accent-cyan border-accent-cyan/20 bg-accent-cyan/5" :
                        item.potential === "Medium" ? "text-yellow-400 border-yellow-400/20 bg-yellow-400/5" :
                        "text-slate-400 border-slate-400/20 bg-slate-400/5"
                      )}>
                        {item.potential}
                      </Badge>
                    </td>
                    <td className="p-4 text-sm text-white/60">{item.opportunity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Solution Overview */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-6 flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                Solution Overview
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-xl text-white/80 leading-relaxed">
                {solutionOverview}
              </p>
            </div>
          </div>
        </section>

        {/* 7. Solution Workflow Diagram */}
        <section className="mb-20">
          <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-12 text-center">Solution Workflow</h2>
          <div className="relative p-8 lg:p-12 glass rounded-3xl border border-white/10 overflow-hidden">
            <AnimatedWorkflow steps={workflowSteps} />
          </div>
        </section>

        {/* 8. Solution Architecture */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-6 flex items-center gap-2">
                <Layers className="h-4 w-4" />
                Solution Architecture
              </h2>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {architecture.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-cyan/20 transition-colors">
                  <h4 className="text-accent-cyan text-sm font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Technology Stack */}
        <section className="mb-20">
          <div className="p-12 glass rounded-3xl border border-white/10">
            <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-12 text-center">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {techStack.map((group, i) => (
                <div key={i} className="space-y-4">
                  <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest">{group.category}</h4>
                  <ul className="space-y-2">
                    {group.tools.map((tool, j) => (
                      <li key={j} className="text-sm text-white/70 flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3 text-accent-cyan" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Business Impact */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-6 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Business Impact
              </h2>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {impact.map((stat, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-accent-cyan/20 transition-all duration-300 group">
                    <p className="text-3xl font-display font-bold text-white mb-1 group-hover:neon-text-cyan transition-all">{stat.value}</p>
                    <p className="text-sm font-bold text-accent-cyan mb-2">{stat.label}</p>
                    <p className="text-xs text-white/40">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 11. Transformation Insight */}
        <section className="mb-20">
          <div className="p-12 glass rounded-3xl border border-accent-cyan/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent-cyan/40" />
            <div className="relative z-10">
              <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-6 flex items-center gap-2">
                <BrainCircuit className="h-4 w-4" />
                Transformation Insight
              </h2>
              <p className="text-xl text-white font-medium leading-relaxed italic">
                "{transformationInsight}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Strategic Reflection</p>
              </div>
            </div>
          </div>
        </section>

        {/* Extra Children (e.g. Example Insights) */}
        {children}

        {/* Call to Action */}
        <section className="pt-20 border-t border-white/5 text-center">
          <h2 className="text-2xl font-display font-bold mb-6">Interested in similar automation?</h2>
          <Button 
            className="bg-accent-cyan text-black hover:bg-accent-cyan/90 px-8 h-12 rounded-xl font-bold shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all hover:scale-105"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else onBack();
            }}
          >
            Discuss a Project
          </Button>
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
