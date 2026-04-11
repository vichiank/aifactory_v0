import * as React from "react";
import { 
  BarChart3, 
  Globe, 
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
  Database,
  Cpu,
  FileSpreadsheet,
  Presentation,
  UserIcon
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
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { ProjectCaseStudy } from "./ProjectCaseStudy";

interface MarketingReportProjectProps {
  onBack: () => void;
}

const performanceData = [
  { name: 'Mon', spend: 400, conv: 24 },
  { name: 'Tue', spend: 300, conv: 18 },
  { name: 'Wed', spend: 600, conv: 35 },
  { name: 'Thu', spend: 800, conv: 48 },
  { name: 'Fri', spend: 500, conv: 30 },
  { name: 'Sat', spend: 900, conv: 55 },
  { name: 'Sun', spend: 700, conv: 42 },
];

const channelData = [
  { name: 'Google Ads', value: 45, color: '#00F5FF' },
  { name: 'Meta Ads', value: 35, color: '#8A2BE2' },
  { name: 'LinkedIn', value: 20, color: '#3b82f6' },
];

function FuturisticDashboard() {
  return (
    <div className="w-full bg-[#0B0F14] p-6 lg:p-10 rounded-3xl border border-accent-cyan/20 relative overflow-hidden shadow-2xl">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 relative z-10">
        <div>
          <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_8px_rgba(0,245,255,0.8)]" />
            Campaign Performance Dashboard
          </h3>
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest mt-1">Real-time Marketing Analytics</p>
        </div>
        <div className="flex gap-3">
          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex flex-col">
            <span className="text-[8px] font-mono text-white/30 uppercase">Status</span>
            <span className="text-[10px] font-bold text-green-400">ACTIVE</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex flex-col">
            <span className="text-[8px] font-mono text-white/30 uppercase">Last Sync</span>
            <span className="text-[10px] font-bold text-white/70">2m ago</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        {/* Main Chart */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/5 h-[300px]">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-sm font-bold text-white/80">Spend vs. Conversions</h4>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                  <span className="text-[10px] text-white/40">Spend</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-violet" />
                  <span className="text-[10px] text-white/40">Conv</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
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
                <Area type="monotone" dataKey="spend" stroke="#00F5FF" fillOpacity={1} fill="url(#colorSpend)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-5 rounded-2xl border border-white/5">
              <p className="text-[10px] font-mono text-white/40 uppercase mb-2">Avg. CTR</p>
              <div className="flex items-end gap-2">
                <h4 className="text-2xl font-display font-bold text-white">3.24%</h4>
                <span className="text-[10px] text-accent-cyan mb-1">+0.4%</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-accent-cyan w-[65%] shadow-[0_0_10px_rgba(0,245,255,0.5)]" />
              </div>
            </div>
            <div className="glass-card p-5 rounded-2xl border border-white/5">
              <p className="text-[10px] font-mono text-white/40 uppercase mb-2">Conv. Rate</p>
              <div className="flex items-end gap-2">
                <h4 className="text-2xl font-display font-bold text-white">1.82%</h4>
                <span className="text-[10px] text-accent-violet mb-1">+0.12%</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-accent-violet w-[45%] shadow-[0_0_10px_rgba(138,43,226,0.5)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/5 h-full flex flex-col">
            <h4 className="text-sm font-bold text-white/80 mb-6">Top Channels</h4>
            <div className="flex-1 min-h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={channelData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {channelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0B0F14', border: '1px solid #ffffff10', borderRadius: '12px', fontSize: '10px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3 mt-4">
              {channelData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-xs text-white/60">{item.name}</span>
                  </div>
                  <span className="text-xs font-bold text-white">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border-accent-cyan/20 bg-accent-cyan/5">
            <p className="text-[10px] font-mono text-accent-cyan uppercase mb-2">Cost per Acquisition</p>
            <div className="flex items-center justify-between">
              <h4 className="text-3xl font-display font-bold text-white">$14.20</h4>
              <div className="w-12 h-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData.slice(-4)}>
                    <Bar dataKey="conv" fill="#00F5FF" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MarketingReportProject({ onBack }: MarketingReportProjectProps) {
  return (
    <ProjectCaseStudy
      onBack={onBack}
      title="AI Marketing Report Generator"
      description="Automating marketing analytics and reporting by generating intelligent insights from campaign data across multiple platforms."
      tags={["Python", "CrewAI", "Google Analytics", "D3.js", "LLM"]}
      heroIcon={BarChart3}
      heroBanner={<FuturisticDashboard />}
      goal="Streamline marketing analytics by automating data aggregation and using Generative AI to produce professional, insight-driven performance reports."
      businessContext="Marketing teams manage campaigns across multiple fragmented platforms (Google, Meta, LinkedIn). Manually compiling this data into actionable reports is a high-frequency, low-value task that delays strategic decision-making."
      challenges={[
        "Data scattered across multiple advertising and analytics platforms.",
        "Manual report preparation taking 10+ hours per week per analyst.",
        "Delayed insights leading to slow campaign optimization cycles.",
        "Inconsistent reporting formats and human error in data entry."
      ]}
      opportunityAnalysis={[
        { process: "Data Collection", potential: "High", opportunity: "Automated API aggregation from all platforms." },
        { process: "Performance Analysis", potential: "High", opportunity: "AI-driven trend detection and anomaly flagging." },
        { process: "Insight Generation", potential: "Medium", opportunity: "LLM-based synthesis of raw data into narrative insights." },
        { process: "Report Formatting", potential: "High", opportunity: "Automated PDF/Slide generation with dynamic charts." }
      ]}
      solutionOverview="A fully automated pipeline that connects to marketing APIs, aggregates performance metrics, and uses an AI Agent (CrewAI) to analyze trends and generate professional reports with actionable recommendations."
      workflowSteps={[
        { label: "Data Sources", icon: Globe, sub: "Google/Meta Ads", description: "Connecting to marketing APIs (Google Ads, Meta, LinkedIn) to pull raw campaign metrics." },
        { label: "Aggregation", icon: Database, sub: "Centralized Sync", description: "Cleaning and normalizing fragmented data into a unified PostgreSQL database." },
        { label: "AI Analysis", icon: Cpu, sub: "Insight Engine", description: "CrewAI agents analyze trends, detect anomalies, and synthesize performance narratives." },
        { label: "Auto Report", icon: FileSpreadsheet, sub: "Final Output", description: "Generating professional PDF and D3.js interactive reports for stakeholders." }
      ]}
      architecture={[
        { title: "Data Ingestion Layer", description: "Python-based connectors for Google Ads, Meta Graph API, and LinkedIn Marketing API." },
        { title: "Automation Engine", description: "Workflow orchestration using n8n or Make.com to trigger weekly syncs." },
        { title: "AI Insight Engine", description: "CrewAI agents specializing in 'Data Analysis' and 'Marketing Strategy' using GPT-4o." },
        { title: "Reporting Layer", description: "Dynamic report generation using D3.js for visualizations and PDF synthesis." }
      ]}
      techStack={[
        { category: "AI & Logic", tools: ["CrewAI", "LangChain", "GPT-4o"] },
        { category: "Data", tools: ["Python", "Pandas", "PostgreSQL"] },
        { category: "Automation", tools: ["n8n", "GitHub Actions"] },
        { category: "Visualization", tools: ["D3.js", "Recharts", "React"] }
      ]}
      impact={[
        { label: "Reporting Speed", value: "95%", desc: "Reduction in time from data sync to final report." },
        { label: "Manual Effort", value: "-12h", desc: "Hours saved per week per marketing analyst." },
        { label: "Optimization", value: "2x", desc: "Increase in frequency of campaign adjustments." },
        { label: "Accuracy", value: "100%", desc: "Elimination of manual data entry errors." }
      ]}
      transformationInsight="Successful AI transformation in marketing isn't just about automation; it's about shifting the analyst's role from 'Data Gatherer' to 'Strategic Optimizer' by leveraging intelligent data synthesis."
    >
      {/* Before vs After Graphic */}
      <section className="mb-20 mt-20">
        <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-12 text-center">Process Transformation</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500/20" />
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <span className="text-red-400">Before</span> AI Automation
            </h3>
            <div className="space-y-4">
              {[
                { label: "Marketing Analyst", icon: UserIcon },
                { label: "Export Data", icon: ArrowDown },
                { label: "Excel Processing", icon: FileSpreadsheet },
                { label: "Manual Analysis", icon: BarChart3 },
                { label: "PowerPoint Report", icon: Presentation }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="flex items-center gap-4 w-full p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-white/40" />
                    </div>
                    <span className="text-sm text-white/60">{item.label}</span>
                  </div>
                  {i < 4 && <ArrowDown className="h-4 w-4 text-white/10 my-1" />}
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border border-accent-cyan/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-accent-cyan/40" />
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <span className="text-accent-cyan">After</span> AI Automation
            </h3>
            <div className="space-y-4">
              {[
                { label: "Data Sources", icon: Globe },
                { label: "Automation Workflow", icon: Zap },
                { label: "AI Insight Generator", icon: Cpu },
                { label: "Auto Report", icon: FileSpreadsheet }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="flex items-center gap-4 w-full p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/10">
                    <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-accent-cyan" />
                    </div>
                    <span className="text-sm text-white font-medium">{item.label}</span>
                  </div>
                  {i < 3 && <ArrowDown className="h-4 w-4 text-accent-cyan/20 my-1" />}
                </div>
              ))}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 border border-white/10 text-center">
                <p className="text-xs text-accent-cyan font-mono uppercase tracking-widest">Efficiency Gain</p>
                <p className="text-xl font-bold text-white">95% Faster Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Generated Insights Section */}
      <section className="mb-20">
        <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-8 flex items-center gap-2">
          <Lightbulb className="h-4 w-4" />
          Example AI-Generated Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-2xl border border-white/10 space-y-4 hover:border-accent-cyan/30 transition-colors">
            <div className="flex items-center gap-2 text-accent-cyan">
              <TrendingUp className="h-4 w-4" />
              <h4 className="text-sm font-bold uppercase tracking-wider">Performance Trend</h4>
            </div>
            <p className="text-sm text-white/70 leading-relaxed italic">
              "Campaign 'Summer_Launch_V2' has shown a 24% increase in CTR over the last 72 hours. This correlates with the deployment of the new video creative on Meta Ads. Recommend shifting 15% of the underperforming 'Search_Generic' budget to this campaign to capitalize on the momentum."
            </p>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/10 space-y-4 hover:border-accent-violet/30 transition-colors">
            <div className="flex items-center gap-2 text-accent-violet">
              <Shield className="h-4 w-4" />
              <h4 className="text-sm font-bold uppercase tracking-wider">Anomaly Detection</h4>
            </div>
            <p className="text-sm text-white/70 leading-relaxed italic">
              "Detected a 400% spike in CPA for 'LinkedIn_B2B_LeadGen' between 2 AM and 5 AM UTC. Analysis suggests a tracking pixel firing error or bot traffic surge. Automated alert sent to technical team; recommend pausing campaign until pixel verification is complete."
            </p>
          </div>
        </div>
      </section>
    </ProjectCaseStudy>
  );
}
