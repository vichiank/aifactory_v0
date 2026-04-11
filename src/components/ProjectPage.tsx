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
  Workflow
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
      tags={["Python", "LangChain", "OpenAI", "Pinecone", "RAG"]}
      heroIcon={MessageSquare}
      heroBanner={<SupportCopilotIllustration />}
      goal="Improve customer support productivity and reduce response time by providing agents with intelligent, pre-drafted responses based on internal knowledge bases."
      businessContext="Customer support teams often face high volumes of repetitive inquiries, requiring agents to manually search through fragmented documentation and wikis to provide accurate answers."
      challenges={[
        "High Average Handle Time (AHT) due to manual information retrieval.",
        "Inconsistent response quality across different support agents.",
        "Difficulty scaling support operations during peak inquiry periods.",
        "Knowledge silos making it hard for new agents to find correct information."
      ]}
      opportunityAnalysis={[
        { process: "Ticket Classification", potential: "High", opportunity: "Automated intent and sentiment analysis." },
        { process: "Information Retrieval", potential: "High", opportunity: "Semantic search across internal documentation." },
        { process: "Response Drafting", potential: "High", opportunity: "LLM-based synthesis of personalized drafts." },
        { process: "Quality Assurance", potential: "Medium", opportunity: "Automated brand voice and accuracy checks." }
      ]}
      solutionOverview="A Retrieval-Augmented Generation (RAG) system that integrates with ticketing platforms to analyze incoming queries, retrieve relevant documentation, and present agents with high-quality response drafts."
      workflowSteps={[
        { label: "Inquiry", icon: MessageCircle, sub: "Customer Ticket", description: "Incoming customer support requests from Zendesk, Intercom, or email channels." },
        { label: "Search", icon: Search, sub: "Semantic RAG", description: "Retrieving relevant context from internal knowledge bases using vector search." },
        { label: "Synthesis", icon: Cpu, sub: "LLM Drafting", description: "AI generates a personalized, context-aware response draft for the agent." },
        { label: "Review", icon: Users, sub: "Agent Approval", description: "Human support agents review, refine, and send the AI-suggested response." }
      ]}
      architecture={[
        { title: "Vector Database", description: "Pinecone stores company documentation as high-dimensional embeddings for semantic retrieval." },
        { title: "Orchestration Layer", description: "LangChain manages the flow between user query, retrieval, and LLM prompting." },
        { title: "LLM Engine", description: "OpenAI GPT-4o generates natural, context-aware responses based on retrieved context." },
        { title: "Integration API", description: "Custom middleware connecting the copilot to Zendesk or Salesforce Service Cloud." }
      ]}
      techStack={[
        { category: "AI Frameworks", tools: ["LangChain", "OpenAI API", "LlamaIndex"] },
        { category: "Vector Storage", tools: ["Pinecone", "Weaviate"] },
        { category: "Backend", tools: ["Python", "FastAPI", "Docker"] },
        { category: "Frontend", tools: ["React", "Tailwind CSS"] }
      ]}
      impact={[
        { label: "Handle Time", value: "-45%", desc: "Reduction in average time spent per support ticket." },
        { label: "Resolution", value: "+30%", desc: "Increase in first-contact resolution (FCR) rates." },
        { label: "Onboarding", value: "2x", desc: "Faster ramp-up time for new support agents." },
        { label: "CSAT", value: "+15pt", desc: "Improvement in customer satisfaction scores." }
      ]}
      transformationInsight="AI in customer support is most effective when positioned as a 'Copilot'—empowering human agents with instant access to enterprise knowledge rather than fully automating the human touch."
    />
  );
}
