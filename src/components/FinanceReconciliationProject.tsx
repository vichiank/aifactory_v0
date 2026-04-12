import * as React from "react";
import { 
  ShieldCheck, 
  Database, 
  Cpu, 
  FileText, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Layers,
  Table as TableIcon,
  Lightbulb,
  Wallet,
  Building2,
  Receipt,
  ArrowDown,
  Search,
  Workflow,
  Layout
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
import { ProjectCaseStudy } from "./ProjectCaseStudy";

interface FinanceReconciliationProjectProps {
  onBack: () => void;
}

const reconciliationData = [
  { name: 'Batch A', matched: 98, anomalies: 2 },
  { name: 'Batch B', matched: 95, anomalies: 5 },
  { name: 'Batch C', matched: 99, anomalies: 1 },
  { name: 'Batch D', matched: 92, anomalies: 8 },
  { name: 'Batch E', matched: 97, anomalies: 3 },
  { name: 'Batch F', matched: 96, anomalies: 4 },
  { name: 'Batch G', matched: 99, anomalies: 1 },
];

function FuturisticFinanceDashboard() {
  return (
    <div className="w-full bg-[#0B0F14] p-6 lg:p-10 rounded-3xl border border-accent-cyan/20 relative overflow-hidden shadow-2xl">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 relative z-10">
        <div>
          <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_8px_rgba(0,245,255,0.8)]" />
            AI Reconciliation Control Center
          </h3>
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest mt-1">Real-time Transaction Matching</p>
        </div>
        <div className="flex gap-3">
          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex flex-col">
            <span className="text-[8px] font-mono text-white/30 uppercase">Accuracy</span>
            <span className="text-[10px] font-bold text-accent-cyan">99.98%</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex flex-col">
            <span className="text-[8px] font-mono text-white/30 uppercase">Processing</span>
            <span className="text-[10px] font-bold text-white/70">LIVE</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        {/* Main Chart */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/5 h-[300px]">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-sm font-bold text-white/80">Matching Integrity (Last 7 Batches)</h4>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                  <span className="text-[10px] text-white/40">Matched</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-[10px] text-white/40">Anomalies</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={reconciliationData}>
                <defs>
                  <linearGradient id="colorMatched" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00F5FF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00F5FF" stopOpacity={0}/>
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
                <Area type="monotone" dataKey="matched" stroke="#00F5FF" fillOpacity={1} fill="url(#colorMatched)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-5 rounded-2xl border border-white/5">
              <p className="text-[10px] font-mono text-white/40 uppercase mb-2">Auto-Match Rate</p>
              <div className="flex items-end gap-2">
                <h4 className="text-2xl font-display font-bold text-white">96.4%</h4>
                <span className="text-[10px] text-accent-cyan mb-1">+2.1%</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-accent-cyan w-[96%]" />
              </div>
            </div>
            <div className="glass-card p-5 rounded-2xl border border-white/5">
              <p className="text-[10px] font-mono text-white/40 uppercase mb-2">Exception Resolution</p>
              <div className="flex items-end gap-2">
                <h4 className="text-2xl font-display font-bold text-white">4.2m</h4>
                <span className="text-[10px] text-accent-violet mb-1">-18m</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-accent-violet w-[85%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/5 h-full flex flex-col">
            <h4 className="text-sm font-bold text-white/80 mb-6">Anomaly Distribution</h4>
            <div className="flex-1 min-h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={reconciliationData.slice(-5)}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis dataKey="name" hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0B0F14', border: '1px solid #ffffff10', borderRadius: '12px', fontSize: '10px' }}
                  />
                  <Bar dataKey="anomalies" radius={[4, 4, 0, 0]}>
                    {reconciliationData.slice(-5).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.anomalies > 5 ? '#ef4444' : '#8A2BE2'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3 mt-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">Flagged Today</span>
                <span className="text-xs font-bold text-red-400">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">AI Resolved</span>
                <span className="text-xs font-bold text-accent-cyan">8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">Pending Review</span>
                <span className="text-xs font-bold text-white">4</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border-accent-cyan/20 bg-accent-cyan/5">
            <p className="text-[10px] font-mono text-accent-cyan uppercase mb-2">Risk Mitigation Score</p>
            <div className="flex items-center justify-between">
              <h4 className="text-3xl font-display font-bold text-white">98.2</h4>
              <div className="w-10 h-10 rounded-full border-2 border-accent-cyan/20 border-t-accent-cyan flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-accent-cyan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FinanceReconciliationProject({ onBack }: FinanceReconciliationProjectProps) {
  return (
    <ProjectCaseStudy
      onBack={onBack}
      title="AI Finance Reconciliation"
      description="Automating enterprise-grade financial reconciliation using fuzzy logic and LLM-based anomaly detection to ensure 100% transaction integrity."
      domain="Finance & Compliance"
      tags={["AI Automation Use Case", "Anomaly Detection", "Financial Integrity"]}
      heroIcon={ShieldCheck}
      heroBanner={<FuturisticFinanceDashboard />}
      businessContext="Finance teams must regularly reconcile financial records to ensure transaction accuracy across ERP platforms, payment processors, and financial ledgers. This is a critical compliance and operational task that ensures the integrity of the company's financial state."
      businessIcon={Building2}
      challenges={[
        "Mismatched transaction records across fragmented systems",
        "Manual, labor-intensive comparison between ERP and bank statements",
        "Delayed financial reporting due to end-of-month bottlenecks",
        "High risk of human error in identifying subtle discrepancies"
      ]}
      aiOpportunity={{
        title: "Autonomous Financial Integrity",
        description: "Transforming manual audit processes into a real-time, AI-driven reconciliation engine that ensures 100% data accuracy.",
        features: [
          "Automated record matching using fuzzy logic and metadata",
          "AI anomaly detection to flag suspicious or mismatched entries",
          "Automated report generation with flagged discrepancies",
          "LLM-based explanation of complex transaction errors"
        ]
      }}
      solutionOverview="An AI-powered reconciliation system that automatically compares transaction records from multiple financial systems, identifies mismatches, and uses LLMs to explain discrepancies."
      workflowSteps={[
        { label: "Data Sources", icon: Building2, sub: "ERP & Bank", description: "Ingesting data from Accounting Systems, Payment Gateways, and Bank Statements." },
        { label: "Processing", icon: Database, sub: "Normalization", description: "Cleaning and normalizing fragmented financial data into a unified schema." },
        { label: "AI Analysis", icon: Cpu, sub: "Matching Engine", description: "AI-driven transaction matching and advanced anomaly detection engine." },
        { label: "Output", icon: FileText, sub: "Reports & Flags", description: "Generating reconciliation reports and flagging discrepancies for review." }
      ]}
      architecture={[
        { 
          id: "ingestion", 
          title: "Data Ingestion Layer", 
          description: "Secure API connectors for ERP systems and bank statement parsers.",
          icon: Database,
          position: { x: 20, y: 30 },
          connections: ["matching"]
        },
        { 
          id: "matching", 
          title: "Automation Engine", 
          description: "Custom algorithms for matching transactions based on amount and metadata.",
          icon: Workflow,
          position: { x: 50, y: 30 },
          connections: ["ai"]
        },
        { 
          id: "ai", 
          title: "AI Processing Layer", 
          description: "Azure OpenAI models trained to identify patterns of fraud or error.",
          icon: Cpu,
          position: { x: 80, y: 30 },
          connections: ["ui"]
        },
        { 
          id: "ui", 
          title: "Output Interface", 
          description: "Real-time dashboard for finance teams to review flagged items.",
          icon: Layout,
          position: { x: 50, y: 70 }
        }
      ]}
      impact={[
        { label: "Efficiency Improvement", value: "-85%", desc: "Reduction in manual reconciliation hours per month." },
        { label: "Automation Coverage", value: "96%", desc: "Of transactions matched automatically by AI." },
        { label: "Operational Speed", value: "3 Days", desc: "Faster end-of-month financial closing cycle." },
        { label: "Data Accuracy", value: "99.9%", desc: "Improvement in financial record integrity." }
      ]}
      transformationInsight="Financial operations contain many repetitive verification processes that benefit significantly from AI-assisted anomaly detection. Combining business process understanding with AI enables finance teams to operate with higher accuracy and scalability."
    >
      {/* Example Anomaly Insights */}
      <section className="mb-20">
        <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-8 flex items-center gap-2">
          <Search className="h-4 w-4" />
          AI Anomaly Detection Examples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-2xl border border-white/10 space-y-4 hover:border-accent-cyan/30 transition-colors">
            <div className="flex items-center gap-2 text-red-400">
              <AlertCircle className="h-4 w-4" />
              <h4 className="text-sm font-bold uppercase tracking-wider">Duplicate Transaction</h4>
            </div>
            <p className="text-sm text-white/70 leading-relaxed italic">
              "Detected two identical charges of $1,240.50 from Vendor 'CloudScale' within 4 seconds. AI analysis confirms a potential API retry error. Recommendation: Flag for reversal and notify vendor."
            </p>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/10 space-y-4 hover:border-accent-violet/30 transition-colors">
            <div className="flex items-center gap-2 text-accent-violet">
              <TrendingUp className="h-4 w-4" />
              <h4 className="text-sm font-bold uppercase tracking-wider">Currency Mismatch</h4>
            </div>
            <p className="text-sm text-white/70 leading-relaxed italic">
              "Transaction ID #8829 shows a mismatch between ERP (USD) and Bank (EUR). Exchange rate used (1.08) differs from the daily average (1.12) by 3.5%. Potential manual entry error in ERP."
            </p>
          </div>
        </div>
      </section>
    </ProjectCaseStudy>
  );
}
