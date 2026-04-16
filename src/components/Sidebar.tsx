import * as React from "react";
import { 
  Home, 
  User, 
  Cpu, 
  Layers, 
  Briefcase, 
  Mail, 
  ChevronDown, 
  ChevronRight,
  MessageSquare,
  Sparkles,
  BarChart3,
  ShieldCheck,
  BrainCircuit,
  TrendingUp,
  Menu,
  X,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";

interface SidebarProps {
  className?: string;
  activeView: string;
  onViewChange: (view: any) => void;
}

const navItems = [
  { name: "Home", icon: Home, href: "#home", view: "landing" },
  { name: "ABOUT", icon: User, href: "#about", view: "about" },
  { 
    name: "AI Transformation Use Cases", 
    icon: Zap, 
    href: "#projects",
    view: "landing",
    children: [
      { name: "Customer Support Copilot", icon: MessageSquare, href: "#project-1", view: "project-1" },
      { name: "Marketplace Listing Generator", icon: Sparkles, href: "#project-2", view: "project-2" },
      { name: "Marketing Report Agent", icon: BarChart3, href: "#project-3", view: "project-3" },
      { name: "Finance Reconciliation", icon: ShieldCheck, href: "#project-4", view: "project-4" },
      { name: "Knowledge Assistant", icon: BrainCircuit, href: "#project-5", view: "project-5" },
      { name: "Demand Forecasting", icon: TrendingUp, href: "#project-6", view: "project-6" },
    ]
  },
  { name: "Architecture", icon: Layers, href: "#architecture", view: "landing" },
  { name: "Contact", icon: Mail, href: "#contact", view: "landing" },
  { name: "Privacy Policy", icon: ShieldCheck, href: "#privacy", view: "privacy" },
];

export function Sidebar({ className, activeView, onViewChange }: SidebarProps) {
  const [projectsOpen, setProjectsOpen] = React.useState(true);

  const handleNavClick = (item: any) => {
    if (item.view) {
      onViewChange(item.view);
      
      // If it's an anchor on landing page, scroll to it
      if (item.view === "landing" && item.href.startsWith("#")) {
        setTimeout(() => {
          const el = document.getElementById(item.href.substring(1));
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <>
      <motion.aside
        initial={false}
        animate={{ x: 0, opacity: 1 }}
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[280px] lg:w-[320px] glass border-r border-accent-cyan/30 flex flex-col shadow-2xl shadow-accent-cyan/5 transition-all duration-300 ease-in-out hover:w-[300px] lg:hover:w-[360px]",
          className
        )}
      >
              <div className="p-8">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_12px_rgba(0,255,255,0.4)] overflow-hidden">
                      <img src="/logo.png?v=2" alt="Logo" className="w-7 h-7 object-contain" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-display font-bold tracking-tighter neon-text-cyan">
                        @i-Factory
                      </h1>
                      <p className="text-[10px] font-mono text-accent-violet tracking-[0.2em] uppercase opacity-80">
                        Strategic AI
                      </p>
                    </div>
                  </div>
                </div>

              <ScrollArea className="h-[calc(100vh-160px)] -mx-4 px-4">
                <LayoutGroup>
                  <nav className="space-y-2 p-6">
                  {navItems.map((item) => {
                    const isActive = activeView === item.view || (item.view === "landing" && activeView === "landing");

                    if (item.children) {
                      return (
                        <Collapsible
                          key={item.name}
                          open={projectsOpen}
                          onOpenChange={setProjectsOpen}
                          className="space-y-1"
                        >
                          <CollapsibleTrigger
                            render={
                              <Button
                                variant="ghost"
                                onClick={() => handleNavClick(item)}
                                className={cn(
                                  "w-full justify-between hover:bg-white/5 text-white/70 hover:text-white group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
                                  isActive && "bg-white/10 text-white shadow-[0_0_15px_rgba(0,245,255,0.1)]"
                                )}
                              >
                                <div className="flex items-center gap-3">
                                  <item.icon className={cn("transition-all duration-300", isActive ? "text-accent-cyan drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]" : "group-hover:text-accent-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]", "h-4 w-4")} />
                                  <span className={cn("font-medium whitespace-nowrap transition-all duration-300", isActive ? "neon-text-cyan" : "group-hover:neon-text-cyan")}>{item.name}</span>
                                </div>
                                {projectsOpen ? <ChevronDown className="h-4 w-4 opacity-50" /> : <ChevronRight className="h-4 w-4 opacity-50" />}
                              </Button>
                            }
                          />
                          <CollapsibleContent className="pl-9 pr-4 space-y-1 overflow-hidden data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down">
                            {item.children.map((child) => (
                              <button
                                key={child.name}
                                onClick={() => handleNavClick(child)}
                                className={cn(
                                  "w-full flex items-center gap-3 py-2 px-3 rounded-md text-[11px] transition-all duration-200 whitespace-nowrap hover:scale-[1.02] active:scale-[0.98] group",
                                  activeView === child.view 
                                    ? "text-accent-cyan bg-white/5 shadow-[inset_0_0_10px_rgba(0,245,255,0.05)]" 
                                    : "text-white/50 hover:text-accent-cyan hover:bg-white/5 hover:neon-text-cyan hover:shadow-[0_0_10px_rgba(0,245,255,0.1)]"
                                )}
                              >
                                <child.icon className={cn("h-3.5 w-3.5 shrink-0 transition-all", activeView === child.view ? "text-accent-cyan drop-shadow-[0_0_5px_rgba(0,245,255,0.8)]" : "text-white/40 group-hover:text-accent-cyan group-hover:drop-shadow-[0_0_5px_rgba(0,245,255,0.8)]")} />
                                <span>{child.name}</span>
                                {activeView === child.view && (
                                  <motion.div 
                                    layoutId="active-pill"
                                    className="ml-auto w-1 h-1 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(0,245,255,0.8)]"
                                  />
                                )}
                              </button>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      );
                    }

                    return (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item)}
                        className={cn(
                          "w-full flex items-center gap-3 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 group whitespace-nowrap hover:scale-[1.02] active:scale-[0.98]",
                          isActive
                            ? "bg-white/10 text-white border border-cyan-400/40 shadow-[0_0_12px_rgba(0,255,255,0.2)]" 
                            : "text-white/60 hover:text-white hover:bg-white/5 hover:neon-text-cyan hover:shadow-[0_0_15px_rgba(0,245,255,0.1)]"
                        )}
                      >
                        <item.icon className={cn(
                          "h-4 w-4 transition-all duration-300",
                          isActive ? "text-accent-cyan drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]" : "group-hover:text-accent-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]"
                        )} />
                        <span className="transition-all duration-300 group-hover:neon-text-cyan">{item.name}</span>
                        {isActive && (
                          <motion.div 
                            layoutId="active-pill"
                            className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(0,245,255,0.8)]"
                          />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </LayoutGroup>
            </ScrollArea>
            </div>

            <div className="mt-auto p-8 border-t border-white/5">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                  <img 
                    src="/profile.jpg?v=2" 
                    alt="VP" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.innerText = 'VP';
                      }
                    }}
                  />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-medium text-white truncate">V. Pattarakeeratiworrakul</p>
                  <p className="text-[10px] text-white/40 truncate">Digital Transformation Lead</p>
                </div>
              </div>
            </div>
          </motion.aside>
      </>
    );
}
