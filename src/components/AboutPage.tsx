import * as React from "react";
import { motion } from "motion/react";
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
  Mail,
  Linkedin,
  Github
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface AboutPageProps {
  onBack: () => void;
}

export function AboutPage({ onBack }: AboutPageProps) {
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

      <div className="max-w-5xl mx-auto px-8 pt-16">
        {/* Professional Introduction */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
                  Bridging Business & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-violet">
                    Intelligence Automation
                  </span>
                </h1>
                <p className="text-xl text-white/70 leading-relaxed">
                  I am a Business and Technology professional dedicated to architecting the future of work. By combining deep business analysis with data expertise and AI automation, I transform complex operational workflows into high-performance digital engines that drive measurable efficiency and growth.
                </p>
              </motion.div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-violet rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-[3/4] rounded-2xl bg-background border border-white/10 flex items-center justify-center overflow-hidden">
                <img 
                  src="/profile.jpg" 
                  alt="V. Pattarakeeratiworrakul"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback if image not found
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
                {/* Decorative elements */}
                <div className="absolute bottom-4 left-4 right-4 p-4 glass rounded-xl border border-white/10">
                  <p className="text-[10px] font-mono text-accent-cyan uppercase tracking-widest mb-1">Current Focus</p>
                  <p className="text-xs text-white font-medium">AI Agent Orchestration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="bg-white/5 mb-20" />

        {/* Professional Background */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-6 flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Background
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-display font-bold text-white">From Data Insights to Autonomous Systems</h3>
              <p className="text-white/60 leading-relaxed">
                My journey began in the world of Business Analysis and Business Intelligence, where I spent years dissecting operational processes and translating raw data into strategic dashboards. I realized that while insights are powerful, the real transformation happens when those insights are coupled with action.
              </p>
              <p className="text-white/60 leading-relaxed">
                This realization led me to dive deep into emerging technologies. I saw the limitations of static systems and became obsessed with the potential of AI and automation to not just report on business operations, but to actively optimize them. Today, I focus on bridging the gap between business needs and technical implementation, designing solutions that think, learn, and execute.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Framework Section */}
        <section className="mb-32 py-16 px-8 lg:px-12 glass rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">The Transformation Framework</h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Successful AI transformation requires combining business insight, analytical thinking, and intelligent automation technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">
              {/* Connecting Lines (Desktop) */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent -translate-y-1/2 hidden md:block pointer-events-none" />
              
              {[
                {
                  title: "Business Understanding",
                  desc: "Knowledge of business processes, operational workflows, and stakeholder needs.",
                  icon: Briefcase,
                },
                {
                  title: "Data Analytics",
                  desc: "Ability to analyze data, extract insights, and support data-driven decision making.",
                  icon: LineChart,
                },
                {
                  title: "AI & Automation",
                  desc: "Designing automation workflows, AI-powered tools, and intelligent systems.",
                  icon: Zap,
                }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative z-10 glass-card p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center group hover:border-accent-cyan/30 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all duration-500">
                    <item.icon className="h-8 w-8 text-accent-cyan" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                  
                  {i < 2 && (
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-accent-cyan/30 text-2xl font-light hidden md:block">
                      +
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 max-w-2xl mx-auto"
            >
              <div className="relative p-1 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-violet rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative glass rounded-[22px] p-8 border border-white/20 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-[10px] font-mono text-accent-cyan uppercase tracking-widest mb-4">
                    The Result
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-violet">
                    AI Transformation
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Scalable, intelligent systems that improve productivity, speed, and operational efficiency.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Expertise */}
        <section className="mb-20">
          <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-12 text-center">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Business Process Analysis",
                desc: "Deep-dive auditing of operational workflows to identify friction points and scalability bottlenecks.",
                icon: Workflow
              },
              {
                title: "AI Opportunity Mapping",
                desc: "Strategic identification of high-impact areas where Generative AI and Agents can drive ROI.",
                icon: Lightbulb
              },
              {
                title: "Workflow Automation",
                desc: "Designing end-to-end automated systems that integrate disparate tools into a unified engine.",
                icon: Zap
              },
              {
                title: "Data & BI Strategy",
                desc: "Building decision-support systems and dashboards that provide real-time operational visibility.",
                icon: LineChart
              },
              {
                title: "System Integration",
                desc: "Connecting legacy enterprise systems with modern AI APIs and automation orchestration tools.",
                icon: Database
              },
              {
                title: "AI Productivity Tools",
                desc: "Implementing custom AI-powered assistants that augment human capabilities and speed.",
                icon: BrainCircuit
              }
            ].map((skill, i) => (
              <Card key={i} className="glass-card border-white/5 hover:border-accent-cyan/30 transition-colors group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all duration-500">
                    <skill.icon className="h-6 w-6 text-accent-cyan" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-white mb-3">{skill.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{skill.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology & Tools */}
        <section className="mb-20 py-20 px-8 lg:px-16 glass rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-10 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-12 text-center">Technology & Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { category: "AI & LLMs", tools: ["Gemini Pro", "GPT-4o", "Claude 3.5", "LangChain"] },
                { category: "Automation", tools: ["Make.com", "n8n", "Zapier", "CrewAI"] },
                { category: "Data & BI", tools: ["SQL", "Python", "Tableau", "Power BI"] },
                { category: "Infrastructure", tools: ["Node.js", "PostgreSQL", "Vector DBs", "REST APIs"] }
              ].map((group, i) => (
                <div key={i} className="space-y-4">
                  <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest">{group.category}</h4>
                  <ul className="space-y-2">
                    {group.tools.map((tool, j) => (
                      <li key={j} className="text-sm text-white/70 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-accent-cyan" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Mindset & Philosophy */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-6 flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                Transformation Mindset
              </h2>
              <p className="text-white/60 leading-relaxed">
                I don't just look for tools; I look for leverage. My focus is on identifying systemic inefficiencies and designing intelligent solutions that don't just "fix" a problem, but fundamentally improve productivity, speed, and scalability. I believe every business process is an opportunity for an intelligent upgrade.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-sm font-mono text-accent-violet uppercase tracking-widest mb-6 flex items-center gap-2">
                <BrainCircuit className="h-4 w-4" />
                Professional Philosophy
              </h2>
              <p className="text-white/60 leading-relaxed">
                In a world of rapid technological shifts, my philosophy is rooted in continuous learning and practical application. I am committed to bridging the gap between cutting-edge AI research and real-world business problems, combining rigorous analytical thinking with hands-on implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="pt-20 border-t border-white/5">
          <div className="glass rounded-3xl p-12 lg:p-16 border border-white/10 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-cyan/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">Let's Architect Your AI Transformation</h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                I am always looking for ambitious projects and strategic partnerships where I can apply my expertise in AI and automation to drive meaningful impact. Whether you're looking to optimize a single workflow or transform an entire enterprise, let's start a conversation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-accent-cyan hover:bg-accent-cyan/90 text-black px-8 h-12 rounded-xl font-bold shadow-lg shadow-accent-cyan/20 group transition-all hover:scale-105">
                  Start a Collaboration
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex items-center gap-4 ml-4">
                  <a href="https://www.linkedin.com/in/vichianpattara" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-accent-cyan hover:border-accent-cyan/50 transition-all">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="mailto:k_vichian@hotmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-accent-cyan hover:border-accent-cyan/50 transition-all">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
