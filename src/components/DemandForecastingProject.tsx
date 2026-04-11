import * as React from "react";
import { 
  TrendingUp, 
  Database, 
  Cpu, 
  BarChart3, 
  LineChart, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Layers,
  Table as TableIcon,
  Lightbulb,
  ShoppingCart,
  Factory,
  Package,
  ArrowDown,
  Activity,
  Calendar
} from "lucide-react";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  BarChart as RechartsBarChart, 
  Bar, 
  Cell,
  LineChart as RechartsLineChart,
  Line,
  Legend
} from 'recharts';
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ProjectCaseStudy } from "./ProjectCaseStudy";

interface DemandForecastingProjectProps {
  onBack: () => void;
}

const forecastData = [
  { name: 'Jan', actual: 4000, forecast: 4200 },
  { name: 'Feb', actual: 3000, forecast: 3100 },
  { name: 'Mar', actual: 2000, forecast: 2200 },
  { name: 'Apr', actual: 2780, forecast: 2600 },
  { name: 'May', actual: 1890, forecast: 2100 },
  { name: 'Jun', actual: 2390, forecast: 2400 },
  { name: 'Jul', actual: 3490, forecast: 3500 },
  { name: 'Aug', actual: 4000, forecast: 4100 },
  { name: 'Sep', actual: 3000, forecast: 3200 },
  { name: 'Oct', actual: 2000, forecast: 2100 },
  { name: 'Nov', actual: 2780, forecast: 2900 },
  { name: 'Dec', actual: 1890, forecast: 2000 },
];

function ForecastingDashboardHero() {
  return (
    <div className="w-full bg-[#0B0F14] p-6 lg:p-10 rounded-3xl border border-accent-cyan/20 relative overflow-hidden shadow-2xl">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 relative z-10">
        <div>
          <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_8px_rgba(0,245,255,0.8)]" />
            Predictive Demand Engine
          </h3>
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest mt-1">Multi-variate Time Series Analysis</p>
        </div>
        <div className="flex gap-3">
          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex flex-col">
            <span className="text-[8px] font-mono text-white/30 uppercase">Model Accuracy</span>
            <span className="text-[10px] font-bold text-accent-cyan">94.8% MAPE</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex flex-col">
            <span className="text-[8px] font-mono text-white/30 uppercase">Horizon</span>
            <span className="text-[10px] font-bold text-white/70">12 Months</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        {/* Main Forecast Chart */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/5 h-[300px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-sm font-bold text-white/80">Actual vs. Predicted Demand</h4>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="text-[10px] text-white/40">Actual</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                  <span className="text-[10px] text-white/40">Forecast</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#ffffff20" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0B0F14', border: '1px solid #ffffff10', borderRadius: '12px', fontSize: '10px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="actual" stroke="#ffffff20" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="forecast" stroke="#00F5FF" strokeWidth={3} dot={{ r: 4, fill: '#00F5FF' }} />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-5 rounded-2xl border border-white/5">
              <p className="text-[10px] font-mono text-white/40 uppercase mb-2">Inventory Optimization</p>
              <div className="flex items-end gap-2">
                <h4 className="text-2xl font-display font-bold text-white">-22%</h4>
                <span className="text-[10px] text-accent-cyan mb-1">Stockouts</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-accent-cyan w-[78%]" />
              </div>
            </div>
            <div className="glass-card p-5 rounded-2xl border border-white/5">
              <p className="text-[10px] font-mono text-white/40 uppercase mb-2">Planning Efficiency</p>
              <div className="flex items-end gap-2">
                <h4 className="text-2xl font-display font-bold text-white">5x</h4>
                <span className="text-[10px] text-accent-violet mb-1">Faster</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-accent-violet w-[90%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Market Trends Sidebar */}
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/5 h-full flex flex-col">
            <h4 className="text-sm font-bold text-white/80 mb-6">External Factors</h4>
            <div className="space-y-4 flex-1">
              {[
                { label: "Seasonality", value: 85, color: "bg-accent-cyan" },
                { label: "Market Trends", value: 65, color: "bg-accent-violet" },
                { label: "Promotions", value: 40, color: "bg-blue-500" },
                { label: "Competitor Pricing", value: 30, color: "bg-slate-500" }
              ].map((factor) => (
                <div key={factor.label} className="space-y-1.5">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider font-mono">
                    <span className="text-white/40">{factor.label}</span>
                    <span className="text-white/70">{factor.value}% Influence</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className={cn("h-full rounded-full", factor.color)} style={{ width: `${factor.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20">
                <Activity className="h-4 w-4 text-accent-cyan" />
                <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-widest">Real-time Signal Sync</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
              <Calendar className="h-5 w-5 text-white/40" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase">Next Cycle</p>
              <p className="text-xs font-bold text-white">Q3 Planning Phase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DemandForecastingProject({ onBack }: DemandForecastingProjectProps) {
  return (
    <ProjectCaseStudy
      onBack={onBack}
      title="AI Demand Forecasting"
      description="Leveraging machine learning to predict product demand with high precision, optimizing inventory levels and supply chain agility for enterprise retail."
      tags={["Python", "XGBoost", "Prophet", "AWS Forecast", "Tableau"]}
      heroIcon={TrendingUp}
      heroBanner={<ForecastingDashboardHero />}
      goal="Improve business planning and supply chain decisions by using AI models to forecast product demand based on historical sales and market trends, reducing inventory risk and operational waste."
      businessContext="Organizations in retail, e-commerce, and manufacturing must forecast demand to plan inventory, production, and supply chain operations. Accurate forecasting is critical for maintaining service levels while minimizing capital tied up in stock."
      challenges={[
        "Inaccurate demand predictions leading to lost sales or excess inventory.",
        "Inventory shortages (stockouts) or costly overstock situations.",
        "Slow, manual forecasting processes that cannot react to market shifts.",
        "Difficulty identifying complex seasonal demand patterns and external influences."
      ]}
      opportunityAnalysis={[
        { process: "Sales trend analysis", potential: "High", opportunity: "Machine learning forecasting to capture non-linear patterns." },
        { process: "Inventory planning", potential: "High", opportunity: "Predictive demand models to automate safety stock levels." },
        { process: "Business planning", potential: "Medium", opportunity: "AI-driven scenario simulation for 'what-if' strategic analysis." }
      ]}
      solutionOverview="Machine learning models analyze historical sales data, seasonal trends, and external factors (like promotions or market shifts) to forecast future demand patterns. This system empowers business teams to make data-driven decisions on procurement and marketing."
      workflowSteps={[
        { label: "Historical Sales Data", icon: Database, sub: "Market & Promo Trends", description: "Aggregating multi-year sales data, promotional calendars, and external market signals." },
        { label: "Data Processing", icon: Package, sub: "Feature Engineering", description: "Cleaning data and engineering features like lag variables, seasonality, and holiday effects." },
        { label: "AI Forecasting Model", icon: Cpu, sub: "Time Series Prediction", description: "Ensemble models (XGBoost + Prophet) performing multi-horizon demand forecasting." },
        { label: "Business Output", icon: BarChart3, sub: "Demand Dashboard", description: "Visualizing forecasts and providing automated inventory replenishment recommendations." }
      ]}
      architecture={[
        { title: "Data Ingestion Pipeline", description: "Automated ETL processes pulling from ERP (SAP/Oracle) and POS systems." },
        { title: "Feature Engineering Layer", description: "Automated processing of temporal features and external market indicators." },
        { title: "ML Forecasting Engine", description: "Cloud-native model training and inference pipeline using AWS Forecast or custom SageMaker models." },
        { title: "Visualization Dashboard", description: "Interactive Tableau or PowerBI dashboards for supply chain planners." }
      ]}
      techStack={[
        { category: "ML & Analytics", tools: ["Python", "XGBoost", "Facebook Prophet", "Scikit-learn"] },
        { category: "Data Processing", tools: ["Apache Spark", "Pandas", "SQL"] },
        { category: "Cloud & Ops", tools: ["AWS SageMaker", "Docker", "Airflow"] },
        { category: "Visualization", tools: ["Tableau", "Recharts", "React"] }
      ]}
      impact={[
        { label: "Forecast Accuracy", value: "+25%", desc: "Improvement in MAPE (Mean Absolute Percentage Error) vs manual methods." },
        { label: "Inventory Risk", value: "-18%", desc: "Reduction in overstock capital and associated holding costs." },
        { label: "Planning Speed", value: "80%", desc: "Reduction in time required to generate monthly demand plans." },
        { label: "Stockouts", value: "-15%", desc: "Decrease in lost sales due to out-of-stock situations." }
      ]}
      transformationInsight="Forecasting is a core capability for modern organizations. AI-powered forecasting enables companies to anticipate demand changes, optimize inventory levels, and improve operational agility in a volatile market."
    >
      {/* Scenario Simulation Example */}
      <section className="mb-20">
        <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-8 flex items-center gap-2">
          <Lightbulb className="h-4 w-4" />
          AI-Driven Scenario Simulation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-2xl border border-white/10 space-y-4 hover:border-accent-cyan/30 transition-colors">
            <div className="flex items-center gap-2 text-accent-cyan">
              <ShoppingCart className="h-4 w-4" />
              <h4 className="text-sm font-bold uppercase tracking-wider">Promotion Impact</h4>
            </div>
            <p className="text-sm text-white/70 leading-relaxed italic">
              "Simulating a 20% discount on 'Electronics' category for Q4. AI model predicts a 35% surge in volume, requiring a 12-day lead time increase for procurement to avoid stockouts."
            </p>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/10 space-y-4 hover:border-accent-violet/30 transition-colors">
            <div className="flex items-center gap-2 text-accent-violet">
              <Factory className="h-4 w-4" />
              <h4 className="text-sm font-bold uppercase tracking-wider">Supply Disruption</h4>
            </div>
            <p className="text-sm text-white/70 leading-relaxed italic">
              "Simulating a 15-day delay from primary supplier. AI identifies 4 'High-Risk' SKUs that will hit critical safety stock levels by Week 3. Automated recommendation: Trigger secondary supplier backup."
            </p>
          </div>
        </div>
      </section>
    </ProjectCaseStudy>
  );
}
