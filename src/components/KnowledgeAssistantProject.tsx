import * as React from "react";
import { 
  BrainCircuit, 
  Database, 
  Cpu, 
  MessageSquare, 
  TrendingUp, 
  Search, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Layers,
  Table as TableIcon,
  Lightbulb,
  FileText,
  BookOpen,
  Users,
  ArrowDown,
  Sparkles,
  Network
} from "lucide-react";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  BarChart, 
  Bar, 
  Cell 
} from 'recharts';
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ProjectCaseStudy } from "./ProjectCaseStudy";

interface KnowledgeAssistantProjectProps {
  onBack: () => void;
}

const retrievalData = [
  { name: 'Week 1', queries: 450, accuracy: 88 },
  { name: 'Week 2', queries: 520, accuracy: 91 },
  { name: 'Week 3', queries: 610, accuracy: 93 },
  { name: 'Week 4', queries: 800, accuracy: 95 },
  { name: 'Week 5', queries: 950, accuracy: 97 },
  { name: 'Week 6', queries: 1100, accuracy: 98 },
  { name: 'Week 7', queries: 1250, accuracy: 99 },
];

function KnowledgeInterfaceHero() {
  return (
    <div className="w-full bg-[#0B0F14] p-6 lg:p-10 rounded-3xl border border-accent-cyan/20 relative overflow-hidden shadow-2xl">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 relative z-10">
        <div>
          <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-violet animate-pulse shadow-[0_0_8px_rgba(138,43,226,0.8)]" />
            Enterprise Knowledge Brain
          </h3>
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest mt-1">Semantic Indexing & Retrieval</p>
        </div>
        <div className="flex gap-3">
          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex flex-col">
            <span className="text-[8px] font-mono text-white/30 uppercase">Index Size</span>
            <span className="text-[10px] font-bold text-accent-violet">1.2M Docs</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex flex-col">
            <span className="text-[8px] font-mono text-white/30 uppercase">Latency</span>
            <span className="text-[10px] font-bold text-white/70">140ms</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        {/* Main Interface Preview */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/5 h-[300px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-sm font-bold text-white/80">Query Volume & Accuracy</h4>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-violet" />
                  <span className="text-[10px] text-white/40">Queries</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                  <span className="text-[10px] text-white/40">Accuracy %</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={retrievalData}>
                <defs>
                  <linearGradient id="colorQueries" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8A2BE2" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8A2BE2" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#ffffff20" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0B0F14', border: '1px solid #ffffff10', borderRadius: '12px', fontSize: '10px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="queries" stroke="#8A2BE2" fillOpacity={1} fill="url(#colorQueries)" strokeWidth={2} />
                <Area type="monotone" dataKey="accuracy" stroke="#00F5FF" fillOpacity={0} strokeWidth={2} strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-5 rounded-2xl border border-white/5">
              <p className="text-[10px] font-mono text-white/40 uppercase mb-2">Search Efficiency</p>
              <div className="flex items-end gap-2">
                <h4 className="text-2xl font-display font-bold text-white">12x</h4>
                <span className="text-[10px] text-accent-cyan mb-1">Faster</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-accent-violet w-[85%]" />
              </div>
            </div>
            <div className="glass-card p-5 rounded-2xl border border-white/5">
              <p className="text-[10px] font-mono text-white/40 uppercase mb-2">User Satisfaction</p>
              <div className="flex items-end gap-2">
                <h4 className="text-2xl font-display font-bold text-white">4.8/5</h4>
                <span className="text-[10px] text-accent-cyan mb-1">+0.4</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-accent-cyan w-[92%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge Sources Sidebar */}
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/5 h-full flex flex-col">
            <h4 className="text-sm font-bold text-white/80 mb-6">Source Distribution</h4>
            <div className="space-y-4 flex-1">
              {[
                { label: "Internal SOPs", value: 45, color: "bg-accent-violet" },
                { label: "Slack History", value: 30, color: "bg-accent-cyan" },
                { label: "Technical Manuals", value: 15, color: "bg-blue-500" },
                { label: "Meeting Transcripts", value: 10, color: "bg-slate-500" }
              ].map((source) => (
                <div key={source.label} className="space-y-1.5">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider font-mono">
                    <span className="text-white/40">{source.label}</span>
                    <span className="text-white/70">{source.value}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className={cn("h-full rounded-full", source.color)} style={{ width: `${source.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-accent-violet/10 border border-accent-violet/20">
                <Sparkles className="h-4 w-4 text-accent-violet" />
                <span className="text-[10px] font-mono text-accent-violet uppercase tracking-widest">AI RAG Active</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
              <Network className="h-5 w-5 text-white/40" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase">Vector Store</p>
              <p className="text-xs font-bold text-white">Pinecone Cluster-01</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function KnowledgeAssistantProject({ onBack }: KnowledgeAssistantProjectProps) {
  return (
    <ProjectCaseStudy
      onBack={onBack}
      title="AI Knowledge Base Assistant"
      description="An internal company brain that indexes documentation, Slack history, and meeting transcripts for instant natural language querying and expert-level support."
      tags={["Node.js", "LlamaIndex", "Anthropic Claude", "Redis", "Vector DB"]}
      heroIcon={BrainCircuit}
      heroBanner={<KnowledgeInterfaceHero />}
      goal="Build an AI-powered knowledge assistant that helps employees quickly retrieve operational information from internal documents and knowledge repositories, reducing search time and improving decision speed."
      businessContext="Organizations rely on massive volumes of internal documentation, including SOPs, policies, manuals, and knowledge bases, to support daily operations. As companies grow, this information becomes fragmented and difficult to access."
      challenges={[
        "Employees spending excessive time searching for specific operational information.",
        "Fragmented knowledge across multiple siloed documents and platforms.",
        "Outdated or inconsistent documentation leading to operational errors.",
        "Slow onboarding of new employees due to knowledge discovery barriers."
      ]}
      opportunityAnalysis={[
        { process: "Document search", potential: "High", opportunity: "Semantic search using AI to understand intent beyond keywords." },
        { process: "Knowledge retrieval", potential: "High", opportunity: "AI question answering to provide direct answers from context." },
        { process: "Employee support", potential: "Medium", opportunity: "Conversational AI assistant for 24/7 internal support." }
      ]}
      solutionOverview="An intelligent assistant using Natural Language Processing (NLP) and semantic search (RAG) to retrieve relevant information from internal knowledge sources, allowing users to receive context-aware answers generated directly from company documents."
      workflowSteps={[
        { label: "Knowledge Sources", icon: BookOpen, sub: "SOPs & Manuals", description: "Aggregating internal documents, Slack history, and meeting transcripts from across the organization." },
        { label: "Data Processing", icon: Database, sub: "Indexing", description: "Parsing documents and generating high-dimensional vector embeddings for semantic search." },
        { label: "AI Knowledge Engine", icon: Cpu, sub: "RAG Reasoning", description: "Semantic search combined with LLM reasoning to synthesize accurate, context-aware answers." },
        { label: "User Interface", icon: MessageSquare, sub: "Chat Assistant", description: "A conversational interface providing instant access to the company's collective intelligence." }
      ]}
      architecture={[
        { title: "Document Ingestion Pipeline", description: "Automated connectors for Google Drive, Confluence, and Slack to sync documentation." },
        { title: "Vector Database", description: "Pinecone or Milvus cluster storing document embeddings for sub-second semantic retrieval." },
        { title: "AI Reasoning Layer", description: "Anthropic Claude 3.5 Sonnet models performing RAG-based question answering." },
        { title: "Integration Layer", description: "Slack bot and internal web portal integrations for seamless employee access." }
      ]}
      techStack={[
        { category: "AI & LLM", tools: ["Anthropic Claude", "LlamaIndex", "OpenAI Embeddings"] },
        { category: "Vector Storage", tools: ["Pinecone", "Redis Stack", "PostgreSQL"] },
        { category: "Backend", tools: ["Node.js", "TypeScript", "Python"] },
        { category: "Connectors", tools: ["Slack API", "Confluence API", "Google Drive API"] }
      ]}
      impact={[
        { label: "Search Time", value: "-75%", desc: "Reduction in time spent searching for operational information." },
        { label: "Onboarding", value: "2x", desc: "Increase in speed of new employee operational readiness." },
        { label: "Productivity", value: "+30%", desc: "Estimated gain in employee throughput for knowledge-heavy tasks." },
        { label: "Accuracy", value: "98%", desc: "Self-reported accuracy of AI-generated answers by internal users." }
      ]}
      transformationInsight="Internal knowledge is often underutilized due to poor accessibility. By combining document processing, semantic search, and AI assistants, organizations can unlock the value of their knowledge assets and significantly improve operational productivity."
    >
      {/* Example Interaction Section */}
      <section className="mb-20">
        <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-8 flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          Example AI Assistant Interaction
        </h2>
        <div className="glass p-8 rounded-3xl border border-white/10 space-y-8 hover:border-accent-cyan/20 transition-colors">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
              <Users className="h-4 w-4 text-white/40" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-mono text-white/30 uppercase tracking-widest">Employee Query</p>
              <p className="text-sm text-white font-medium">"What is our policy on remote work equipment reimbursement for international employees?"</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-lg bg-accent-violet/20 flex items-center justify-center shrink-0 border border-accent-violet/20">
              <BrainCircuit className="h-4 w-4 text-accent-violet" />
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-mono text-accent-violet uppercase tracking-widest">AI Response</p>
                <p className="text-sm text-white/80 leading-relaxed italic">
                  "Based on the 'Global Operations Manual v4.2' (Section 8.3) and the recent HR update in Slack (#announcements, March 12), international employees are eligible for a one-time equipment stipend of up to $1,500 USD (or local equivalent). This covers ergonomic chairs, monitors, and peripherals. Receipts must be submitted via the 'Expensify' portal under the 'Remote-Work-Intl' category."
                </p>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="bg-white/5 border-white/10 text-[10px] text-white/40">Source: HR_Policy_2026.pdf</Badge>
                <Badge variant="outline" className="bg-white/5 border-white/10 text-[10px] text-white/40">Source: Slack #announcements</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProjectCaseStudy>
  );
}
