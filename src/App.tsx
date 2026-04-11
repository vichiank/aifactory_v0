import * as React from "react";
import { Sidebar } from "@/components/Sidebar";
import { ProjectCard } from "@/components/ProjectCard";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { ProjectPage } from "@/components/ProjectPage";
import { ProjectPageMarketplace } from "@/components/ProjectPageMarketplace";
import { AboutPage } from "@/components/AboutPage";
import { MarketingReportProject } from "@/components/MarketingReportProject";
import { FinanceReconciliationProject } from "@/components/FinanceReconciliationProject";
import { KnowledgeAssistantProject } from "@/components/KnowledgeAssistantProject";
import { DemandForecastingProject } from "@/components/DemandForecastingProject";
import { NeuralBackground } from "@/components/NeuralBackground";
import { 
  MessageSquare, 
  Wand2, 
  BarChart3, 
  ShieldCheck, 
  BrainCircuit,
  TrendingUp,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  FileText,
  Zap,
  Briefcase,
  Mail as MailIcon,
  Menu,
  User,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "project-1",
    title: "AI Customer Support Copilot",
    description: "A real-time assistant for support agents that suggests responses, summarizes tickets, and retrieves knowledge base articles using RAG.",
    icon: MessageSquare,
    techStack: ["Python", "LangChain", "OpenAI", "Pinecone"]
  },
  {
    id: "project-2",
    title: "AI Marketplace Listing Generator",
    description: "Automated product description and SEO tag generator for e-commerce platforms based on image analysis and minimal text input.",
    icon: Wand2,
    techStack: ["TypeScript", "Next.js", "Gemini Pro Vision", "Tailwind"]
  },
  {
    id: "project-3",
    title: "AI Marketing Report Agent",
    description: "Autonomous agent that crawls social media metrics and ad spend to generate comprehensive weekly performance reports with actionable insights.",
    icon: BarChart3,
    techStack: ["Python", "CrewAI", "Google Analytics API", "D3.js"]
  },
  {
    id: "project-4",
    title: "AI Finance Reconciliation",
    description: "Enterprise-grade system for matching invoices with bank statements using fuzzy logic and LLM-based anomaly detection.",
    icon: ShieldCheck,
    techStack: ["Java", "Spring Boot", "Azure OpenAI", "PostgreSQL"]
  },
  {
    id: "project-5",
    title: "AI Knowledge Assistant",
    description: "Internal company brain that indexes documentation, Slack history, and meeting transcripts for instant natural language querying.",
    icon: BrainCircuit,
    techStack: ["Node.js", "LlamaIndex", "Anthropic Claude", "Redis"]
  },
  {
    id: "project-6",
    title: "AI Demand Forecasting",
    description: "Predictive analytics system that optimizes inventory and supply chain operations using multi-variate time series models.",
    icon: TrendingUp,
    techStack: ["Python", "XGBoost", "AWS Forecast", "Tableau"]
  }
];

export default function App() {
  const [currentView, setCurrentView] = React.useState<"landing" | "project-1" | "project-2" | "project-3" | "project-4" | "project-5" | "project-6" | "about">("landing");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  
  // Inquiry Form State
  const [inquiryForm, setInquiryForm] = React.useState({ email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryForm.email || !inquiryForm.message) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiryForm),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setInquiryForm({ email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleViewChange = (view: any) => {
    if (view === currentView) return;
    setIsSidebarOpen(false); // Collapse sidebar when navigating
    setIsLoading(true);
    setTimeout(() => {
      setCurrentView(view);
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  };

  return (
    <div className="flex min-h-screen bg-background selection:bg-cyan-500/30">
      <Sidebar 
        activeView={currentView} 
        onViewChange={handleViewChange} 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <main className={cn(
        "flex-1 min-w-0 transition-all duration-500 relative",
        isSidebarOpen ? "lg:ml-[300px]" : "ml-0"
      )}>
        {/* Background Visual Details */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <NeuralBackground />
        </div>

        {/* Top Dashboard Header */}
        <header className="sticky top-0 z-40 glass border-b border-cyan-400/20 px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {!isSidebarOpen && (
              <Button
                variant="ghost"
                size="icon"
                className="text-white/60 hover:text-accent-cyan transition-colors"
                onClick={() => setIsSidebarOpen(true)}
                onMouseEnter={() => setIsSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
            <div className="flex flex-col">
              <h2 className="text-2xl font-display font-bold text-white tracking-tight relative">
                {currentView === "landing" ? "Dashboard Overview" : "Case Study Analysis"}
                <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-accent-cyan shadow-[0_0_10px_rgba(0,245,255,0.8)]" />
              </h2>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mt-1">
                {currentView === "landing" ? "System Status: Operational" : currentView.replace("project-", "Module 0")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-cyan-400/20 shadow-[0_0_10px_rgba(0,255,255,0.1)]">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_8px_rgba(0,245,255,0.8)]" />
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">System Online</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white/40 hover:text-accent-cyan transition-colors relative">
                <Zap className="h-4 w-4" />
                <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-accent-violet rounded-full" />
              </Button>
              <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                <User className="h-4 w-4 text-white/60" />
              </div>
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[calc(100vh-88px)] flex items-center justify-center"
            >
              <div className="relative flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-accent-cyan/20 border-t-accent-cyan animate-spin" />
                <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-transparent border-b-accent-violet animate-spin [animation-duration:1.5s]" />
                <p className="text-[10px] font-mono text-accent-cyan uppercase tracking-[0.3em] animate-pulse">
                  Syncing Neural Link...
                </p>
              </div>
            </motion.div>
          ) : currentView === "landing" ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
            >
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
              
              {/* Hero Section */}
              <section id="home" className="relative pt-24 pb-24 px-8 lg:px-16 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-4xl relative z-10"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-cyan-400/40 text-[10px] font-mono text-accent-cyan uppercase tracking-[0.2em] mb-8 shadow-[0_0_12px_rgba(0,255,255,0.2)]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
                    </span>
                    Core Engine v4.0.2
                  </div>
                  
                  <h1 className="text-6xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-10">
                    AI Operations <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-violet">
                      Redefined.
                    </span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-white/50 leading-relaxed max-w-2xl mb-12 font-light">
                    Orchestrating complex business logic through autonomous agents and predictive intelligence.
                  </p>
                  
                  <div className="flex flex-wrap gap-6">
                    <Button 
                      onClick={() => handleViewChange("about")}
                      className="bg-accent-cyan text-black hover:bg-accent-cyan/90 px-10 h-14 rounded-2xl font-bold shadow-[0_0_20px_rgba(0,245,255,0.3)] group transition-all hover:scale-105"
                    >
                      About Me
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="glass border-white/10 hover:border-accent-violet/50 text-white px-10 h-14 rounded-2xl font-bold transition-all hover:scale-105"
                      onClick={() => {
                        const el = document.getElementById('contact');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Contact Me
                    </Button>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-violet/5 blur-[100px] rounded-full pointer-events-none" />
              </section>

              {/* Projects Grid */}
              <section id="projects" className="py-20 px-8 lg:px-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                  <div>
                    <h2 className="text-3xl font-display font-bold mb-4">AI Automation Projects</h2>
                    <p className="text-white/50 max-w-xl">
                      A curated selection of production-ready AI solutions designed to solve complex business challenges through intelligent automation.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-px w-24 bg-white/10 hidden md:block" />
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Scroll to explore</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <ProjectCard 
                      key={project.id} 
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      icon={project.icon}
                      techStack={project.techStack}
                      index={index} 
                      onClick={() => {
                        if (project.id === "project-1") {
                          handleViewChange("project-1");
                        } else if (project.id === "project-2") {
                          handleViewChange("project-2");
                        } else if (project.id === "project-3") {
                          handleViewChange("project-3");
                        } else if (project.id === "project-4") {
                          handleViewChange("project-4");
                        } else if (project.id === "project-5") {
                          handleViewChange("project-5");
                        } else if (project.id === "project-6") {
                          handleViewChange("project-6");
                        }
                      }}
                    />
                  ))}
                  
                  {/* Coming Soon Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="glass-card rounded-[var(--radius-lg)] border-dashed border-white/10 flex flex-col items-center justify-center p-8 text-center min-h-[300px]"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                      <BrainCircuit className="h-6 w-6 text-white/20" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-white/40">Next Innovation</h3>
                    <p className="text-xs text-white/20 mt-2">Currently developing an autonomous supply chain optimization agent.</p>
                  </motion.div>
                </div>
              </section>

              {/* Architecture Section */}
              <section id="architecture" className="py-20 px-8 lg:px-16 bg-white/[0.02]">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-display font-bold mb-4">System Architecture</h2>
                  <p className="text-white/50">
                    My approach focuses on scalable, secure, and modular AI architectures that integrate seamlessly with existing enterprise ecosystems.
                  </p>
                </div>
                
                <ArchitectureDiagram />
              </section>

              {/* Contact Section */}
              <section id="contact" className="py-32 px-8 lg:px-16">
                <div className="glass rounded-3xl p-12 lg:p-20 border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                      <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Let's Build the Future Together</h2>
                      <p className="text-white/60 text-lg mb-10 leading-relaxed">
                        Interested in transforming your business with AI? I'm currently open to consulting projects and strategic partnerships.
                      </p>
                      
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <MailIcon className="h-5 w-5 text-white/70" />
                          </div>
                          <div>
                            <p className="text-xs text-white/40 font-mono uppercase tracking-widest">Email</p>
                            <a href="mailto:k_vichian@hotmail.com" className="text-white hover:text-cyan-400 transition-colors">k_vichian@hotmail.com</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <Linkedin className="h-5 w-5 text-white/70" />
                          </div>
                          <div>
                            <p className="text-xs text-white/40 font-mono uppercase tracking-widest">LinkedIn</p>
                            <a href="https://www.linkedin.com/in/vichianpattara" target="_blank" rel="noreferrer" className="text-white hover:text-cyan-400 transition-colors">linkedin.com/in/vichianpattara</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <FileText className="h-5 w-5 text-white/70" />
                          </div>
                          <div>
                            <p className="text-xs text-white/40 font-mono uppercase tracking-widest">Resume</p>
                            <Button variant="link" className="p-0 h-auto text-white hover:text-cyan-400 font-normal" onClick={() => window.open('#', '_blank')}>
                              Download PDF
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <div className="glass-card p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-display font-semibold mb-6">Quick Inquiry</h3>
                        <form onSubmit={handleInquirySubmit} className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Email Address</label>
                            <input 
                              type="email" 
                              required
                              value={inquiryForm.email}
                              onChange={(e) => setInquiryForm(prev => ({ ...prev, email: e.target.value }))}
                              placeholder="hello@company.com" 
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan/50 transition-colors"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Message</label>
                            <textarea 
                              required
                              value={inquiryForm.message}
                              onChange={(e) => setInquiryForm(prev => ({ ...prev, message: e.target.value }))}
                              placeholder="Tell me about your project..." 
                              rows={4}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan/50 transition-colors resize-none"
                            />
                          </div>
                          <Button 
                            type="submit"
                            disabled={isSubmitting}
                            className={cn(
                              "w-full h-12 rounded-xl font-bold transition-all",
                              submitStatus === "success" 
                                ? "bg-green-500 text-white hover:bg-green-600" 
                                : submitStatus === "error"
                                ? "bg-red-500 text-white hover:bg-red-600"
                                : "bg-white text-black hover:bg-white/90"
                            )}
                          >
                            {isSubmitting ? (
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                Sending...
                              </div>
                            ) : submitStatus === "success" ? (
                              "Message Sent!"
                            ) : submitStatus === "error" ? (
                              "Failed to Send"
                            ) : (
                              "Send Message"
                            )}
                          </Button>
                          {submitStatus === "success" && (
                            <p className="text-[10px] font-mono text-green-400 text-center uppercase tracking-widest animate-pulse">
                              Transmission Received. We'll be in touch.
                            </p>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="py-12 px-8 lg:px-16 border-t border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_12px_rgba(0,255,255,0.4)]">
                      <Cpu className="text-accent-cyan h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold tracking-tighter text-white leading-none">
                        @i-Factory
                      </h3>
                      <p className="text-[8px] font-mono text-accent-violet tracking-[0.2em] uppercase opacity-80 mt-1">
                        Strategic AI
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-white/30 text-[10px] font-mono uppercase tracking-[0.3em]">
                    © 2026 V. Pattarakeeratiworrakul • All Rights Reserved
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <a href="https://www.linkedin.com/in/vichianpattara" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a>
                    <a href="mailto:k_vichian@hotmail.com" className="text-white/40 hover:text-white transition-colors"><MailIcon className="h-4 w-4" /></a>
                  </div>
                </div>
              </footer>
            </motion.div>
          ) : currentView === "project-1" ? (
            <ProjectPage onBack={() => handleViewChange("landing")} />
          ) : currentView === "project-2" ? (
            <ProjectPageMarketplace onBack={() => handleViewChange("landing")} />
          ) : currentView === "project-3" ? (
            <MarketingReportProject onBack={() => handleViewChange("landing")} />
          ) : currentView === "project-4" ? (
            <FinanceReconciliationProject onBack={() => handleViewChange("landing")} />
          ) : currentView === "project-5" ? (
            <KnowledgeAssistantProject onBack={() => handleViewChange("landing")} />
          ) : currentView === "project-6" ? (
            <DemandForecastingProject onBack={() => handleViewChange("landing")} />
          ) : (
            <AboutPage onBack={() => handleViewChange("landing")} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
