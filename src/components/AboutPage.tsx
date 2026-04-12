import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  Briefcase, 
  Cpu, 
  Database, 
  Zap, 
  Lightbulb, 
  BrainCircuit, 
  LineChart, 
  Workflow,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Mail,
  Linkedin,
  Github,
  Search,
  Rocket,
  RefreshCw,
  Maximize,
  Server,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface AboutPageProps {
  onBack: () => void;
}

export function AboutPage({ onBack }: AboutPageProps) {
  const [activeCapability, setActiveCapability] = React.useState<string>("transformation");

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
          <User className="h-4 w-4" />
          About Me
        </Button>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan font-mono text-[10px] uppercase">Professional Profile</Badge>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-8 pt-20">
        {/* SECTION 1 — HERO INTRO */}
        <section className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-7xl font-display font-bold mb-6 tracking-tight leading-tight">
              From Business Intelligence to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-violet">
                AI-Driven Transformation
              </span>
            </h1>
            <div className="flex flex-col items-center gap-2 mb-8">
              <p className="text-xl lg:text-2xl font-display font-medium text-white/90">
                Business & Technology Professional
              </p>
              <p className="text-lg text-accent-cyan font-mono uppercase tracking-widest">
                Focused on AI-Driven Productivity and Automation
              </p>
            </div>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              I work at the intersection of business operations, data analytics, and AI automation to drive measurable productivity improvements.
            </p>
          </motion.div>

          {/* Glowing Line Divider */}
          <div className="mt-20 relative h-px w-full bg-white/5 overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-cyan to-transparent w-1/2 h-full"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </section>

        {/* SECTION 2 — BACKGROUND STORY */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-6 flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Background
              </h2>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-violet rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative aspect-[3/4] rounded-2xl bg-background border border-white/10 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt="V. Pattarakeeratiworrakul"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <Card className="glass-card border-white/10 p-8 lg:p-12">
                <div className="space-y-6 text-white/70 leading-relaxed text-lg">
                  <p>
                    My professional journey began in Business Analysis and Business Intelligence, where I worked closely with operational teams to understand complex business processes and translate raw data into actionable insights. Through building dashboards, analytics models, and reporting systems, I helped organizations gain clearer visibility into their operations and performance.
                  </p>
                  <p>
                    However, over time I realized that data alone does not create transformation. Insights are valuable, but the real impact happens when those insights trigger automated actions and optimized workflows.
                  </p>
                  <p>
                    This realization led me to explore emerging technologies such as AI agents, workflow automation, and intelligent decision systems. I became particularly interested in how AI can move beyond reporting and instead actively optimize operations.
                  </p>
                  <p>
                    Today, my focus is on bridging business strategy and technical implementation. I design AI-powered solutions that automate processes, augment decision-making, and deliver measurable operational efficiency.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 3 — AI TRANSFORMATION CAPABILITY FRAMEWORK */}
        <section className="mb-32 py-20 px-8 lg:px-12 glass rounded-[3rem] border border-white/10 relative overflow-hidden bg-[#0B0F14]">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-violet/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">AI Transformation Capability Framework</h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Integrating infrastructure, data, business insight, and automation to build intelligent systems.
              </p>
            </div>

            <div className="max-w-5xl mx-auto flex flex-col items-center">
              {/* Top Row: Capability Nodes */}
              <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-8">
                {[
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
                ].map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onMouseEnter={() => setActiveCapability(item.id)}
                    className={cn(
                      "flex flex-col items-center gap-3 cursor-help group transition-all duration-500",
                      activeCapability === item.id ? "scale-105" : "hover:scale-105"
                    )}
                  >
                    <div className={cn(
                      "w-16 h-16 lg:w-20 lg:h-20 rounded-full glass border flex items-center justify-center transition-all duration-500 relative",
                      activeCapability === item.id 
                        ? "border-accent-cyan/60 shadow-[0_0_25px_rgba(0,245,255,0.3)]" 
                        : "border-white/10 hover:border-accent-cyan/40"
                    )}>
                      {/* Pulse Glow */}
                      <div className={cn(
                        "absolute inset-0 rounded-full bg-accent-cyan/5 transition-opacity duration-500",
                        activeCapability === item.id ? "opacity-100 animate-pulse-slow" : "opacity-0"
                      )} />
                      <item.icon className={cn(
                        "h-6 w-6 lg:h-8 lg:w-8 transition-colors duration-500",
                        activeCapability === item.id ? "text-accent-cyan" : "text-white/50"
                      )} />
                    </div>
                    <span className={cn(
                      "text-[10px] lg:text-xs font-display font-bold uppercase tracking-widest text-center max-w-[100px] transition-colors duration-500",
                      activeCapability === item.id ? "text-white" : "text-white/40"
                    )}>
                      {item.title}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Connection Arrows (Down to Panel) */}
              <div className="flex justify-center gap-6 lg:gap-10 w-full mb-8 h-8">
                {["infra", "data", "business", "automation"].map((id) => (
                  <div key={id} className="w-16 lg:w-20 flex justify-center">
                    <AnimatePresence>
                      {activeCapability === id && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-accent-cyan"
                        >
                          <ArrowRight className="rotate-90 h-5 w-5 animate-bounce" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Dynamic Description Panel */}
              <div className="w-full max-w-[700px] mb-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCapability}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card p-6 lg:p-8 rounded-3xl border border-accent-cyan/20 shadow-[0_0_30px_rgba(0,245,255,0.1)] relative overflow-hidden text-center"
                  >
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-accent-cyan/5 pointer-events-none" />
                    
                    <h4 className="text-lg font-display font-bold text-white mb-3 uppercase tracking-wider">
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
                    <p className="text-white/70 leading-relaxed text-sm lg:text-base max-w-xl mx-auto">
                      {(() => {
                        const descs: Record<string, string> = {
                          infra: "Understanding enterprise IT environments including data centers, system administration, and IT operations. This foundation enables scalable digital architecture.",
                          data: "Establishing trusted data foundations through governance, quality control, and analytics capabilities that support reliable decision making.",
                          business: "Analyzing operational workflows, identifying inefficiencies, and aligning technology solutions with business objectives.",
                          automation: "Designing intelligent automation systems, AI assistants, and productivity tools that transform insights into automated execution.",
                          transformation: "Integrating infrastructure, data, business insight, and automation into intelligent systems that enhance productivity, speed, and scalability."
                        };
                        return descs[activeCapability];
                      })()}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Arrow Down to Result */}
              <div className="mb-8 text-accent-violet opacity-50">
                <ArrowRight className="rotate-90 h-8 w-8" />
              </div>

              {/* Bottom Node: AI Transformation */}
              <motion.div
                onMouseEnter={() => setActiveCapability("transformation")}
                className={cn(
                  "flex flex-col items-center gap-4 cursor-help group transition-all duration-700",
                  activeCapability === "transformation" ? "scale-110" : "hover:scale-105"
                )}
              >
                <div className={cn(
                  "w-24 h-24 lg:w-32 lg:h-32 rounded-full glass border flex items-center justify-center transition-all duration-700 relative",
                  activeCapability === "transformation" 
                    ? "border-accent-violet/60 shadow-[0_0_40px_rgba(138,43,226,0.4)]" 
                    : "border-accent-violet/20"
                )}>
                  {/* Expanding Ring */}
                  <motion.div 
                    className="absolute inset-0 rounded-full border border-accent-violet/40"
                    animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  />
                  <Cpu className={cn(
                    "h-10 w-10 lg:h-14 lg:w-14 transition-colors duration-700",
                    activeCapability === "transformation" ? "text-accent-violet" : "text-accent-violet/40"
                  )} />
                </div>
                <span className={cn(
                  "text-sm lg:text-base font-display font-bold uppercase tracking-[0.2em] transition-colors duration-700",
                  activeCapability === "transformation" ? "text-white" : "text-white/40"
                )}>
                  AI Transformation
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — CORE COMPETENCIES */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Core Competencies</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Key areas of expertise that enable the design and implementation of AI-driven operational transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Infrastructure & IT Operations",
                desc: "Experience in enterprise IT environments including data centers, system administration, and IT support operations. This foundation provides deep understanding of how enterprise systems operate at scale.",
                icon: Server,
                color: "cyan"
              },
              {
                title: "Data Governance & Analytics",
                desc: "Knowledge of data governance principles, data quality management, and analytics frameworks that enable reliable data-driven decision making.",
                icon: Shield,
                color: "violet"
              },
              {
                title: "Business Process Analysis",
                desc: "Ability to analyze operational workflows, identify inefficiencies, and translate business challenges into technology-driven solutions.",
                icon: Workflow,
                color: "cyan"
              },
              {
                title: "AI & Automation Opportunity Identification",
                desc: "Identifying high-impact opportunities where AI, automation, and intelligent workflows can significantly improve productivity and operational efficiency.",
                icon: Lightbulb,
                color: "violet"
              },
              {
                title: "Workflow Automation & System Integration",
                desc: "Designing automated workflows that connect enterprise systems, eliminate manual tasks, and streamline operational processes.",
                icon: Zap,
                color: "cyan"
              },
              {
                title: "AI-Powered Productivity Systems",
                desc: "Building intelligent assistants, AI tools, and automated workflows that enhance decision-making and operational performance.",
                icon: Cpu,
                color: "violet"
              }
            ].map((comp, i) => (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Card className="glass-card border-white/5 h-full hover:border-accent-cyan/30 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-8 relative z-10">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,245,255,0.2)]",
                      comp.color === "cyan" ? "bg-accent-cyan/10 text-accent-cyan" : "bg-accent-violet/10 text-accent-violet"
                    )}>
                      <comp.icon className="h-7 w-7" />
                    </div>
                    <h4 className="text-xl font-display font-bold text-white mb-4 leading-tight group-hover:text-accent-cyan transition-colors">
                      {comp.title}
                    </h4>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {comp.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 5 — TRANSFORMATION MINDSET */}
        <section className="mb-32">
          <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-16 text-center">How I Approach AI Transformation</h2>
          
          <div className="relative">
            {/* Animated Connector Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden md:block overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent w-1/3 h-full"
                animate={{ x: ["-100%", "300%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "Discovery",
                  desc: "Identify operational bottlenecks and automation opportunities.",
                  icon: Lightbulb
                },
                {
                  step: "Design",
                  desc: "Architect AI-driven solutions combining data, workflows, and intelligent systems.",
                  icon: Workflow
                },
                {
                  step: "Automation",
                  desc: "Implement AI agents and workflow orchestration.",
                  icon: Zap
                },
                {
                  step: "Scale",
                  desc: "Deploy solutions that deliver measurable business impact.",
                  icon: TrendingUp
                }
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent-cyan/50 transition-colors relative">
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-[10px] font-mono text-accent-cyan">
                      0{i + 1}
                    </div>
                    <item.icon className="h-6 w-6 text-accent-cyan group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-white mb-2">{item.step}</h4>
                  <p className="text-xs text-white/40 leading-relaxed px-4">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — CALL TO ACTION */}
        <section className="pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-12 lg:p-20 border border-white/10 text-center relative overflow-hidden group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none group-hover:bg-accent-cyan/10 transition-all duration-1000" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
                  Building Intelligent Systems <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-violet">
                    That Transform Operations
                  </span>
                </h2>
                <p className="text-white/60 text-lg mb-12 leading-relaxed">
                  I focus on turning operational challenges into scalable AI-powered solutions that improve productivity, reduce manual work, and enable smarter decision-making.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6">
                  <Button 
                    onClick={() => onBack()} // Navigate to projects (landing)
                    className="bg-accent-cyan hover:bg-accent-cyan/90 text-black px-10 h-14 rounded-2xl font-bold shadow-lg shadow-accent-cyan/20 group transition-all hover:scale-105"
                  >
                    View AI Projects
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="glass border-white/10 hover:border-accent-violet/50 text-white px-10 h-14 rounded-2xl font-bold transition-all hover:scale-105"
                  >
                    Explore Use Cases
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}
