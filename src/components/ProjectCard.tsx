import * as React from "react";
import { 
  MessageSquare, 
  Wand2, 
  BarChart3, 
  ShieldCheck, 
  BrainCircuit,
  ArrowUpRight,
  Cpu
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";

interface ProjectCardProps {
  key?: React.Key;
  id: string;
  title: string;
  description: string;
  icon: any;
  techStack: string[];
  index: number;
  onClick?: () => void;
}

export function ProjectCard({ id, title, description, icon: Icon, techStack, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <Card className="glass-card h-full flex flex-col overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <CardHeader className="relative pb-0 z-10">
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="h-5 w-5 text-accent-cyan" />
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all duration-500">
            <Icon className="h-6 w-6 text-accent-cyan group-hover:text-accent-violet transition-colors duration-500 animate-pulse" />
          </div>
          <CardTitle className="text-xl font-display font-bold group-hover:text-accent-cyan transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-white/50 text-sm leading-relaxed mt-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow pt-6 z-10">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="bg-white/5 border-white/10 text-[10px] uppercase tracking-wider font-mono text-white/70 group-hover:border-accent-cyan/30 group-hover:text-accent-cyan transition-all duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="pt-0 pb-6 z-10">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
          <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest">
            <Cpu className="h-3 w-3 text-accent-cyan" />
            <span>Operational Node</span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
