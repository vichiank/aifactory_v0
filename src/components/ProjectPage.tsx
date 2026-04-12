import * as React from "react";
import { 
  MessageSquare, 
  Zap, 
  Cpu, 
  Database, 
  Users,
  Search,
  MessageCircle,
  CheckCircle2,
  Workflow,
  Layout
} from "lucide-react";
import { ProjectCaseStudy } from "./ProjectCaseStudy";

interface ProjectPageProps {
  onBack: () => void;
}

function SupportCopilotIllustration() {
  return (
    <div className="w-full aspect-video bg-[#0B0F14] relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="relative z-10 flex items-center gap-12">
        {/* Ticket */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center text-white/40">
            <MessageSquare className="h-8 w-8" />
          </div>
          <div className="h-1 w-12 bg-white/5 rounded-full" />
        </div>

        {/* Processing */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-2 border-dashed border-accent-cyan/20 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent-cyan to-accent-violet flex items-center justify-center shadow-[0_0_30px_rgba(0,245,255,0.3)]">
              <Cpu className="h-10 w-10 text-white" />
            </div>
          </div>
        </div>

        {/* Response */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl glass border border-accent-cyan/30 flex items-center justify-center text-accent-cyan">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <div className="h-1 w-12 bg-accent-cyan/20 rounded-full" />
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-24 h-8 glass rounded-full border border-white/5 flex items-center px-3 gap-2 animate-pulse">
        <div className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(0,245,255,0.8)]" />
        <div className="h-1 w-12 bg-white/10 rounded-full" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-8 glass rounded-full border border-white/5 flex items-center px-3 gap-2 animate-pulse [animation-delay:1s]">
        <div className="w-2 h-2 rounded-full bg-accent-violet shadow-[0_0_8px_rgba(138,43,226,0.8)]" />
        <div className="h-1 w-20 bg-white/10 rounded-full" />
      </div>
    </div>
  );
}

export function ProjectPage({ onBack }: ProjectPageProps) {
  return (
    <ProjectCaseStudy
      onBack={onBack}
      title="AI Customer Support Copilot"
      description="Augmenting support agents with real-time, context-aware response drafts using RAG and Large Language Models."
      domain="Operations & Support"
      tags={["AI Automation Use Case", "Concept Solution", "RAG", "LLM"]}
      heroIcon={MessageSquare}
      heroBanner={<SupportCopilotIllustration />}
      businessContext="Customer support teams in high-growth organizations often face high volumes of repetitive inquiries, requiring agents to manually search through fragmented documentation and wikis to provide accurate answers."
      businessIcon={Users}
      challenges={[
        "Manual information retrieval from fragmented sources",
        "Inconsistent response quality across support agents",
        "Scaling challenges during peak inquiry periods",
        "Knowledge silos hindering new agent onboarding"
      ]}
      aiOpportunity={{
        title: "Intelligent Agent Augmentation",
        description: "Transforming support from a manual search process into an AI-driven synthesis workflow, enabling agents to focus on complex problem-solving.",
        features: [
          "Automated intent and sentiment analysis",
          "Semantic search across internal documentation",
          "LLM-based synthesis of personalized drafts",
          "Real-time brand voice and accuracy checks"
        ]
      }}
      solutionOverview="A Retrieval-Augmented Generation (RAG) system that integrates with ticketing platforms to analyze incoming queries and present agents with high-quality response drafts."
      workflowSteps={[
        { label: "Data Sources", icon: Database, sub: "Knowledge Base", description: "Internal documentation, FAQs, and historical ticket data." },
        { label: "Processing", icon: Search, sub: "Semantic RAG", description: "Retrieving relevant context from internal knowledge bases using vector search." },
        { label: "AI Analysis", icon: Cpu, sub: "LLM Drafting", description: "AI generates a personalized, context-aware response draft for the agent." },
        { label: "Output", icon: MessageCircle, sub: "Agent Review", description: "Human support agents review, refine, and send the AI-suggested response." }
      ]}
      architecture={[
        { 
          id: "data", 
          title: "Data Integration Layer", 
          description: "Connectors for Zendesk, Salesforce, and internal wikis.",
          icon: Database,
          position: { x: 20, y: 30 },
          connections: ["engine"]
        },
        { 
          id: "engine", 
          title: "Automation Engine", 
          description: "LangChain orchestrates the RAG workflow and prompt management.",
          icon: Workflow,
          position: { x: 50, y: 30 },
          connections: ["ai"]
        },
        { 
          id: "ai", 
          title: "AI Processing Layer", 
          description: "OpenAI GPT-4o generates responses based on retrieved context.",
          icon: Cpu,
          position: { x: 80, y: 30 },
          connections: ["ui"]
        },
        { 
          id: "ui", 
          title: "Output Interface", 
          description: "Agent-facing dashboard for reviewing and sending drafts.",
          icon: Layout,
          position: { x: 50, y: 70 }
        }
      ]}
      impact={[
        { label: "Efficiency Improvement", value: "-45%", desc: "Reduction in average handle time (AHT)." },
        { label: "Automation Coverage", value: "85%", desc: "Of common support inquiries handled by AI drafts." },
        { label: "Operational Speed", value: "2x", desc: "Faster response times during peak periods." },
        { label: "CSAT Score", value: "+15pt", desc: "Improvement in customer satisfaction." }
      ]}
      transformationInsight="AI in customer support is most effective when positioned as a 'Copilot'—empowering human agents with instant access to enterprise knowledge rather than fully automating the human touch."
    />
  );
}
